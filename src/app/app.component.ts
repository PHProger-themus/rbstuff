import { Component } from '@angular/core'
import { StoreService } from './services/store.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public dark$ = this.store.dark$;

  constructor(private store: StoreService) {
  }

  ngAfterViewInit() {
    setTimeout(() => document.body.classList.add('trd'))
  }

}
