import { Component, Inject,OnInit, Input } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { update } from './update.component';
import { item } from '../item';
import { MenuService } from '../menu.service';

//import {ContactService} from 


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['../menu.component.css']
})



export class dialogdata {
   
    updateData=new item;

    newData = new item;

    itemImage : File;
    
    description:string;

    bobby: any;
    readonly Bobby = new item;
    constructor(private dialogRef: MatDialogRef<dialogdata>, @Inject(MAT_DIALOG_DATA) data, private MenuService: MenuService)
    {
        
        this.bobby=dialogRef;
        this.updateData=data;
        this.Bobby=data;
        

    }


     close() 
     {

      
      //this.updateData=this.Bobby; 
      this.dialogRef.close();
      console.log(this.bobby);
      console.log(this.Bobby);
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
        itemImagename:"G:/Transil/client/uploads/"
  
      }

      //console.log("lsmkmskmk"+newItem.itemImage);
  
      if(!(this.itemImage==undefined))
      {
        newItem.itemImagename=newItem.itemImagename+this.itemImage.name;
   
     this.MenuService.addImage(this.itemImage).subscribe(data=>{
      });
      }

     this.newData=newItem;
       //console.log(this.newData);
        this.MenuService.update(this.newData).subscribe(data=>{
            //this.Foods.push(newFood);
            //alert("Your Image Added Successfully");
          });

          this.close();
     }

     onSelectFile(event){
      this.itemImage=<File>event.target.files[0];
    }
}

