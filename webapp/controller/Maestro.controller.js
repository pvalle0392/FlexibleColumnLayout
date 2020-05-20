/*sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	'sap/ui/model/Sorter',
	'sap/m/MessageBox',
	'sap/f/library'
], function (Controller,History) {
	"use strict";
 
	return Controller.extend("Columns.columnNav.controller.Maestro", {
		onInit: function () {
			console.log(window.history);
		},
		onHome: function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("Menu");
		/*	var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			console.log(window.history);
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("TargetHome");
			}*/
	/*	}
	});

});*/