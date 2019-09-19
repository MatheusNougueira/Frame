class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._campos = [
            $("#data"),
            $("#quantidade"),
            $("#valor"),
        ];

        this._listaNegociacoes = new ListaNegociacoes();
    }

    //adicionando eventos 
    adiciona(event) {

        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();
        console.log(this._listaNegociacoes.negociacoes);

    }

    //criando negociação
    _criaNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._campos[0].value),
            this._campos[1].value,
            this._campos[2].value,

        );
    }

    //limpando formulario após a inserção da negociação
    _limpaFormulario() {

        this._campos[0].value = "";
        this._campos[1].value = 1;
        this._campos[2].value = 0.0;
        this._campos[0].focus();
    }
}