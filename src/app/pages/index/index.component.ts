import { Component } from '@angular/core';

export type Website = Record<'id' | 'domain' | 'about' | 'devStory' | 'link', string>

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  websites : Website[] = [
    {
      id: 'armoservis',
      domain: 'armoservis.ru',
      about: 'Обслуживание и сервис теплообменного оборудования',
      devStory: 'Занимаюсь поддержкой и SEO-продвижением. Дизайн мне не принадлежит. Сайт работает на Opencart.',
      link: 'https://armoservis.ru'
    },
    {
      id: 'gk-gulfstream',
      domain: 'gk-gulfstream.ru',
      about: 'Апартаменты в новостройках Батуми от застройщика',
      devStory: 'Занимаюсь поддержкой и SEO-продвижением. Сайт работает на собственном фреймворке, полностью разработан мной.',
      link: 'https://gk-gulfstream.com'
    },
    {
      id: 'adanis',
      domain: 'adanis.ru',
      about: 'Конвертер воды - КВ: Прибор для предотвращения и удаления накипи',
      devStory: 'Занимаюсь поддержкой и SEO-продвижением. Сайт работает на собственном фреймворке, полностью разработан мной.',
      link: 'https://adanis.ru'
    },
    {
      id: 'ru-sco',
      domain: 'ru-sco.ru',
      about: 'Натяжные потолки в Казани',
      devStory: 'Сайт работает на собственном фреймворке, полностью разработан мной.',
      link: 'https://ru-sco.ru'
    },
  ]

}
