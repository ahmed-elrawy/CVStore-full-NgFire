import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, NgForm, FormControl, Form } from '@angular/forms';
import { CountriesService } from 'src/app/services/countries.service';
import { CvBoxService } from 'src/app/services/cv-box.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { User } from "../../classes/user";
import { Observable } from "rxjs";
import { LoadingService } from 'src/app/servies/loading.service';

@Component({
  selector: 'app-persolal-info',
  templateUrl: './persolal-info.component.html',
  styleUrls: ['./persolal-info.component.scss']
})
export class PersolalInfoComponent implements OnInit {
  @Input() childMessage: string | undefined;
  user: User | undefined
  departValue: Observable<string> | undefined;
  f: NgForm | undefined;
  infoForm: FormGroup | undefined;
  emailMessage: string | undefined;

  userdata: any = {}
  departmentCollection: AngularFirestoreCollection<any> | undefined;

  private validationMessages = {
    required: 'Please enter your email address.',
    email: 'Please enter a valid email address.'
  };

  // get departments(): FormArray {
  //   return this.infoForm.get('departments') as FormArray;
  // }
  get department() {
    return this.infoForm?.get('department');
  }

  constructor(public fb: FormBuilder,
    public country: CountriesService,
    public db: AngularFirestore,
    public cv: CvBoxService,
    public firestore: AngularFirestore,
    public auth: AuthService,
    private loadingService: LoadingService,
  ) {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');

  }

  ngOnInit(): void {
    this.db.doc<any>(`users/${this.childMessage}`).valueChanges().subscribe(
      user => {
        this.userdata = user;
        this.populateTestDate()

      }, (error) => {
        console.log(error);
      }
    );

    this.cv.getCategories()

    this.infoForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      age: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      jobTitle: ['', Validators.required],
      category: ['', Validators.required],
      department: ['', Validators.required],
      year_experience: ['', Validators.required],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      marital_status: ['', [Validators.required]],
      military_status: ['', [Validators.required],],

    })

  }
  populateTestDate() {

    if (this.userdata.category && this.userdata.country) {
      this.cv.getCategories()
      this.cv.getDepartments(this.userdata.category)
      this.country.onChangeCountry(this.userdata.country)
    }

    this.infoForm?.patchValue({
      name: this.userdata.name,
      email: this.userdata.email,
      phone: this.userdata.phone,
      age: this.userdata.age,
      gender: this.userdata.gender,
      jobTitle: this.userdata.jobTitle,
      category: this.userdata.category,
      department: this.userdata.departments[0],
      year_experience: this.userdata.year_experience,
      country: this.userdata.country,
      state: this.userdata.state,
      city: this.userdata.city,
      marital_status: this.userdata.marital_status,
      military_status: this.userdata.military_status,
    })



  }

  onSubmit(form: any) {
    this.loadingService.isLoading.next(true)
    alert("info updated")
    const department = new FormArray([this.department!]);
    // const departments = this.infoForm.setControl("departments", department);
    const departments = department.value


    const {
      name,
      email,
      password,
      phone,
      age,
      gender,
      jobTitle,
      category,
      year_experience,
      country,
      state,
      city,
      marital_status,
      military_status,
    } = form.value;


    let data = Object.assign({ profile_ready: true, departments }, form.value);
    delete data.department;

    this.firestore.doc('users/' + this.user?.user_id).update(data).then((res) =>
      this.loadingService.isLoading.next(false)
    )
      .catch(err => console.log(err + " errrrrrrrrrrrrrrrrrrrrrrrr"))

  }

  get FFormControl() {
    return this.infoForm!.controls;
  }
}
