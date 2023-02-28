<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use App\Models\Authors;


class BooksController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index','store','show']]);
    }

    public function index()
    {

        $genres = DB::table('books_genres')
        ->join('genres', 'genres.id','=','books_genres.genre_id')
        ->select('books_genres.books_id', 'genres.name as genre_name')
        ->get();


        $authors = DB::table('books__authors')
        ->join('authors', 'authors.id','=','books__authors.author_id')
        ->select('books__authors.book_id', 'authors.name as author_name', 'authors.image')
        ->get();


        $books = DB::table('books')
        ->join('publishers', 'publishers.id','=','books.publisherID')
        ->select('books.*'  ,'publishers.name as publisher')
        ->get();


        // add the array space to store all document category

        forEach($books as $element){
            $element->genres = array();
            $element->authors = array();
            // $element->avgRate = Books::where('id', $element->id)->first()->averageRating();
        }

        
        forEach( $books as $book){
           forEach($genres as $genre){
            if($genre->books_id == $book->id){
                array_push($book->genres,$genre->genre_name);
            }
           }

           forEach($authors as $author){
            if($author->book_id == $book->id){
                array_push($book->authors, (object)[
                    'name' => $author->author_name,
                    'image' => $author->image, 
            ]);
            }
           }
        }
        return response()->json([
            'status' => 'success',
            'books' => $books,
        ]);
    }

    public function show(Request $request)
    {
        $genres = DB::table('books_genres')
        ->join('genres', 'genres.id','=','books_genres.genre_id')
        ->select('books_genres.books_id', 'genres.name as genre_name')
        ->get();


        $authors = DB::table('books__authors')
        ->join('authors', 'authors.id','=','books__authors.author_id')
        ->select('books__authors.book_id', 'authors.name as author_name', 'authors.image')
        ->get();


        $books = DB::table('books')
        ->join('publishers', 'publishers.id','=','books.publisherID')
        ->select('books.*'  ,'publishers.name as publisher')
        ->where('books.slug',$request->slug)
        ->first();

        // add the array space to store all document category

        $books->genres = array();
        $books->authors = array();
        // forEach($books as $element){
        //     $element->genres = array();
        //     $element->authors = array();
        //     // $element->avgRate = Books::where('id', $element->id)->first()->averageRating();
        // }

        
        // forEach( $books as $book){
        forEach($genres as $genre){
            if($genre->books_id == $books->id){
                array_push($books->genres,$genre->genre_name);
                }
            }
    
        forEach($authors as $author){
            if($author->book_id == $books->id){
                array_push($books->authors, (object)[
                    'name' => $author->author_name,
                    'image' => $author->image, 
                ]);
            }
        }
        // }

        return response()->json([
            'status' => 'success',
            'books' => $books,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
        
        ]);

        // $books = Books::create([
        //     'name' => 'noname1',
        //     'source' => 'https://noname1',
        //     'publisherID'=> '1',
        //     'desc' => 'book desc',
        //     'price'=> '100000'
        // ]);

        $author = Authors::create([
            'name' => 'author1',
            'image'=>'https://123'
        ]);


        return response()->json([
            'status' => 'success',
            'books' => $author,
        ]);

        // return response()->json([
        //     'status' => 'success',
        //     'message' => 'Products added successfully',
        //     'Products' => $books,
        // ]);
    }
}
