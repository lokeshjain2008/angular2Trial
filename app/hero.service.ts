import {Injectable} from 'angular2/core';
import {HEROES} from './mock-heroes';
import { Hero } from './hero';


@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return  Promise.resolve(HEROES);
  }

  getHero(id): Promise<Hero>{
    return  Promise.resolve(HEROES)
    .then(data => data.filter(hero => id === hero.id)[0]);
  }

  getHeroesSlowly() {
  return new  Promise<Hero[]>(resolve =>
    setTimeout(() => resolve(HEROES), 2000) // 2 seconds
    );
  }
}
