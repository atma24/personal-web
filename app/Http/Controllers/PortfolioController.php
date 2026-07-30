<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Models\ContactMessage;
use App\Models\Experience;
use App\Models\Project;
use App\Models\Skill;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    public function home()
    {
        return Inertia::render('Home', [
            'projects' => Project::where('is_featured', true)->orderBy('sort_order')->get(),
            'skills' => Skill::orderBy('category')->orderBy('sort_order')->get(),
        ]);
    }

    public function about()
    {
        return Inertia::render('About', [
            'skills' => Skill::orderBy('category')->orderBy('sort_order')->get(),
            'educations' => [
                ['institution' => 'Politeknik Manufaktur Bandung', 'major' => 'Teknologi Rekayasa Informatika Industri', 'period' => '2022 - Sekarang'],
            ],
        ]);
    }

    public function projects()
    {
        return Inertia::render('Projects', [
            'projects' => Project::orderBy('sort_order')->get(),
        ]);
    }

    public function experience()
    {
        return Inertia::render('Experience', [
            'experiences' => Experience::orderBy('sort_order')->get(),
        ]);
    }

    public function contact()
    {
        return Inertia::render('Contact');
    }

    public function store(ContactRequest $request)
    {
        ContactMessage::create($request->validated());

        return back()->with('success', 'Pesan berhasil dikirim!');
    }
}
