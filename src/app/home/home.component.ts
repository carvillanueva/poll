import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from '../login-page/login-page.component';
import { ApiPathService } from '../pollData.service';

@Component({
  selector: 'home-page',
  template: `
    <div class="container py-3">
      <div class="bio-header p-3 pb-md-4 mx-auto text-center">
        <h1 class="display-4 fw-normal">Create an Event / Poll!</h1>
        <p class="fs-5 text-muted">
          Quickly build an effective eleetronic invitation or poll for your next company event.
          It's as easy as pie.
        </p>
      </div> 

      <main>
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal">Free</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">
                  Start today!
                </h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>Full access to E-vite maker</li>
                  <li>Full access to Poll maker</li>
                  <li>Email support</li>
                </ul>
                <button type="button" class="w-100 btn btn-lg btn-outline-primary">
                  <a class="py-2 text-dark text-decoration-none" (click)="loginModal()">Sign up for free</a>
                </button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal">Create an E-vite</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">
                  E-vite Maker
                </h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>Design your own E-vite</li>
                  <li>Easy to use!</li>
                  <li>Send to friends, family, & co-workers!</li>
                </ul>
                <button type="button" class="w-100 btn btn-lg btn-primary">
                  <a class="py-2 text-light text-decoration-none" routerLink="/evitesPage">Get started</a>
                </button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal">Create a Poll</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">
                  Poll Maker
                </h1>
                <ul class="list-unstyled mt-3 mb-4">
                <li>Design your own Poll</li>
                  <li>Easy to use!</li>
                  <li>Send to friends, family, & co-workers!</li>
                </ul>
                <button type="button" class="w-100 btn btn-lg btn-primary">
                  <a class="py-2 text-light text-decoration-none" routerLink="/pollsPage">Get started</a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <h2 class="display-6 text-center mb-4">Previous Work Examples</h2>
        <div class="table-responsive">
          <table class="table text-center">
            <thead>
              <tr>
                <th style="width: 34%;"></th>
                <th style="width: 22%;">Free</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" class="text-start">Public</th>
                <td>
                  <svg class="bi" width="24" height="24">
                    <use xlink:href="#check" />
                  </svg>
                </td>
                <td>
                  <svg class="bi" width="24" height="24">
                    <use xlink:href="#check" />
                  </svg>
                </td>
                <td>
                  <svg class="bi" width="24" height="24">
                    <use xlink:href="#check" />
                  </svg>
                </td>
              </tr>
              <tr>
                <th scope="row" class="text-start">Private</th>
                <td></td>
                <td>
                  <svg class="bi" width="24" height="24">
                    <use xlink:href="#check" />
                  </svg>
                </td>
                <td>
                  <svg class="bi" width="24" height="24">
                    <use xlink:href="#check" />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      <footer class="pt-4 my-md-5 pt-md-5 border-top">
        <div class="row">
          <div class="col-12 col-md">
            <img
              class="mb-2"
              src="../assets/brand/bootstrap-logo.svg"
              alt=""
              width="24"
              height="19"/>
            <small class="d-block mb-3 text-muted">&copy; 2017–2021</small>
          </div>
          <div class="col-6 col-md">
            <h5>Features</h5>
            <ul class="list-unstyled text-small">
              <li class="mb-1">
                <a class="link-secondary text-decoration-none" href="#">Cool stuff</a>
              </li>
              <li class="mb-1">
                <a class="link-secondary text-decoration-none" href="#">Random feature</a>
              </li>
              <li class="mb-1">
                <a class="link-secondary text-decoration-none" href="#">Last time</a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
              <li class="mb-1">
                <a class="link-secondary text-decoration-none" href="#">Resource</a>
              </li>
              <li class="mb-1">
                <a class="link-secondary text-decoration-none" href="#">Another resource</a>
              </li>
              <li class="mb-1">
                <a class="link-secondary text-decoration-none" href="#">Final resource</a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>About</h5>
            <ul class="list-unstyled text-small">
              <li class="mb-1">
                <a class="link-secondary text-decoration-none" href="#">Team</a>
              </li>
              <li class="mb-1">
                <a class="link-secondary text-decoration-none" href="#">Privacy</a>
              </li>
              <li class="mb-1">
                <a class="link-secondary text-decoration-none" href="#">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    .bio-header {
      max-width: 700px;
    }
  `],
})

export class HomeComponent implements OnInit {

  
  constructor(
    private apiRequest : ApiPathService,
    private modalService: NgbModal,
  ) {}

  ngOnInit() {  
    console.log('home page test');
    this.apiRequest.getData('customer').subscribe((res:any) => {
      console.log(res);
    });
    this.apiRequest.getData('event').subscribe((res:any) => {
      console.log(res);
    });
    // this.apiRequest.getData('customer/newCustomer/' + 'Carlos').subscribe((res:any) => {
    //   console.log(res);
    // });
    // this.apiRequest.getData('customer/' + 'fa0ad996-b458-43cb-a217-83d8e476a565').subscribe((res:any) => {
    //   console.log(res);
    // });
    // this.authHttp.get(environment.apiPath + 'customer').subscribe(); //remove subscribe when adding to service
   
  }

  public loginModal() {
    this.modalService.open(LoginPageComponent);
  }

}
