<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Project extends Model
{
    protected $fillable = [
        'title', 'slug', 'description', 'tech_stack',
        'live_url', 'github_url', 'image', 'category',
        'is_featured', 'sort_order',
    ];

    protected function casts(): array
    {
        return [
            'tech_stack' => 'array',
            'is_featured' => 'boolean',
        ];
    }

    protected static function booted(): void
    {
        static::creating(fn (Project $p) => $p->slug ??= Str::slug($p->title));
    }
}
