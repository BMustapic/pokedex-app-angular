import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  IPokeApiPokemon,
  IPokeApiResult,
  IPokeCard,
  IPokemon,
  IPokemonSpecies,
} from '../models/poke-api';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  constructor(private http: HttpClient) {}

  public async getAllPokemon(
    limit: number,
    offset: number
  ): Promise<IPokeApiResult> {
    return await this.http
      .get<IPokeApiResult>(
        `${environment.pokeApiURL}/pokemon?limit=${limit}&offset=${offset}`
      )
      .toPromise();
  }

  public async getPokemonMapped(
    limit: number,
    offset: number
  ): Promise<IPokeCard[]> {
    const result = await this.getAllPokemon(limit, offset);
    return result.results.map((mon, index) => ({
      name: mon.name,
      id: offset + index + 1,
      image: `${environment.pokeApiSpritesURL}/${
        offset + index + 1
      }.png`,
    }));
  }

  public async getPokemon(id: number): Promise<IPokemon> {
    return await this.http
      .get<IPokemon>(`${environment.pokeApiURL}/pokemon/${id}`)
      .toPromise();
  }

  public async getPokemonSpecies(
    id: number
  ): Promise<{ varieties: IPokemonSpecies[] }> {
    return await this.http
      .get<{ varieties: IPokemonSpecies[] }>(
        `${environment.pokeApiURL}/pokemon-species/${id}`
      )
      .toPromise();
  }

  public async getPokemonByUrl(url: string): Promise<IPokemon> {
    return await this.http.get<IPokemon>(url).toPromise();
  }
}
