<?php

namespace App\Http\Controllers;

use App\Models\Centrinova;
use Illuminate\Http\Request;
// use Illuminate\Http\Response;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;


class CentrinovaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        // return response("Hello, world!");
        return Inertia::render('Centrinova/Index', [
            'centrinova' => Centrinova::with('user:id,name')->latest()->get(),
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
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'message' => 'required|string|max:255',
        ]);
 
        $request->user()->centrinova()->create($validated);
 
        return redirect(route('centrinova.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Centrinova $centrinova)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Centrinova $centrinova)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Centrinova $centrinova): RedirectResponse
    {
        $this->authorize('update', $centrinova);
 
        $validated = $request->validate([
            'message' => 'required|string|max:255',
        ]);
 
        $centrinova->update($validated);
 
        return redirect(route('centrinova.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Centrinova $centrinova): RedirectResponse
    {
        $this->authorize('delete', $centrinova);

        $centrinova->delete();

        return redirect(route('centrinova.index'));
    }
}
