<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\Skill;
use App\Models\Experience;
use App\Models\ContactMessage;
use Illuminate\Database\Seeder;

class PortfolioSeeder extends Seeder
{
    public function run(): void
    {
        Skill::insert([
            ['name' => 'Laravel', 'category' => 'hard', 'icon_slug' => 'laravel', 'proficiency' => 85, 'sort_order' => 1],
            ['name' => 'PHP', 'category' => 'hard', 'icon_slug' => 'php', 'proficiency' => 80, 'sort_order' => 2],
            ['name' => 'Flask API', 'category' => 'hard', 'icon_slug' => 'flask', 'proficiency' => 70, 'sort_order' => 3],
            ['name' => 'MySQL', 'category' => 'hard', 'icon_slug' => 'mysql', 'proficiency' => 80, 'sort_order' => 4],
            ['name' => 'PostgreSQL', 'category' => 'hard', 'icon_slug' => 'postgresql', 'proficiency' => 75, 'sort_order' => 5],
            ['name' => 'MongoDB', 'category' => 'hard', 'icon_slug' => 'mongodb', 'proficiency' => 60, 'sort_order' => 6],
            ['name' => 'Postman', 'category' => 'hard', 'icon_slug' => 'postman', 'proficiency' => 85, 'sort_order' => 7],
            ['name' => 'React', 'category' => 'hard', 'icon_slug' => 'react', 'proficiency' => 70, 'sort_order' => 8],
            ['name' => 'ESP8266', 'category' => 'hard', 'icon_slug' => 'esp8266', 'proficiency' => 65, 'sort_order' => 9],
            ['name' => 'Arduino Uno', 'category' => 'hard', 'icon_slug' => 'arduino', 'proficiency' => 70, 'sort_order' => 10],
            ['name' => 'ESP32', 'category' => 'hard', 'icon_slug' => 'esp32', 'proficiency' => 60, 'sort_order' => 11],
            ['name' => 'Kerjasama Tim', 'category' => 'soft', 'icon_slug' => 'teamwork', 'proficiency' => 90, 'sort_order' => 1],
            ['name' => 'Pemecahan Masalah', 'category' => 'soft', 'icon_slug' => 'problem-solving', 'proficiency' => 85, 'sort_order' => 2],
            ['name' => 'Kemampuan Beradaptasi', 'category' => 'soft', 'icon_slug' => 'adaptability', 'proficiency' => 85, 'sort_order' => 3],
            ['name' => 'Manajemen Waktu', 'category' => 'soft', 'icon_slug' => 'time-management', 'proficiency' => 80, 'sort_order' => 4],
        ]);

        Project::insert([
            [
                'title' => 'Prediksi Kesehatan Jantung',
                'slug' => 'prediksi-kesehatan-jantung',
                'description' => 'Proyek ML untuk memprediksi risiko kesehatan jantung. Memproses dan membersihkan dataset, melakukan riset komparatif algoritma klasifikasi menggunakan Scikit-Learn, menetapkan Random Forest sebagai algoritma optimal, dan mengintegrasikan model ke backend via Flask API.',
                'tech_stack' => json_encode(['Python', 'Scikit-Learn', 'Flask', 'Pandas', 'Google Colab']),
                'category' => 'ml',
                'is_featured' => true,
                'sort_order' => 1,
            ],
            [
                'title' => 'Aplikasi Kalkulator Statistik',
                'slug' => 'aplikasi-kalkulator-statistik',
                'description' => 'Mendesain prototipe aplikasi web kalkulator statistik menggunakan Figma. Membuat antarmuka pengguna yang intuitif, modern, dan ramah pengguna dengan menerapkan prinsip desain UX.',
                'tech_stack' => json_encode(['Figma', 'UI/UX Design']),
                'category' => 'ui',
                'is_featured' => false,
                'sort_order' => 2,
            ],
            [
                'title' => 'Robot Mobil Line Follower',
                'slug' => 'robot-mobil-line-follower',
                'description' => 'Merancang dan membangun robot mobil berbahan akrilik sebagai media edukasi otomasi. Mengembangkan sistem kontrol logika menggunakan mikrokontroler Arduino Uno dan membuat aplikasi Android untuk kendali manual menggunakan MIT App Inventor.',
                'tech_stack' => json_encode(['Arduino Uno', 'MIT App Inventor', 'C++', 'Sensor Garis']),
                'category' => 'iot',
                'is_featured' => true,
                'sort_order' => 3,
            ],
            [
                'title' => 'RPS Generator',
                'slug' => 'rps-generator',
                'description' => 'Aplikasi web untuk menghasilkan Rencana Pembelajaran Semester (RPS) secara otomatis. Dibangun menggunakan Laravel dan React dengan fitur generate dokumen terstruktur.',
                'tech_stack' => json_encode(['Laravel', 'React', 'TypeScript', 'PostgreSQL']),
                'category' => 'web',
                'is_featured' => true,
                'sort_order' => 4,
            ],
            [
                'title' => 'Warehouse Management System',
                'slug' => 'warehouse-management-system',
                'description' => 'Sistem manajemen gudang untuk mengelola inventaris, tracking barang masuk/keluar, dan laporan stok secara real-time. Dibangun dengan arsitektur monolit menggunakan Laravel dan React.',
                'tech_stack' => json_encode(['Laravel', 'React', 'TypeScript', 'MySQL']),
                'category' => 'web',
                'is_featured' => true,
                'sort_order' => 5,
            ],
        ]);

        $exp1 = new Experience();
        $exp1->type = 'work';
        $exp1->title = 'Web Development Koperasi Simpan Pinjam';
        $exp1->company = 'Koperasi Simpan Pinjam';
        $exp1->role = '';
        $exp1->description = 'Merancang dan membangun API untuk mengelola alur operasional koperasi. Mengimplementasikan PostgreSQL sebagai database utama. Mengintegrasikan sistem pelaporan otomatis untuk memudahkan admin koperasi dalam menyampaikan informasi kepada member.';
        $exp1->start_date = '2025-01-01';
        $exp1->end_date = '2025-06-01';
        $exp1->sort_order = 1;
        $exp1->save();

        $exp2 = new Experience();
        $exp2->type = 'organization';
        $exp2->title = 'Himpunan Mahasiswa Teknik Otomasi Manufaktur & Mekatronika';
        $exp2->role = 'Anggota Divisi PSDM';
        $exp2->company = '';
        $exp2->description = 'Bertanggung jawab merancang dan mengeksekusi program kerja strategis untuk meningkatkan kompetensi teknis dan soft skills anggota himpunan. Menyusun standarisasi evaluasi kinerja anggota divisi.';
        $exp2->start_date = '2024-01-01';
        $exp2->end_date = null;
        $exp2->sort_order = 2;
        $exp2->save();

        $exp3 = new Experience();
        $exp3->type = 'organization';
        $exp3->title = 'Workshop PLC (Programmable Logic Control)';
        $exp3->role = 'Ketua Pelaksana';
        $exp3->company = '';
        $exp3->description = 'Menyusun konsep dan timeline workshop PLC untuk 29 peserta. Membentuk dan memimpin struktur kepanitiaan lintas divisi. Mengelola anggaran kegiatan secara transparan dan efisien.';
        $exp3->start_date = '2024-08-01';
        $exp3->end_date = '2024-09-01';
        $exp3->sort_order = 3;
        $exp3->save();
    }
}
