export class ParameterData {
	public readonly parameterId: number;
	public readonly parameterValue: number;

	constructor(view: DataView) {
		if (view.byteLength !== 16) {
			throw new Error('Invalid view size');
		}
		this.parameterId = view.getInt32(0, true);
		this.parameterValue = view.getInt32(8, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(16));
	}
}