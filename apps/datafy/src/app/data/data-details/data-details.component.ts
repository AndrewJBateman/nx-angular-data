import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Data } from '@nx-angular-data/api-interfaces';

@Component({
  selector: 'nx-angular-data-details',
  templateUrl: './data-details.component.html',
  styleUrls: ['./data-details.component.scss'],
})
export class DataDetailsComponent implements OnInit {
  currentData: Data;
  dataTitle = '';

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set data(value: Data) {
    if (value) this.dataTitle = value.title;
    this.currentData = { ...value };
  }

  constructor() {}

  ngOnInit(): void {}
}
