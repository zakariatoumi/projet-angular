import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  isSpecial=true;
  canSave=true;
  currentStyles = {};

  constructor() { 
    this.setcurrentStyles();
   }

  setcurrentStyles(){
    this.currentStyles={
      'font-style' : this.canSave ? 'italic' : 'normal',
      'font-size' : this.isSpecial ? '30px' : '10px'
    }
  }

  ngOnInit() {
  }

}
