import { getStringFromDataView } from "../predef";
import { GamerHandle } from "./gamer-handle.struct";

export class InviteViaPresenceEvent {
	public readonly inviter: string;
	public readonly inviter_2: GamerHandle;
	public readonly contentId: string;
	public readonly playlistLength: number;
	public readonly playlistCurrent: number;
	public readonly scTv: boolean;
	public readonly inviteId: number;

	constructor(view: DataView) {
		if (view.byteLength !== 224) {
			throw new Error('Invalid view size');
		}
		this.inviter = getStringFromDataView(view, 0, 63);
		this.inviter = new GamerHandle(new DataView(view.buffer.slice(64, 168)));
		this.contentId = getStringFromDataView(view, 168, 191);
		this.playlistLength = view.getInt32(192, true);
		this.playlistCurrent = view.getInt32(200, true);
		this.scTv = view.getInt8(208) === 1;
		this.inviteId = view.getInt32(216, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(224));
	}
}