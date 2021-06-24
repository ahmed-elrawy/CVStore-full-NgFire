import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

import { Alert } from './classes/alert';
import { AlertService } from './servies/alert.service';
import { LoadingService } from './servies/loading.service';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';
import { ChatService } from "./services/chat.service"
import { User } from "./classes/user";
import { Message } from './classes/message';
import { map } from "rxjs/operators";
import { AngularFirestore } from '@angular/fire/firestore';
import { ChatHead } from './classes/chat_head';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
 
  public currentUser!: User;


  dataMessage!: string;
  templetmesaage = false



  private subscriptions: Subscription[] = [];
  public alerts: Array<Alert> = [];
  public loading: boolean = false;
  constructor(
    private alertService: AlertService,
    private loadingService: LoadingService,
    public activatedRoute: ActivatedRoute,
    public chat: ChatService,
    public auth: AuthService


  ) {



}

  ngOnInit() {
    this.auth.currentUser.subscribe(user => {
      if(user)
      this.currentUser! = user;
    })
    //this for show temple message in display profile user
    
    


    this.subscriptions.push(
      this.alertService.alerts.subscribe(alert => {
        if(alert)
        this.alerts.push(alert);
      })
    )




    this.subscriptions.push(
      this.loadingService.isLoading.subscribe(isLoading => {
        this.loading = isLoading
      })
    )

  }

  // ngAfterViewInit() {
  //   this.scrollToBottom();
  // }


  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe)
  }


}


