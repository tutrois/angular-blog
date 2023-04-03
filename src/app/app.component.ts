import { Component  } from '@angular/core';
import { environment } from './../environments/environment';
import 'boxicons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
	_BASEURL:string = environment.BaseUrl;
	constructor() {
    console.log(environment.production);
    console.log(environment.BaseUrl);
		 // Logs false for development environment
  }

  title = 'blog-proj';


}
