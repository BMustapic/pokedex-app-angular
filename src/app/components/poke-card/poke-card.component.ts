import { Component, Input } from '@angular/core';
import { IPokeCard } from 'src/app/models/poke-api';

@Component({
  selector: 'poke-app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss'],
})
export class PokeCardComponent {
  @Input() pokemon!: IPokeCard;

  constructor() {}
}
