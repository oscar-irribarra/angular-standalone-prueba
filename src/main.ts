import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  NoPreloading,
  PreloadAllModules,
  PreloadingStrategy,
  provideRouter,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { OTHER_ROUTES, ROUTES, ERROR_ROUTES } from './routes';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  template: `
    <h1>TRANSVERSAL</h1>
    <a routerLink="main" routerLinkActive="active-link">MAIN</a>
    <a routerLink="other" routerLinkActive="active-link">OTHER</a>
    <a routerLink="asdasd" routerLinkActive="active-link">unknown ROUTE</a>

    <router-outlet></router-outlet>
  `,
  styles: [
    `
      section {
        margin-bottom: 50px;
      }

      a {
        padding: 20px;
        background-color: yellow;
        color: black;
        margin-right: 5px;
      }

      .active-link {
        background-color: green;
      }
    `,
  ],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot([...ROUTES, ...OTHER_ROUTES, ...ERROR_ROUTES], {
        preloadingStrategy: PreloadAllModules,
      })
    ),
  ],
});
