import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'myangularproject';
  public dateValue: Date = new Date(2022, 4, 20);
  public minDate: Date = new Date(2022, 4, 10);
  public maxDate: Date = new Date(2022, 4, 25);
}
