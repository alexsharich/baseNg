import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<div>
  <h1>ANGULAR</h1>
  <nav>
  <a routerLink=''>Home</a>
  <a routerLink='/about'>About</a>
  <a routerLink='/news'>News</a>
  <a routerLink='/date'>Date</a>
  <a routerLink='/test'>Test</a>
  </nav>
  <router-outlet></router-outlet>
  </div>`
})
export class AppComponent {
  title = 'Alexander Sharich';
}
