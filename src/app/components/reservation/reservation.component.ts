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
      'to': "karachi",
      'from':'multan',
      'route':'non-stop',
      "date":'25/2/2018',
      'flight':'PA 200',
      'departure time':'7:30 PM'
    },
    {
      'to':'karachi',
      'from':'Lahour',
      'route':'non-stop',
      "date":'25/2/2018',
      'flight':'PA 204',
      'departure time':'10:00 AM'
    },
    {
      'to':'Islamabad',
      'from':'karachi',
      'route':'non-stop',
      "date":'26/2/2018',
      'flight':'PA 205',
      'departure time':' 2:30 PM'
    },
    {
      'to':'multan',
      'from':'Lahore',
      'route':'non-stop',
      "date":'27/2/2018',
      'flight':'PA 208',
      'departure time':'5:00 PM'
    },
  ]
  menu = ['karachi','lahour','multan','islamabad'];
  men = ['islamabad','karachi','lahour','multan'];
  isFilter = true;

  selectedTo;
  selectedFrom;
  //to ;
  onChangeTo(value,check){
    console.log("value",value);
    if(check == 'to'){
      this.selectedTo = value;
    }
    else if(check == 'from'){
      this.selectedFrom = value;
    }
  }
  from;
  checkflight(value){
    // console.log("to",this.to);
    console.log("selectedto",this.selectedTo)
    console.log("selectedFrom",this.selectedFrom);
    console.log("event",value);
    for(var i; i<=this.flights.length; i++){
      console.log("in loop",i);
    }
  }


  ngOnInit() {
  }

}
