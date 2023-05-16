import { Component, ViewChild } from '@angular/core';
import { IonInput, IonCheckbox } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  handlerMessage = '';
  isInputEnabled1:boolean = false
  isInputEnabled2:boolean = false
  isInputEnabled3:boolean = false
  isInputEnabled4:boolean = false
  isInputEnabled5:boolean = false
  Name:string="ยูนิค";
  Age:number=22;
  Weight:number=80;
  Height:number=180;
  Color:string="Purple";
  Food:string="PadThai";
  Gender:string="Male";
  Tel:number=+6645635333;
  Address:string="อยู่แถวๆนี้";
  Line:string="unit7761";
  Facebook:string="---";
  Instagram:string="---";
  
  
 

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        this.handlerMessage = 'การบันทึกถูกยกเลิก';
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        this.handlerMessage = 'บันทึกข้อมูลสำเร็จ';
        console.log('Name: ' + this.Name);
        console.log('Age: ' + this.Age);
        console.log('Gender: ' + this.Gender);
        console.log('Tel: ' + this.Tel);
        console.log('Address: ' + this.Address);
        console.log('Favorite color: ' + this.Color);
        console.log('Favorite food: ' + this.Food);
        console.log('Line: ' + this.Line);
        console.log('Facebook: ' + this.Facebook);
      console.log('Instagram: ' + this.Instagram);
      },
    },
  ];

  

}
