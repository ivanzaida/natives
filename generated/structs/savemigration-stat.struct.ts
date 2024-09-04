import { getStringFromDataView } from "../predef";

export class SavemigrationStat {
	public readonly name: string;
	public readonly value: string;

	constructor(view: DataView) {
		if (view.byteLength !== 128) {
			throw new Error('Invalid view size');
		}
		this.name = getStringFromDataView(view, 0, 63);
		this.value = getStringFromDataView(view, 64, 127);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(128));
	}
}