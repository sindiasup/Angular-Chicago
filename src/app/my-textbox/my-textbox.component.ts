import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-textbox',
  templateUrl: './my-textbox.component.html',
  styleUrls: ['./my-textbox.component.css']
})
export class MyTextboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = ''

  onClick() {
    window.alert("Clicked")
  }

  onMouseLeave() {
    this.name = 'Mouse Leave'
  }

  onMouseEnter() {
    this.name = 'Mouse Enter'
  }
}
