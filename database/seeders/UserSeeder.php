<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'id' => 1,
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'email_verified_at' => null,
            'password' => '$2y$12$DE1rsROuwU.3GVUwaGRPhuy3LbfllHdFS3AHhbMrhNtmMs9e/88WO',
            'remember_token' => null,
            'created_at' => '2024-02-20 21:32:20',
            'updated_at' => '2024-02-20 21:32:20',
        ]);
    }
    
}
