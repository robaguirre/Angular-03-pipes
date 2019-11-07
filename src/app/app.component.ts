import { Component } from '@angular/core';
import { resolve } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre = 'Roberto';

  lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  numero = 33.9;

  PI = Math.PI;

  porcion = 0.234;

  moneda = 1203.45;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 400,
    direccion : {
      calle: 'Primera',
      casa: '19'
    }
  };

  valorDePromesa = new Promise ( ( exito, error ) => {
    setTimeout(() => exito('Llego el dato'), 3500);
  });

  // fecha = '2017-11-23'; Tb valdría
  fecha = new Date();

  fullNombre = 'robeRto agirre gARcia';

  video = 'm0eSf0JrUIk';

  activar = true;
}
