import { Component, Input, OnInit } from '@angular/core';
import { MoviePayload } from '../../entities/dashboard';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent implements OnInit {

  @Input() movies: MoviePayload[];

  constructor() { }

  ngOnInit() {}

}
