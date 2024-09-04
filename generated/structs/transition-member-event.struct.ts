import { getStringFromDataView } from "../predef";
import { GamerHandle } from "./gamer-handle.struct";

export class TransitionMemberEvent {
	public readonly gamerTag: string;
	public readonly gamer: GamerHandle;
	public readonly characterRank: number;

	constructor(view: DataView) {
		if (view.byteLength !== 176) {
			throw new Error('Invalid view size');
		}
		this.gamerTag = getStringFromDataView(view, 0, 63);
		this.gamer = new GamerHandle(new DataView(view.buffer.slice(64, 168)));
		this.characterRank = view.getInt32(168, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(176));
	}
}