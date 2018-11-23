import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changing-properties-with-events',
  templateUrl: './changing-properties-with-events.component.html',
  styleUrls: ['./changing-properties-with-events.component.css']
})
export class ChangingPropertiesWithEventsComponent implements OnInit {

  text:string = "bonjour";
  value:boolean = true;

  constructor() { }

  changeMot(){
    //this.text="bonsoir";
    //this.value=false;
    this.value=!this.value;
  }

  ngOnInit() {
  }

}
