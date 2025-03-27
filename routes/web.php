<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    sleep(1.5);
    return Inertia::render('Home', ['name' => "Mike"]);
});
