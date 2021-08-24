import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'nx-angular-data-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  links = [
    { path: '/', icon: 'home', title: 'Home' },
    { path: '/data', icon: 'view_list', title: 'Data' },
  ];
  constructor(private http: HttpClient) {}
}
