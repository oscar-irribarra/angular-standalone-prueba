import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NgIf, AsyncPipe],
  template: `
    <h1>HOME</h1>

    <section *ngIf="showButtons$ | async">
      <a routerLink="products" routerLinkActive="active-link">PRODUCTOS</a>
      <a routerLink="promotions" routerLinkActive="active-link">PROMOCIONES</a>

      <router-outlet></router-outlet>
    </section>
  `,
  styles: [
    `
      section {
        margin-bottom: 50px;
      }

      .body {
        min-height: 50vh;
        background-color: teal;
        color: #fff;
        padding: 10px;
      }

      a {
        padding: 20px;
        background-color: #333;
        color: white;
        margin-right: 5px;
      }

      .active-link {
        background-color: blue;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  showButtons$!: Observable<boolean>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.showButtons$ = this.route.url.pipe(map((x) => x[0]?.path == 'home'));
  }
}
