import { Component, OnInit, Input, Injectable } from '@angular/core';
import {item} from '../../item';
import { MatTableDataSource } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { MenuService } from '../../menu.service';
import {Location} from '@angular/common';
import {MatDialog} from '@angular/material'
import { MatDialogConfig} from "@angular/material";
import { dialogdata } from '../updatedialog/dialog.component';





@Component({
  selector: 'update',
  templateUrl: './update.html',
  styleUrls: ['../../menu.component.css']
})




export class update implements OnInit {

  selection = new SelectionModel<item>(true, []);

  

  items:item[];
  itemName: string;
  itemDescription: string;
  itemPrice: number;
  itemId:number;
  itemType:string;
  itemImage:string;
  selecteditems=[];
  itemSection:String;



  dataSource = new MatTableDataSource();  
  displayedColumns: string[] = ['itemId', 'itemName', 'itemDescription', 'itemPrice','itemType','itemImage'];


  displayedColumns2: string[] = ['itemId', 'itemName', 'itemDescription','itemSection', 'itemPrice','itemType','itemImage','select'];

  //dataSource = ELEMENT_DATA;

  constructor (private MenuService: MenuService,private location: Location, public dialog : MatDialog) { }

  ngOnInit() {
    //console.log("asda");
    
  
    this.MenuService.getMenu().subscribe((items)=>{
      //console.log(items);
      this.items=Object.values(items);
      
      this.dataSource.data=this.items;
      });
    }

    
 

  openDialog(row){
   // console.log(row);
  
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    
    dialogConfig.data =row;

    this.dialog.open(dialogdata, dialogConfig);
  }

}



