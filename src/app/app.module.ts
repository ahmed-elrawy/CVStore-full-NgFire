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



//pipe
import { SafePipe } from "./core/safe.pipe";


// Module
import { AdsenseModule } from 'ng2-adsense';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { AlertService } from './servies/alert.service';
import { LoadingService } from './servies/loading.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './core/auth.guard';
import { CountriesService } from './services/countries.service';
import { CvBoxService } from './services/cv-box.service';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatDialogModule } from '@angular/material/dialog';

import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    DialogOverviewCropeImgComponent,
    ForgotPasswordComponent,
    LoginComponent,
    SignupComponent,
    VerifyEmailComponent,
    LoadingSpinnerComponent,
    DepartmentsComponent,
    DisplayProfileUserComponent,
    FilterCvComponent,
    HomeComponent,
    PersolalInfoComponent,
    ProfileUserComponent,
    UsersComponent,
    ScrollToButtomDirective,
    SafePipe
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
    AdsenseModule.forRoot(),
    ImageCropperModule,
    MatDialogModule,
    Ng5SliderModule

  ],

  providers: [
    AlertService,
    LoadingService,
    AuthService,
    AuthGuard,
    CountriesService,
    CvBoxService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
