import { getStringFromDataView } from "../predef";

export class GamePresenceEventStatUpdate {
	public readonly statHash: number;
	public readonly fromGamer: string;
	public readonly value: number;
	public readonly fValue: number;
	public readonly value2: number;
	public readonly stringValue: string;

	constructor(view: DataView) {
		if (view.byteLength !== 160) {
			throw new Error('Invalid view size');
		}
		this.statHash = view.getInt32(0, true);
		this.fromGamer = getStringFromDataView(view, 8, 71);
		this.value = view.getInt32(72, true);
		this.fValue = view.getFloat32(80, true);
		this.value2 = view.getInt32(88, true);
		this.stringValue = getStringFromDataView(view, 96, 159);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(160));
	}
}