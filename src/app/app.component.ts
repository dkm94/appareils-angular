import { Component } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //variables de classe
  title = 'appareilsMenagers';
  isAuth = true;
  appareils = [] as any; 

  constructor(private AppareilService : AppareilService) { 
    this.AppareilService = AppareilService;
  }
  
  onAllumer(){
    console.log("On allume tout !");
    this.AppareilService.switchOnAll();
    console.log(this.AppareilService.appareils)
  }

  onEteindre(){
    console.log("On éteint tout !");
    this.AppareilService.switchOffAll();
    console.log(this.AppareilService.appareils)
  }

  ngOnInit(){
    this.AppareilService.getAppareils();
  }
}
