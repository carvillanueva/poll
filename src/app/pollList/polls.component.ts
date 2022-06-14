import { Component, OnInit } from '@angular/core';
import { ApiPathService } from '../pollData.service';

@Component({
  selector: 'polls-page',
  styles: [`
    .primary {
      background-color: #2e5077;
    }
  `,
  ],
  template: `
   <div class="container">
      <div class="pt-3 text-center">
        <ul class="nav justify-content-center">
          <li class="nav-item"><a class="nav-link link-dark"><span class="fad fa-square-poll-vertical"></span> Poll</a></li>
          <li><a class="nav-link link-dark" data-bs-toggle="modal" data-bs-target="#shareModal"><i class="fad fa-share-square"></i> Share</a></li>
          <li><a class="nav-link link-dark"><i class="fad fa-user-chart"></i> Responses</a></li>
        </ul>
      </div>

      <div class="row col-12 mt-3" >
        <!-- Container for Poll -->
        <div class="col-md-6 primary p-3 me-4 rounded">
          <div class="col-xs-12 p-3">
            <span class="fs-5 text-white" (click)="createItem()"><i class="fa-duotone fa-circle-plus"></i> New Item</span>
          </div>
          <div class="p-3 bg-light rounded">

            <div class="dropdown">
              <button class="btn btn-outline-secondary dropdown-toggle float-end" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Add New
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" (click)="view = 'text'">Text</a></li>
                <!-- <li><a class="dropdown-item">Multiple Choice</a></li> -->
                <li><a class="dropdown-item" (click)="view = 'rating'">Rating</a></li>
              </ul>
            </div>



            <div class="col-sm-12 col-md-6">
              <div class="">
                <label class="form-label">Question:</label>
                &nbsp; <input type="text" class="form-control" placeholder="Question...." />
              </div>
              
              <label class="form-label">Type:</label>
              <div *ngIf="this.view == 'text'">
                Text Box
               <!-- <input type="text" class="form-control" placeholder="Text..." /> -->
              </div>

              <div *ngIf="this.view == 'rating'">
                Yes - no - maybe
                <!-- <p><input name="radio" type="radio" >Yes</p>
                <p><input name="radio" type="radio">No</p>
                <p><input name="radio" type="radio">Maybe</p> -->
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-5 bg-light p-3 rounded">
          <label class="form-label">Poll Overview:</label>
          <table class="table table-borderless table-hover">
            <thead>
              <th>Question</th>
              <th>Poll Type</th>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>




      </div>

  

        <!-- Modal -->
        <div class="modal fade" id="shareModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="shareModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title text-center" id="shareModalLabel">Share Poll</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="row modal-body">
                <div class="row col-xs-12 g-1 col-md-6 p-2">
                  <div class="col-sm-6">
                    <label class="form-label"> Name</label>
                    <input type="text" class="form-control">
                  </div>

                  <div class="col-sm-6">
                    <label class="form-label"> Email</label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="text-end">
                    <button class="btn btn-xs btn-outline-success">Add</button>
                  </div>
                </div>
                <div class="row col-xs-12 col-md-6 p-2">
                  <table class="table table-hover table-condensed table-borderless">
                    <thead>
                      <th>Name</th>
                      <th>Email</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Carlos V</td>
                        <td>cvillanueva@myafo.com</td>
                        <td><i class="fa-duotone fa-trash-can iconclickdelete"></i></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="modal-footer">
                <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
                <button type="button" class="btn btn-primary">Send</button>
              </div>
            </div>
          </div>
        </div>





    </div>

  `,
})
export class PollsComponent implements OnInit {
  public view: string = '';

  constructor(
    private apiRequest: ApiPathService,
  ) { }

  ngOnInit() {
    // this.apiRequest.getData('poll').subscribe((res:any) => {
    //   console.log(res)
    // });
  }



  public createItem() {
    console.log('new item');
    
  }

}
