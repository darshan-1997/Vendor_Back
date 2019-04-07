import { Component, OnInit, Input } from '@angular/core';
import {OrderService} from '../../orders.service';
import {order} from '../../orders';
import {MatSnackBar} from '@angular/material';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {DomSanitizer} from '@angular/platform-browser';
import {KitchenService} from '../../../kitchen/kitchen.service'
import {BillDialog} from './billdialog/dialog.component';

@Component({
  selector: 'app-order-bill-display',
  templateUrl: './orderbill.component.html',
  styleUrls: ['../../../menu/menu.component.css']
})


export class OrderDisplayBill implements OnInit {

  selection = new SelectionModel<order>(true, []);

  

  orders:order[];
  confirm:order;
  listItem:[];
  custId:String;
  Orderid:String; 
  totalIncTax:Number;
  tax:Number;
  paid:Boolean;
  createdAt:Date;
  updatedAt:Date;
 // clicked=false;


  dataSource = new MatTableDataSource();  
  displayedColumns: string[] = ['custId', 'Orderid', 'Items','qty','Bill'];


  //dataSource = ELEMENT_DATA;

  constructor (private OrderService: OrderService,private KitchenService: KitchenService, public sanitizer:DomSanitizer,private snackBar: MatSnackBar, public dialog : MatDialog) { }

  ngOnInit() {
    //console.log("asda");
    
  
    this.KitchenService.getConfOrders().subscribe((orders)=>{
      //console.log(items);
      this.orders=Object.values(orders);
      
      this.dataSource.data=this.orders;
      console.log(this.orders);
      });
}  

  applyFilter(filterValue: string) {
    //console.log("elemt" + (this.dataSource));
    //console.log("users" + typeof(this.users[0].id) );
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
  cancelshift(item){
    

    console.log(item);
    var delId
    delId=item.Orderid;
    //console.log(this.selecteditems);
    this.OrderService.cancelOrd(delId).subscribe(data=>{
      //this.Foods.push(newFood);
      //alert("Your Contents del Successfully");
      const index = this.orders.indexOf(delId, 0);
      if (index > -1) {
         this.orders.splice(index, 1);
      }
      
      this.KitchenService.getConfOrders().subscribe((orders)=>{
        //console.log(items);
        this.orders=Object.values(orders);
        
        this.dataSource.data=this.orders;
        console.log(this.orders);
        });
    //this.dataSource.data=this.orders;
    });

    // this.selection.clear();
    // this.ngOnInit();
    // console.log("heyy")

    
 
    

    
  }

  openDialog(row){
    // console.log(row);
   
     const dialogConfig = new MatDialogConfig();
 
     dialogConfig.disableClose = true;
     dialogConfig.autoFocus = true;
     
     dialogConfig.data =row;
 
     this.dialog.open(BillDialog, dialogConfig);
   }
 
  



  }




