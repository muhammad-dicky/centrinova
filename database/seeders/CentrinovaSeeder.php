<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CentrinovaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Centrinova::create([
            'id' => 1,
            'user_id' => 1,
            'message' => 'Mengapa Kucing Adalah Hewan Peliharaan yang Menyenangkan',
            'description' => 'Mendapatkan kucing sebagai hewan peliharaan adalah keputusan yang cerdas dan memuaskan. Dibalik gerak lincah dan sikap anggun mereka, kucing juga memiliki kepribadian yang unik dan mampu membawa keceriaan ke dalam rumah tangga.',
            'created_at' => '2024-02-20 21:42:53',
            'updated_at' => '2024-02-20 21:53:58',
            'image' => 'centrinova/gchDrqqqTf.jpeg',
        ]);

        Centrinova::create([
            'id' => 2,
            'user_id' => 1,
            'message' => '5 Tips Memulai Hobi Memasak Bagi Pemula',
            'description' => 'Memasak bisa menjadi hobi yang memuaskan dan mendatangkan banyak manfaat, tetapi bagi pemula, memulainya bisa terasa menakutkan. Tidak perlu khawatir! Dalam blog ini, kami akan memberikan 5 tips praktis bagi pemula untuk memulai perjalanan memasak mereka.',
            'created_at' => '2024-02-20 21:45:04',
            'updated_at' => '2024-02-20 21:54:27',
            'image' => 'centrinova/Uyp2LUGEIl.jpg',
        ]);

        Centrinova::create([
            'id' => 3,
            'user_id' => 1,
            'message' => 'Pentingnya Kesehatan Mental di Era Digital',
            'description' => 'Dalam era digital yang serba cepat, kesehatan mental kita sering kali terabaikan. Pelajari mengapa penting untuk merawat kesehatan mental Anda dan cara melakukannya.',
            'created_at' => '2024-02-20 21:45:51',
            'updated_at' => '2024-02-20 21:45:51',
            'image' => 'centrinova/IDH7gO832v.jpg',
        ]);

        Centrinova::create([
            'id' => 4,
            'user_id' => 1,
            'message' => 'Destinasi Liburan yang Wajib Dikunjungi di Tahun 2024',
            'description' => 'Rencanakan liburan Anda di tahun 2024 dengan mengunjungi destinasi yang menakjubkan dan memikat. Temukan tempat-tempat eksotis yang layak untuk dikunjungi sepanjang tahun ini.',
            'created_at' => '2024-02-20 21:46:54',
            'updated_at' => '2024-02-20 21:46:54',
            'image' => 'centrinova/kO7zYbdqUL.jpg',
        ]);

        Centrinova::create([
            'id' => 5,
            'user_id' => 1,
            'message' => 'Cara Efektif Mengatur Waktu agar Lebih Produktif',
            'description' => 'Menjadi produktif adalah kunci untuk sukses dalam kehidupan pribadi maupun profesional. Pelajari cara efektif mengatur waktu Anda untuk mencapai potensi penuh Anda.',
            'created_at' => '2024-02-20 21:47:27',
            'updated_at' => '2024-02-20 21:47:27',
            'image' => 'centrinova/o7HtFeMC56.jpg',
        ]);
    }
}
