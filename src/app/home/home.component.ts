import { Component, OnInit } from '@angular/core';
import { Personne } from './Personne';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employe = ["khalid" , "yassine"];

  personne:Personne;
  personnes:Personne[];

  prenom:string="zakaria";
  voirPrenom:boolean=true;
  nombre:number=0;
  imageUrl="https://via.placeholder.com/150";
  valide:boolean=false;

  constructor() { 
    this.personnes=[
      {id : 1,nom: "azarwal",prenom:"anass"},
      {id : 2,nom: "bouri",prenom:"mastafa"},
      {id : 3,nom: "toumi",prenom:"zakaria"}
    ]
   }

  ngOnInit() {
  }

}
