<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Models\Authors;

class BooksAuthorsController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['store']]);
    }


    // // DUMMY DATA TEST 
    // public function store(){    

    //     $author = Authors::create([
    //         'name' => 'author1',
    //         'image'=>'https://123'
    //     ]);


    //     return response()->json([
    //         'status' => 'success',
    //         'books' => $author,
    //     ]);
    // }
}
