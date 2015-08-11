<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;

use App\Http\Requests;
use Tymon\JWTAuth\Facades\JWTAuth;

class CommentsCtrl extends Controller
{
    var $comment;

    function __construct(Comment $comment)
    {
        $this->comment = $comment;
    }


    /**
     * Display a listing of the resource.
     *
     * @param $post_id
     * @param Post $post
     * @return Response
     */
    public function index($post_id, Post $post)
    {
        $comments = $post->find($post_id)->comments()->with('user')->get();

        return response()->json($comments->toArray());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param id
     * @param  Request  $request
     * @return Response
     */
    public function store($id, Request $request)
    {
        $token = JWTAuth::getToken();
        $user = JWTAuth::toUser($token);
        $post = Post::find($id);

        $comment = new Comment($request->only(['body']));
        $comment->user()->associate($user);
        $comment->post()->associate($post);
        $comment->save();

        return response()->json($comment);
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
