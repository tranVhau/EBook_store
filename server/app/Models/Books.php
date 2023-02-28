<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Books extends Model
{
    use HasFactory;
    use Sluggable;
    
    protected $guarded = [];
    protected $fillable = ['name', 'slug', 'source', 'desc', 'price', 'publisherID'];
    
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }
}
