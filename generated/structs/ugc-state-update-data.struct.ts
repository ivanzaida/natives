import { getStringFromDataView } from "../predef";
import { GamerHandle } from "./gamer-handle.struct";

export class UgcStateUpdateData {
	public readonly tl31MissionContentId: string;
	public readonly score: number;
	public readonly score2: number;
	public readonly tl31SenderGamerTag: string;
	public readonly senderGamer: GamerHandle;
	public readonly tl31MissionName: string;
	public readonly tl31CoPlayerName: string;
	public readonly missionType: number;
	public readonly missionSubType: number;
	public readonly laps: number;
	public readonly swapSenderWithCoPlayer: boolean;

	constructor(view: DataView) {
		if (view.byteLength !== 312) {
			throw new Error('Invalid view size');
		}
		this.tl31MissionContentId = getStringFromDataView(view, 0, 31);
		this.score = view.getInt32(32, true);
		this.score2 = view.getInt32(40, true);
		this.tl31SenderGamerTag = getStringFromDataView(view, 48, 79);
		this.senderGamer = new GamerHandle(new DataView(view.buffer.slice(80, 184)));
		this.tl31MissionName = getStringFromDataView(view, 184, 247);
		this.tl31CoPlayerName = getStringFromDataView(view, 248, 279);
		this.missionType = view.getInt32(280, true);
		this.missionSubType = view.getInt32(288, true);
		this.laps = view.getInt32(296, true);
		this.swapSenderWithCoPlayer = view.getInt8(304) === 1;
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(312));
	}
}