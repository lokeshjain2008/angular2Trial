import { Component, Inject }  from 'angular2/core';
import { Observable }  from 'rxjs/Observable';
import {HTTP_PROVIDERS,  } from 'angular2/http';
// in-memory web api imports
import { InMemoryBackendService,
        SEED_DATA }         from 'a2-in-memory-web-api/core';

import { HeroData }          from './hero-server';
import { HeroService } from './herohttp-service';
import { HeroListComponent } from './hero-list-http'

//core
import { provide }           from 'angular2/core';
import { XHRBackend }        from 'angular2/http';

// Add all operators to Observable
import 'rxjs/Rx';


@Component({
selector: 'http-heroes',
template: `
<h1> Http heroes</h1>
<hero-list> </hero-list>
`,
providers: [
    HTTP_PROVIDERS,
    HeroService,
    // in-memory web api providers
    provide(XHRBackend, { useClass: InMemoryBackendService }), // in-mem server
    provide(SEED_DATA,  { useClass: HeroData }) // in-mem server data
],
styleUrls: [],
directives: [HeroListComponent],

})
export class HttpHeroesComponent{

}
