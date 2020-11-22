// import { customer } from './../customer';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-data-page',
  templateUrl: './data-page.component.html',
  styleUrls: ['./data-page.component.css']
})
export class DataPageComponent implements OnInit {
  customers= [];
  displayedColumns: string[] = ['name', 'city'];
  constructor(private dataService: DataService) { 
    
  }

  ngOnInit(): void {
    
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.customers = data;
     });
  }

}
