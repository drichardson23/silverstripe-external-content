
/**
 * jQuery functionality used on the external content admin page
 */

;(function ($, pt) {
	$().ready(function () {
		// bind the upload form
		$('#Form_EditForm_Migrate').click(function () {
			// we don't want this to be submitted via the edit form, as we want to do an ajax postback for this
			// and not tie up the response.

			var form = $(this).parents('form');
			// wrap it all up and post away!
			var params = form.serializeArray();
			var postParams = {};
			$.each(params, function (index) {
				postParams[this.name] = this.value;
			});

			postParams['action_migrate'] = true;
			statusMessage('Importing ...', 2);

			$.post(form.attr('action'), postParams, function (data) {
				statusMessage('Import complete...', 'good');

				// reset the base form 
				if (pt) {
					pt(form.attr('id')).resetElements();
				}
			});
			return false;
		});
	});
})(jQuery, $);