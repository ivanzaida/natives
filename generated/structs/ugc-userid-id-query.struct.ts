import { getStringFromDataView } from "../predef";

export class UgcUseridIdQuery {
	public readonly userId: string[];

	constructor(view: DataView) {
		if (view.byteLength !== 1024) {
			throw new Error('Invalid view size');
		}
		this.userId = [getStringFromDataView(view, 0, 63), getStringFromDataView(view, 64, 127), getStringFromDataView(view, 128, 191), getStringFromDataView(view, 192, 255), getStringFromDataView(view, 256, 319), getStringFromDataView(view, 320, 383), getStringFromDataView(view, 384, 447), getStringFromDataView(view, 448, 511), getStringFromDataView(view, 512, 575), getStringFromDataView(view, 576, 639), getStringFromDataView(view, 640, 703), getStringFromDataView(view, 704, 767), getStringFromDataView(view, 768, 831), getStringFromDataView(view, 832, 895), getStringFromDataView(view, 896, 959), getStringFromDataView(view, 960, 1023)];
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(1024));
	}
}