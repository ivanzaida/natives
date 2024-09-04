import { getStringFromDataView } from "../predef";

export class InstMissionEnd {
	public readonly groupId: number;
	public readonly missionCategory: number;
	public readonly missionName: number;
	public readonly sessionId: number;
	public readonly type: number;
	public readonly location: number;
	public readonly launchMethod: number;
	public readonly publicContentId: string;
	public readonly bossId1: number;
	public readonly bossId2: number;
	public readonly bosstype: number;
	public readonly launcherRank: number;
	public readonly playerRole: number;
	public readonly timeTakenToComplete: number;
	public readonly timeLimit: number;
	public readonly won: boolean;
	public readonly endingReason: number;
	public readonly cashEarned: number;
	public readonly rpEarned: number;
	public readonly deaths: number;
	public readonly targetsKilled: number;
	public readonly innocentsKilled: number;
	public readonly properties: number;
	public readonly properties2: number;
	public readonly failedStealth: boolean;
	public readonly difficulty: number;
	public readonly playerCount: number;

	constructor(view: DataView) {
		if (view.byteLength !== 240) {
			throw new Error('Invalid view size');
		}
		this.groupId = view.getInt32(0, true);
		this.missionCategory = view.getInt32(8, true);
		this.missionName = view.getInt32(16, true);
		this.sessionId = view.getInt32(24, true);
		this.type = view.getInt32(32, true);
		this.location = view.getInt32(40, true);
		this.launchMethod = view.getInt32(48, true);
		this.publicContentId = getStringFromDataView(view, 56, 87);
		this.bossId1 = view.getInt32(88, true);
		this.bossId2 = view.getInt32(96, true);
		this.bosstype = view.getInt32(104, true);
		this.launcherRank = view.getInt32(112, true);
		this.playerRole = view.getInt32(120, true);
		this.timeTakenToComplete = view.getInt32(128, true);
		this.timeLimit = view.getInt32(136, true);
		this.won = view.getInt8(144) === 1;
		this.endingReason = view.getInt32(152, true);
		this.cashEarned = view.getInt32(160, true);
		this.rpEarned = view.getInt32(168, true);
		this.deaths = view.getInt32(176, true);
		this.targetsKilled = view.getInt32(184, true);
		this.innocentsKilled = view.getInt32(192, true);
		this.properties = view.getInt32(200, true);
		this.properties2 = view.getInt32(208, true);
		this.failedStealth = view.getInt8(216) === 1;
		this.difficulty = view.getInt32(224, true);
		this.playerCount = view.getInt32(232, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(240));
	}
}