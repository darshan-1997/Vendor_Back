import { Component, OnInit, Input } from '@angular/core';
import {MenuService} from '../../menu.service';
import {item} from '../../item';
import { MatTableDataSource } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-menu-display',
  templateUrl: './menudisplay.html',
  styleUrls: ['../../menu.component.css']
})


export class menudisplay implements OnInit {

  selection = new SelectionModel<item>(true, []);

  

  items:item[];
  itemName: string;
  itemDescription: string;
  itemPrice: number;
  itemId:number;
  itemType:string;
  itemImage:string;
  itemSection:String;


  dataSource = new MatTableDataSource();  
  displayedColumns: string[] = ['itemId', 'itemName', 'itemDescription','itemSection','itemPrice','itemType','itemImage'];


  //dataSource = ELEMENT_DATA;

  constructor (private MenuService: MenuService, public sanitizer:DomSanitizer) { }

  ngOnInit() {
    //console.log("asda");
    
  
    this.MenuService.getMenu().subscribe((items)=>{
      //console.log(items);
      this.items=Object.values(items);
      
      this.dataSource.data=this.items;
      console.log(this.items);
      });
      // this.MenuService.wrapData().subscribe(data=>{
      //   console.log("wrapped");
      // })
}  

  applyFilter(filterValue: string) {
    //console.log("elemt" + (this.dataSource));
    //console.log("users" + typeof(this.users[0].id) );
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


