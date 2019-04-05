import { Component, OnInit, Input, Injectable } from '@angular/core';
//import { item } from '../item';
import {booker} from '../../booker';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
//import { MenuService } from '../menu.service';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material'
import { MatDialogConfig} from "@angular/material";
import { dialogdata2 } from '../bookerdialog/booker.dialog.component';
import { BookerService } from '../../booker.service';

@Component({
  selector: 'app-update-booker',
  templateUrl: './booker.update.html',
  styleUrls: ['../../booker.display.css']
})

export class BookerUpdate implements OnInit {

  selection = new SelectionModel<booker>(true, []);

  bookers:booker[];
   
  roomNumber:number;
  service:string;
  createdAt:string;

 
  selecteditems=[];

  dataSource = new MatTableDataSource();  
  displayedColumns2: string[] = ['roomNumber', 'service', 'createdAt', 'select'];

  
  constructor (private BookerService: BookerService,private location: Location, public dialog : MatDialog) { }

  ngOnInit() {
    
    
    this.BookerService.getReq().subscribe((bookers)=>{
      this.bookers=Object.values(bookers);
      
      this.dataSource.data=this.bookers;
      });
    }
  
    openDialog(row){
   
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data =row;
    this.dialog.open(dialogdata2, dialogConfig);
  }

}