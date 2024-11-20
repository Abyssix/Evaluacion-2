import { Component, OnInit, inject } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Asistencia } from 'src/app/models/asistencia.model';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage implements OnInit {
  firebaseSvc = inject(FirebaseService);
  asistencias: Asistencia[] = [];  // Aquí se guardarán las asistencias obtenidas de Firebase

  constructor() {}

  async ngOnInit() {
    try {
      // Obtén todas las asistencias de la colección
      this.asistencias = await this.firebaseSvc.obtenerColeccion('asistencias');
      console.log("Asistencias obtenidas:", this.asistencias);
    } catch (error) {
      console.error("Error al obtener las asistencias:", error);
    }
  }

  verAlumnos(asistencia: Asistencia) {
    // Lógica para ver los alumnos (puedes redirigir a otra página con la asistencia seleccionada)
    console.log("Ver alumnos de la asistencia:", asistencia);
  }
}
