export class StatDate {
	public readonly year: number;
	public readonly month: number;
	public readonly day: number;
	public readonly hour: number;
	public readonly minute: number;
	public readonly seconds: number;
	public readonly milliseconds: number;

	constructor(view: DataView) {
		if (view.byteLength !== 56) {
			throw new Error('Invalid view size');
		}
		this.year = view.getInt32(0, true);
		this.month = view.getInt32(8, true);
		this.day = view.getInt32(16, true);
		this.hour = view.getInt32(24, true);
		this.minute = view.getInt32(32, true);
		this.seconds = view.getInt32(40, true);
		this.milliseconds = view.getInt32(48, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(56));
	}
}