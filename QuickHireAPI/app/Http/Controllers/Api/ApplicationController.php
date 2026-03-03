<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Application;
use App\Models\Job;
use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    // POST /api/applications
    public function store(Request $request)
    {
        $validated = $request->validate([
            'job_id' => 'required|exists:jobs,id',
            'name' => 'required',
            'email' => 'required|email',
            'resume_link' => 'required|url',
            'cover_note' => 'nullable'
        ]);

        $application = Application::create($validated);

        return response()->json([
            'message' => 'Application submitted successfully',
            'data' => $application
        ], 201);
    }
}