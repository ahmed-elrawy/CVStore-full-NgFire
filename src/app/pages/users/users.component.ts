import { Component, OnInit } from '@angular/core';
import { CvBoxService } from 'src/app/services/cv-box.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/classes/user';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from "rxjs";
import { FilterCvComponent } from "../filter-cv/filter-cv.component";
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public currentUser?: User;

  userId: string = "";
  showSpinner: boolean = true


  data: Observable<any> | undefined

  constructor(
    public cv: CvBoxService,
    public activetedRouter: ActivatedRoute,
    public auth: AuthService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {


    this.auth.currentUser.subscribe(user => {
      if (user) this.currentUser = user;

    })
    this.cv.currentLoadState.subscribe(ststs => {
      this.showSpinner = ststs
    })


    this.activetedRouter.params.subscribe(params => {
      if (params['id']) {
        this.userId = params['id'];
        this.getUsers(this.userId)
      } else {
        this.cv.data.subscribe(() => this.showSpinner = false)
      }
    })


  }


  openDialog() {
    const dialogRef = this.dialog.open(FilterCvComponent, {
      width: '800px',
    });


  }

  getUsers(id: string) {
    this.cv.getUsers(id)
  }

}
