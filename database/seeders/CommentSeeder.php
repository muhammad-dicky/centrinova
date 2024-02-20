<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        Comment::create([
            'id' => 1,
            'user_id' => 1,
            'centrinova_id' => 1,
            'message' => 'kucing yang bagus!',
            'created_at' => '2024-02-20 21:54:43',
            'updated_at' => '2024-02-20 21:54:43',
        ]);

        Comment::create([
            'id' => 2,
            'user_id' => 1,
            'centrinova_id' => 1,
            'message' => 'Aku juga suka kucing',
            'created_at' => '2024-02-20 21:54:53',
            'updated_at' => '2024-02-20 21:54:53',
        ]);

        Comment::create([
            'id' => 3,
            'user_id' => 1,
            'centrinova_id' => 1,
            'message' => 'menyala',
            'created_at' => '2024-02-20 21:55:24',
            'updated_at' => '2024-02-20 21:55:24',
        ]);

        Comment::create([
            'id' => 4,
            'user_id' => 1,
            'centrinova_id' => 2,
            'message' => 'wow masakan yang lezat!',
            'created_at' => '2024-02-20 21:56:37',
            'updated_at' => '2024-02-20 21:56:37',
        ]);

        Comment::create([
            'id' => 5,
            'user_id' => 1,
            'centrinova_id' => 2,
            'message' => 'mantap',
            'created_at' => '2024-02-20 21:56:44',
            'updated_at' => '2024-02-20 21:56:44',
        ]);

        Comment::create([
            'id' => 6,
            'user_id' => 1,
            'centrinova_id' => 2,
            'message' => 'Ajinomoto',
            'created_at' => '2024-02-20 21:56:52',
            'updated_at' => '2024-02-20 21:56:52',
        ]);

        Comment::create([
            'id' => 7,
            'user_id' => 1,
            'centrinova_id' => 5,
            'message' => 'Waktu gaes',
            'created_at' => '2024-02-20 21:57:05',
            'updated_at' => '2024-02-20 21:57:05',
        ]);

        Comment::create([
            'id' => 8,
            'user_id' => 1,
            'centrinova_id' => 5,
            'message' => 'kenapa bisa gitu',
            'created_at' => '2024-02-20 21:57:13',
            'updated_at' => '2024-02-20 21:57:13',
        ]);
    }
}
