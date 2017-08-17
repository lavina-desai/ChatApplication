import { Injectable } from '@angular/core';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { ChatMessage } from '../models/chat-message.model';

@Injectable()
export class ChatMessageService {

  user: any;
  chatMessages:FirebaseListObservable<ChatMessage[]>;
  chatMessage: ChatMessage;
  userName: Observable<string>;

  constructor(private _db: AngularFireDatabase,private _afAuth: AngularFireAuth) { 
    this._afAuth.authState.subscribe(auth =>{
      if(auth !== undefined && auth !== null){
        this.user = auth;
      }
    });
  }

  sendMessage(msg: string){
    const timestamp = this.getTimeStamp();
    // const email = this.user.email;
    const email = 'test@gmail.com';
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      message : msg,
      timeSent : timestamp,
      // userName : this.userName,
      userName : 'test-user',
      email : email
    });
  }

  getMessages():FirebaseListObservable<ChatMessage[]>{
    return this._db.list('messages',{
      query:{
        limitToLast: 25,
        orderBykey: true
      }
    });
  }

  getTimeStamp(){
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
                (now.getUTCMonth() + 1) + '/' +
                now.getUTCDate();
    const time = now.getUTCHours() + ':' +
                 now.getUTCMinutes() + ':' +
                 now.getUTCSeconds();

    return (date + ' ' + time);   
  }

}
