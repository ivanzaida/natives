import { getStringFromDataView } from "../predef";
import { TPlayerIndex, TThreadid } from "../typedefs";
import { EPlayerSource } from "../enums";
import { GamerHandle } from "./gamer-handle.struct";

export class PlayerScriptEvents {
	public readonly playerName: string;
	public readonly playerIndex: TPlayerIndex;
	public readonly playerTeam: number;
	public readonly nSource: EPlayerSource;
	public readonly numThreads: number;
	public readonly threads: TThreadid[];
	public readonly player: GamerHandle;
	public readonly playerFlags: number;
	public readonly bailReason: number;

	constructor(view: DataView) {
		if (view.byteLength !== 376) {
			throw new Error('Invalid view size');
		}
		this.playerName = getStringFromDataView(view, 0, 63);
		this.playerIndex = view.getInt32(64, true);
		this.playerTeam = view.getInt32(72, true);
		this.nSource = view.getInt32(80, true);
		this.numThreads = view.getInt32(88, true);
		this.threads = [view.getInt32(96, true), view.getInt32(104, true), view.getInt32(112, true), view.getInt32(120, true), view.getInt32(128, true), view.getInt32(136, true), view.getInt32(144, true), view.getInt32(152, true), view.getInt32(160, true), view.getInt32(168, true), view.getInt32(176, true), view.getInt32(184, true), view.getInt32(192, true), view.getInt32(200, true), view.getInt32(208, true), view.getInt32(216, true), view.getInt32(224, true), view.getInt32(232, true), view.getInt32(240, true), view.getInt32(248, true)];
		this.player = new GamerHandle(new DataView(view.buffer.slice(256, 360)));
		this.playerFlags = view.getInt32(360, true);
		this.bailReason = view.getInt32(368, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(376));
	}
}