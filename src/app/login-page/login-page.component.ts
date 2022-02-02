import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiPathService } from '../pollData.service';

@Component({
  selector: 'login-page',
  styles: [`
    .bi {
        vertical-align: -.125em;
        fill: currentColor;
    }

    .rounded-4 { border-radius: .5rem; }
    .rounded-5 { border-radius: .75rem; }
    .rounded-6 { border-radius: 1rem; }

    .modal-sheet .modal-dialog {
        width: 380px;
        transition: bottom .75s ease-in-out;
    }
    .modal-sheet .modal-footer {
        padding-bottom: 2rem;
    }

    .modal-alert .modal-dialog {
        width: 380px;
    }

    .border-right { border-right: 1px solid #eee; }

    .modal-tour .modal-dialog {
        width: 380px;
    }
  
  `],
  template: `
    <div class="modal modal-signin d-block bg-light py-5" tabindex="-1" role="dialog" id="modalSignin">
        <div class="modal-dialog" role="document">
            <div class="modal-content rounded-5 shadow">
            <div class="modal-header p-5 pb-4 border-bottom-0">
                <h2 class="fw-bold mb-0">Sign up / Sign in</h2>
                <button type="button" class="btn-close" data-bs-dismiss="modal"><a routerLink="/"></a></button>
            </div>

            <div class="modal-body p-5 pt-0">
                <form class="">
                <div class="form-floating mb-3">
                    <label>Email address</label>
                    <input type="text" class="form-control rounded-4">
                </div>
                <div class="form-floating mb-3">
                    <label>Password</label>
                    <input type="text" class="form-control rounded-4" >
                </div>
                <button class="w-100 mb-2 btn btn-lg rounded-4 btn-primary">Sign up / Sign in</button>
                <hr class="my-4">
                <h2 class="fs-5 fw-bold mb-3">Or use a third-party</h2>
                <button class="w-100 py-2 mb-2 btn btn-outline-dark rounded-4" type="submit">
                    <svg class="bi me-1" width="16" height="16"><use xlink:href="#twitter"/></svg>
                    Sign up with Email
                </button>
                <button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-4" type="submit">
                    <svg class="bi me-1" width="16" height="16"><use xlink:href="#facebook"/></svg>
                    Sign up with Facebook
                </button>
                </form>
            </div>
            </div>
        </div>
    </div>


    
    <!-- <button class="btn btn-primary" data-toggle="modal" data-target="#login-modal"></button>

    <div class="modal fade" id="login-modal" tabindex="-1" aria-labelledby="modal-title" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content"> 
                <div class="modal-header">
                    <h5 class="modal-title" id="modal-title" ></h5>
                    <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>MODAL BODY</p>
                    <label for="modal-email" class="for-label">Your Email Address:</label>
                    <input type="email" class="form-control" id="modal-email" placeholder="e.g. cvillanueva@myafo.com">
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    </div> -->

  `
})
export class LoginPageComponent implements OnInit {

  constructor(
      private apiRequest: ApiPathService,
  ) { }

  ngOnInit() {
      this.apiRequest.getData('customer').subscribe();
  }









  public close() {
    console.log('test');
    
  }
}
