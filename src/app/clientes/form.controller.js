export default class FormController{
    constructor($state, $stateParams, clienteService) {
        this.record = {};
        this._$state = $state;
        this._id = $stateParams.id;
        this._clienteService = clienteService;
        if (this._id) {
            this.findById()
        }
    }

    async save() {
        if (this._id) {
            await this._clienteService.update(this.record)
        } else {
            await this._clienteService.insert(this.record)
        }

        this._$state.go("app.cliente.list");
    }

    findById() {
        return this._clienteService.findById(this._id)
        .then(res => {
            this.record = res;
            return this.record;
        })
    }

    findAll() {
        return this._clienteService.findAll()
        .then(res => {
            this.records = res;
            return this.records;
        })
    }

    async excluir(id) {
        await this._clienteService.remove(id);
        this._$state.reload();
    }
}

FormController.$inject = ["$state", "$stateParams", "clienteService"];