import { Component, OnInit, Input } from '@angular/core';
import { Glasses } from 'src/app/models/glasses';
import { OrderInfoService } from 'src/app/services/order-info.service';

@Component({
  selector: 'app-glasses',
  templateUrl: './glasses.component.html',
  styleUrls: ['./glasses.component.css']
})
export class GlassesComponent implements OnInit {

  @Input() glasses: Glasses;

  constructor(private orderInfo: OrderInfoService) { }

  ngOnInit(): void {
  }
  confirm(): void{
    this.orderInfo.orderInfo.isbn = this.glasses.isbn;
    this.orderInfo.orderInfo.pic = this.glasses.pic;
  }

}