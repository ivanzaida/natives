export class HudStatValues {
	public readonly damage: number;
	public readonly speed: number;
	public readonly capacity: number;
	public readonly accuracy: number;
	public readonly range: number;

	constructor(view: DataView) {
		if (view.byteLength !== 40) {
			throw new Error('Invalid view size');
		}
		this.damage = view.getInt32(0, true);
		this.speed = view.getInt32(8, true);
		this.capacity = view.getInt32(16, true);
		this.accuracy = view.getInt32(24, true);
		this.range = view.getInt32(32, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(40));
	}
}