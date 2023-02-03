import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myLowerCase',
  standalone: true,
})
export class MyLowerCasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toLowerCase();
  }
}
