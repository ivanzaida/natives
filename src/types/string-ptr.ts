export class StringPtr {
    public readonly dataView: DataView;

    public get value(): string {
        let offset = 0;
        const end = this.dataView.byteLength;

        let text = '';
        let val = -1;

        for (let i = 0; i < this.dataView.byteLength; i++) {
            val = this.dataView.getUint8(i);
            if (val === 0) {
                break;
            }
            text += String.fromCharCode(val);
        }
        return text;
    }

    constructor(dataView: DataView) {
        this.dataView = dataView;
    }
}