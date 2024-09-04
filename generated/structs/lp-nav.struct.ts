export class LpNav {
	public readonly tab: number;
	public readonly hoverTile: number;
	public readonly leftBy: number;
	public readonly clickedTile: number;
	public readonly exitLp: boolean;

	constructor(view: DataView) {
		if (view.byteLength !== 40) {
			throw new Error('Invalid view size');
		}
		this.tab = view.getInt32(0, true);
		this.hoverTile = view.getInt32(8, true);
		this.leftBy = view.getInt32(16, true);
		this.clickedTile = view.getInt32(24, true);
		this.exitLp = view.getInt8(32) === 1;
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(40));
	}
}