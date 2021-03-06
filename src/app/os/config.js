import FormController from './form.controller'
import ListController from './list.controller'

export const osConfig = $stateProvider => {
    $stateProvider
        .state("app.os", {
            template: require("@views/default.html"),
            url: "os",
            redirectTo: "app.os.list"
        })
        .state("app.os.list", {
            template: require("@views/os/list.html"),
            url: "/list",
            controller: ListController,
            controllerAs: "vm"
        })
        .state("app.os.new", {
            template: require("@views/os/form.html"),
            url: "/new",
            controller: FormController,
            controllerAs: "vm"
        })
        .state("app.os.edit", {
            template: require("@views/os/form.html"),
            url: "/{id}",
            controller: FormController,
            controllerAs: "vm"
        })
};

osConfig.$inject = ["$stateProvider"];