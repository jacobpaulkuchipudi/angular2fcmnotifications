// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { MessagingService } from "./messaging.service";
// import { AppComponent } from './app.component';
// import { AngularFireDatabase } from 'angularfire2/database';
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [MessagingService, AngularFireDatabase, AngularFireAuth],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { MessagingService } from "./messaging.service";
// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyD7sHH2ud6kG6w_fhq3j4ZSORGgg_Qv1v0",
  authDomain: "vlink-bfcb3.firebaseapp.com",
  databaseURL: "https://vlink-bfcb3.firebaseio.com",
  projectId: "vlink-bfcb3",
  storageBucket: "vlink-bfcb3.appspot.com",
  messagingSenderId: "169159523643"
};
@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [MessagingService,AngularFireDatabase, AngularFireAuth],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
