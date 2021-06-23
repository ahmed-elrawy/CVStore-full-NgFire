import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileUserComponent } from './pages/profile-user/profile-user.component';
import { AuthGuard } from './core/auth.guard';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { DisplayProfileUserComponent } from './pages/display-profile-user/display-profile-user.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { UsersComponent } from './pages/users/users.component';
import { FilterCvComponent } from './pages/filter-cv/filter-cv.component';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'department/:id', component: DepartmentsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UsersComponent },
  { path: 'profile', component: ProfileUserComponent, canActivate: [AuthGuard] },
  { path: 'profile/info', component: ProfileUserComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent},
  { path: 'display-profile-use/:id', component: DisplayProfileUserComponent },
  { path: 'filter-cv', component: FilterCvComponent },
  { path: 'chats/:id', component: ChatComponent, canActivate: [AuthGuard] }


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
