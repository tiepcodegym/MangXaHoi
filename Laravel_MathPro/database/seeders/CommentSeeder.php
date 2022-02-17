<?php

namespace Database\Seeders;

use App\Models\Comment;
use Illuminate\Database\Seeder;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $comment = new Comment();
        $comment->user_id = 1;
        $comment->content = "bai nay rat hay";
        $comment->post_id = 2;
        $comment->save();

        $comment = new Comment();
        $comment->user_id = 2;
        $comment->content = "hay qua moi nguoi oi";
        $comment->post_id = 1;
        $comment->save();
    }
}
