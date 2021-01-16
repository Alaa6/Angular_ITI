import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../viewModel/icategory';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  CategoryList: ICategory[];
  SelectedCategory: number;
  TotalPrice : number ;
  
  constructor() { 
    this.CategoryList = [
      { ID: 1, Name: 'test Category 1'  },
      { ID: 2, Name: 'test Category 2' },
      { ID: 3, Name: 'test Category 3' }
    ]

    this.SelectedCategory = 1  
    this.TotalPrice = 0
  }

  ngOnInit(): void {
  }

}
