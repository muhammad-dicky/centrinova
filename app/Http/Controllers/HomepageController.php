<?php

namespace App\Http\Controllers;

use App\Models\Homepage;
use App\Models\Centrinova;
use Illuminate\Http\Request;
// use Illuminate\Http\Response;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Pagination\Paginator;
// use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Support\Facades\Storage;




class HomepageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    // ASLI
    public function index(): Response
    {
        
        return Inertia::render('Homepage/Index', [
            'centrinova' => Centrinova::with('user:id,name')->latest()->get(),
            // 'centrinova' => $centrinova
        ]);
    }

    

  

//     public function index(): Response
// {
//     $centrinova = Centrinova::with('user:id,name')->latest()->paginate(10); // Mengambil 10 item per halaman

//     // Atau jika Anda ingin menyesuaikan jumlah item per halaman
//     // $centrinova = Centrinova::with('user:id,name')->latest()->paginate(15); // Mengambil 15 item per halaman

//     return Inertia::render('Homepage/Index', [
//         'centrinova' => $centrinova,
//     ]);
// }


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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Homepage $homepage)
{
    
}


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Homepage $homepage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Homepage $homepage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Homepage $homepage)
    {
        //
    }
}
