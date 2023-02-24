import { Component } from '@angular/core';

interface Website {
  key: string,
  title: string,
  about: string,
  devStory: string,
  link: string
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {

  websites : Website[] = [
    {
      key: 'armoservis',
      title: 'armoservis.ru',
      about: 'Обслуживание и сервис теплообменного оборудования',
      devStory: 'Занимаюсь поддержкой и SEO-продвижением. Дизайн мне не принадлежит. Сайт работает на Opencart.',
      link: 'https://armoservis.ru'
    },
    {
      key: 'gk-gulfstream',
      title: 'gk-gulfstream.ru',
      about: 'Апартаменты в новостройках Батуми от застройщика',
      devStory: 'Занимаюсь поддержкой и SEO-продвижением. Сайт работает на собственном фреймворке, полностью разработан мной.',
      link: 'https://gk-gulfstream.com'
    },
    {
      key: 'adanis',
      title: 'adanis.ru',
      about: 'Конвертер воды - КВ: Прибор для предотвращения и удаления накипи',
      devStory: 'Занимаюсь поддержкой и SEO-продвижением. Сайт работает на собственном фреймворке, полностью разработан мной.',
      link: 'https://adanis.ru'
    },
    {
      key: 'ru-sco',
      title: 'ru-sco.ru',
      about: 'Натяжные потолки в Казани',
      devStory: 'Сайт работает на собственном фреймворке, полностью разработан мной.',
      link: 'https://ru-sco.ru'
    },
  ]

}
