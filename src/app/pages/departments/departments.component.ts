import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CvBoxService } from 'src/app/services/cv-box.service';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.sass']
})
export class DepartmentsComponent implements OnInit {

  public currentUser?: User |  null;
  departmenrId: string = "";
  showSpinner: boolean = true

  constructor(
    public cv: CvBoxService,
    public activetedRouter: ActivatedRoute,
    public auth: AuthService) { }

  ngOnInit() {
    this.auth.currentUser.subscribe(user => {
      this.currentUser = user;
    })
    this.activetedRouter.params.subscribe(params => {
      this.departmenrId = params['id'];
      this.getDepartments(this.departmenrId)
    })
  }
  getDepartments(id: any) {
    this.cv.getDepartments(id)
    this.cv.departments.subscribe(() => this.showSpinner = false)

  }

}