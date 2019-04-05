import { Component, OnInit, Input } from '@angular/core';
import {item} from '../../item';
import { MatTableDataSource } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { MenuService } from '../../menu.service';
import {Location} from '@angular/common';
import { Router, RouterModule } from '@angular/router';





@Component({
  selector: 'app-delete-menu',
  templateUrl: './deletemenu.html',
  styleUrls: ['../../menu.component.css']
})


export class deletemenu implements OnInit {

  selection = new SelectionModel<item>(true, []);

  

  items:item[];
  itemName: string;
  itemDescription: string;
  itemPrice: number;
  itemId:number;
  itemType:string;
  itemImage:string;
  selecteditems=[];



  dataSource = new MatTableDataSource();  
  displayedColumns: string[] = ['itemId', 'itemName', 'itemDescription', 'itemPrice','itemType','itemImage'];


  displayedColumns2: string[] = ['select','itemId', 'itemName', 'itemDescription','itemSection', 'itemPrice','itemType','itemImage'];

  //dataSource = ELEMENT_DATA;

  constructor (private MenuService: MenuService,private location: Location) { }

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
    console.log("elemt" + (this.dataSource));
    //console.log("users" + typeof(this.users[0].id) );
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }


  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.items.forEach(row => {
            this.selection.select(row);
        console.log(row);
        })
      }


    removeItem()
    {
        var indexfordelete=0
        var items=this.selection.selected;

        for(indexfordelete=0;  indexfordelete<items.length;  indexfordelete++)
        {
              this.selecteditems[indexfordelete]=items[indexfordelete].itemId;
        }
        //console.log(this.selecteditems);
        this.MenuService.deleteItem(this.selecteditems).subscribe(data=>{
          //this.Foods.push(newFood);
          alert("Your Contents added Successfully");
    
        });

        this.selection.clear();
        this.ngOnInit();
        console.log("heyy")

        this.MenuService.getMenu().subscribe((items)=>{
        //console.log(items);
        this.items=Object.values(items);
        
        this.dataSource.data=this.items;
        //console.log(this.items);
        });

        
      }
   

    }


