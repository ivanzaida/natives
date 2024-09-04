export class OutfitCompStruct {
	public readonly nameHash: number;
	public readonly enumValue: number;
	public readonly compType: number;

	constructor(view: DataView) {
		if (view.byteLength !== 24) {
			throw new Error('Invalid view size');
		}
		this.nameHash = view.getInt32(0, true);
		this.enumValue = view.getInt32(8, true);
		this.compType = view.getInt32(16, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(24));
	}
}