import { Component, Inject,OnInit, Input, Output } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
//import { update } from './update.component';
//import { item } from '../../menu/item';
import {booker} from '../../booker'
import {BookerUpdate} from '../bookerupdate/booker.update'
import {BookerService} from '../../booker.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-add-feature-dialog',
  templateUrl: './add.feature.dialog.html',
  styleUrls: ['../../booker.display.css']
})

export class FeatureDialog {
   
    newfeature:string;
    updateData=new booker;

    newData = new booker;

    //itemImage : File;
    
    description:string;

    @Output() myEvent = new EventEmitter();

    datax: any;
    readonly Data_retr= new booker;
    constructor(private dialogRef: MatDialogRef<FeatureDialog>,@Inject (MAT_DIALOG_DATA) data, private BookerService: BookerService)
    {  
      this.datax=data;
    }


     close() 
     { 
      this.dialogRef.close();
     // window.location.reload();
    }


     save()
     {  
      // console.log(this.datax);
      // console.log(this.newfeature);
       var arr= this.datax
       if (this.newfeature)
       {
      arr.push(this.newfeature)
      console.log(arr);
      this.BookerService.updatefeat(arr).subscribe(data=>{
        alert("deleted!");
      });
    }

    this.close();

    }
}