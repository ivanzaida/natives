import { ENetScBenefitsEventType } from "../enums";

export class NetScBenefitsStatusEventData {
	public readonly eventType: ENetScBenefitsEventType;
	public readonly numBenefits: number;
	public readonly benefitValue: number;

	constructor(view: DataView) {
		if (view.byteLength !== 24) {
			throw new Error('Invalid view size');
		}
		this.eventType = view.getInt32(0, true);
		this.numBenefits = view.getInt32(8, true);
		this.benefitValue = view.getInt32(16, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(24));
	}
}