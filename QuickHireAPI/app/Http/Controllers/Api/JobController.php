<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Job;
use Illuminate\Http\Request;

class JobController extends Controller
{
    // GET /api/jobs
    public function index()
    {
        return response()->json(Job::latest()->get());
    }

    // GET /api/jobs/{id}
    public function show($id)
    {
        $job = Job::with('applications')->find($id);

        if (!$job) {
            return response()->json(['message' => 'Job not found'], 404);
        }

        return response()->json($job);
    }

    // POST /api/jobs (Admin)
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required',
            'company' => 'required',
            'location' => 'required',
            'category' => 'required',
            'description' => 'required'
        ]);

        $job = Job::create($validated);

        return response()->json($job, 201);
    }

    // DELETE /api/jobs/{id} (Admin)
    public function destroy($id)
    {
        $job = Job::find($id);

        if (!$job) {
            return response()->json(['message' => 'Job not found'], 404);
        }

        $job->delete();

        return response()->json(['message' => 'Job deleted successfully']);
    }
}
