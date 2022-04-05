<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

class PagesController extends Controller
{
   public function index(){
    return Inertia::render('HomePage', []);
   }

   public function login(){
    return Inertia::render('LoginPage', []);
   }

}
