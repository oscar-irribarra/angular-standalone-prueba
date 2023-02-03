import { Component, OnInit } from '@angular/core';
import { MyLowerCasePipe } from '../pipes/my-lower-case.pipe';

@Component({
  selector: 'products',
  standalone: true,
  imports: [MyLowerCasePipe],
  template: `

      <h1>PRODUCTOS</h1>

      <p>{{'SOY UN TEXTO UPPER' | myLowerCase }}</p>

    `,
  styles: [
    `
   
  `,
  ],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
