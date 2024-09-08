export class StringPtr {
    private readonly _dataView: DataView;

    public get value(): string {
        let offset = 0;
        const end = this._dataView.byteLength;

        let text = '';
        let val = -1;

        for (let i = 0; i < this._dataView.byteLength; i++) {
            val = this._dataView.getUint8(i);
            if (val === 0) {
                break;
            }
            text += String.fromCharCode(val);
        }


        return text;
    }

    constructor(dataView: DataView) {
        this._dataView = dataView;
    }
}