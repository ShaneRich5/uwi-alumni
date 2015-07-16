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
    Route::post('login', 'AuthCtrl@login');
    Route::post('register', 'AuthCtrl@register');
    Route::get('auth', 'AuthCtrl@getAuthenticatedUser');

    Route::resource('users', 'UsersCtrl');
    Route::resource('messages', 'MessagesCtrl');
});

Route::group(['prefix' => 'app'], function() {
    Route::get('{path?}', function(\Request $request){
        return File::get(public_path() . $request->path());
    });
});

Route::group(['prefix' => 'app'], function(){
    Route::get('{path?}', function(\Request $request)
    {
        return redirect('/');
//        return File::get(public_path() . '/app/' . $request->path());
    });
});

//Route::any('{path?}', function()
//{
//    return view("index");
//})->where("path", ".+");

//Route::any('{path?}', function()
//{
//    return File::get(public_path() . '/app/shared/main/index.html');
//})->where("path", ".+");