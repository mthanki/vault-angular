import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  message: string | undefined;
  closeBtnName: string | undefined;
  confirmBtnName: string | undefined;

  public onClose = new Subject();
  constructor(public modalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  confirm(): void {
    this.message = 'Confirmed!';
    this.onClose.next(true);
    this.modalRef.hide();
  }

  decline(): void {
    this.message = 'Declined!';
    this.onClose.next(false);
    this.modalRef.hide();
  }

}
