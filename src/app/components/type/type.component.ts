import { Component, OnInit } from '@angular/core';
import { OrderInfoService } from 'src/app/services/order-info.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  constructor(private orderInfo: OrderInfoService) { }

  ngOnInit(): void {
  }
  confirm(type: string): void{
    this.orderInfo.orderInfo.type = type
  }

}
