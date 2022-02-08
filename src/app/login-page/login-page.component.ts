import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiPathService } from '../pollData.service';

@Component({
  selector: 'login-page',
  styles: [`
        .bi {
            vertical-align: -.125em;
            fill: currentColor;
        }
        .wrong-ps {
            border: solid 2px red;
        }
  `],
  template: `
    <div class="modal-header p-5 pb-4 border-bottom-0">
        <h2 *ngIf="!newAccount" class="fw-bold mb-0">Sign in</h2>
        <h2 *ngIf="newAccount"class="fw-bold mb-0">Sign up</h2>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross Click')"><span aria-hidden="true">&times;</span></button>
    </div>
    <div *ngIf="!newAccount" class="modal-body p-5 pt-0">
        <div class="mb-3">
            <input type="text" class="form-control rounded-4" placeholder="Email Address...">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control rounded-4" placeholder="Password...">
        </div>
        <button class="w-100 mb-2 btn btn-lg rounded-4 btn-primary">Sign in</button>
        <div class="p-2 text-center" style="color: blue-400" (click)="createAcc(true)">Not Registered? Click here to Sign up!</div>
        <hr class="my-4">
        <h2 class="fs-5 fw-bold mb-3">Or use a third-party</h2>
        <button class="w-100 py-2 mb-2 btn btn-outline-dark rounded-4">
            <svg class="bi me-1" width="16" height="16"><use xlink:href="#twitter"/></svg>
            Sign up with Email
        </button>
        <button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-4">
            <svg class="bi me-1" width="16" height="16"><use xlink:href="#facebook"/></svg>
            Sign up with Facebook
        </button>
    </div>
    <div *ngIf="newAccount" class="modal-body p-5 pt-0">
        <div class="d-flex  align-items-center mb-4">
            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
            <div class="form-outline flex-fill mb-0">
                <input type="text" class="form-control" [(ngModel)]="newUserInfo.name" placeholder="Your Name" />
            </div>
        </div>
        <div class="d-flex  align-items-center mb-4">
            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
            <div class="form-outline flex-fill mb-0">
                <input type="email" class="form-control" [(ngModel)]="newUserInfo.email" placeholder="Your Email"/>
            </div>
        </div>
        <div class="d-flex  align-items-center mb-4">
            <i class="fad fa-building fa-lg me-3 fa-fw"></i>
            <div class="form-outline flex-fill mb-0">
                <input type="email" class="form-control" [(ngModel)]="newUserInfo.organization" placeholder="Your Organization"/>
            </div>
        </div>
        <div class="d-flex  align-items-center mb-4">
            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
            <div class="form-outline flex-fill mb-0">
                <input type="password" class="form-control" [(ngModel)]="newUserInfo.password" placeholder="Password"/>
            </div>
        </div>
        <div class="d-flex  align-items-center mb-4">
            <i class="fas fa-key fa-lg me-3 fa-fw"></i>
            <div class="form-outline flex-fill mb-0">
                <input type="password" class="form-control" [(ngModel)]="newUserInfo.passwordCheck" (blur)="psCheck()" [ngClass]="{'wrong-ps': !psPass}" placeholder="Repeat your password"/>
                <label *ngIf="!psPass" style="color:red;">Password Does NOT Match!</label>
            </div>
        </div>
        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
            <button type="button" class="btn btn-primary btn-lg" (click)="submitNewAccount()" [ngClass]="{'disabledbtn': locked}">"Register</button>
        </div>
        <p class="text-center text-muted mt-5 mb-0">Have already an account? <a (click)="createAcc(false)" class="fw-bold text-body" ><u>Login here</u></a></p>
    </div>
  `
})
export class LoginPageComponent implements OnInit {
    public newUserInfo: newUserInfo = new newUserInfo();
    public newAccount: boolean = false;   
    public locked: boolean = false;   
    public psPass: boolean = false;   

    constructor(
        private apiRequest: ApiPathService,
        public activeModal: NgbActiveModal
    ) { }

    ngOnInit() {
        this.loadPage();
    }

    public loadPage() {
        this.newAccount = false;
        this.locked = true;
        this.psPass = true;
    }

    public createAcc(create:boolean) {
        if (create) {
            this.newAccount = true;
        } else {
            this.newAccount = false;
        }
    }

    public submitNewAccount() {
        console.log(this.newUserInfo);
        this.apiRequest.postData('customer', this.newUserInfo).subscribe((res:any) => {
            console.log(res);
        });
    }

    public psCheck() {
        if (this.newUserInfo.password === this.newUserInfo.passwordCheck) {
            this.locked = false;
            this.psPass = true;
        } else {
            this.locked = true;
            this.psPass = false;
        }
    }


}

export class newUserInfo {
    id?: string;
    name?: string;
    email?: string;
    organization?: string;
    password?: string;
    type = 'customer';

    // UI only
    passwordCheck?: string;

}
