import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Story } from '../story.model';

import { StoriesService } from './../../services/stories/stories.service';

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateStoryComponent implements OnInit {
	title: string;
	who: string;
	what: string;
	why: string;
	moreInfo: string;

  constructor(private storiesService: StoriesService) { }

  ngOnInit() {
  }

  previewStory(): void {
  	let newStory = new Story(new Date(), this.title, this.who, this.what, this.why, this.moreInfo);

  	this.storiesService.setPreviewStory(newStory);
  }



}
