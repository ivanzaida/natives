export class PiMenuHideSettings {
	public readonly bitsetopt1: number;
	public readonly bitsetopt2: number;
	public readonly bitsetopt3: number;
	public readonly bitsetopt4: number;

	constructor(view: DataView) {
		if (view.byteLength !== 32) {
			throw new Error('Invalid view size');
		}
		this.bitsetopt1 = view.getInt32(0, true);
		this.bitsetopt2 = view.getInt32(8, true);
		this.bitsetopt3 = view.getInt32(16, true);
		this.bitsetopt4 = view.getInt32(24, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(32));
	}
}