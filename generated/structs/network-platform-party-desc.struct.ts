import { GamerInfo } from "./gamer-info.struct";

export class NetworkPlatformPartyDesc {
	public readonly memberCount: number;
	public readonly memberInfo: GamerInfo[];
	public readonly isInSession: boolean;

	constructor(view: DataView) {
		if (view.byteLength !== 5392) {
			throw new Error('Invalid view size');
		}
		this.memberCount = view.getInt32(0, true);
		this.isInSession = view.getInt8(5384) === 1;
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(5392));
	}
}