import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactanosComponent } from './contactanos/contactanos.component';

const route: Routes = [

  {path:'home', component: HomeComponent},
  {path:'nosotros', component: NosotrosComponent},
  {path:'noticia', component: NoticiaComponent},
  {path:'contactanos', component: ContactanosComponent},
  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(route),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
