import { Component } from '@angular/core';
import { TopbarComponent } from '../topbar/topbar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MatCard, MatCardModule } from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopbarComponent, AboutMeComponent, MatCardModule, MatProgressBarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pesoInicial = 84;
  pesoObjetivo = 73;
  pesoActual = 80.9;
  grasaCorporalInicial = 23;
  grasaCorporalObjetivo = 15;
  grasaCorporalActual = 21.9;
  grasaVisceralInicial = 13;
  grasaVisceralObjetivo = 8;
  grasaVisceralActual = 12;

  calcularPorcentajeAvance(pesoInicial: number, pesoActual: number, pesoObjetivo: number): any {
    if (pesoInicial === pesoObjetivo) {
      return 100;
    }
    let porcentajeAvance: number;
    porcentajeAvance = ((pesoInicial - pesoActual) / (pesoInicial - pesoObjetivo)) * 100;  
    return porcentajeAvance.toFixed(2);
  }

  projects = [
    { name: "Project 1: Fanfics", 
      description: "Here we are going to have the progress about all my fanfics so you can always see what I'm doing.", 
      subProjects: [
        {name: "Writing: Teach me to love again: Chapter 5", progress: 50},
        {name: "Editing: Leave: Chapter 1", progress: 0},
        {name: "Editing: A kitten for the 141", progress: 0},
        {name: "Rewriting: Power imbalances in love", progress: 0},
        {name: "Editing: Promise to mama Mactavish", progress: 0},
        {name: "Editing: I'll be there for you", progress: 0}
      ]
    },
    { name: "Project 2: Sea of darkness", 
      description: "Secret project to be revealed at the end of the year.", 
      subProjects: [
        {name: "Shards of chaos", progress: 5}
      ]
    },
    { name: "Project 3: True Polymorph", 
      description: "Secret project to be revealed at the end of the year.", 
      subProjects: [
        {name: "P", progress: this.calcularPorcentajeAvance(this.pesoInicial, this.pesoActual, this.pesoObjetivo)},
        {name: "GC", progress: this.calcularPorcentajeAvance(this.grasaCorporalInicial, this.grasaCorporalActual, this.grasaCorporalObjetivo)},
        {name: "GA", progress: this.calcularPorcentajeAvance(this.grasaVisceralInicial, this.grasaVisceralActual, this.grasaVisceralObjetivo)}
      ]
    },
    { name: "Project 4: Comprehend reality", 
      description: "Secret project to be revealed at the end of the year.", 
      subProjects: [
        {name: "F", progress: 0},
        {name: "C", progress: 0}
      ]
    },
    { name: "Project 5: Expanding horizons", 
      description: "Secret project to be revealed at the end of the year.", 
      subProjects: [
        {name: "V", progress: 0}
      ]
    }
    
  ]
}
