<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CommentController extends Controller
{
    public function index()
    {
        $comments = Comment::with("post")->get();
        return response()->json(['data' => $comments]);
    }
    public function getCommentById($id)
    {
        $postId = Post::with("user")->find($id);
//        $comments = Comment::with("user", "post")->join('')->where("post_id", "=", $postId->id)->orderBy("created_at", "DESC")->get();

        $comments = DB::table('comments')
            ->join('users', 'users.id', '=', 'comments.user_id')
            ->where('post_id',"=",$postId->id)
            ->select('comments.*', 'users.fullname','users.image')
            ->get();
                return response()->json($comments);

    }

    public function store(Request $request)
    {
        $data = $request->only("content", 'post_id', "user_id");
        $comment = Comment::query()->create($data);
        return response()->json($comment);
    }
}
