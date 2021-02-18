import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TypeComponent } from './components/type/type.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { FinalComponent } from './components/final/final.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "type", component: TypeComponent},
  {path: "order", component: OrderFormComponent},
  {path: "final", component: FinalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
