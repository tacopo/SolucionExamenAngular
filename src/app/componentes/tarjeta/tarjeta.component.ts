import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.scss'
})
export class TarjetaComponent {
  @Input() rutaImagen?:string;
  @Input() nombreObra?:string;
}
