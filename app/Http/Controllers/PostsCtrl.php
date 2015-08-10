<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class PostsCtrl extends Controller
{
    var $post;

    function __construct(Post $post)
    {
        $this->middleware('jwt.auth', ['except' => ['index', 'show']]);
        $this->post = $post;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request)
    {
        return response()->json($this->post->all()->toArray());
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Requests\CreatePostRequest $request)
    {
        $post = Auth::user()->posts()->save(new Post($request->only(['title', 'body'])));

        return response()->json(Auth::user());
//        try {
//            if (! $jwtUser = JWTAuth::parseToken()->authenticate()) {
//                return response()->json(['user_not_found'], 404);
//            }
//        } catch (TokenExpiredException $e) {
//
//            return response()->json(['token_expired'], $e->getStatusCode());
//
//        } catch (TokenInvalidException $e) {
//
//            return response()->json(['token_invalid'], $e->getStatusCode());
//
//        } catch (JWTException $e) {
//
//            return response()->json(['token_absent'], $e->getStatusCode());
//
//        }
//
//        $user = User::find($jwtUser->id);
//
//        $post = $user->posts()->save($request->only(['title', 'body']));
//
//        return response()->json($post);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        $post = $this->post->find($id);

        return response()->json($post);
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
