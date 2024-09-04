export class InteriorRoom {
	public readonly nameHash: number;
	public readonly numberOfLayoutNodes: number;

	constructor(view: DataView) {
		if (view.byteLength !== 16) {
			throw new Error('Invalid view size');
		}
		this.nameHash = view.getInt32(0, true);
		this.numberOfLayoutNodes = view.getInt32(8, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(16));
	}
}