import { PropertiesComponent } from './components/properties/properties.component';
import { BlocksComponent } from './components/blocks/blocks.component';
import { BlockCycleComponent } from './components/block-cycle/block-cycle.component';
import { ReservationComponent } from './components/reservation/reservation.component'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



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
      title: 'mybalance',
      urls: [{ title: 'Dashboard' }, { title: 'mybalance' }]
    }, component: BlocksComponent
  },
  {
    path: 'properties',
    data: {
      title: 'Properties',
      urls: [{ title: 'Properties' }, { title: 'Properties' }]
    }, component: PropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }