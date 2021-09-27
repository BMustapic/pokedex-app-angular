import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPokeCard } from 'src/app/models/poke-api';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'poke-app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  pokemon: IPokeCard[] = [];

  currentGenerationSubject = new BehaviorSubject<number>(1);
  currentGeneration = 1;
  searchTerm = '';

  filteredPokemon: IPokeCard[] = [];

  constructor(private pokeApiService: PokeApiService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.pokemon = await this.pokeApiService.getPokemonMapped(151, 0);

      this.filteredPokemon = [...this.pokemon];
    } catch (error) {
      console.error('Error occured while fetching Pokemon', error);
    }

    this.currentGenerationSubject.subscribe(
      async (gen) => {
        this.currentGeneration = gen;
        await this.updateGeneration();
      },
      (error) => {
        console.error('Error updating generation', error);
      }
    );
  }

  onSearchChange = (value: string) => {
    if (value) {
      this.filteredPokemon = this.pokemon.filter((mon) =>
        mon.name.includes(value)
      );
    } else {
      this.filteredPokemon = [...this.pokemon];
    }
  };

  arabicToRomanNumeral = (num: number) => {
    switch (num) {
      case 1:
        return 'I';
      case 2:
        return 'II';
      case 3:
        return 'III';
      case 4:
        return 'IV';
      case 5:
        return 'V';
      default:
        return null;
    }
  };

  previousGeneration = () => {
    this.currentGenerationSubject.next(this.currentGeneration - 1);
  };

  nextGeneration = () => {
    this.currentGenerationSubject.next(this.currentGeneration + 1);
  };

  updateGeneration = async () => {
    if (this.currentGeneration === 5) {
      this.pokemon = await this.pokeApiService.getPokemonMapped(155, 494);
    }

    if (this.currentGeneration === 4) {
      this.pokemon = await this.pokeApiService.getPokemonMapped(108, 386);
    }

    if (this.currentGeneration === 3) {
      this.pokemon = await this.pokeApiService.getPokemonMapped(135, 251);
    }

    if (this.currentGeneration === 2) {
      this.pokemon = await this.pokeApiService.getPokemonMapped(100, 151);
    }

    if (this.currentGeneration === 1) {
      this.pokemon = await this.pokeApiService.getPokemonMapped(151, 0);
    }

    this.filteredPokemon = [...this.pokemon];
  };
}
