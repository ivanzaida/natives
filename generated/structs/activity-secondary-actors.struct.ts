import { getStringFromDataView } from "../predef";

export class ActivitySecondaryActors {
	public readonly secondaryActors: string[];

	constructor(view: DataView) {
		if (view.byteLength !== 256) {
			throw new Error('Invalid view size');
		}
		this.secondaryActors = [getStringFromDataView(view, 0, 31), getStringFromDataView(view, 32, 63), getStringFromDataView(view, 64, 95), getStringFromDataView(view, 96, 127), getStringFromDataView(view, 128, 159), getStringFromDataView(view, 160, 191), getStringFromDataView(view, 192, 223), getStringFromDataView(view, 224, 255)];
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(256));
	}
}