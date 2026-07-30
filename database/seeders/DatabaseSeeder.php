<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        if (!User::where('email', 'snowfreze@gmail.com')->exists()) {
            User::factory()->create([
                'name' => 'Abdul Rauf Fansuri',
                'email' => 'snowfreze@gmail.com',
            ]);
        }

        $this->call(PortfolioSeeder::class);
    }
}
