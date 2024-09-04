export class CncRound {
	public readonly matchId1: number;
	public readonly matchId2: number;
	public readonly roundNumber: number;
	public readonly team: number;
	public readonly role: number;
	public readonly gameRank: number;
	public readonly progRank: number;
	public readonly roleChange: boolean;
	public readonly spawnLoc: number;
	public readonly escapeLoc: number;
	public readonly roundStartTime: number;
	public readonly endReasonStgOne: number;
	public readonly endReasonStgTwo: number;
	public readonly escapeResult: number;
	public readonly durationStgOne: number;
	public readonly durationStgTwo: number;
	public readonly launchMethod: number;
	public readonly jip: boolean;
	public readonly win: boolean;
	public readonly xpEarned: number;
	public readonly streetCrimeCount: number;
	public readonly jobCount: number;
	public readonly jobsRemaining: number;
	public readonly copPoints: number;
	public readonly arrests: number;
	public readonly moneyEarned: number;
	public readonly moneyStashed: number;
	public readonly moneyBanked: number;
	public readonly crooksKilled: number;
	public readonly copsKilled: number;
	public readonly deaths: number;
	public readonly vOffender: boolean;
	public readonly incapacitations: number;
	public readonly moneyMaxHeld: number;
	public readonly endurance: number;
	public readonly spawnGroup: number;
	public readonly escapeTime: number;
	public readonly spectateTime: number;
	public readonly durationVehicleStgOne: number;
	public readonly durationVehicleStgTwo: number;

	constructor(view: DataView) {
		if (view.byteLength !== 320) {
			throw new Error('Invalid view size');
		}
		this.matchId1 = view.getInt32(0, true);
		this.matchId2 = view.getInt32(8, true);
		this.roundNumber = view.getInt32(16, true);
		this.team = view.getInt32(24, true);
		this.role = view.getInt32(32, true);
		this.gameRank = view.getInt32(40, true);
		this.progRank = view.getInt32(48, true);
		this.roleChange = view.getInt8(56) === 1;
		this.spawnLoc = view.getInt32(64, true);
		this.escapeLoc = view.getInt32(72, true);
		this.roundStartTime = view.getInt32(80, true);
		this.endReasonStgOne = view.getInt32(88, true);
		this.endReasonStgTwo = view.getInt32(96, true);
		this.escapeResult = view.getInt32(104, true);
		this.durationStgOne = view.getInt32(112, true);
		this.durationStgTwo = view.getInt32(120, true);
		this.launchMethod = view.getInt32(128, true);
		this.jip = view.getInt8(136) === 1;
		this.win = view.getInt8(144) === 1;
		this.xpEarned = view.getInt32(152, true);
		this.streetCrimeCount = view.getInt32(160, true);
		this.jobCount = view.getInt32(168, true);
		this.jobsRemaining = view.getInt32(176, true);
		this.copPoints = view.getInt32(184, true);
		this.arrests = view.getInt32(192, true);
		this.moneyEarned = view.getInt32(200, true);
		this.moneyStashed = view.getInt32(208, true);
		this.moneyBanked = view.getInt32(216, true);
		this.crooksKilled = view.getInt32(224, true);
		this.copsKilled = view.getInt32(232, true);
		this.deaths = view.getInt32(240, true);
		this.vOffender = view.getInt8(248) === 1;
		this.incapacitations = view.getInt32(256, true);
		this.moneyMaxHeld = view.getInt32(264, true);
		this.endurance = view.getInt32(272, true);
		this.spawnGroup = view.getInt32(280, true);
		this.escapeTime = view.getInt32(288, true);
		this.spectateTime = view.getInt32(296, true);
		this.durationVehicleStgOne = view.getInt32(304, true);
		this.durationVehicleStgTwo = view.getInt32(312, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(320));
	}
}