export class PedHeadBlendData {
	public readonly head0: number;
	public readonly head1: number;
	public readonly head2: number;
	public readonly tex0: number;
	public readonly tex1: number;
	public readonly tex2: number;
	public readonly headBlend: number;
	public readonly texBlend: number;
	public readonly varBlend: number;
	public readonly isParent: boolean;

	constructor(view: DataView) {
		if (view.byteLength !== 80) {
			throw new Error('Invalid view size');
		}
		this.head0 = view.getInt32(0, true);
		this.head1 = view.getInt32(8, true);
		this.head2 = view.getInt32(16, true);
		this.tex0 = view.getInt32(24, true);
		this.tex1 = view.getInt32(32, true);
		this.tex2 = view.getInt32(40, true);
		this.headBlend = view.getFloat32(48, true);
		this.texBlend = view.getFloat32(56, true);
		this.varBlend = view.getFloat32(64, true);
		this.isParent = view.getInt8(72) === 1;
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(80));
	}
}