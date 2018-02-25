import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';

@Component({
  selector: 'app-admin-record',
  templateUrl: './admin-record.component.html',
  styleUrls: ['./admin-record.component.css']
})
export class AdminRecordComponent implements OnInit {

 
  recordsArr = [];
  constructor(private http: Http) {

    
    
  }
  
  ngOnInit() {
    this.recordsArr = [];
    for (let i = 1; i <= 5; ++i) {
      this.http.get('https://jsonplaceholder.typicode.com/posts/' + i)
        .map(res => res.json())
        .subscribe(data => {
          this.recordsArr.push(data);
          console.log(this.recordsArr);
          
        })
    }
  }
}
