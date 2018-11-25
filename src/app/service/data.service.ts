import { Injectable } from '@angular/core';
import { Question } from '../module/Question';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users:string[];
  questions:Question[];

  constructor() {
    this.users = ['Bouchaib','khalid','yassine'];

    this.questions = [
      {
        text:'comment tu appelle ?',
        reponse:'je mappelle zakaria',
        hide:true
      },
      {
        text:'est ce que realise erreur ?',
        reponse:'oui je suis realise erreur',
        hide:false
      }
    ];
  
   }

   getUsers(){
     return this.users;
   }

   getQuestion(){
     return this.questions;
   }
}
