<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Conversation extends Model
{
    protected $table = "conversations";

    protected $fillable = ['name'];

    public function messages()
    {
        return $this->hasMany('App\Models\Message');
    }

    public function users()
    {
        return $this->belongsToMany('App\Models\User');
    }
}