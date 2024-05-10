import { Component, ElementRef, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrl: './exercice1.component.scss'
})
export class Exercice1Component {
  valeur:string = "Entrer le texte";
  content:string ="";
  statusClass = 'black';
  constructor() {
    setTimeout(()  => {
      this.valeur = "surprise";
    }, 3000);
  }
  changeClass() {
    switch(this.statusClass) {
      case "black":
        this.statusClass = "red";
        break;
      case "red":
        this.statusClass = "green";
        break;
      case "green":
        this.statusClass = "black";
        break;
    }
  }
}
