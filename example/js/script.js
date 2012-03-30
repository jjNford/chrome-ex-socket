// Show loading background.
function showLoading() {
	$('.count').addClass('loading');
}

// Hide loading background.
function hideLoading() {
	$('.count').removeClass('loading');
}

// Update the task counter.
function updateTaskCount(count) {
	count = count == 0 ? "No Tasks Running" : count;
	$('.count').text(count);
}

// When document is ready create click bindings.
$(document).ready( function() {
	$('.add_task').on('click', function() {
		Socket.postTask();
	});
});