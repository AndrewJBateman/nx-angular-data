import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Data } from '@nx-angular-data/api-interfaces';

@Component({
  selector: 'nx-angular-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {
    @Input() datas: Data[] = [];
    @Input() readonly = false;
    @Output() selected = new EventEmitter();
    @Output() deleted = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
