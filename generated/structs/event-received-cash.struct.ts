export class EventReceivedCash {
	public readonly characterId: number;
	public readonly cashAmount: number;

	constructor(view: DataView) {
		if (view.byteLength !== 16) {
			throw new Error('Invalid view size');
		}
		this.characterId = view.getInt32(0, true);
		this.cashAmount = view.getInt32(8, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(16));
	}
}