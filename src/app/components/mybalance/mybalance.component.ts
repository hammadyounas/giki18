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
   
      this.http.get('http://192.168.8.112:3000/api/Ticket')
        .map(res => res.json())
        .subscribe(data => {
          this.recordsArr = data;
          
        })
    
  }

  save() {

    let _body = {

      moneyId : 1,
      amount : 3500
    };

    let body = JSON.stringify(_body);

    console.log("103", body);


    const headers = new Headers();
    headers.append('Content-Type', 'application/json') // ... Set content type to JSON
    let options = new RequestOptions({ method: RequestMethod.Post, headers: headers }); // Create a request option

    this.http.post('http://192.168.8.112:3000/api/Money', body, options)

      .subscribe(val => {
        console.log(val);
      },
        response => {
          console.log(response);
        },
        () => {
        })

  }


}
