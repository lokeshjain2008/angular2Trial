import { Component, Input } from 'angular2/core';


@Component({
  selector: 'child1',
  template : `

    <h3> Hello Child {{ parent }}</h3>
    <p> Hey there are things that can be done here.</p>

  `
})
export default class HeroChild {
  @Input()
  parent: string;
}




