import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokeDetailsComponent } from './components/poke-details/poke-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, AboutComponent, NavbarComponent, PokeCardComponent, PokedexComponent, PokeDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
