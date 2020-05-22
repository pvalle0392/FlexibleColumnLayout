sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	'sap/ui/model/Sorter',
	'sap/m/MessageBox',
	'sap/f/library' 
], function (JSONModel, Controller, History, Filter, FilterOperator, Sorter, MessageBox, fioriLibrary) {
	"use strict";
	return Controller.extend("Columns.columnNav.controller.button", {
		onInit: function () {
			this.oView = this.getView();
			this._bDescendingSort = false;
		//	this.oProductsTable = this.oView.byId("productsTable");
		},
		onSearch: function (oEvent) {
		},

		onAdd: function () {
		},

		onListItemPress: function () {
			var oFCL = this.oView.getParent().getParent();

			oFCL.setLayout(fioriLibrary.LayoutType.TwoColumnsMidExpanded);
		},
		handleHome: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Menu");
		}
	});
});
