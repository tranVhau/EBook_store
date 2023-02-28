<?php

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
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BooksController;
use App\Http\Controllers\CartsItemsController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\TodoController;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');

});

Route::controller(TodoController::class)->group(function () {
    Route::get('todos', 'index');
    Route::post('todo', 'store');
    Route::get('todo/{id}', 'show');
    Route::put('todo/{id}', 'update');
    Route::delete('todo/{id}', 'destroy');
}); 

Route::controller(BooksController::class)->group(function () {
    Route::get('products', 'index');
    Route::post('product', 'store');
    Route::get('product/{slug}', 'show');
    Route::put('product/{slug}', 'update');
    Route::delete('product/{slug}', 'destroy');
}); 

Route::controller(CartsItemsController::class)->group(function () {
    Route::get('cartItems', 'index');
    Route::post('cartItem', 'store');
    Route::get('cartItem/{id}', 'show');
    Route::put('cartItems/{id}', 'update');
    Route::delete('cartItem/{id}', 'destroy');
}); 


Route::controller(OrdersController::class)->group(function () {
    Route::get('cartItems', 'index');
    Route::post('cartItem', 'store');
    Route::get('cartItem/{id}', 'show');
    Route::put('cartItems/{id}', 'update');
    Route::delete('cartItem/{id}', 'destroy');
});
