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
        // collect errors
        $error = new \stdClass();
        $error->recipients = [];
        $error->status = "success";

        // if no recipients
        if (!($request->has('recipients'))) {
            return response()->json("no-recipient-present");
        }

        $recipients = $request->only('recipients')['recipients']; // useful even if content param isn't set

        // if no content
        if (!($request->has('content'))) {
            $error->recipients = $recipients; // returns the recipients so they wont have to re-enter
            $error->status = "no-content-present"; //
            return response()->json($error);
        }

        $content = $request->only('content')['content']['content']; // retrieve message content

        // get authenticated user
        $userId = JWTAuth::parseToken()->authenticate()->id;
        $auth = $this->user->find($userId);

        // navigate through each recipient submitted
        foreach ($recipients as $recipient) {

            // wraps recipient in User model
            if (!($foundRecipient = $this->user->find($recipient['id']))) {
                $error[] = $recipient;
                $error->status = "email-not-found";
                continue;
            }

            $conversation = $foundRecipient->conversations()->where('user_id', $auth->id)->first();

            // if the user has previous conversations with recipient
            if (null == $conversation) {
                $conversation = $this->conversation->create(['name' => 'default']);
                $auth->conversations()->attach($conversation);
                $foundRecipient->conversations()->attach($conversation);
            }

            $message = new Message(['content' => $content]);
            $message->user()->associate($auth);
            $message->conversation()->associate($conversation);
            $message->save();
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
