import { Component, Inject,OnInit, Input } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { update } from '../update/update.component';
import { item } from '../../item';
import { MenuService } from '../../menu.service';

//import {ContactService} from 


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['../../menu.component.css']
})



export class dialogdata {
   
    updateData=new item;

    newData = new item;

    
  sections=['Snacks','Breakfast','Dinner','Dessert'];
    itemImage : File;
    
    description:string;

    selectedSection:any;

    tempdata: any;
    readonly BigData = new item;
    constructor(private dialogRef: MatDialogRef<dialogdata>, @Inject(MAT_DIALOG_DATA) data, private MenuService: MenuService)
    {
        
        this.tempdata=dialogRef;
        this.updateData=data;
        this.BigData=data;
      //this.selectedOption=this.updateData.itemSection;
    }


     close() 
     {

      
      //this.updateData=this.Bobby; 
      this.dialogRef.close();
      console.log(this.tempdata);
      console.log(this.BigData);
      window.location.reload();
    }


     save()
     {

     // console.log("lsmkmskmk")

      const newItem={
        itemName: this.updateData.itemName,
        itemDescription: this.updateData.itemDescription,
        itemPrice:this.updateData.itemPrice,
        itemType:this.updateData.itemType,
        itemId:this.updateData.itemId,
        itemSection:this.updateData.itemSection,
        itemImagename:"G:/Transil/client/uploads/"
        
  
      }

      //console.log("lsmkmskmk"+newItem.itemImage);
      if(!(this.itemImage==undefined))
      {
        newItem.itemImagename=newItem.itemImagename+this.itemImage.name;
   
     this.MenuService.addImage(this.itemImage).subscribe(data=>{
      });
      }

    //  this.selectedOption=this.updateData.itemSection;
     this.newData=newItem;
       //console.log(this.newData);
        this.MenuService.update(this.newData).subscribe(data=>{
            //this.Foods.push(newFood);
            //alert("Your Image Added Successfully");
          });
          this.MenuService.wrapData().subscribe(data=>{
            console.log("wrapped");
          });
          this.close();
     }

     onSelectFile(event){
      this.itemImage=<File>event.target.files[0];
    }

    changeClient(event){
      console.log(event);
      this.selectedSection=event;
      
     // this.selectedOption=this.updateData.itemSection;
      
    }

}

