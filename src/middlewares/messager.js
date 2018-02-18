const messager = store => next => action => {
	const error = action.error;
	if (error) {
		alert(error.message);
	}
	return next(action);
}

export default messager;