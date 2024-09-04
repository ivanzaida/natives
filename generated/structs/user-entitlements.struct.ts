import { EUserEntitlementStatus } from "../enums";

export class UserEntitlements {
	public readonly storyMode: EUserEntitlementStatus;

	constructor(view: DataView) {
		if (view.byteLength !== 8) {
			throw new Error('Invalid view size');
		}
		this.storyMode = view.getInt32(0, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(8));
	}
}