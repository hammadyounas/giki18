import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http, RequestOptions, Headers, RequestMethod, Jsonp } from '@angular/http';



@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(private http: Http, public fb: FormBuilder) {
    this.createForm()
  }
  reservationForm: FormGroup;

  flights = [
    {
      'to': "karachi",
      'from': 'multan',
      'route': 'non-stop',
      'date': '25/2/2018',
      'flight': 'PA 200',
      'departure time': '7:30 PM'
    },
    {
      'to': "karachi",
      'from': 'lahore',
      'route': 'non-stop',
      'date': '26/2/2018',
      'flight': 'PA 200',
      'departure time': '8:30 PM'
    },
    {
      'to': "lahore",
      'from': 'karachi',
      'route': 'non-stop',
      'date': '27/2/2018',
      'flight': 'PA 200',
      'departure time': '9:30 PM'
    }

  ]

  createForm() {
    this.reservationForm = this.fb.group({
      to: ['', Validators.required],
      from: ['', Validators.required],
      departure: ['', Validators.required]
      // FirstName: ['', Validators.required],
      //  SurName: ['1', Validators.required],
      //NoOfSeats: ['', Validators.required],
      //WalletId: ['', Validators.required]
    })

  }
  // menu = ['karachi','lahour','multan','islamabad'];
  // men = ['islamabad','karachi','lahour','multan'];
  // isFilter = true;

  // selectedTo;
  // selectedFrom;
  // //to ;
  // onChangeTo(value,check){
  //   console.log("value",value);
  //   if(check == 'to'){
  //     this.selectedTo = value;
  //   }
  //   else if(check == 'from'){
  //     this.selectedFrom = value;
  //   }
  // }
  // from;
  // checkflight(value){
  //   // console.log("to",this.to);
  //   console.log("selectedto",this.selectedTo)
  //   console.log("selectedFrom",this.selectedFrom);
  //   console.log("event",value);
  //   for(var i; i<=this.flights.length; i++){
  //     console.log("in loop",i);
  //   }
  // }


  ngOnInit() {
  }


  save() {
    console.log(this.reservationForm.value);

    let _body = this.reservationForm.value;

    var d = new Date(this.reservationForm.value.departure);
    var n = d.toISOString();

    console.log(n);
    _body['departure'] = n;
     
    let num = Math.floor(((Math.random() + 1)*10000))
    _body['ticketId'] = num; 
    let body = JSON.stringify(_body);

    console.log("103",body);
    

    const headers = new Headers();
    headers.append('Content-Type', 'application/json') // ... Set content type to JSON
    let options = new RequestOptions({ method: RequestMethod.Post, headers: headers }); // Create a request option

    this.http.post('http://192.168.8.115:3000/api/Ticket', body, options)

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
