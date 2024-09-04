import { getStringFromDataView } from "../predef";

export class Heist3Finale {
	public readonly playthroughId: number;
	public readonly missionId: number;
	public readonly publicContentId: string;
	public readonly playthroughHashMac: number;
	public readonly bossId1: number;
	public readonly bossId2: number;
	public readonly bosstype: number;
	public readonly launcherRank: number;
	public readonly playerRole: number;
	public readonly endingReason: number;
	public readonly replay: number;
	public readonly rpEarned: number;
	public readonly difficult: boolean;
	public readonly timeTakenToComplete: number;
	public readonly checkpoint: number;
	public readonly playCount: number;
	public readonly approachBoard: number;
	public readonly approachDirect: boolean;
	public readonly wCrew: number;
	public readonly wLoadout: number;
	public readonly dCrew: number;
	public readonly vehicleGetaway: number;
	public readonly vehicleSwap: number;
	public readonly hCrew: number;
	public readonly outfitIn: number;
	public readonly outfitOut: number;
	public readonly mask: number;
	public readonly vehicleSwapped: number;
	public readonly useEmp: number;
	public readonly useDrone: number;
	public readonly useThermite: number;
	public readonly useKeycard: number;
	public readonly hack: number;
	public readonly cameras: number;
	public readonly accessPoints: number;
	public readonly vaultTarget: number;
	public readonly vaultAmt: number;
	public readonly dailyCashRoomAmt: number;
	public readonly depositBoxAmt: number;
	public readonly percentage: number;
	public readonly deaths: number;
	public readonly targetsKilled: number;
	public readonly innocentsKilled: number;
	public readonly buyerLocation: number;

	constructor(view: DataView) {
		if (view.byteLength !== 376) {
			throw new Error('Invalid view size');
		}
		this.playthroughId = view.getInt32(0, true);
		this.missionId = view.getInt32(8, true);
		this.publicContentId = getStringFromDataView(view, 16, 47);
		this.playthroughHashMac = view.getInt32(48, true);
		this.bossId1 = view.getInt32(56, true);
		this.bossId2 = view.getInt32(64, true);
		this.bosstype = view.getInt32(72, true);
		this.launcherRank = view.getInt32(80, true);
		this.playerRole = view.getInt32(88, true);
		this.endingReason = view.getInt32(96, true);
		this.replay = view.getInt32(104, true);
		this.rpEarned = view.getInt32(112, true);
		this.difficult = view.getInt8(120) === 1;
		this.timeTakenToComplete = view.getInt32(128, true);
		this.checkpoint = view.getInt32(136, true);
		this.playCount = view.getInt32(144, true);
		this.approachBoard = view.getInt32(152, true);
		this.approachDirect = view.getInt8(160) === 1;
		this.wCrew = view.getInt32(168, true);
		this.wLoadout = view.getInt32(176, true);
		this.dCrew = view.getInt32(184, true);
		this.vehicleGetaway = view.getInt32(192, true);
		this.vehicleSwap = view.getInt32(200, true);
		this.hCrew = view.getInt32(208, true);
		this.outfitIn = view.getInt32(216, true);
		this.outfitOut = view.getInt32(224, true);
		this.mask = view.getInt32(232, true);
		this.vehicleSwapped = view.getInt32(240, true);
		this.useEmp = view.getInt32(248, true);
		this.useDrone = view.getInt32(256, true);
		this.useThermite = view.getInt32(264, true);
		this.useKeycard = view.getInt32(272, true);
		this.hack = view.getInt32(280, true);
		this.cameras = view.getInt32(288, true);
		this.accessPoints = view.getInt32(296, true);
		this.vaultTarget = view.getInt32(304, true);
		this.vaultAmt = view.getInt32(312, true);
		this.dailyCashRoomAmt = view.getInt32(320, true);
		this.depositBoxAmt = view.getInt32(328, true);
		this.percentage = view.getInt32(336, true);
		this.deaths = view.getInt32(344, true);
		this.targetsKilled = view.getInt32(352, true);
		this.innocentsKilled = view.getInt32(360, true);
		this.buyerLocation = view.getInt32(368, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(376));
	}
}