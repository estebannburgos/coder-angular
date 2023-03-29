import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public alumnos: Usuario[] = [
    new Usuario(1, 'Pedro', 'Arias', 'pedroarias@gmail.com', 20, true, new Date('2002-08-03')),
    new Usuario(2, 'Juan', 'Pérez', 'jperez@gmail.com', 21, false, new Date('2001-07-14')),
    new Usuario(3, 'Diego', 'Astorga', 'diego.astorga@gmail.com', 23, false, new Date('2000-02-03')),
    new Usuario(4, 'María', 'Ramírez', 'maramirez@gmail.com', 30, true, new Date('1993-01-29')),
    new Usuario(5, 'Angela', 'Rivera', 'arivera@gmail.com', 31, true, new Date('1992-02-15')),
  ];

  isLoading:boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
