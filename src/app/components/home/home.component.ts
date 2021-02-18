import { Component, OnInit } from '@angular/core';
import { Glasses } from 'src/app/models/glasses';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  glassesList: Glasses[];

  constructor() {
    this.glassesList = [
      {pic: "assets/1.jfif", name: "Modern", des: "This glasses will make you look modern", isbn: 1},
      {pic: "assets/2.jfif", name: "Old fashion", des: "For the retro lovers", isbn: 2},
      {pic: "assets/3.jfif", name: "Butifall", des: "Evreyone wald say your butifall", isbn: 3},
      {pic: "assets/3.png", name: "Stylish", des: "Enjoy a stylish look", isbn: 4},
      {pic: "assets/4.png", name: "Standerd", des: "If you just want to look standerd", isbn: 5}
    ]
   }

  ngOnInit(): void {
  }

}
