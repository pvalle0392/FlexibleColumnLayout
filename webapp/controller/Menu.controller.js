sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Columns.columnNav.controller.Menu", {
		onInit: function () {
			console.log(window.history);
		},
		onDM: function (){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Maestro");
		}
	});
});