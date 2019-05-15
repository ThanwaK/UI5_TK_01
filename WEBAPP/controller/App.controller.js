sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
		onOpenDialog: function() {
			var oView = this.getView();
			var oDialog = oView.byId("ADD_NEW");
			// create dialog lazily
			if (!oDialog) {
				// create dialog via fragment factory
				oDialog = sap.ui.xmlfragment(oView.getId(), "sap.ui.demo.walkthrough.view.add_new_id");
				oView.addDependent(oDialog);
			}

			oDialog.open();
		}

	});

});