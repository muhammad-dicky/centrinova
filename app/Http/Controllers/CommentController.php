<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Centrinova;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
// use App\Http\Controllers\console;


class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
       
        return Inertia::render('Comment/Index', [
            'comment' => Comment::with('user:id,name')->latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    // public function store(Request $request): RedirectResponse
    // {
        
    //     $validated = $request->validate([
    //         'message' => 'required',
           
    //     ]);

    //     if(!$validated) {
    //         return back()->withErrors(['message' => 'Validation failed. Please check your input.']);
            
    //     };
       
    //     // $validated['centrinova_id'] = $request->centrinova_id;
    //     $request->user()->comment()->create($validated);
        
    //     // Auth::user()->comments()->create($validated);
 
    //     return redirect(route('comment.index'));
    // }
    public function store(Request $request): RedirectResponse
    {
      
        
        $validated = $request->validate([
            'message' => 'required|string|max:255',
            'centrinova_id' => 'required',
           
        ]);

        if(!$validated) {
            return back()->withErrors(['message' => 'Validation failed. Please check your input.']);
            
        };
       
        // $validated['centrinova_id'] = $request->centrinova_id;
        $request->user()->comment()->create($validated);
        
 
        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Comment $comment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Comment $comment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Comment $comment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comment $comment)
    {
        //
    }
}
