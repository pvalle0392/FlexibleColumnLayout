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
	return Controller.extend("Columns.columnNav.controller.button2", {
		onInit: function () {

		},
		onWin: function () {
			var oFCL = this.oView.getParent().getParent();

			oFCL.setLayout(fioriLibrary.LayoutType.TwoColumnsMidExpanded);
		},

		handleClose: function () {
		//	MessageBox.information("This functionality is not ready yet.", {title: "Aw, Snap!"});
		
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("button");
		},

		onSort: function () {
			this._bDescendingSort = !this._bDescendingSort;
			var oBinding = this.oProductsTable.getBinding("items"),
				oSorter = new Sorter("Name", this._bDescendingSort);

			oBinding.sort(oSorter);
		},

		onListItemPress: function () {
			var oFCL = this.oView.getParent().getParent();

			oFCL.setLayout(fioriLibrary.LayoutType.TwoColumnsMidExpanded);
		},
		onbackk: function () {
			
		}
	});
});