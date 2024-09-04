import { EJoinResponseCode } from "../enums";

export class JoinSessionResponse {
	public readonly wasSuccessful: boolean;
	public readonly nResponseCode: EJoinResponseCode;

	constructor(view: DataView) {
		if (view.byteLength !== 16) {
			throw new Error('Invalid view size');
		}
		this.wasSuccessful = view.getInt8(0) === 1;
		this.nResponseCode = view.getInt32(8, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(16));
	}
}