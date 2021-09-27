import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IPokemon,
  IPokemonSpecies,
} from 'src/app/models/poke-api';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'poke-app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.scss'],
})
export class PokeDetailsComponent implements OnInit {
  id: string = '';

  public varieties: IPokemon[] = [];

  constructor(
    private route: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  async ngOnInit(): Promise<void> {
    try {
      const varieties = (await this.pokeApiService.getPokemonSpecies(+this.id))
        .varieties;

      varieties.forEach(async (variety: IPokemonSpecies): Promise<void> => {
        this.varieties.push(
          await this.pokeApiService.getPokemonByUrl(variety.pokemon.url)
        );
      });
    } catch (error) {
      console.error('Error fetching Pokemon Species', error);
    }
  }

  public getTypes = (types: { type: { name: string } }[]) =>
    types
      .map((t) => t.type.name)
      .join('-')
      .toUpperCase();
}
