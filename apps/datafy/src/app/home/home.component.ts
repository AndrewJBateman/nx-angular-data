import { Component, OnInit } from '@angular/core';
import { Data } from '@nx-angular-data/api-interfaces';
import { DataService } from '@nx-angular-data/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'nx-angular-data-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  datas$: Observable<Data[]>


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.datas$ = this.dataService.all();
  }

}
