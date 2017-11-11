import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Story } from '../story.model';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StoryListComponent implements OnInit {
	stories: Story[] = [
		new Story(
			'Story 1',
			'Preorder Coffee Customer',
			'A clear order confirmation',
			'I have a clear record of purchase',
			'This is some more information'
			)
		]

  constructor() { }

  ngOnInit() {
  }

}
