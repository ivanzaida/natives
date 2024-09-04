export class NetStatisticsInfo {
	public readonly kernelMemFreeSize: number;
	public readonly kernelMemFreeMin: number;
	public readonly packetCount: number;
	public readonly packetQosCount: number;
	public readonly libNetFreeSize: number;
	public readonly libNetFreeMin: number;

	constructor(view: DataView) {
		if (view.byteLength !== 48) {
			throw new Error('Invalid view size');
		}
		this.kernelMemFreeSize = view.getInt32(0, true);
		this.kernelMemFreeMin = view.getInt32(8, true);
		this.packetCount = view.getInt32(16, true);
		this.packetQosCount = view.getInt32(24, true);
		this.libNetFreeSize = view.getInt32(32, true);
		this.libNetFreeMin = view.getInt32(40, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(48));
	}
}