import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./componentes/navbar/navbar.component";
import {HomeComponent} from "./pages/home/home.component";
import {ObrasComponent} from "./pages/obras/obras.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent, ObrasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PrimerProyecto';
}
