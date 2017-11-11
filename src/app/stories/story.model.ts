export class Story {
	public title: string;
	public who: string;
	public what: string;
	public why: string;
	public moreInfo: string;

	constructor(title: string, who: string, what: string, why: string, moreInfo: string) {
		this.title = title;
		this.who = who;
		this.what = what;
		this.why = why;
		this.moreInfo = moreInfo;
	}
}