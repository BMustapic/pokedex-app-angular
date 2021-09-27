import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PokeDetailsComponent } from './components/poke-details/poke-details.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';

const routes: Routes = [
  { path: '', component: PokedexComponent },
  { path: 'pokemon', pathMatch: 'full', redirectTo: '/'},
  {path : 'pokemon/:id', component: PokeDetailsComponent},
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
