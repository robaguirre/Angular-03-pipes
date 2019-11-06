import { Component } from '@angular/core';

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
}
