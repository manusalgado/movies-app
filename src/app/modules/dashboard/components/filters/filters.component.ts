import { Component, OnInit } from '@angular/core';
import { FILTER_ITEMS } from '../../constants/dashboard';
import { Filfer } from '../../interfaces/dashboard';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.sass'],
})
export class FiltersComponent implements OnInit {

  public filterItems: Filfer[] = FILTER_ITEMS;

  constructor() { }

  ngOnInit() {}

}
