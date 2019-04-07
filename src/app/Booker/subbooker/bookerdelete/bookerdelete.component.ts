import { Component, OnInit, Input } from '@angular/core';
import {booker} from '../../booker';
import { MatTableDataSource } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { MenuService } from '../../../menu/menu.service';
import {Location} from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import {BookerService} from '../../booker.service';
@Component({
  selector: 'app-delete-booker',
  templateUrl: './bookerdelete.component.html',
  styleUrls: ['../../booker.display.css']
})
export class DeleteBooker implements OnInit {
  selection = new SelectionModel<booker>(true, []);
  selecteditems=[];
    bookers:booker[];
    roomNumber:number;
    service:string;
    createdAt:string;
  dataSource = new MatTableDataSource();  
  displayedColumns2: string[] = ['select','roomNumber', 'Service', 'createdAt'];
  constructor (private MenuService: MenuService,private location: Location, private BookerService : BookerService) { }

  ngOnInit() {
    this.BookerService.getReq().subscribe((bookers)=>{
      this.bookers=Object.values(bookers);      
      this.dataSource.data=this.bookers;
      console.log(this.bookers);
      });
}  
  applyFilter(filterValue: string) {
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
        this.bookers.forEach(row => {
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
              this.selecteditems[indexfordelete]=items[indexfordelete].roomNumber;
        }
         this.BookerService.deleteService(this.selecteditems).subscribe(data=>{
          
          alert("Your Content deleted Successfully");
          
      window.location.reload();
    
        });

        this.selection.clear();
        this.ngOnInit();
        console.log("heyy")

        this.BookerService.getReq().subscribe((bookers)=>{
        //console.log(items);
        this.bookers=Object.values(bookers);
        
        this.dataSource.data=this.bookers;
        //console.log(this.items);
        }); 
      }
    }


