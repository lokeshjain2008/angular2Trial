import {Component} from 'angular2/core';
import {Hero} from './components/hero';

const lokesh:Hero = {id:33,name:"Lokesh kumar nain"};

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
    <h2> {{title}} </h2>
    `
})
export class AppComponent { 
    title = "lokesh kumar jain"
}
