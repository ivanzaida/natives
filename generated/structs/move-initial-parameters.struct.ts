import { getStringFromDataView } from "../predef";

export class MoveInitialParameters {
	public readonly clipSetHash0: number;
	public readonly clipSetVariableHash0: number;
	public readonly clipSetHash1: number;
	public readonly clipSetVariableHash1: number;
	public readonly floatParamName0: string;
	public readonly floatParamValue0: number;
	public readonly floatParamLerpValue0: number;
	public readonly floatParamName1: string;
	public readonly floatParamValue1: number;
	public readonly floatParamLerpValue1: number;
	public readonly boolParamName0: string;
	public readonly boolParamValue0: boolean;
	public readonly boolParamName1: string;
	public readonly boolParamValue1: boolean;

	constructor(view: DataView) {
		if (view.byteLength !== 208) {
			throw new Error('Invalid view size');
		}
		this.clipSetHash0 = view.getInt32(0, true);
		this.clipSetVariableHash0 = view.getInt32(8, true);
		this.clipSetHash1 = view.getInt32(16, true);
		this.clipSetVariableHash1 = view.getInt32(24, true);
		this.floatParamName0 = getStringFromDataView(view, 32, 63);
		this.floatParamValue0 = view.getFloat32(64, true);
		this.floatParamLerpValue0 = view.getFloat32(72, true);
		this.floatParamName1 = getStringFromDataView(view, 80, 111);
		this.floatParamValue1 = view.getFloat32(112, true);
		this.floatParamLerpValue1 = view.getFloat32(120, true);
		this.boolParamName0 = getStringFromDataView(view, 128, 159);
		this.boolParamValue0 = view.getInt8(160) === 1;
		this.boolParamName1 = getStringFromDataView(view, 168, 199);
		this.boolParamValue1 = view.getInt8(200) === 1;
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(208));
	}
}