'use strict'

//const config = [
// "$stateProvider",
// "$urlRouteProvider",
//  Config
//]

angular.module('wildNoteApp', ["ui.router"])



// .factory("Hey", function() {
//     return {getConseil: () => "utilise les factory pour créer ta ressource !"}
// })

.config(function($stateProvider, $urlRouterProvider) {
    const states = [{
        name: "home",
        url: "/",
        component: "home"
    }, ]

    states.forEach((state) => {
        $stateProvider.state(state)
    })

    $urlRouterProvider.otherwise('/zergling')
})