import { Component, Input } from 'angular2/core';
import { RouteParams, RouteData } from 'angular2/router';


@Component({
  selector: 'child1',
  template : `

    <h3> Hello Child {{ parent }}</h3>
    <h4> Params data:  {{ name }} and {{ age }}
    <br />
    Route data: {{ data }}
    </h4>
    <p> Hey there are things that can be done here.</p>

  `
})
export default class HeroChild {
  @Input()
  parent: string;

  //Route params
  name: string;
  age: number;

  //Data from config
  data: string;

  constructor(private _params: RouteParams, private _data: RouteData){
      this.name = _params.get('name');
      this.age =  +_params.get('age');
      this.data = _data.get('inside');

  }
}




