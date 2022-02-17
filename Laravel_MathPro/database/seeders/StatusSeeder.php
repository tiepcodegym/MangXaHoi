<?php

namespace Database\Seeders;

use App\Models\Status;
use Illuminate\Database\Seeder;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $status = new Status();
        $status->name = "Private";
        $status->save();

        $status = new Status();
        $status->name = "Friend";
        $status->save();

        $status = new Status();
        $status->name = "Public";
        $status->save();
    }
}
