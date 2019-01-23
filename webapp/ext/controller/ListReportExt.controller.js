sap.ui.controller("examplelistreportexample.ext.controller.ListReportExt", {
	minFreight: 0,
	maxFreight: 100,

	onFreightSliderChange: function(oEvent) {
		var range = oEvent.getParameter("range");
		if (Array.isArray(range) && range.length >= 2) {
			this.minFreight = Math.min.apply(Math, range);
			this.maxFreight = Math.max.apply(Math, range);
		}
	},

	onBeforeRebindTableExtension: function(oEvent) {
		var oBindingParams = oEvent.getParameter("bindingParams");
		var oFilter = new sap.ui.model.Filter("Freight", "BT", this.minFreight, this.maxFreight);
		oBindingParams.filters.push(oFilter);
	}
});