import { Component, OnInit } from '@angular/core';
import { Data } from '@nx-angular-data/api-interfaces';
import { DataService } from '@nx-angular-data/core-data';
import { Observable } from 'rxjs';

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
    this.selectedData = emptyData;
  }

  selectData(data: Data) {
    this.selectedData = data;
  }

  deleteData(data: Data) {
    this.dataService
      .delete(data)
      .subscribe((res) => (this.datas$ = this.dataService.all()));
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
    this.dataService
      .update(data)
      .subscribe((res) => (this.datas$ = this.dataService.all()));
    this.resetDataDetails();
  }

  createData(data: Data) {
    this.dataService
      .create(data)
      .subscribe((res) => (this.datas$ = this.dataService.all()));
    this.resetDataDetails();
  }

  private getRandomID() {
    return Math.random().toString(36).substring(7);
  }

  resetDataDetails() {
    this.selectedData = emptyData;
  }
}
