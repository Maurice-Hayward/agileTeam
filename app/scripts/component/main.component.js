angular.module("agileAppApp").component("main", {
  templateUrl: "views/main.component.html",
  controllerAs: "model",
  controller: ["associateData", function(associateData) {}]
});
