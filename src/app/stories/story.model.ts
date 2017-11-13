export class Story {
	public creationDate: Date;
	public title: string;
	public who: string;
	public what: string;
	public why: string;
	public moreInfo: string;

	constructor(creationDate: Date, title: string, who: string, what: string, why: string, moreInfo: string) {
		this.creationDate = creationDate;
		this.title = title;
		this.who = who;
		this.what = what;
		this.why = why;
		this.moreInfo = moreInfo;
	}
}