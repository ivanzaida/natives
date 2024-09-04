import { getStringFromDataView } from "../predef";

export class Leaderboard2Group {
	public readonly category: string;
	public readonly id: string;

	constructor(view: DataView) {
		if (view.byteLength !== 64) {
			throw new Error('Invalid view size');
		}
		this.category = getStringFromDataView(view, 0, 31);
		this.id = getStringFromDataView(view, 32, 63);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(64));
	}
}