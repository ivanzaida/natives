import { GamerHandle } from "./gamer-handle.struct";
import { getStringFromDataView } from "../predef";

export class GamersClanData {
	public readonly gamerHandle: GamerHandle;
	public readonly clanId: number;
	public readonly clanName: string;
	public readonly clanTag: string;

	constructor(view: DataView) {
		if (view.byteLength !== 152) {
			throw new Error('Invalid view size');
		}
		this.gamerHandle = new GamerHandle(new DataView(view.buffer.slice(0, 104)));
		this.clanId = view.getInt32(104, true);
		this.clanName = getStringFromDataView(view, 112, 143);
		this.clanTag = getStringFromDataView(view, 144, 151);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(152));
	}
}