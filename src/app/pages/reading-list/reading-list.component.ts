import { HttpClient } from '@angular/common/http'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'

export interface Book {
  id: number,
  title: string,
  author: string,
  status: {
    title: string,
    class: string
  },
  comment: string,
  read_order: number,
  planned_order: number
}

const bookStatuses: Book['status'][] = [
  { title: 'В планах', class: 'planned' },
  { title: 'Читаю', class: 'reading' },
  { title: 'Прочитана', class: 'read' },
  { title: 'Частично прочитана', class: 'read' },
  { title: 'Возможно', class: 'maybe' },
  { title: 'Отложена', class: 'postponed' }
]

@Component({
  selector: 'app-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.css']
})
export class ReadingListComponent implements OnInit, OnDestroy {

  public books: Book[] = []
  private subs: Subscription[] = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.subs.push(
      this.http.get('http://rb-stuff.ru/backend/getBooksData.php').subscribe(response => {
        this.books = (response as any[]).map(book => ({...book, status: bookStatuses[book.status]}))
      })
    )
  }

  public ngOnDestroy(): void {
    this.subs.forEach(subscription => subscription.unsubscribe())
  }
}
