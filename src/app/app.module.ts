import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { NgxBarcode6Module } from 'ngx-barcode6';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { TodayReleasedMovieComponent } from './components/today-released-movie/today-released-movie.component';
import { HomeComponent } from './components/home/home.component';
import { NowShowingComponent } from './components/now-showing/now-showing.component';
import { SubHeadingTitleComponent } from './components/sub-heading-title/sub-heading-title.component';
import { MoviesComponent } from './components/movies/movies.component';
import { UpcomingMoviesComponent } from './components/upcoming-movies/upcoming-movies.component';
import { ViewAllComponent } from './components/now-showing/view-all/view-all.component';
import { ViewAllUpcomingMoviesComponent } from './components/upcoming-movies/view-all-upcoming-movies/view-all-upcoming-movies.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { PurchasedComponent } from './components/purchased/purchased.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GetTicketsComponent } from './components/get-tickets/get-tickets.component';
import { CommonTitleHeaderComponent } from './components/common-title-header/common-title-header.component';
import { CommonMovieViewComponent } from './components/common-movie-view/common-movie-view.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { ForAdminComponent } from './components/for-admin/for-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    FooterComponent,
    MenuComponent,
    TodayReleasedMovieComponent,
    HomeComponent,
    NowShowingComponent,
    SubHeadingTitleComponent,
    MoviesComponent,
    UpcomingMoviesComponent,
    ViewAllComponent,
    ViewAllUpcomingMoviesComponent,
    LoginComponent,
    SignupComponent,
    FavouritesComponent,
    PurchasedComponent,
    PageNotFoundComponent,
    GetTicketsComponent,
    CommonTitleHeaderComponent,
    CommonMovieViewComponent,
    MovieFormComponent,
    AddMovieComponent,
    EditMovieComponent,
    DialogBoxComponent,
    AllUsersComponent,
    ForAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    NgxBarcode6Module,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
