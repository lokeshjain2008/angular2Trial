import { Component, OnInit, Inject } from 'angular2/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';

import HeroChild  from './hero-child';


@Component({
  selector: 'heroes',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <div *ngIf="!heroes.length">
      Getting your heroes to work.....
    </div>
    <ul class="heroes">
      <li *ngFor="#hero of heroes"

        [class.active]="hero === selectedHero"

        (click)="onSelect(hero)"

        >
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <p> <em> There are more and deep routes</em> </p>
    <nav>
      <a [routerLink]="['DeepOne', {name:'lokesh kumar one', age:22}]">deep one</a>

      <a [routerLink]="['DeepTwo', {name:'Manoharra', age:33}]">deep two(same data)</a>
    </nav>
    <hr/>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [HeroDetailComponent, ROUTER_DIRECTIVES],


})
@RouteConfig([
  {
    name: 'DeepOne',
    path: '/deep1',
    component: HeroChild,
    useAsDefault: true,

  },
  {
    name: 'DeepTwo',
    path: '/deep2',
    component: HeroChild,
    data: {
      inside: "lokesh jain"
    }
  }
])
export class HeroesComponent {
  title: string = 'Angular 2 demo application';
  heroes: Hero[] = [];
  parent: string = 'ReactJS';
  hero: Hero;
  selectedHero: Hero;
  //constructor(private _heroService: HeroService){ }

  private _heroService: HeroService;
  constructor() {
    this._heroService = new HeroService;
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  getHeroes() {
    this._heroService.getHeroesSlowly().then(data => this.heroes = data);
  }

  ngOnInit() {
    this.getHeroes();
  }


}
