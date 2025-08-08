import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionService } from '../../services/inscripcion.service';
import type { Inscripcion } from '../../models/inscripciones.model';

@Component({
  selector: 'app-resumen-inscripcion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resumen-inscripcion.html',
  styleUrls: ['./resumen-inscripcion.css']
})
export class ResumenInscripcionComponent implements OnInit {
  inscripcion: Inscripcion | undefined;

  constructor(private inscripcionService: InscripcionService) { }

  ngOnInit(): void {
    this.inscripcion = this.inscripcionService.obtenerInscripcion('inscripcion-001');
  }

  completarInscripcion() {
    if (this.inscripcion) {
      alert('Inscripción completada exitosamente! Enviando comprobante de pago...');
    }
  }
}