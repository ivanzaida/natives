export class NetworkSignInStateChanged {
	public readonly index: number;
	public readonly isActiveUser: boolean;
	public readonly wasSignedIn: boolean;
	public readonly wasOnline: boolean;
	public readonly isSignedIn: boolean;
	public readonly isOnline: boolean;
	public readonly isDuplicateSignIn: boolean;

	constructor(view: DataView) {
		if (view.byteLength !== 56) {
			throw new Error('Invalid view size');
		}
		this.index = view.getInt32(0, true);
		this.isActiveUser = view.getInt8(8) === 1;
		this.wasSignedIn = view.getInt8(16) === 1;
		this.wasOnline = view.getInt8(24) === 1;
		this.isSignedIn = view.getInt8(32) === 1;
		this.isOnline = view.getInt8(40) === 1;
		this.isDuplicateSignIn = view.getInt8(48) === 1;
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(56));
	}
}