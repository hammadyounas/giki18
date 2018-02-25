import { PropertiesComponent } from './components/properties/properties.component';
import { BlocksComponent } from './components/blocks/blocks.component';
import { MybalanceComponent } from "./components/mybalance/mybalance.component";
import { BlockCycleComponent } from './components/block-cycle/block-cycle.component';
import { ReservationComponent } from './components/reservation/reservation.component'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRecordComponent } from './components/admin-record/admin-record.component';



const routes: Routes = [
  
  {
    path: 'reservation',
    data: {
      title: 'reservation',
      urls: [{ title: 'Dashboard', url: '/' }, { title: 'reservation' }]
    }, component: ReservationComponent
  },
  {
    path: 'mybalance',
    data: {
      title: 'Mybalance',
      urls: [{ title: 'Dashboard' }, { title: 'Mybalance' }]
    }, component: MybalanceComponent
  },
  {
    path: 'admin',
    data: {
      title: 'Admin',
      urls: [{ title: 'Admin' }, { title: 'Admin' }]
    }, component: AdminRecordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }