import { TThreadid } from "../typedefs";

export class BroadcastVariablesUpdated {
	public readonly thread: TThreadid;
	public readonly type: number;

	constructor(view: DataView) {
		if (view.byteLength !== 16) {
			throw new Error('Invalid view size');
		}
		this.thread = view.getInt32(0, true);
		this.type = view.getInt32(8, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(16));
	}
}