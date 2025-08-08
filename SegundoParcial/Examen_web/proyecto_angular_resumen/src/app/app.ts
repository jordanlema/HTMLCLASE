import { Component } from '@angular/core';
import { ResumenInscripcionComponent } from '../app/components/resumen-inscripcion/resumen-inscripcion';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ResumenInscripcionComponent], // RouterOutlet ha sido eliminado
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'proyecto_angular_resumen';
}
