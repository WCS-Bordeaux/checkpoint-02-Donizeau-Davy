'use strict'

angular.module('wildNoteApp').component('home', {
    templateUrl: '/app/components/home/home.html',
    controller: Home
})

const notes = require("/home/apprenti/Documents/WCS/CHECKPOINT2/subject/mocks/notes.json"),
    users = require("/home/apprenti/Documents/WCS/CHECKPOINT2/subject/mocks/users.json");

function Home($scope, $resource) {


}