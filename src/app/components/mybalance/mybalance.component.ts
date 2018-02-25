import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';

@Component({
  selector: 'app-mybalance',
  templateUrl: './mybalance.component.html',
  styleUrls: ['./mybalance.component.css']
})
export class MybalanceComponent implements OnInit {

  recordsArr = [];
  constructor(private http: Http) {

    
    
  }
  
  ngOnInit() {
    this.recordsArr = [];
   
      this.http.get('http://192.168.8.115:3000/api/Ticket')
        .map(res => res.json())
        .subscribe(data => {
          this.recordsArr = data;
          
        })
    
  }

  save() {
    
  }



}
