import { Component, OnInit, EventEmitter } from '@angular/core';
import { Doctor } from 'src/app/models/doctormodel';
import { SharedService } from 'src/app/services/shared.service';
import { map } from 'rxjs/operators'
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private service:SharedService) { }

  doclist: any = [];

  selectedMessage:any;



  ngOnInit(): void {
    // console.log("selected message before showdoclist(): " + this.selectedMessage); 
    this.getmessage();
    // console.log("selected message after showdoclist(): " + this.selectedMessage);
    // console.log("this.doclist: " + this.doclist)
}

  getmessage() {
    // console.log("getmessage() called.")
    this.service.currentMessage.subscribe(message => (this.selectedMessage= message));
    // console.log("this.service.currentMessage.subscribe called.");
    // console.log("this.selectedMessage: " + this.selectedMessage);
    this.showdoclist();
  }

  showdoclist() {
    // console.log("showdoclist() called.")
    
    this.service.getDocList(this.selectedMessage).subscribe((data:{}) => {

      // console.log("this.selectedMessage: " + this.selectedMessage + " data: " + data);
      this.doclist = data;

    }  )

    

  }
}