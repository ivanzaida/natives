export class TransitionStartedEvent {
	public readonly success: boolean;

	constructor(view: DataView) {
		if (view.byteLength !== 8) {
			throw new Error('Invalid view size');
		}
		this.success = view.getInt8(0) === 1;
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(8));
	}
}