import { Vector3 } from "./vector3";

export class VectorPtr {
    public readonly dataView = new DataView(new ArrayBuffer(24));

    public copyToVector(vector: Vector3): void {
        vector.x = this.dataView.getFloat32(0, true);
        vector.y = this.dataView.getFloat32(8, true);
        vector.z = this.dataView.getFloat32(16, true);
    }
}