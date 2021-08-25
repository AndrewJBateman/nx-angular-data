import { Component, OnInit } from '@angular/core';
import { Data } from '@nx-angular-data/api-interfaces';
import { DataService } from '@nx-angular-data/core-data';
import { Observable } from 'rxjs';

const mockDatas: Data[] = [
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

const emptyData: Data = {
  id: null,
  title: '',
  description: '',
};

@Component({
  selector: 'nx-angular-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit {
  datas: Data[];
  datas$: Observable<Data[]>;
  selectedData: Data;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.datas$ = this.dataService.all();
    this.datas = mockDatas;
    this.selectedData = emptyData;
  }

  selectData(data: Data) {
    this.selectedData = data;
  }

  deleteData(data: Data) {
    this.datas = this.datas.filter((d) => data.id !== d.id);
    this.selectedData = emptyData;
  }

  saveData(data: Data) {
    if (data.id) {
      this.updateData(data);
    } else {
      this.createData(data);
    }
  }

  updateData(data: Data) {
    this.datas = this.datas.map((d) => {
      return data.id === d.id ? data : d;
    });
    this.resetDataDetails();
  }

  createData(data: Data) {
    const newData = {
      id: this.getRandomID(),
      title: data.title,
      description: data.description,
    };
    this.datas = [...this.datas, newData];
    this.resetDataDetails();
  }

  private getRandomID() {
    return Math.random().toString(36).substring(7);
  }

  resetDataDetails() {
    this.selectedData = emptyData;
  }
}
