export default class OsService {
    constructor($http) {
        this.http = $http;
        this.url = "http://localhost:8082/api/ordens"
    }

    //-- JAVA
    findByPesquisa(pesquisa, field = 'nome') {
        return this.http
        //.get(this.url + '?&filterField=' + field + '&filterData=' + pesquisa)
        .get(`${ this.url }?&filterField=${ field }&filterData=${ pesquisa }`)
        .then(res => { return res.data } );
    }

    findById(id) {
        return this.http
        .get(`${ this.url }/${ id }`)
        .then(res => { return res.data });
    }

    findAll() {
        return this.http
        .get(this.url)
        .then(res => { return res.data });
    }

    insert(registro) {
        return this.http
        .post(this.url, registro)
        .then(res => { return res.data });
    }

    update(registro) {
        return this.http
        .put(`${ this.url }/${ registro.id }`, registro)
        .then(res => { return res.data });
    }

    remove(id) {
        return this.http
        .delete(`${ this.url }/${ id }`)
        .then(res => { return res.data });
    }


    //-- NODEJS (MONGODB)
    //findByPesquisa(pesquisa, field = 'nome') {
    //    return this.http
    //    .get(this.url + '-pesquisa', { params: { pesquisa } })
    //    .then(res => {
    //        return resposta.data;
    //    })
    //}
}

OsService.$inject = ["$http"];