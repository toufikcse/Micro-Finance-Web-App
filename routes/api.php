<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/find_office_id', [App\Http\Controllers\OfficesetupformsController::class, 'findofficeid'])->name('Officeids.all');
Route::post('/find_branch_id', [App\Http\Controllers\BranchsetupformsController::class, 'findbranchid'])->name('branchid.findbranchid');
Route::post('/find_somiteename', [App\Http\Controllers\SomiteesetupformsController::class, 'findsomiteename'])->name('somiteename.findsomiteename');
//Route::post('/memberdatastore', [App\Http\Controllers\MembersetupformsController ::class, 'store'])->name('membersetupforms.store');
Route::get('/get_somiteename', [App\Http\Controllers\SomiteesetupformsController::class, 'getallsomiteename'])->name('somiteename.all');
Route::post('/find_member_details', [App\Http\Controllers\MembersetupformsController::class, 'member_details_somitee']);
Route::get('/index', [App\Http\Controllers\OfficesetupformsController::class,'index'])->name('Officesetupforms.all');
// Route::post('/loginadmin', [App\Http\Controllers\AdminLoginController::class, 'login']);
Route::get('/allsomiteename', [App\Http\Controllers\SomiteesetupformsController::class, 'getallsomiteename'])->name('somiteename.all');
Route::post('/findbranchid_membership_setup', [App\Http\Controllers\SomiteesetupformsController::class, 'find_branchid'])->name('branchid.membersetup');
Route::post('/findofficeid_membership_setup', [App\Http\Controllers\SomiteesetupformsController::class, 'find_officeid'])->name('officeid.membersetup');
Route::get('/find_member', [App\Http\Controllers\MembersetupformsController::class, 'Index']);
Route::get('/allbranchid', [App\Http\Controllers\BranchsetupformsController::class, 'Index'])->name('branchid.all');


