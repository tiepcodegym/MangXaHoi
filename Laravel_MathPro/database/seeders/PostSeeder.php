<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $post = new Post();
        $post->user_id = 1;
        $post->content = "hom nay toi buon";
        $post->image ='';
        $post->status_id = 2;
        $post->save();

        $post = new Post();
        $post->user_id = 2;
        $post->content = "mot ngay dep troi";
        $post->image ='';
        $post->status_id = 1;
        $post->save();
    }

}
