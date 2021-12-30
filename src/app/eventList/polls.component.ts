import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'polls-page',
  styles: [
    `
      .side > li {
        display: inline;
        margin-left: 20px;
      }
    `,
  ],
  template: `
    <div class="bg-light">
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link" href="">Preview</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">Share</a>
        </li>
      </ul>
    </div>

    <div style="margin-top:15px;">
      <div class="col-sm-8 offset-sm-2 bg-light" >
        <!-- Container for Poll -->
        <div style="padding:15px;">
          <div>
            <input type="text" placeholder="TITLE" style="display:block; margin-bottom:10px;"/>
            <input type="text" placeholder="DESCRIPTION" style="display:block;" />
          </div>
          <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              + Add New
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" >Choice</a></li>
              <li><a class="dropdown-item" >Text</a></li>
              <li><a class="dropdown-item" >Rating</a></li>
            </ul>
          </div>
          <div>
           test
          </div>
        </div>

      </div>
    </div>

  `,
})
export class PollsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
