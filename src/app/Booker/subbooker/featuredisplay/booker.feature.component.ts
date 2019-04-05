import { Component, OnInit, Input } from '@angular/core';
import {MenuService} from '../../../menu/menu.service';
import {item} from '../../../menu/item';
import { MatTableDataSource, MatDialog } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {DomSanitizer} from '@angular/platform-browser';
import {BookerService} from '../../booker.service';
import {booker} from '../../booker';
import {serviceclass} from '../../serviceclass';
import {MatDialogConfig} from '@angular/material';
import {FeatureDialog} from '../featuredialog/add.feature.dialog';

@Component({
  selector: 'app-booker-display-feat',
  templateUrl: './booker.feature.component.html',
  styleUrls: ['./booker.feature.css']
})


export class DisplayFeature implements OnInit {

  selection = new SelectionModel<serviceclass>(true, []);
  
  arr:any;  

  items:item[];
  itemName: string;
  itemDescription: string;
  itemPrice: number;
  itemId:number;
  itemType:string;
  itemImage:string;
    
  servicesfeat:serviceclass[];

  features:string;
    Feat:any;

    bookers:booker[];
    roomNumber: number;
    services: string;
    createdAt: string;




    
  dataSource = new MatTableDataSource();  
  displayedColumns2: string[] = ['select', 'Feature'];
  constructor (private MenuService: MenuService, public sanitizer:DomSanitizer, private BookerService: BookerService, public dialog : MatDialog) { }

  ngOnInit()  {
    this.BookerService.getFeat().subscribe((servicesfeat)=>{
      //console.log("features" + servicesfeat[0].features);
      this.arr = servicesfeat[0].features.split(",");
      console.log(this.arr);
      this.servicesfeat=Object.values(servicesfeat);
      //console.log(this.servicesfeat);   
      this.dataSource.data=this.servicesfeat;
      })
}

openDialog(){
   
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.data =this.arr;
  this.dialog.open(FeatureDialog, dialogConfig);
}




deletefeat(item){
  this.arr.splice(this.arr.indexOf(item), 1);
  console.log("delete request " + this.arr)
  this.BookerService.updatefeat(this.arr).subscribe(data=>{
    alert("deleted!");
  })

}
  

}
