import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'main',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
  
  <body>
      <h1>OTHER MAIN</h1>

      <section>
        <a routerLink="homeother" routerLinkActive="active-link">HOME</a>
        <a routerLink="aboutother" routerLinkActive="active-link">ABOUT</a>
      </section>

      <section class="body">
        <router-outlet></router-outlet>
      </section>
    </body>

    `,
  styles: [
    `
    body{
      background-color: blue;
    }

    section{
      margin-bottom: 50px;
    }

    .body{
      min-height: 50vh;
      background-color: red;
      color: #fff;
      padding: 10px;
    }

    a{
      padding: 20px;
      background-color: #333;
      color: white;
      margin-right: 5px;
    }

    .active-link{
      background-color: teal
    }

  `,
  ],
})
export class MainOtherComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
