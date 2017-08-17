import { Component, OnInit } from '@angular/core';
import { ChatMessageService } from './chat-message.service';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css'],
  providers: [ChatMessageService]
})
export class ChatMessageComponent implements OnInit {
  message: string;

  constructor(private _chatMsg : ChatMessageService) { }

  ngOnInit() {
  }

  send(){
    this._chatMsg.sendMessage(this.message);
    this.message = '';
  }

  handleSubmit(event){
    if(event.keyCode === 13){
      this.send();
    }
  }

}
