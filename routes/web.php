<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     sleep(1.5);
//     return Inertia::render('Home', ['name' => "Mike"]);
// });

Route::get('/', [PostController::class, 'index']);
Route::resource('posts', PostController::class)->except('index');