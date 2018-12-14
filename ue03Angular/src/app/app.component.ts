import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'ue03Angular';
  public clock = '??:??:??';
  public items = [
   { myClass: 'red', text: '1'},
   { myClass: 'red', text: '2'},
   { myClass: 'green', text: '3'}
  ];
  public myClass = 'green';

  public constructor () {
    this.clock = new Date().toLocaleTimeString();
    setInterval( () => this.handleTimer(), 1000);
  }

  private handleTimer () {
    this.clock = new Date().toLocaleTimeString();
   // this.items.push('' + (+this.items[this.items.length - 1] + 1));
  }

}
