import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { PurchasedComponent } from './components/purchased/purchased.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ViewAllComponent } from './components/now-showing/view-all/view-all.component';
import { ViewAllUpcomingMoviesComponent } from './components/upcoming-movies/view-all-upcoming-movies/view-all-upcoming-movies.component';
import { GetTicketsComponent } from './components/get-tickets/get-tickets.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { ForAdminComponent } from './components/for-admin/for-admin.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'favourites', component: FavouritesComponent
  },
  {
    path: 'purchased', component: PurchasedComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'home/now-showing-view-all', component: ViewAllComponent
  },
  {
    path: 'home/upcoming-movies-view-all', component: ViewAllUpcomingMoviesComponent
  },
  {
    path: 'get-ticket', component: GetTicketsComponent
  },
  {
    path: 'for-admin', component: ForAdminComponent
  },
  {
    path: 'add-movie', component: AddMovieComponent
  },
  {
    path: 'edit-movie', component: EditMovieComponent
  },
  {
    path: 'all-users-list', component: AllUsersComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
