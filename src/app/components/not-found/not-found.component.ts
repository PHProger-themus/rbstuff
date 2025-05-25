import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="regular_block">
      <h1>404</h1>
      <p>Страница не найдена</p>
    </div>`,
  styles: [
    `h1 {
      text-align: center;
      font-size: 100px;
    }
    p {
      text-align: center;
      font-size: 20px;
    }`
  ]
})
export class NotFoundComponent {

}
