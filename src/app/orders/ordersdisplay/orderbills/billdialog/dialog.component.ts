import { Component, Inject,OnInit, Input } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

//import {ContactService} from 


@Component({
  selector: 'app-bill',
  templateUrl: './dialog.component.html'
})



export class BillDialog {
   

    
  sections=['Snacks','Breakfast','Dinner','Dessert'];
    itemImage : File;
    
    description:string;

    selectedSection:any;
    sum:number
        
    tempdata: any;
    constructor(private dialogRef: MatDialogRef<BillDialog>, @Inject(MAT_DIALOG_DATA) data)
    {
        
        this.tempdata=data;
        this.sum=0
        for(var entry in this.tempdata.toBill[0].listItem){

            this.sum=this.sum+ (this.tempdata.toBill[0].listItem[entry].qty * this.tempdata.toBill[0].listItem[entry].price);

        }
        //this.selectedOption=this.updateData.itemSection;
    }
    close() 
     {

      
      //this.updateData=this.Bobby; 
      this.dialogRef.close();
    }



}

