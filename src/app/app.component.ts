import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="content-container">
      <div class="content-area">
        <page-header></page-header>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [``],
})
export class AppComponent {
  title = 'Poll App';
}
