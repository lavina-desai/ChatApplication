import { Component, OnInit,OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ChatMessage } from '../models/chat-message.model';
import { ChatMessageService } from '../chat-message/chat-message.service';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges  {
  feed : FirebaseListObservable<ChatMessage[]>;

  constructor(private _chatMsg : ChatMessageService) { }

  ngOnInit() {
    this.feed = this._chatMsg.getMessages();
  }

  ngOnChanges(){
    this.feed = this._chatMsg.getMessages();
  }

}
