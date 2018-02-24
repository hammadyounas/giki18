import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor() { }
  flights = [
    {
      "date":'25/2/2018',
      'flight':'PA 200',
      'departure time':'7:30 PM'
    },
    {
      'to':'karachi',
      'from':'Lahour',
      "date":'25/2/2018',
      'flight':'PA 204',
      'departure time':'10:00 AM'
    },
    {
      'to':'Islamabad',
      'from':'karachi',
      "date":'26/2/2018',
      'flight':'PA 205',
      'departure time':' 2:30 PM'
    },
    {
      'to':'multan',
      'from':'Lahour',
      "date":'27/2/2018',
      'flight':'PA 208',
      'departure time':'5:00 PM'
    },
  ]
  menu = ['karachi','lahour','multan','islamabad']


  ngOnInit() {
  }

}
