import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactComponent } from './components/contact/contact.component';
import { DisplayArticleComponent } from './components/display-article/display-article.component';
import { DisplayChefComponent } from './components/display-chef/display-chef.component';
import { DisplayPlatComponent } from './components/display-plat/display-plat.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { EditChefComponent } from './components/edit-chef/edit-chef.component';
import { EditPlatComponent } from './components/edit-plat/edit-plat.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuToOrderComponent } from './components/menu-to-order/menu-to-order.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { SearchComponent } from './components/search/search.component';
import { SignupChefComponent } from './components/signup-chef/signup-chef.component';
import { SignupComponent } from './components/signup/signup.component';
import { WeatherComponent } from './components/weather/weather.component';


const routes: Routes = [
 //  path:''=>http://localhost:4200/ : url de base
 { path:'', component:HomeComponent},
// path:'login'=>http://localhost:4200/login
  { path:'login', component:LoginComponent},
  //path:'signup'=>http://localhost:4200/signup
  { path:'signup', component:SignupComponent},
  { path:'signupAdmin', component:SignupComponent},
  {path:'admin' , component:AdminComponent},
  {path:'addChef',component:AddChefComponent},
  {path:'addPlat',component:AddPlatComponent},
  {path:'addArticle',component:AddArticleComponent},
  {path:'contact',component:ContactComponent},
  {path:'displayUser/:id',component:DisplayUserComponent},
  {path:'displayPlat/:id',component:DisplayPlatComponent},
  {path:'displayChef/:id',component:DisplayChefComponent},
  {path:'editUser/:id',component:EditUserComponent},
  {path:'editPlat/:id',component:EditPlatComponent},
  {path:'editChef/:id',component:AddChefComponent},
  {path:'editArticle/:id',component:AddArticleComponent},
  {path:'displayArticle/:id',component:DisplayArticleComponent},
  {path:'signupChef',component:SignupChefComponent},
  {path:'search',component:SearchComponent},
  {path:'menuToOrder',component:MenuToOrderComponent},
  {path:'myOrders',component:MyOrdersComponent},
  {path:'weather',component:WeatherComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
