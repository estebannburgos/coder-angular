import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from 'src/app/home/home.component';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(value: Usuario, ...args: unknown[]): unknown {
    return `${value.firstName} ${value.lastName}`;
  }

}
