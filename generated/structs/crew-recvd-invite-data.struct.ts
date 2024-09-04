import { NetworkClanDesc } from "./network-clan-desc.struct";
import { getStringFromDataView } from "../predef";

export class CrewRecvdInviteData {
	public readonly clanDesc: NetworkClanDesc;
	public readonly gTag: string;
	public readonly msg: string;

	constructor(view: DataView) {
		if (view.byteLength !== 240) {
			throw new Error('Invalid view size');
		}
		this.clanDesc = new NetworkClanDesc(new DataView(view.buffer.slice(0, 176)));
		this.gTag = getStringFromDataView(view, 176, 207);
		this.msg = getStringFromDataView(view, 208, 239);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(240));
	}
}