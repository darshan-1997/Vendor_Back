import { Component, OnInit, Input } from '@angular/core';
import {MenuService} from '../../../menu/menu.service';
import {item} from '../../../menu/item';
import { MatTableDataSource } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {DomSanitizer} from '@angular/platform-browser';
import {BookerService} from '../../booker.service';
import {booker} from '../../booker';

@Component({
  selector: 'app-booker-display',
  templateUrl: './bookerdisplay.component.html',
  styleUrls: ['../../booker.display.css']
})


export class bookerdisplay implements OnInit {

  selection = new SelectionModel<item>(true, []);

  

  items:item[];
  itemName: string;
  itemDescription: string;
  itemPrice: number;
  itemId:number;
  itemType:string;
  itemImage:string;

    bookers:booker[];
    roomNumber: number;
    services: string;
    createdAt: string;

  dataSource = new MatTableDataSource();  
  displayedColumns: string[] = ['roomNumber', 'Service', 'createdAt'];
  constructor (private MenuService: MenuService, public sanitizer:DomSanitizer, private BookerService: BookerService) { }

  ngOnInit() {
    this.BookerService.getReq().subscribe((bookers)=>{

      this.bookers=Object.values(bookers);   
      this.dataSource.data=this.bookers;
      })
}  

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } 
}