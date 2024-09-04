export class NetScMembershipInfo {
	public readonly hasMembership: boolean;
	public readonly membershipStartPosix: number;
	public readonly membershipEndPosix: number;

	constructor(view: DataView) {
		if (view.byteLength !== 24) {
			throw new Error('Invalid view size');
		}
		this.hasMembership = view.getInt8(0) === 1;
		this.membershipStartPosix = view.getInt32(8, true);
		this.membershipEndPosix = view.getInt32(16, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(24));
	}
}