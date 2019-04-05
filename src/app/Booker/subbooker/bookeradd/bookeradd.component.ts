import { Component, OnInit, Input } from '@angular/core';
import {booker} from '../../booker';
import { BookerService } from '../../booker.service';
@Component({
  selector: 'app-booker-add',
  templateUrl: './bookeradd.component.html',
  styleUrls: ['../../booker.display.css']
})
export class AddBooker {
  bookers:booker[];  
  roomNumber:number;
  service:string;
  createdAt:string;

  constructor (private BookerService: BookerService) { }
  AddService()
  {
    const newBooker={      
    roomNumber:this.roomNumber,
    service:this.service,
    createdAt:this.createdAt,
    }
    var x=this.BookerService.addService(newBooker).subscribe(val=>{
  
      alert("Your Contents added Successfully");
      
      window.location.reload();
    });
  }

}
