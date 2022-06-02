import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from '../login-page/login-page.component';

@Component({
  selector: 'page-header',
  template: `
    <header class="py-3">
      <div class="container d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
          <span class="fs-4">{{'Arlington Family Offices'}}</span>
        </a>

        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <a class="me-3 py-2 text-dark text-decoration-none" routerLink="/">Home</a>
          <a class="me-3 py-2 text-dark text-decoration-none" routerLink="/evitesPage">Create an E-vite</a>
          <a class="me-3 py-2 text-dark text-decoration-none" routerLink="/pollsPage">Create a Poll</a>
          <button class="btn btn-primary" (click)="loginModal()">Login</button>
        </nav>
      </div>
    </header>
  `,
  styles: [`
  
  `]
})
export class HeaderComponent implements OnInit {





  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit() {

  }


  public loginModal() {
    this.modalService.open(LoginPageComponent);
  }

}
