import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  constructor() { }
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

    getAppareils(){
      return this.appareils;
    }

    switchOnAll(){
      this.appareils.forEach(appareil => {
        appareil.status = "allumé"
      });
    }

    switchOffAll(){
      this.appareils.forEach(appareil => {
        appareil.status = "éteint"
      });
    }
}
