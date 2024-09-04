import { getStringFromDataView } from "../predef";

export class GamerUserid {
	public readonly name: string;

	constructor(view: DataView) {
		if (view.byteLength !== 24) {
			throw new Error('Invalid view size');
		}
		this.name = getStringFromDataView(view, 0, 23);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(24));
	}
}