import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-date',
  templateUrl: './test-date.component.html',
  styleUrls: ['./test-date.component.css']
})
export class TestDateComponent implements OnInit {

  dateAujourdhuit = new Date(2018, 23, 11);
  total = 800;
  fee = 0.5;

  constructor() { }

  ngOnInit() {
  }

}
