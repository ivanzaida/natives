export class ScadminUpdateEvent {
	public readonly fullRefreshRequested: number;
	public readonly updatePlayerBalance: number;
	public readonly awardTypeHash: number;
	public readonly awardAmount: number;
	public readonly items: number[];

	constructor(view: DataView) {
		if (view.byteLength !== 192) {
			throw new Error('Invalid view size');
		}
		this.fullRefreshRequested = view.getInt32(0, true);
		this.updatePlayerBalance = view.getInt32(8, true);
		this.awardTypeHash = view.getInt32(16, true);
		this.awardAmount = view.getInt32(24, true);
		this.items = [view.getInt32(32, true), view.getInt32(40, true), view.getInt32(48, true), view.getInt32(56, true), view.getInt32(64, true), view.getInt32(72, true), view.getInt32(80, true), view.getInt32(88, true), view.getInt32(96, true), view.getInt32(104, true), view.getInt32(112, true), view.getInt32(120, true), view.getInt32(128, true), view.getInt32(136, true), view.getInt32(144, true), view.getInt32(152, true), view.getInt32(160, true), view.getInt32(168, true), view.getInt32(176, true), view.getInt32(184, true)];
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(192));
	}
}