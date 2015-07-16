<?php

namespace App\Models;

use App\Traits\Messageable;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use Messageable;

    public function conversation()
    {
        return $this->belongsTo('App\Models\Conversation');
    }

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
