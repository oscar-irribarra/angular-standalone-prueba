import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'main',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
  
  <body>
      <h1>MAIN</h1>

      <section>
        <a routerLink="home" routerLinkActive="active-link">HOME</a>
        <a routerLink="about" routerLinkActive="active-link">ABOUT</a>
      </section>

      <section>
        <a routerLink="nothome" routerLinkActive="active-link">NOT HOME</a>
        <a routerLink="notabout" routerLinkActive="active-link">NOT ABOUT</a>
      </section>
      <section>
        <a routerLink="home/products" routerLinkActive="active-link">HOME ONE</a>
      </section>


      <section class="body">
        <router-outlet></router-outlet>
      </section>
    </body>

    `,
  styles: [
    `
    body{
      background-color: #ccc;
    }

    section{
      margin-bottom: 50px;
    }

    .body{
      min-height: 50vh;
      background-color: teal;
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
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
