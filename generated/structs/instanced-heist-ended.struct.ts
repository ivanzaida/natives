import { JobBInfo } from "./job-b-info.struct";

export class InstancedHeistEnded {
	public readonly infos: JobBInfo;
	public readonly bossId1: number;
	public readonly bossId2: number;
	public readonly bossType: number;
	public readonly attackType: number;
	public readonly ownBase: number;
	public readonly ownCannon: number;
	public readonly ownSecurityRoom: number;
	public readonly ownLounge: number;
	public readonly ownLivingQuarters: number;
	public readonly ownTiltRotor: number;
	public readonly orbitalCannonShots: number;
	public readonly orbitalCannonKills: number;
	public readonly assasinationLevel1Calls: number;
	public readonly assasinationLevel2Calls: number;
	public readonly assasinationLevel3Calls: number;
	public readonly observeTargetCalls: number;
	public readonly prepCompletionType: number;
	public readonly failedStealth: number;
	public readonly quickRestart: number;

	constructor(view: DataView) {
		if (view.byteLength !== 520) {
			throw new Error('Invalid view size');
		}
		this.infos = new JobBInfo(new DataView(view.buffer.slice(0, 368)));
		this.bossId1 = view.getInt32(368, true);
		this.bossId2 = view.getInt32(376, true);
		this.bossType = view.getInt32(384, true);
		this.attackType = view.getInt32(392, true);
		this.ownBase = view.getInt32(400, true);
		this.ownCannon = view.getInt32(408, true);
		this.ownSecurityRoom = view.getInt32(416, true);
		this.ownLounge = view.getInt32(424, true);
		this.ownLivingQuarters = view.getInt32(432, true);
		this.ownTiltRotor = view.getInt32(440, true);
		this.orbitalCannonShots = view.getInt32(448, true);
		this.orbitalCannonKills = view.getInt32(456, true);
		this.assasinationLevel1Calls = view.getInt32(464, true);
		this.assasinationLevel2Calls = view.getInt32(472, true);
		this.assasinationLevel3Calls = view.getInt32(480, true);
		this.observeTargetCalls = view.getInt32(488, true);
		this.prepCompletionType = view.getInt32(496, true);
		this.failedStealth = view.getInt32(504, true);
		this.quickRestart = view.getInt32(512, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(520));
	}
}