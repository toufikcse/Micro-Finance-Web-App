<?php

namespace App\Http\Controllers;

use App\officesetupforms;
use Illuminate\Http\Request;

class OfficesetupformsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return officesetupforms::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'officeid' => 'nullable',
            'officename'=> 'nullable',
            'adress' => 'nullable',
            'maximum_branch' => 'nullable',
             'maximum_somitee' => 'nullable',
            'office_in_charge' => 'nullable',
            'phone' => 'nullable',
            'email'=> 'nullable'
            ]);
            officesetupforms::create($request->all());
             return ($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\officesetupforms  $officesetupforms
     * @return \Illuminate\Http\Response
     */
    public function show(officesetupforms $officesetupforms)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\officesetupforms  $officesetupforms
     * @return \Illuminate\Http\Response
     */
    public function edit(officesetupforms $officesetupforms)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\officesetupforms  $officesetupforms
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, officesetupforms $officesetupforms)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\officesetupforms  $officesetupforms
     * @return \Illuminate\Http\Response
     */
    public function destroy(officesetupforms $officesetupforms)
    {
        //
    }

    public function findofficeid(){
        // $officeids=  officesetupforms::select('_id')->find($id)-get();
        // $officeids= DB::collection('officesetupforms')->lists('officeid');
        return officesetupforms::all('officeid','officename');    }

    public function chechkid(Request $request){
        $request->validate([
            'officeid' => 'nullable',
            ]);
            
            $email_status = officesetupforms ::where('officeid', '=',  $request->officeid)->first();
           
            // return $email_status;
        
            if(!is_null($email_status)){
            return (200);
             }
           else{
               return (100);
           }
    }
}
