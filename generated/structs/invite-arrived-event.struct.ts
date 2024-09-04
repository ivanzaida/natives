export class InviteArrivedEvent {
	public readonly inviteIndex: number;
	public readonly gameMode: number;
	public readonly isFriend: boolean;

	constructor(view: DataView) {
		if (view.byteLength !== 24) {
			throw new Error('Invalid view size');
		}
		this.inviteIndex = view.getInt32(0, true);
		this.gameMode = view.getInt32(8, true);
		this.isFriend = view.getInt8(16) === 1;
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(24));
	}
}