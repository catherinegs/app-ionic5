import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { AppareilsPage } from '../appareils/appareils'

const routes: Routes = [
  {
    path: '', component: HomePage},
  { path: '', component: AppareilsPage}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
