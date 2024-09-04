import { GamerHandle } from "./gamer-handle.struct";

export class NetworkPartyInvite {
	public readonly invitees: GamerHandle[];

	constructor(view: DataView) {
		if (view.byteLength !== 3224) {
			throw new Error('Invalid view size');
		}
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(3224));
	}
}