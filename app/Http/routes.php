<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('index');
});

Route::group(['prefix' => 'api'], function()
{
    /**
     * Authentication routes
     */
    Route::post('register', 'AuthCtrl@register');
    Route::post('login', 'AuthCtrl@login');
    Route::get('auth', 'AuthCtrl@getAuthenticatedUser');

    Route::resource('users', 'UsersCtrl');
    Route::resource('posts', 'PostsCtrl', ['except' => ['create', 'edit']]);

    Route::resource('posts/{post_id}/comments', 'CommentsCtrl', ['except' => ['create', 'edit']]);

    /**
     * Guarded routes
     */
    Route::group(['middleware' => 'jwt.auth'], function()
    {
        Route::resource('messages', 'MessagesCtrl', ['except' => ['create', 'edit']]);
    });
});

Route::group(['prefix' => 'app'], function() {
    Route::get('{path?}', function(\Request $request){
        return File::get(public_path() . $request->path());
    });
});