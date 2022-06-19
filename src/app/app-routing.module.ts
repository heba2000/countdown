import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoopComponent } from './loop/loop.component';


const routes: Routes = [
  {
    path : "loop",
    component:LoopComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
