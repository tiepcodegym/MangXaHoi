<?php


use App\Http\Controllers\AuthController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::group(['middleware' => 'api', 'prefix' => 'auth'], function ($router) {
Route::prefix('auth')->group(function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::middleware('auth:api')->group(function () {
        Route::post('logout', [AuthController::class, 'logout']);
//    Route::post('refresh', 'AuthController@refresh');
        Route::post('me', [AuthController::class, 'me']);
    });
});

Route::prefix('users')->group(function () {
    Route::get('/', [UserController::class, 'index']);
    Route::post('/', [UserController::class, 'store']);
    Route::get('/{id}', [UserController::class, 'show']);
    Route::delete('/{id}', [UserController::class, 'destroy']);
    Route::put('/{id}', [UserController::class, 'edit']);
    Route::get('/{id}/with', [UserController::class, 'showOfPost']);

});

Route::prefix('/posts')->group(function () {
    Route::get('/', [PostController::class, 'getAll']);
    Route::get('/profile', [PostController::class, 'getList']);
    Route::post('/', [PostController::class, 'store']);
    Route::delete('/{id}', [PostController::class, 'destroy']);
    Route::get('/{id}', [PostController::class, 'show']);
    Route::put('/{id}', [PostController::class, 'edit']);

});
Route::prefix("/statuses")->group(function (){
    Route::get("/", [\App\Http\Controllers\StatusController::class, "index"]);
});

Route::prefix("/comments")->group(function (){
    Route::get("/{id}", [CommentController::class, "getCommentById"]);
    Route::post("", [CommentController::class, "store"]);
    Route::get("", [CommentController::class, "index"]);
});





