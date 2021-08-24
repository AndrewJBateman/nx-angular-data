import { Component, OnInit } from '@angular/core';
import { Data } from '@nx-angular-data/api-interfaces';

@Component({
  selector: 'nx-angular-data-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  datas: Data[] = [
    {
      id: '1',
      title: 'DMDINTA',
      description: 'DEMAND INTERVAL FLAG A',
    },
    {
      id: '2',
      title: 'TLCPLOT',
      description: 'TC ENERGY PLOT POINT',
    },
    {
      id: '3',
      title: '42PH002',
      description: 'PH AGUA SERVICO P/CEMAP',
    },
    {
      id: '4',
      title: '170FI28',
      description: 'GN PARA COP599',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
