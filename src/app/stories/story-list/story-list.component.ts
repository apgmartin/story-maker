import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Story } from '../story.model';

import { StoriesService } from './../../services/stories/stories.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StoryListComponent implements OnInit {
	previewStory: Story[];


  constructor(private storiesService: StoriesService) {
  	
  }

  ngOnInit() {
  	this.getPreviewStory();
  }

  getPreviewStory(): void {
  	this.previewStory = this.storiesService.getPreviewStory();
  }

  removePreviewStory(): void {
  	this.storiesService.removePreviewStory();
  	this.getPreviewStory();
  }

  storeStory(previewStory: Story): void {
  	this.storiesService.addStoredStory(previewStory);
  	this.removePreviewStory();
  }
}
