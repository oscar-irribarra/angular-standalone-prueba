import { Component, importProvidersFrom, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: ` 
  
    <h1>OTHER ABOUT</h1>
  
  `,
})
export class AboutOtherComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
