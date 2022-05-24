import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dragonball.interface';
import { DragonBallService } from '../services/dragonball.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent  {

  @Input() nuevo : Personaje = {
      nombre: '',
      poder: 0
  }

  constructor(private dragonBallService: DragonBallService) { }

  agregar( ) {
    if(this.nuevo.nombre.trim().length === 0) { return; }

    this.dragonBallService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    };
  }
}
