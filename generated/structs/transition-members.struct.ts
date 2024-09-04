import { GamerInfo } from "./gamer-info.struct";

export class TransitionMembers {
	public readonly memberCount: number;
	public readonly memberInfo: GamerInfo[];

	constructor(view: DataView) {
		if (view.byteLength !== 5384) {
			throw new Error('Invalid view size');
		}
		this.memberCount = view.getInt32(0, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(5384));
	}
}