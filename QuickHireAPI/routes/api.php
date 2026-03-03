<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\JobController;
use App\Http\Controllers\Api\ApplicationController;

Route::prefix('jobs')->group(function () {
    Route::get('/', [JobController::class, 'index']);
    Route::get('{id}', [JobController::class, 'show']);

    // Admin routes
    Route::post('/', [JobController::class, 'store']);
    Route::delete('{id}', [JobController::class, 'destroy']);
});

Route::post('applications', [ApplicationController::class, 'store']);