import { Component, Directive, Input, OnInit } from '@angular/core';
import { IPokeCard } from 'src/app/models/poke-api';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'poke-app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss'],
})
export class PokeCardComponent implements OnInit {
  @Input('pokemon') pokemon!: IPokeCard;

  constructor() {}

  ngOnInit() {}
}
