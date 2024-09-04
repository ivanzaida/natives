export class ArenaWarsEnded {
	public readonly sessionid: number;
	public readonly publiccontentid: number;
	public readonly cashearned: number;
	public readonly launchmethod: number;
	public readonly leftinprogress: number;
	public readonly xp: number;
	public readonly kills: number;
	public readonly deaths: number;
	public readonly suicides: number;
	public readonly rank: number;
	public readonly vehicleid: number;
	public readonly matchduration: number;
	public readonly playingtime: number;
	public readonly result: number;
	public readonly premiumEvent: number;
	public readonly skillLevel: number;
	public readonly endreason: number;
	public readonly killer: number;
	public readonly killervehicle: number;
	public readonly matchtype: number;
	public readonly matchname: number;
	public readonly checkpointsCollected: number;
	public readonly bonusTime: number;
	public readonly finishPosition: number;
	public readonly teamType: number;
	public readonly teamId: number;
	public readonly personalVehicle: number;
	public readonly flagsStolen: number;
	public readonly flagsDelivered: number;
	public readonly totalPoints: number;
	public readonly goalsScored: number;
	public readonly suddenDeath: number;
	public readonly winConditions: number;
	public readonly damageDealt: number;
	public readonly damageReceived: number;
	public readonly gladiatorKills: number;
	public readonly bombTime: number;
	public readonly spectatorTime: number;
	public readonly totalTagIns: number;
	public readonly timeEliminated: number;
	public readonly lobbyModLivery: number;
	public readonly lobbyModArmor: number;
	public readonly lobbyModWeapon: number;
	public readonly lobbyModMine: number;
	public readonly controlTurret: number;

	constructor(view: DataView) {
		if (view.byteLength !== 360) {
			throw new Error('Invalid view size');
		}
		this.sessionid = view.getInt32(0, true);
		this.publiccontentid = view.getInt32(8, true);
		this.cashearned = view.getInt32(16, true);
		this.launchmethod = view.getInt32(24, true);
		this.leftinprogress = view.getInt32(32, true);
		this.xp = view.getInt32(40, true);
		this.kills = view.getInt32(48, true);
		this.deaths = view.getInt32(56, true);
		this.suicides = view.getInt32(64, true);
		this.rank = view.getInt32(72, true);
		this.vehicleid = view.getInt32(80, true);
		this.matchduration = view.getInt32(88, true);
		this.playingtime = view.getInt32(96, true);
		this.result = view.getInt32(104, true);
		this.premiumEvent = view.getInt32(112, true);
		this.skillLevel = view.getInt32(120, true);
		this.endreason = view.getInt32(128, true);
		this.killer = view.getInt32(136, true);
		this.killervehicle = view.getInt32(144, true);
		this.matchtype = view.getInt32(152, true);
		this.matchname = view.getInt32(160, true);
		this.checkpointsCollected = view.getInt32(168, true);
		this.bonusTime = view.getInt32(176, true);
		this.finishPosition = view.getInt32(184, true);
		this.teamType = view.getInt32(192, true);
		this.teamId = view.getInt32(200, true);
		this.personalVehicle = view.getInt32(208, true);
		this.flagsStolen = view.getInt32(216, true);
		this.flagsDelivered = view.getInt32(224, true);
		this.totalPoints = view.getInt32(232, true);
		this.goalsScored = view.getInt32(240, true);
		this.suddenDeath = view.getInt32(248, true);
		this.winConditions = view.getInt32(256, true);
		this.damageDealt = view.getInt32(264, true);
		this.damageReceived = view.getInt32(272, true);
		this.gladiatorKills = view.getInt32(280, true);
		this.bombTime = view.getInt32(288, true);
		this.spectatorTime = view.getInt32(296, true);
		this.totalTagIns = view.getInt32(304, true);
		this.timeEliminated = view.getInt32(312, true);
		this.lobbyModLivery = view.getInt32(320, true);
		this.lobbyModArmor = view.getInt32(328, true);
		this.lobbyModWeapon = view.getInt32(336, true);
		this.lobbyModMine = view.getInt32(344, true);
		this.controlTurret = view.getInt32(352, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(360));
	}
}