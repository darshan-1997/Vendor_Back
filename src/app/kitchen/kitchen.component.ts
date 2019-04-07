import { Component, OnInit, Input } from '@angular/core';
import { KitchenService } from './kitchen.service';
import {MatTableDataSource} from '@angular/material';

import {SelectionModel} from '@angular/cdk/collections';
//import {OrderService} from '../orders.service';
//import {order} from '../orders';

@Component({
  selector: 'app-kitchen-display',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./../menu/menu.component.css']
})

export class KitchenApp {
  

    selection = new SelectionModel<any>(true, []);

  selecteditems=[];



    dataSource = new MatTableDataSource();  
    displayedColumns: string[] = ['custId', 'Orderid', 'Items','Cancellation','Bill'];

caught :any;
  constructor (private KitchenService: KitchenService) { }


  ngOnInit() {
    //console.log("asda");
    
  
    this.KitchenService.kitchenorder().subscribe((items)=>{
      //console.log(items);
      this.caught=Object.values(items);
      
      this.dataSource.data=this.caught;
      console.log(this.caught);
      });
      // this.MenuService.wrapData().subscribe(data=>{
      //   console.log("wrapped");
      // })
} 

cancelshift(item)
    {

        console.log(item);
        var delId
        delId=item.Orderid;
        //console.log(this.selecteditems);
        this.KitchenService.cancelOrd(delId).subscribe(data=>{
          //this.Foods.push(newFood);
          alert("Your Contents del Successfully");
          const index = this.caught.indexOf(delId, 0);
          if (index > -1) {
             this.caught.splice(index, 1);
          }
          
        this.dataSource.data=this.caught;
        
        });

        this.selection.clear();
        this.ngOnInit();
        console.log("heyy")

        this.KitchenService.getConfOrders().subscribe((items)=>{
        //console.log(items);
        this.caught=Object.values(items);
        
        this.dataSource.data=this.caught;
        //console.log(this.items);
        });

        
      }
   


    
  }


