import { getStringFromDataView } from "../predef";

export class RobberyFinale {
	public readonly playthroughId: number;
	public readonly missionId: number;
	public readonly sessionId: number;
	public readonly strandId: number;
	public readonly publicContentId: string;
	public readonly bossId1: number;
	public readonly bossId2: number;
	public readonly bosstype: number;
	public readonly launcherRank: number;
	public readonly playerRole: number;
	public readonly endingReason: number;
	public readonly replay: number;
	public readonly rpEarned: number;
	public readonly timeTakenToComplete: number;
	public readonly checkpoint: number;
	public readonly deaths: number;
	public readonly targetsKilled: number;
	public readonly innocentsKilled: number;
	public readonly properties: number;
	public readonly properties2: number;
	public readonly failedStealth: boolean;
	public readonly wLoadout: number;
	public readonly outfits: number;
	public readonly moneyEarned: number;
	public readonly vehicleBoard: number;
	public readonly hashmac: number;
	public readonly missionCategory: number;
	public readonly won: boolean;

	constructor(view: DataView) {
		if (view.byteLength !== 248) {
			throw new Error('Invalid view size');
		}
		this.playthroughId = view.getInt32(0, true);
		this.missionId = view.getInt32(8, true);
		this.sessionId = view.getInt32(16, true);
		this.strandId = view.getInt32(24, true);
		this.publicContentId = getStringFromDataView(view, 32, 63);
		this.bossId1 = view.getInt32(64, true);
		this.bossId2 = view.getInt32(72, true);
		this.bosstype = view.getInt32(80, true);
		this.launcherRank = view.getInt32(88, true);
		this.playerRole = view.getInt32(96, true);
		this.endingReason = view.getInt32(104, true);
		this.replay = view.getInt32(112, true);
		this.rpEarned = view.getInt32(120, true);
		this.timeTakenToComplete = view.getInt32(128, true);
		this.checkpoint = view.getInt32(136, true);
		this.deaths = view.getInt32(144, true);
		this.targetsKilled = view.getInt32(152, true);
		this.innocentsKilled = view.getInt32(160, true);
		this.properties = view.getInt32(168, true);
		this.properties2 = view.getInt32(176, true);
		this.failedStealth = view.getInt8(184) === 1;
		this.wLoadout = view.getInt32(192, true);
		this.outfits = view.getInt32(200, true);
		this.moneyEarned = view.getInt32(208, true);
		this.vehicleBoard = view.getInt32(216, true);
		this.hashmac = view.getInt32(224, true);
		this.missionCategory = view.getInt32(232, true);
		this.won = view.getInt8(240) === 1;
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(248));
	}
}