class ListaNegociacoes {

    constructor() {
        this._negociacoes = []
    }

    adiciona(negociacao) {

        this._negociacoes.push(negociacao);
    }

    get negociacoes() {

        //blindando a negociação para que não seja possível alterar a lista
        return [].concat(this._negociacoes);
    }
}