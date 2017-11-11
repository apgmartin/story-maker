import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreateStoryComponent } from './stories/create-story/create-story.component';
import { StoryListComponent } from './stories/story-list/story-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateStoryComponent,
    StoryListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
