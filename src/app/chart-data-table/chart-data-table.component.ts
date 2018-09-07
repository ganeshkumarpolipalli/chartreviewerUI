import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-data-table',
  templateUrl: './chart-data-table.component.html',
  styleUrls: ['./chart-data-table.component.scss']
})
export class ChartDataTableComponent implements OnInit {
  public data : any
  chartData = false;
  constructor() { }

  ngOnInit() {

   
    this.data = [{'charts':'11111', 'Mr':'111111', 'email' :'ssd','age' :'34' },
    {'charts':'1212', 'Mr' :'121212', 'age' :'34', 'city':'Noida' },
    {'charts':'121212', 'Mr' : '121212', 'age' :'34', 'city':'Noida' },
    {'charts':'12144', 'Mr' :'121212', 'age' :'34', 'city':'Noida' },
    {'charts':'12555', 'Mr' :'121212', 'age' :'34', 'city':'Noida' },
    {'charts':'555', 'Mr' :'121212', 'age' :'34', 'city':'Noida' },
    {'charts':'555555', 'Mr' :'121212', 'age' :'34', 'city':'Noida' },
    {'charts':'99999999', 'Mr' :'121212', 'age' :'34', 'city':'Noida' },
    {'charts':'87777', 'Mr' :'121212', 'age' :'34', 'city':'Noida' }
   ]
  }
  searchData() {
    console.log("searchData");
    this.chartData = true;
      }
}
