import { Component, OnInit, Input } from '@angular/core';
import {item} from '../item';
import {MenuService} from '../menu.service';;
//import {ContactService} from 

@Component({
  selector: 'app-add-single',
  templateUrl: './addsingle.html',
  styleUrls: ['../menu.component.css']
})


export class addsingle {
  items:item[];
  itemName: string;
  itemDescription: string;
  itemPrice: number;
  itemId:number;
  itemType:string;
  itemImage:File;
  //itemImagename:string;
  constructor (private MenuService: MenuService) { }

  
 
  addMenuCard()
  {
    const newItem={
      itemName: this.itemName,
      itemDescription: this.itemDescription,
      itemPrice:this.itemPrice,
      itemType:this.itemType,
      itemId:this.itemId,
      itemImagename:"G:/Transil/client/uploads/",

    }

      if(!(this.itemImage==undefined))
      {
    newItem.itemImagename=newItem.itemImagename+this.itemImage.name;
    this.MenuService.addImage(this.itemImage).subscribe(data=>{
      //this.Foods.push(newFood);
      //alert("Your Image Added Successfully");

    });
  }
  else{
    console.log("test");
    newItem.itemImagename='https://i.pinimg.com/564x/33/04/e3/3304e35f47f81180e8c8b896b5d57332.jpg?b=t'; 
  
  }

      
  //console.log(newItem.itemImagename + " " + " bobby 23232323232 ");
  
    this.MenuService.addContents(newItem).subscribe(data=>{
      //this.Foods.push(newFood);
      alert("Your Contents added Successfully");

    });
  }

  onSelectFile(event){
    this.itemImage=<File>event.target.files[0];
  }
}

