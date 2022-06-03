import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from '../login-page/login-page.component';

@Component({
  selector: 'page-header',
  template: `
    <header class="">
      <div class="container py-3 d-flex flex-column flex-md-row align-items-center border-bottom">
        <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
          <img src="../assets/images/AFO-Primary Horizontal_Slate1.png" >
        </a>

        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <div class="me-3 py-2 text-dark text-decoration-none" routerLink="/">Home</div>
          <div class="me-3 py-2 text-dark text-decoration-none" routerLink="/evitesPage">Create <i class="fad fa-calendar-circle-user"></i></div>
          <div class="me-3 py-2 text-dark text-decoration-none" routerLink="/pollsPage">Create <i class="fad fa-square-poll-vertical"></i></div>
          <button class="btn btn-secondary" (click)="loginModal()">Login <i class="fad fa-sign-in"></i></button>
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
