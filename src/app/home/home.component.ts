import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { Time, TimeService } from '../core/services/time.service';

export interface Usuario {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  age: number,
  birthdate: Date,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  alumnos: Usuario[] = [
    {
      id: 1,
      firstName: 'Pedro',
      lastName: 'Arias',
      email: 'pedroarias@gmail.com',
      age: 20,
      birthdate: new Date('2002-08-03')
    },
    {
      id: 2,
      firstName: 'Juan',
      lastName: 'Pérez',
      email: 'jperez@gmail.com',
      age: 21,
      birthdate: new Date('2001-07-14')
    },
    {
      id: 3,
      firstName: 'Diego',
      lastName: 'Astorga',
      email: 'diego.astorga@gmail.com',
      age: 23,
      birthdate: new Date('2000-02-03')
    },
    {
      id: 4,
      firstName: 'María',
      lastName: 'Ramírez',
      email: 'maramirez@gmail.com',
      age: 30,
      birthdate: new Date('1993-01-29')
    },
    {
      id: 5,
      firstName: 'Ángela',
      lastName: 'Rivera',
      email: 'arivera@gmail.com',
      age: 31,
      birthdate: new Date('1992-02-15')
    }
  ];

  
  horaActualNoAsync: string | null = null;

  horaActual$: Observable<string>;

  suscriptionRef: Subscription | null;

  isLoading:boolean = true;

  estudiantes: any[] = [];

  constructor(private timeService: TimeService) {

    this.horaActual$ = this.timeService.reloj;

    this.suscriptionRef = this.timeService.reloj.subscribe((valor) => {
      this.horaActualNoAsync = valor
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
  
  ngOnDestroy(): void {
    this.suscriptionRef?.unsubscribe();
  }

  nombreControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.minLength(3)
    ]
  );
  apellidoControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.minLength(3)
    ]
  );
  emailControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.email
    ]
  );

  estudianteForm: FormGroup = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    email: this.emailControl,
  });

  displayedColumns: string[] = ['id', 'fullname', 'email', 'age', 'birthdate'];


  onSubmit(): void {
    if (this.estudianteForm.valid) {
      this.estudiantes.push(this.estudianteForm.value);
      this.estudianteForm.reset();
    } else {
      this.estudianteForm.markAllAsTouched()
    }
  }
}
