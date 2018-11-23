import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  preEvent(e,greeting){
    //console.log("Bonjour");
    //console.log(greeting);
    //console.log(e.target.id);
    //alert(e.target.id);
    console.log(e.type);
  }

  constructor() { }

  ngOnInit() {
  }

}
