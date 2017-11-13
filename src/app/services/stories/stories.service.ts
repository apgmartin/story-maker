import { Injectable } from '@angular/core';
import { Story } from '../../stories/story.model';

@Injectable()
export class StoriesService {
	previewStory: Story[] = [];
	storedStories: Story[] = [];

  constructor() {
  	this.previewStory = [
  		new Story(
	  		new Date(),
				'Story 1',
				'Preorder Coffee Customer',
				'have a clear order confirmation screen',
				'have a clear record of purchase',
				'This is some more information'
				)
  		]
  }

  getPreviewStory(): Story[] {
  	return this.previewStory;
  }

  setPreviewStory(previewStory: Story): void {
  	this.previewStory[0] = previewStory;
  	console.log(this.previewStory);
  }

  removePreviewStory(): void {
  	this.previewStory = [];
  }

  addStoredStory(previewStory: Story): void {
  	this.removePreviewStory();
  	this.storedStories.push(previewStory);
  	console.log(this.storedStories);
  }

}
