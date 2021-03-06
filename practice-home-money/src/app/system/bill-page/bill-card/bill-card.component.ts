import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Bill} from '../../shared/models/bill.model';

@Component({
  selector: 'pr-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

  @Input() currency: any;
  @Input() bill: Bill;

  dollar: number;
  euro: number;

  constructor() { }

  ngOnInit() {
    const  {rates} = this.currency;
    this.dollar = rates['USD'] * this.bill.value;
    this.euro = rates['EUR'] * this.bill.value;
    console.log(this.currency);
  }

}
