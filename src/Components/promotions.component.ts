import { Component, OnInit } from '@angular/core';
import { MyUpperCasePipe } from '../pipes/my-upper-case.pipe';

@Component({
  selector: 'promotions',
  standalone: true,
  imports: [MyUpperCasePipe],
  template: `

      <h1>PROMOCIONES</h1>

      <p>{{'soy un texto lower' | myUpperCase }}</p>

    `,
  styles: [
    `
   
  `,
  ],
})
export class PromotionsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
