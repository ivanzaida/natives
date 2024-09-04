import { getStringFromDataView } from "../predef";

export class UgcPathsStruct {
	public readonly tl63Path: string[];

	constructor(view: DataView) {
		if (view.byteLength !== 128) {
			throw new Error('Invalid view size');
		}
		this.tl63Path = [getStringFromDataView(view, 0, 63), getStringFromDataView(view, 64, 127)];
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(128));
	}
}