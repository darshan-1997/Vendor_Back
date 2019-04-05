import { Component, OnInit, Input } from '@angular/core';
import {OrderService} from '../../orders.service';
import {order} from '../../orders';
import {MatSnackBar} from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {DomSanitizer} from '@angular/platform-browser';
import { OrderDisplayBill } from '../orderbills/orderbil.component';

@Component({
  selector: 'app-order-display',
  templateUrl: './orders.display.component.html',
  styleUrls: ['../../../menu/menu.component.css']
})


export class OrderDisplay implements OnInit {

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
  displayedColumns: string[] = ['custId', 'Orderid', 'Items','Confirmation','Cancellation'];


  //dataSource = ELEMENT_DATA;

  constructor (private OrderService: OrderService, public sanitizer:DomSanitizer,private snackBar: MatSnackBar ) { }

  ngOnInit() {
    //console.log("asda");
    
  
    this.OrderService.getOrders().subscribe((orders)=>{
      //console.log(items);
      this.orders=Object.values(orders);
      
      this.dataSource.data=this.orders;
      console.log(this.orders);
      })
}  

  applyFilter(filterValue: string) {
    //console.log("elemt" + (this.dataSource));
    //console.log("users" + typeof(this.users[0].id) );
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  flagshift(item) {



    this.OrderService.GenBill(item).subscribe((orders)=>{
      //console.log(items);
      // this.orders=Object.values(orders);
      
      // this.dataSource.data=this.orders;
      // console.log(this.orders);

      //item.placed=true;
      var x=document.getElementById(item.Orderid);
      x.textContent="Confirmed";
       

     

      this.snackBar.open("Order", "Confirmed", {
            duration: 2500,
            
           });


           window.location.reload();


      });







    // const newItem={
    //   Orderid:item.Orderid


      
    // }


    // console.log(newItem);
    // var x=document.getElementById(item.Orderid);
    // //this.confirm.Orderid=item.Orderid;
    // //console.log(item.Orderid);
     this.OrderService.confirmOrder(item).subscribe((data)=>{

           item.placed=true;
           
    //  

    //   window.location.reload();

    //   //this.clicked=true;
      });
    
  }
  cancelshift(item){
    

    console.log(item);
    var delId
    delId=item.Orderid;
    //console.log(this.selecteditems);
    this.OrderService.cancelOrd(delId).subscribe(data=>{
      //this.Foods.push(newFood);
      alert("Your Contents del Successfully");
      const index = this.orders.indexOf(delId, 0);
      if (index > -1) {
         this.orders.splice(index, 1);
      }
      
    this.dataSource.data=this.orders;
    
    });

    this.selection.clear();
    this.ngOnInit();
    console.log("heyy");

    this.OrderService.getOrders().subscribe((items)=>{
    //console.log(items);
    this.orders=Object.values(items);
    
    this.dataSource.data=this.orders;
    //console.log(this.items);
    });

    
  }




  }




