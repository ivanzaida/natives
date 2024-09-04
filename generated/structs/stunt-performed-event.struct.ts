export class StuntPerformedEvent {
	public readonly stuntType: number;
	public readonly value: number;

	constructor(view: DataView) {
		if (view.byteLength !== 16) {
			throw new Error('Invalid view size');
		}
		this.stuntType = view.getInt32(0, true);
		this.value = view.getFloat32(8, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(16));
	}
}