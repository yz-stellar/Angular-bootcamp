import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  anyVariable="hello";
  title = 'bookstore';

  fn(ev){
    console.log(ev);
  }
}