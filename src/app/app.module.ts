import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdTabsModule} from '@angular/material';
import { MaterialModule} from '@angular/material';
import { FormsModule } from '@angular/forms'
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { TabsPageComponent } from './tabs-page/tabs-page.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';

import { ChatMessageService } from './chat-message/chat-message.service';
import { FeedComponent } from './feed/feed.component';
import { MessageComponent } from './message/message.component';
import { ChatroomComponent } from './chatroom/chatroom.component';



@NgModule({
  declarations: [
    AppComponent,
    TabsPageComponent,
    ChatMessageComponent,
    FeedComponent,
    MessageComponent,
    ChatroomComponent
  ],
  imports: [
    BrowserModule,
    MdTabsModule,
    MaterialModule,
    FormsModule,
    NoopAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase_config),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [ChatMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
