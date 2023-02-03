import { Route } from '@angular/router';
import { AboutComponent } from './Components/about.component';
import { HomeComponent } from './Components/home.component';
import { MainComponent } from './Components/main.component';
import { ProductsComponent } from './Components/products.component';
import { PromotionsComponent } from './Components/promotions.component';
import { AboutOtherComponent } from './OtherSite/about.component';
import { HomeOtherComponent } from './OtherSite/home.component';
import { MainOtherComponent } from './OtherSite/main.component';
import { NotFoundComponent } from './Shared/NotFound.component';

export const ROUTES: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  {
    path: 'main',
    loadComponent: () =>
      import('./Components/main.component').then((x) => x.MainComponent),
    // component: MainComponent,
    loadChildren: () => import('./routes').then((x) => x.ROUTES_CHILD),
    // children: [
    //   { path: '', pathMatch: 'full', redirectTo: 'home' },
    //   {
    //     path: 'home',
    //     component: HomeComponent,
    //     children: [
    //       { path: '', redirectTo: 'promotions', pathMatch: 'full' },
    //       { path: 'products', component: ProductsComponent },
    //       { path: 'promotions', component: PromotionsComponent },
    //     ],
    //   },
    //   { path: 'about', component: AboutComponent },
    //   { path: 'nothome', component: HomeComponent },
    //   { path: 'notabout', component: AboutComponent },
    // ],
  },
];

export const ROUTES_CHILD: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'promotions', pathMatch: 'full' },
      { path: 'products', component: ProductsComponent },
      { path: 'promotions', component: PromotionsComponent },
    ],
  },
  { path: 'about', component: AboutComponent },
  { path: 'nothome', component: HomeComponent },
  { path: 'notabout', component: AboutComponent },
];

export const OTHER_ROUTES: Route[] = [
  { path: 'other', pathMatch: 'full', redirectTo: 'mainother' },
  {
    path: 'mainother',
    loadComponent: () =>
      import('./OtherSite/main.component').then((x) => x.MainOtherComponent),
    // component: MainOtherComponent,
    loadChildren: () => import('./routes').then((x) => x.OTHER_ROUTES_CHILD),
    // children: [
    //   { path: '', pathMatch: 'full', redirectTo: 'homeother' },
    //   {
    //     path: 'homeother',
    //     component: HomeOtherComponent,
    //   },
    //   { path: 'aboutother', component: AboutOtherComponent },
    // ],
  },
];

export const OTHER_ROUTES_CHILD: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'homeother' },
  {
    path: 'homeother',
    component: HomeOtherComponent,
  },
  { path: 'aboutother', component: AboutOtherComponent },
];

export const ERROR_ROUTES: Route[] = [
  { path: '**', component: NotFoundComponent },
];
