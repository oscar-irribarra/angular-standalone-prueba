import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUpperCase',
  standalone: true,
})
export class MyUpperCasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
