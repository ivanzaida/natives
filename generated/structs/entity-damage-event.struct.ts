import { TEntityIndex } from "../typedefs";

export class EntityDamageEvent {
	public readonly victimIndex: TEntityIndex;
	public readonly damagerIndex: TEntityIndex;
	public readonly damage: number;
	public readonly enduranceDamage: number;
	public readonly victimIncapacitated: boolean;
	public readonly victimDestroyed: boolean;
	public readonly weaponUsed: number;
	public readonly victimSpeed: number;
	public readonly damagerSpeed: number;
	public readonly isResponsibleForCollision: boolean;
	public readonly isHeadShot: boolean;
	public readonly isWithMeleeWeapon: boolean;
	public readonly hitMaterial: number;

	constructor(view: DataView) {
		if (view.byteLength !== 104) {
			throw new Error('Invalid view size');
		}
		this.victimIndex = view.getInt32(0, true);
		this.damagerIndex = view.getInt32(8, true);
		this.damage = view.getFloat32(16, true);
		this.enduranceDamage = view.getFloat32(24, true);
		this.victimIncapacitated = view.getInt8(32) === 1;
		this.victimDestroyed = view.getInt8(40) === 1;
		this.weaponUsed = view.getInt32(48, true);
		this.victimSpeed = view.getFloat32(56, true);
		this.damagerSpeed = view.getFloat32(64, true);
		this.isResponsibleForCollision = view.getInt8(72) === 1;
		this.isHeadShot = view.getInt8(80) === 1;
		this.isWithMeleeWeapon = view.getInt8(88) === 1;
		this.hitMaterial = view.getInt32(96, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(104));
	}
}