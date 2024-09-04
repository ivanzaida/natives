import { getStringFromDataView } from "../predef";

export class UgcDescription {
	public readonly textLabel: string[];

	constructor(view: DataView) {
		if (view.byteLength !== 512) {
			throw new Error('Invalid view size');
		}
		this.textLabel = [getStringFromDataView(view, 0, 63), getStringFromDataView(view, 64, 127), getStringFromDataView(view, 128, 191), getStringFromDataView(view, 192, 255), getStringFromDataView(view, 256, 319), getStringFromDataView(view, 320, 383), getStringFromDataView(view, 384, 447), getStringFromDataView(view, 448, 511)];
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(512));
	}
}