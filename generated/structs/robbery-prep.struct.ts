export class RobberyPrep {
	public readonly playthroughId: number;
	public readonly missionName: number;
	public readonly sessionId: number;
	public readonly strandId: number;
	public readonly type: number;
	public readonly bossId1: number;
	public readonly bossId2: number;
	public readonly bosstype: number;
	public readonly launcherRank: number;
	public readonly playerRole: number;
	public readonly playerParticipated: boolean;
	public readonly timeTakenToComplete: number;
	public readonly timeLimit: number;
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
	public readonly properties: number;
	public readonly properties2: number;
	public readonly failedStealth: boolean;
	public readonly deliveryLocation: number;
	public readonly hashmac: number;
	public readonly vehicleStolen: number;
	public readonly vehicleCount: number;
	public readonly outfits: number;
	public readonly entrance: number;
	public readonly missionCategory: number;
	public readonly won: boolean;

	constructor(view: DataView) {
		if (view.byteLength !== 272) {
			throw new Error('Invalid view size');
		}
		this.playthroughId = view.getInt32(0, true);
		this.missionName = view.getInt32(8, true);
		this.sessionId = view.getInt32(16, true);
		this.strandId = view.getInt32(24, true);
		this.type = view.getInt32(32, true);
		this.bossId1 = view.getInt32(40, true);
		this.bossId2 = view.getInt32(48, true);
		this.bosstype = view.getInt32(56, true);
		this.launcherRank = view.getInt32(64, true);
		this.playerRole = view.getInt32(72, true);
		this.playerParticipated = view.getInt8(80) === 1;
		this.timeTakenToComplete = view.getInt32(88, true);
		this.timeLimit = view.getInt32(96, true);
		this.endingReason = view.getInt32(104, true);
		this.isRivalParty = view.getInt8(112) === 1;
		this.cashEarned = view.getInt32(120, true);
		this.rpEarned = view.getInt32(128, true);
		this.location = view.getInt32(136, true);
		this.invitesSent = view.getInt32(144, true);
		this.invitesAccepted = view.getInt32(152, true);
		this.deaths = view.getInt32(160, true);
		this.targetsKilled = view.getInt32(168, true);
		this.innocentsKilled = view.getInt32(176, true);
		this.properties = view.getInt32(184, true);
		this.properties2 = view.getInt32(192, true);
		this.failedStealth = view.getInt8(200) === 1;
		this.deliveryLocation = view.getInt32(208, true);
		this.hashmac = view.getInt32(216, true);
		this.vehicleStolen = view.getInt32(224, true);
		this.vehicleCount = view.getInt32(232, true);
		this.outfits = view.getInt32(240, true);
		this.entrance = view.getInt32(248, true);
		this.missionCategory = view.getInt32(256, true);
		this.won = view.getInt8(264) === 1;
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(272));
	}
}