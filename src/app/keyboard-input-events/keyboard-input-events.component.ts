import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard-input-events',
  templateUrl: './keyboard-input-events.component.html',
  styleUrls: ['./keyboard-input-events.component.css']
})
export class KeyboardInputEventsComponent implements OnInit {

  text:string="zakaria";

  fancEvent(e){
   console.log(e.type); 
  }

  changeText(e){
    this.text = e.target.value;
  }

  constructor() { }

  ngOnInit() {
  }

}
