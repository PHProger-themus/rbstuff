import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { getCookie, setCookie } from '../shared/cookies'

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private dark: boolean = false
  public dark$: BehaviorSubject<boolean> = new BehaviorSubject(this.dark)

  constructor() {
    const theme = getCookie('theme')
    this.dark = theme ? theme === 'dark' : !!window.matchMedia('(prefers-color-scheme: dark)')
    this.dark$ = new BehaviorSubject<boolean>(this.dark)
  }

  switchDark() {
    this.dark = !this.dark
    setCookie({ name: 'theme', value: this.dark ? 'dark' : 'light', expireDays: 180 }) // 3 months
    this.dark$.next(this.dark)
  }
}
