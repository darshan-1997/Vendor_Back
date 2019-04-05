import { Component, Inject,OnInit, Input, Output } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
//import { update } from './update.component';
//import { item } from '../../menu/item';
import {booker} from '../../booker'
import {BookerUpdate} from '../bookerupdate/booker.update'
import { MenuService } from '../../../menu/menu.service';
import {BookerService} from '../../booker.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-dialog-booker',
  templateUrl: './booker.dialog.component.html',
  styleUrls: ['../../booker.display.css']
})

export class dialogdata2 {
   
    updateData=new booker;

    newData = new booker;

    //itemImage : File;
    
    description:string;

    @Output() myEvent = new EventEmitter();

    bobby: any;
    readonly Bobby = new booker;
    constructor(private dialogRef: MatDialogRef<dialogdata2>, @Inject(MAT_DIALOG_DATA) data, private BookerService: BookerService)
    {   this.bobby=dialogRef;
        this.updateData=data;
        this.Bobby=data;
    }


     close() 
     { 
      this.dialogRef.close();
      window.location.reload();
    }


     save()
     {  const newItem={
        roomNumber: this.updateData.roomNumber,
        service: this.updateData.service,
        createdAt:this.updateData.createdAt,
     }
     console.log(this.updateData.roomNumber);
     console.log(this.updateData.service);
      //  newItem.itemImagename=newItem.itemImagename+this.itemImage.name;
   
     this.newData=newItem;
       //console.log(this.newData);
        this.BookerService.update(this.newData).subscribe(data=>{
            //this.Foods.push(newFood);
            //alert("Your Image Added Successfully");
          });
          this.close();
     }
     onSelectFile(event){
      //this.itemImage=<File>event.target.files[0];
    }
}