export class ClanInfo {
	public readonly clanId: number;
	public readonly primary: boolean;

	constructor(view: DataView) {
		if (view.byteLength !== 16) {
			throw new Error('Invalid view size');
		}
		this.clanId = view.getInt32(0, true);
		this.primary = view.getInt8(8) === 1;
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(16));
	}
}