<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function index()
    {
        $users = User::all();
        return response()->json(["data" => $users, "success" => true]);
    }

    public function store(Request $request)
    {
        $user = new User();
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->fullname = $request->fullname;
        $user->address = $request->address;
        $user->phone = $request->phone;
        $user->hobby = $request->hobby;
        $user->birthday = $request->birthday;
        $user->role = $request->role;
        if($request->hasFile('image')){
            $image = $request->file('image');
            $path = $image->store('images','public');
            $user->image = $path;
        }
        $user->save();
        return response()->json(["data" => $user, "success" => true]);
    }


    public function show($id)
    {
        $user = User::findOrFail($id);
        return response()->json($user);
    }

    public function showOfPost($id)
    {
        $user = User::findOrFail($id);
        $data = $user->posts()->with('comments')->orderBy("created_at", "DESC")->get();
        return response()->json($data);
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return response()->json(["success" => "Xóa thành công"]);
    }

    public function edit(Request $request)
    {
        $user = User::findOrFail($request->id);
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->fullname = $request->fullname;
        $user->address = $request->address;
        $user->phone = $request->phone;
        $user->hobby = $request->hobby;
        $user->birthday = $request->birthday;
        $user->role = $request->role;
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $path = $image->store('image', 'public');
            $user->image = $path;
        }
        $user->save();
        return response()->json(["data" => $user]);

    }
}
