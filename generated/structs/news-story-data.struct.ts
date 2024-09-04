import { getStringFromDataView } from "../predef";

export class NewsStoryData {
	public readonly title: string;
	public readonly subtitle: string;
	public readonly content: string;
	public readonly url: string;
	public readonly headline: string;
	public readonly textureName: string;

	constructor(view: DataView) {
		if (view.byteLength !== 192) {
			throw new Error('Invalid view size');
		}
		this.title = getStringFromDataView(view, 0, 31);
		this.subtitle = getStringFromDataView(view, 32, 63);
		this.content = getStringFromDataView(view, 64, 95);
		this.url = getStringFromDataView(view, 96, 127);
		this.headline = getStringFromDataView(view, 128, 159);
		this.textureName = getStringFromDataView(view, 160, 191);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(192));
	}
}