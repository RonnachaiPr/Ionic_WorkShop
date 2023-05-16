import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  Weight!:number;
  Height!:number;
  Gender!:string;
  Bmi:number = 0;
  BmiMale:number = 0;
  BmiFemale:number = 0;
  Age!:number;
  Bmikcal:number = 0;


  public alertButton = ['OK'];


  constructor() { }

  ngOnInit() { }

  Cal(){
    if(this.Gender == 'Male'|| this.Gender == 'Female'|| this.Gender == 'Unknow'){
      this.CalculateBmi()
    }
    
  }

  CalculateBmi(){
    this.BmiMale = (this.Weight)/(this.Height*this.Height)
    console.log(this.BmiMale)
    this.Bmikcal = this.BmiMale
   

  };
  







}
