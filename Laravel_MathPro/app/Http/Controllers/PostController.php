<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::with("user")->get();
        return response()->json(['data' => $posts]);
    }

    public function getAll()
    {
        $post = Post::with("user", "status","comments")->orderBy("created_at", "DESC")->get();
        return response()->json($post);
    }


    function getList() {
        $userLogin = Auth::user();
        $posts = $userLogin->posts()->get();
        $data = [
            'status' => 'success',
            'data' => $posts
        ];

        return response()->json($data);
    }


    function store(Request $request) {
        $data = $request->only("user_id", "content", "status_id", "image");
        $post = Post::query()->create($data);
        return response()->json($post);
    }


    public function destroy($id)
    {
        $post = Post::findOrFail($id);
        $post->delete();
        return response()->json(["success" => true]);
    }

    public function show($id)
    {
        $post = Post::findOrFail($id);
        return response()->json($post);
    }

    public function edit(Request $request, $id)
    {
        $data = $request->only('user_id', 'content', 'image', 'status_id');
        $post = Post::findOrFail($id);
        $post->update($data);
        return response()->json($post);
    }
}
