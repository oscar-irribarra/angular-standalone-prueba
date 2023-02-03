import { Component, OnInit } from '@angular/core';
import { MyLowerCasePipe } from '../pipes/my-lower-case.pipe';

@Component({
  selector: 'notFound',
  standalone: true,
  template: ` <h1>NOT FOUND</h1> `,
  styles: [``],
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
