import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-querybuilder',
  templateUrl: './querybuilder.component.html',
  styleUrls: ['./querybuilder.component.scss']
})
export class QuerybuilderComponent implements OnInit {

  bsConfig: Partial<BsDatepickerConfig> = new BsDatepickerConfig();
  public data : any
 
  constructor() { }

  ngOnInit() {
    this.bsConfig.containerClass = 'theme-default';



  }
 

  
}
