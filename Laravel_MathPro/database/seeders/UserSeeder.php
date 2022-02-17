<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User();
        $user->fullname = "Hà Thu";
        $user->email = "ha@gmail.com";
        $user->password = Hash::make(123456);
        $user->phone = "0912345678";
        $user->address = "Hà Nội";
        $user->hobby = "Ăn, ngủ";
        $user->role = "Admin";
        $user->save();

        $user = new User();
        $user->fullname = "Tiệp Nguyễn";
        $user->email = "tiep@gmail.com";
        $user->password = Hash::make(123456);
        $user->phone = "0929303130";
        $user->address = "Hà Nội";
        $user->hobby = "Đi chơi, nghe nhạc";
        $user->role = "User";
        $user->save();


        $user = new User();
        $user->fullname = "Mỹ Trần";
        $user->email = "my@gmail.com";
        $user->password = Hash::make(123456);
        $user->phone = "0332882276";
        $user->address = "Sài Gòn";
        $user->hobby = "Xinh gái,học giỏi";
        $user->role = "User";
        $user->save();


        $user = new User();
        $user->fullname = "Tuấn Anh";
        $user->email = "anh@gmail.com";
        $user->password = Hash::make(123456);
        $user->phone = "091234537";
        $user->address = "Việt Nam";
        $user->hobby = "Sở khanh";
        $user->role = "User";
        $user->save();
    }

}
