import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//components
import { ChatComponent } from './components/chat/chat.component';
import { DialogOverviewCropeImgComponent } from './components/dialog-overview-crope-img/dialog-overview-crope-img.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';


//pages
import { DepartmentsComponent } from './pages/departments/departments.component';
import { DisplayProfileUserComponent } from './pages/display-profile-user/display-profile-user.component';
import { FilterCvComponent } from './pages/filter-cv/filter-cv.component';
import { HomeComponent } from './pages/home/home.component';
import { PersolalInfoComponent } from './pages/persolal-info/persolal-info.component';
import { ProfileUserComponent } from './pages/profile-user/profile-user.component';
import { UsersComponent } from './pages/users/users.component';

//services
import { AuthService } from './services/auth.service';
import { AuthGuard } from './core/auth.guard';
import { CountriesService } from './services/countries.service';
import { CvBoxService } from './services/cv-box.service';
import { AlertService } from './servies/alert.service';
import { LoadingService } from './servies/loading.service';
//Directive
import { SafePipe } from './core/safe.pipe';
import { ScrollToButtomDirective } from './servies/scroll-to-buttom.directive';

// Module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
//FireStore
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

//ng 
import { AdsenseModule } from 'ng2-adsense';
import { ImageCropperModule } from 'ngx-image-cropper';
import { Ng5SliderModule } from 'ng5-slider';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


//material
import { MaterialModule } from './material/material/material.module';
import { MatDialogModule } from '@angular/material/dialog';





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
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AdsenseModule.forRoot(),
    ImageCropperModule,
    MatDialogModule,
    Ng5SliderModule,
    MaterialModule,
    NgbDropdownModule




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
