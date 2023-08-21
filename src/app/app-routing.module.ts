import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TuringMachineComponent } from './turing-machine/turing-machine.component';

const routes: Routes = [
  { path: '', component: TuringMachineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
