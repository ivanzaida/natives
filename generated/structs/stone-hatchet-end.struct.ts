export class StoneHatchetEnd {
	public readonly timespent: number;
	public readonly result: number;
	public readonly cashearned: number;
	public readonly rpearned: number;
	public readonly location: number;
	public readonly target: number;
	public readonly targetX: number;
	public readonly targetY: number;
	public readonly targetEvasionChoice: number;
	public readonly damagedealt: number;
	public readonly damagerecieved: number;
	public readonly capturedorkilled: boolean;
	public readonly chestfound: boolean;

	constructor(view: DataView) {
		if (view.byteLength !== 104) {
			throw new Error('Invalid view size');
		}
		this.timespent = view.getInt32(0, true);
		this.result = view.getInt32(8, true);
		this.cashearned = view.getInt32(16, true);
		this.rpearned = view.getInt32(24, true);
		this.location = view.getInt32(32, true);
		this.target = view.getInt32(40, true);
		this.targetX = view.getFloat32(48, true);
		this.targetY = view.getFloat32(56, true);
		this.targetEvasionChoice = view.getInt32(64, true);
		this.damagedealt = view.getFloat32(72, true);
		this.damagerecieved = view.getFloat32(80, true);
		this.capturedorkilled = view.getInt8(88) === 1;
		this.chestfound = view.getInt8(96) === 1;
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(104));
	}
}