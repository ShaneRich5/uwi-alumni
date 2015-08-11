<?php

namespace App\Http\Controllers;

use App\Models\Conversation;
use App\Models\Message;
use App\Models\User;
use Illuminate\Http\Request;

use App\Http\Requests;
use Tymon\JWTAuth\Facades\JWTAuth;

class MessagesCtrl extends Controller
{
    var $message;
    var $conversation;
    var $user;

    function __construct(Message $message, Conversation $conversation, User $user)
    {
        $this->message = $message;
        $this->conversation = $conversation;
        $this->user = $user;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request)
    {
        $user = JWTAuth::parseToken()->authenticate();
        return response()->json($user);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request $request
     * @param User $user
     * @return Response
     */
    public function store(Request $request)
    {
        // if no recipients
        if (!($request->has('recipients'))) {
            return response()->json("no-recipient-present");
        }

        $recipients = $request->only('recipients'); // useful even if content isn't set

        // if no content
        if (!($request->has('content'))) {
            $response = new \stdClass(); // generic object
            $response->recipients = $recipients; // returns the recipients so they wont have to re-enter
            $response->status = "no-content-present"; //
            return response()->json($response);
        }

        $content = $request->only('content'); // retrieve message content

        // get authenticated user
        $userId = JWTAuth::parseToken()->authenticate()->id;
        $auth = $this->user->find($userId);

        // collect errors
        $error = new \stdClass();
        $error->recipients = [];
        $error->status = "success";

        dd($content);

        foreach ($recipients as $r) {
            dd($r[0]);
        }

        // navigate through each recipient submitted
        foreach ($recipients as $recipient) {
            // wraps recipient in User model
            $foundRecipient = $this->user->find($recipient['id']);

            // adds it to errors to tell the user which recipient did not get the message
            if (null == $foundRecipient)
            {
                // recipient not found
                $error->recipients[] = $recipient;
                continue;
            }

            $message = $auth->messages()->save(new Message(['content' => $content]));
            $conversation = $foundRecipient->conversations()->with('user_id', $auth->id);

            // if the user has previous conversations with recipient
            if (null == $conversation) {
                $conversation = $this->conversation->create(new Conversation(['name' => 'default']));
                $auth->conversations()->associate($conversation);
                $recipient->conversations()->associate($conversation);
            }

            $conversation->messages()->associate($message);
        }


        return response()->json($error);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        //
    }
}
