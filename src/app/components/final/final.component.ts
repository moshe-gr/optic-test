import { Component, OnInit } from '@angular/core';
import { OrderInfoService } from 'src/app/services/order-info.service';
import { OrderInfoModel } from 'src/app/models/order-info-model';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  final: OrderInfoModel;

  constructor(private orderInfo: OrderInfoService) { 
    this.final = {
      isbn: null,
      pic: null,
      type: null,
      lense: {
        r: null,
        l: null,
        lc: null,
        rc: null
      }
    }
  }

  ngOnInit(): void {
    this.final = {
      isbn: JSON.parse(window.localStorage.getItem('glasses')).isbn,
      pic: JSON.parse(window.localStorage.getItem('glasses')).pic,
      type: window.localStorage.getItem('type'),
      lense: {
        r: JSON.parse(window.localStorage.getItem('lense')).r,
        l: JSON.parse(window.localStorage.getItem('lense')).l,
        lc: JSON.parse(window.localStorage.getItem('lense')).lc,
        rc: JSON.parse(window.localStorage.getItem('lense')).rc
      }
    }
    // this.final = this.orderInfo.orderInfo;
  }

}
