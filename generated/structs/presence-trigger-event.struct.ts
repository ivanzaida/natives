import { getStringFromDataView } from "../predef";

export class PresenceTriggerEvent {
	public readonly eventNameHash: number;
	public readonly eventParam1: number;
	public readonly eventParam2: number;
	public readonly eventString: string;

	constructor(view: DataView) {
		if (view.byteLength !== 88) {
			throw new Error('Invalid view size');
		}
		this.eventNameHash = view.getInt32(0, true);
		this.eventParam1 = view.getInt32(8, true);
		this.eventParam2 = view.getInt32(16, true);
		this.eventString = getStringFromDataView(view, 24, 87);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(88));
	}
}