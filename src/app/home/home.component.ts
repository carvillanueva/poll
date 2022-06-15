import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from '../login-page/login-page.component';
import { ApiPathService } from '../pollData.service';

@Component({
  selector: 'home-page',
  styles: [`
   
  `],
  template: `
    <div class="container py-3 fadePage">
      <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">arlington family offices</h1>
          <p class="col-md-8 fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem viverra aliquet. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit.</p>
          <button class="btn btn-primary btn-lg" type="button">Get Started Today!</button>
        </div>
      </div>

      <div class="row align-items-md-stretch">
        <div class="col-md-6">
          <div class="h-100 p-5 text-white bg-secondary rounded-3">
            <h2>Create an Invitation</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem viverra aliquet. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit.</p>
            <button class="btn btn-outline-light" routerLink="/evitesPage" >Create <i class="fad fa-calendar-circle-user"></i></button>
          </div>
        </div>
        <div class="col-md-6">
          <div class="h-100 p-5 bg-light border rounded-3">
            <h2>Create a Poll</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem viverra aliquet. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit.</p>
            <button class="btn btn-outline-secondary" routerLink="/pollsPage">Create <i class="fad fa-square-poll-vertical"></i></button>
          </div>
        </div>
      </div>

      <footer class="pt-3 mt-4 text-muted border-top">
        &copy; 2022
      </footer>
    </div>

  `
})

export class HomeComponent implements OnInit {

  
  constructor(
    private apiRequest : ApiPathService,
    private modalService: NgbModal,
  ) {}

  ngOnInit() {  
    console.log('home page test');
    this.apiRequest.getData('customer/').subscribe((res:any) => {
      console.log(res);
    });
    this.apiRequest.getData('event/').subscribe((res:any) => {
      console.log(res);
    });
    // this.apiRequest.getData('poll/').subscribe((res:any) => {
    //   console.log(res);
    // });

    // this.apiRequest.getData('customer/newCustomer/' + 'Carlos').subscribe((res:any) => {
    //   console.log(res);
    // });
    // this.apiRequest.getData('customer/' + 'fa0ad996-b458-43cb-a217-83d8e476a565').subscribe((res:any) => {
    //   console.log(res);
    // });
  }

  public loginModal() {
    this.modalService.open(LoginPageComponent);
  }

}
