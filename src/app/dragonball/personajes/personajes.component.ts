import { Component, Input, OnInit } from '@angular/core';
import { DragonBallService } from '../services/dragonball.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  // @Input() personajes: Personaje[] = [];

  get personajes() {
    return this.dragonBallService.personajes;
  }

  constructor( private dragonBallService: DragonBallService ){

  }
}
