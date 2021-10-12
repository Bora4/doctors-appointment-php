import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, NgForm, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  specialty = new FormControl('');
  closeResult = '';
  constructor(private modalService: NgbModal, private service:SharedService) {}

  ngOnInit(): void {

    
  }

  getformvalue() {

    // console.log("getformvalue() called.")
    this.service.changeMessage(this.specialty.value);
    // console.log("getformvalue() done.")
    this.modalService.dismissAll();
    


    // this.formValue = this.formbuilder.group({
      
      
    // })

    // this.message = this.formValue.value;
    // this.service.changeMessage(this.message);

  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
