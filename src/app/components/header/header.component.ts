import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service'
import { inProgress, isMobile } from '../../shared/platform'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuOpened: boolean = false
  subMenuOpened: boolean = false
  subMTimer: any
  subMCTimer: any

  public dark = false;
  public inProgress = inProgress

  constructor(public store : StoreService) { }

  ngOnInit(): void {
    this.store.dark$.subscribe(d => this.dark = d)
  }

  showSubMenu(submenu : HTMLElement) {
    clearTimeout(this.subMTimer)
    clearTimeout(this.subMCTimer)
    submenu.classList.remove('hidden_complete')
    setTimeout(() => {
      submenu.classList.remove('hidden')
      this.subMenuOpened = true
    }, 20);
  }

  hideSubMenu(submenu : HTMLElement) {
    this.subMTimer = setTimeout(() => {
      submenu.classList.add('hidden')
      this.subMCTimer = setTimeout(() => {
        submenu.classList.add('hidden_complete')
        this.subMenuOpened = false
      }, 300);
    }, 100);
  }

  toggleSubMenu(submenu: HTMLElement) {
    if (isMobile()) {
      if (this.subMenuOpened) {
        this.hideSubMenu(submenu)
      } else {
        this.showSubMenu(submenu)
      }
    }
  }

  toggleMenu(menu: HTMLElement, hamburger: HTMLElement) {
    if (this.menuOpened) {
      menu.classList.remove('opened')
      hamburger.classList.remove('opened')
    } else {
      menu.classList.add('opened')
      hamburger.classList.add('opened')
    }
    this.menuOpened = !this.menuOpened
  }
}
