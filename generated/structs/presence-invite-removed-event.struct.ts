import { EInviteRemoveReason } from "../enums";

export class PresenceInviteRemovedEvent {
	public readonly inviteId: number;
	public readonly nReason: EInviteRemoveReason;

	constructor(view: DataView) {
		if (view.byteLength !== 16) {
			throw new Error('Invalid view size');
		}
		this.inviteId = view.getInt32(0, true);
		this.nReason = view.getInt32(8, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(16));
	}
}