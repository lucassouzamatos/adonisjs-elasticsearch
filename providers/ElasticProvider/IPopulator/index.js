class Populator {
    constructor(index) {
        this._index = index;
    }

    run() {
        throw new Error(`É necessário definir um populador para ${this._index}`);
    };
}

module.exports = Populator;
