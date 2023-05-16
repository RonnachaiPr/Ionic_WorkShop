import { Component, ViewChild } from '@angular/core';
import { IonInput, IonCheckbox } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  Weight!:number;
  Height!:number;
  Gender!:string;
  Bmr:number = 0;
  BmrMale:number = 0;
  BmrFemale:number = 0;
  Age!:number;
  Bmrkcal:number = 0;
  public alertButton = ['OK'];


  constructor() { }

  ngOnInit() { }

  Calr(){
    if(this.Gender == 'Male'){
      this.CalculateBmrMale()
    }
    else if(this.Gender == 'Female'){
      this.CalculateBmrFemale()
    }
    
  }

  CalculateBmrMale(){
    this.BmrMale = (this.Weight*10) + (6.25*this.Height) - ((5*this.Age)+5)
    console.log(this.BmrMale)
    this.Bmrkcal = this.BmrMale
  };

  CalculateBmrFemale(){
    this.BmrFemale = (this.Weight*10) + (6.25*this.Height) - ((5*this.Age)-161)
    console.log(this.BmrFemale)
    this.Bmrkcal = this.BmrFemale
  }



}
