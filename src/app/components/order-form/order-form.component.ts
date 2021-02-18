import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderInfoService } from 'src/app/services/order-info.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  constructor(private router: Router, private orderInfo: OrderInfoService) { }

  ngOnInit(): void {
  }
  finalOrder(lense: object): void{
    this.orderInfo.orderInfo.lense = lense
    this.router.navigate(["/final"])
  }

}
