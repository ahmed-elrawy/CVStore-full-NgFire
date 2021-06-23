import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//firebase
import { environment } from "../environments/environment";
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ChatComponent } from './components/chat/chat.component';
import { DialogOverviewCropeImgComponent } from './components/dialog-overview-crope-img/dialog-overview-crope-img.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { DisplayProfileUserComponent } from './pages/display-profile-user/display-profile-user.component';
import { FilterCvComponent } from './pages/filter-cv/filter-cv.component';
import { HomeComponent } from './pages/home/home.component';
import { PersolalInfoComponent } from './pages/persolal-info/persolal-info.component';
import { ProfileUserComponent } from './pages/profile-user/profile-user.component';
import { UsersComponent } from './pages/users/users.component';
import { ScrollToButtomDirective } from './servies/scroll-to-buttom.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    DialogOverviewCropeImgComponent,
    ForgotPasswordComponent,
    LoginComponent,
    SignupComponent,
    VerifyEmailComponent,
    DepartmentsComponent,
    DisplayProfileUserComponent,
    FilterCvComponent,
    HomeComponent,
    PersolalInfoComponent,
    ProfileUserComponent,
    UsersComponent,
    ScrollToButtomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
