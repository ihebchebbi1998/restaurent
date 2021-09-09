import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { StartComponent } from './components/start/start.component';
import { HistoryComponent } from './components/history/history.component';
import { VideoComponent } from './components/video/video.component';
import { MenuComponent } from './components/menu/menu.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { BlogComponent } from './components/blog/blog.component';
import { MenuSectionComponent } from './components/menu-section/menu-section.component';
import { ChefComponent } from './components/chef/chef.component';
import { ArticleComponent } from './components/article/article.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminPlatsComponent } from './components/admin-plats/admin-plats.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminChefsComponent } from './components/admin-chefs/admin-chefs.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { DisplayPlatComponent } from './components/display-plat/display-plat.component';
import { DisplayChefComponent } from './components/display-chef/display-chef.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EditPlatComponent } from './components/edit-plat/edit-plat.component';
import { EditChefComponent } from './components/edit-chef/edit-chef.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { AsterixPipe } from './pipes/asterix.pipe';
import{HttpClientModule} from "@angular/common/http";
import { AdminContactsComponent } from './components/admin-contacts/admin-contacts.component';
import { AdminArticlesComponent } from './components/admin-articles/admin-articles.component';
import { ContactComponent } from './components/contact/contact.component';
import { DisplayArticleComponent } from './components/display-article/display-article.component';
import { SignupChefComponent } from './components/signup-chef/signup-chef.component';
import { SearchComponent } from './components/search/search.component';
import { MenuToOrderComponent } from './components/menu-to-order/menu-to-order.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { WeatherComponent } from './components/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    BannerComponent,
    StartComponent,
    HistoryComponent,
    VideoComponent,
    MenuComponent,
    ChefsComponent,
    ReservationComponent,
    TestimonialsComponent,
    BlogComponent,
    MenuSectionComponent,
    ChefComponent,
    ArticleComponent,
    AdminComponent,
    AdminPlatsComponent,
    AdminUsersComponent,
    AdminChefsComponent,
    AddChefComponent,
    AddPlatComponent,
    AddArticleComponent,
    DisplayUserComponent,
    DisplayPlatComponent,
    DisplayChefComponent,
    EditUserComponent,
    EditPlatComponent,
    EditChefComponent,
    ReversePipe,
    AsterixPipe,
    AdminContactsComponent,
    AdminArticlesComponent,
    ContactComponent,
    DisplayArticleComponent,
    SignupChefComponent,
    SearchComponent,
    MenuToOrderComponent,
    MyOrdersComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
