export class Heist4Prep {
	public readonly playthroughId: number;
	public readonly missionName: number;
	public readonly sessionId: number;
	public readonly hashmac: number;
	public readonly playCount: number;
	public readonly type: number;
	public readonly bossId1: number;
	public readonly bossId2: number;
	public readonly bosstype: number;
	public readonly launcherRank: number;
	public readonly playerRole: number;
	public readonly playerParticipated: boolean;
	public readonly difficult: boolean;
	public readonly timeTakenToComplete: number;
	public readonly endingReason: number;
	public readonly isRivalParty: boolean;
	public readonly cashEarned: number;
	public readonly rpEarned: number;
	public readonly location: number;
	public readonly invitesSent: number;
	public readonly invitesAccepted: number;
	public readonly deaths: number;
	public readonly targetsKilled: number;
	public readonly innocentsKilled: number;
	public readonly mandatory: boolean;
	public readonly primTar: number;
	public readonly properties: number;
	public readonly entrances: number;
	public readonly approaches: number;
	public readonly grappleLoc: number;
	public readonly uniLoc: number;
	public readonly cutterLoc: number;
	public readonly secLootLoc: number;
	public readonly miscActions: number;
	public readonly properties2: number;

	constructor(view: DataView) {
		if (view.byteLength !== 280) {
			throw new Error('Invalid view size');
		}
		this.playthroughId = view.getInt32(0, true);
		this.missionName = view.getInt32(8, true);
		this.sessionId = view.getInt32(16, true);
		this.hashmac = view.getInt32(24, true);
		this.playCount = view.getInt32(32, true);
		this.type = view.getInt32(40, true);
		this.bossId1 = view.getInt32(48, true);
		this.bossId2 = view.getInt32(56, true);
		this.bosstype = view.getInt32(64, true);
		this.launcherRank = view.getInt32(72, true);
		this.playerRole = view.getInt32(80, true);
		this.playerParticipated = view.getInt8(88) === 1;
		this.difficult = view.getInt8(96) === 1;
		this.timeTakenToComplete = view.getInt32(104, true);
		this.endingReason = view.getInt32(112, true);
		this.isRivalParty = view.getInt8(120) === 1;
		this.cashEarned = view.getInt32(128, true);
		this.rpEarned = view.getInt32(136, true);
		this.location = view.getInt32(144, true);
		this.invitesSent = view.getInt32(152, true);
		this.invitesAccepted = view.getInt32(160, true);
		this.deaths = view.getInt32(168, true);
		this.targetsKilled = view.getInt32(176, true);
		this.innocentsKilled = view.getInt32(184, true);
		this.mandatory = view.getInt8(192) === 1;
		this.primTar = view.getInt32(200, true);
		this.properties = view.getInt32(208, true);
		this.entrances = view.getInt32(216, true);
		this.approaches = view.getInt32(224, true);
		this.grappleLoc = view.getInt32(232, true);
		this.uniLoc = view.getInt32(240, true);
		this.cutterLoc = view.getInt32(248, true);
		this.secLootLoc = view.getInt32(256, true);
		this.miscActions = view.getInt32(264, true);
		this.properties2 = view.getInt32(272, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(280));
	}
}