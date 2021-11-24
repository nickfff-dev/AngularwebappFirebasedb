import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public admin = false;
  public owner = false;
  public renter = false;


  constructor() { }

  ngOnInit(): void {
  this.admin = false;
  this.owner = false;
  }

}
