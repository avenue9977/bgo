import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.css']
})
export class MainWrapperComponent implements OnInit {

  @ViewChild('sidenav') public sidenav;
  constructor() {}

  ngOnInit() {
  }

  openNav() {
    this.sidenav.open();
  }
}
