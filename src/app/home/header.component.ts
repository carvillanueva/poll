import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-header',
  template: `
    <header class="container py-3">
      <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
          <span class="fs-4">{{'Arlington Family Offices'}}</span>
        </a>

        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <a class="me-3 py-2 text-dark text-decoration-none" routerLink="/">Home</a>
          <a class="me-3 py-2 text-dark text-decoration-none" routerLink="/evitesPage">Create an E-vite</a>
          <a class="me-3 py-2 text-dark text-decoration-none" routerLink="/pollsPage">Create a Poll</a>
          <a class="py-2 text-dark text-decoration-none" routerLink="/loginPage">Login</a>
        </nav>
      </div>
    </header>
  `,
  styles: [`
  
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
