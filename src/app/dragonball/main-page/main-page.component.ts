import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dragonball.interface';
import { DragonBallService } from '../services/dragonball.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent  {

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 5000
  }

  constructor() {
  }
}
