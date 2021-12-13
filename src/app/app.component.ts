import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appareilsMenagers';
  isAuth = true;
  appareils = [
    {
      name: "Machine à laver",
      status: "éteint"
    },
    {
      name: "Frigo",
      status: "allumé"
    },
    {
      name: "Ordinateur",
      status: "éteint"
    }
  ]

  constructor() { 
    
  }

  onAllumer(){
    console.log("On allume tout !");
  }
}
