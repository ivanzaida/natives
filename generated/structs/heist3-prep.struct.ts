export class Heist3Prep {
	public readonly playthroughId: number;
	public readonly missionName: number;
	public readonly playthroughHashMac: number;
	public readonly playCount: number;
	public readonly approach: number;
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
	public readonly prepCrewMember: number;
	public readonly unlockYohan: number;
	public readonly unlockCharlie: number;
	public readonly unlockChester1: number;
	public readonly unlockChester2: number;
	public readonly unlockZach: number;
	public readonly unlockPatrick: number;
	public readonly unlockAvi: number;
	public readonly unlockPaige: number;
	public readonly accessPoints: number;
	public readonly shipmentsDestroyed: number;
	public readonly vaultTarget: number;

	constructor(view: DataView) {
		if (view.byteLength !== 288) {
			throw new Error('Invalid view size');
		}
		this.playthroughId = view.getInt32(0, true);
		this.missionName = view.getInt32(8, true);
		this.playthroughHashMac = view.getInt32(16, true);
		this.playCount = view.getInt32(24, true);
		this.approach = view.getInt32(32, true);
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
		this.prepCrewMember = view.getInt32(192, true);
		this.unlockYohan = view.getInt32(200, true);
		this.unlockCharlie = view.getInt32(208, true);
		this.unlockChester1 = view.getInt32(216, true);
		this.unlockChester2 = view.getInt32(224, true);
		this.unlockZach = view.getInt32(232, true);
		this.unlockPatrick = view.getInt32(240, true);
		this.unlockAvi = view.getInt32(248, true);
		this.unlockPaige = view.getInt32(256, true);
		this.accessPoints = view.getInt32(264, true);
		this.shipmentsDestroyed = view.getInt32(272, true);
		this.vaultTarget = view.getInt32(280, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(288));
	}
}