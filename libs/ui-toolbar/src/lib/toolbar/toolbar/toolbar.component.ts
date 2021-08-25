import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'nx-angular-data-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() sidenav = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
