export class NetworkSystemServiceEvent {
	public readonly eventId: number;
	public readonly flags: number;

	constructor(view: DataView) {
		if (view.byteLength !== 16) {
			throw new Error('Invalid view size');
		}
		this.eventId = view.getInt32(0, true);
		this.flags = view.getInt32(8, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(16));
	}
}