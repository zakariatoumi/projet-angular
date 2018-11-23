import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  nom:string = "";
  prenom:string = "";

  users:string[] = ["zakaria","khalid","yassine"];

  submit(){
    //console.log(this.prenom);
    this.users.push(this.nom);
  }

  users1 = {
    nom : '',
    prenom : '',
    phone : '',
    email : ''
  }

  constructor() { }

  ngOnInit() {
  }

}
