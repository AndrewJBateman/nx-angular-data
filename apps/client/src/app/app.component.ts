import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Data } from '@nx-angular-data/api-interfaces';
import { DataService } from '@nx-angular-data/core-data';

@Component({
  selector: 'nx-angular-data-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.data$ = this.dataService.all();
  }
  data$: Observable<Data[]>

}
