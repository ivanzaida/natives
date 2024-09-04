export class GamerHandle {
	public readonly data1: number;
	public readonly data2: number;
	public readonly data3: number;
	public readonly data4: number;
	public readonly data5: number;
	public readonly data6: number;
	public readonly data7: number;
	public readonly data8: number;
	public readonly data9: number;
	public readonly data10: number;
	public readonly data11: number;
	public readonly data12: number;
	public readonly data13: number;

	constructor(view: DataView) {
		if (view.byteLength !== 104) {
			throw new Error('Invalid view size');
		}
		this.data1 = view.getInt32(0, true);
		this.data2 = view.getInt32(8, true);
		this.data3 = view.getInt32(16, true);
		this.data4 = view.getInt32(24, true);
		this.data5 = view.getInt32(32, true);
		this.data6 = view.getInt32(40, true);
		this.data7 = view.getInt32(48, true);
		this.data8 = view.getInt32(56, true);
		this.data9 = view.getInt32(64, true);
		this.data10 = view.getInt32(72, true);
		this.data11 = view.getInt32(80, true);
		this.data12 = view.getInt32(88, true);
		this.data13 = view.getInt32(96, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(104));
	}
}