import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-list-page',
  styles: [
    `
      header {
        background-color: #fff;
        border-bottom: 2px solid #ddd;
        font-family: 'Oswald', sans-serif;
        font-weight: 300;
        font-size: 17px;
        padding: 15px;
      }
      .side > li {
        display: inline;
        margin-left: 20px;
      }
    `,
  ],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Arlington Family Offices</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>

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
export class EventListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {

  }
}
