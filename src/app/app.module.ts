import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreateStoryComponent } from './stories/create-story/create-story.component';
import { StoryListComponent } from './stories/story-list/story-list.component';

import { StoriesService } from './services/stories/stories.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateStoryComponent,
    StoryListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    StoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
