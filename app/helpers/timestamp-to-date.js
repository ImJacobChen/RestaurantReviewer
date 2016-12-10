import Ember from 'ember';

export function timestampToDate(params/*, hash*/) {
	var [timestamp] = params;
	var date = new Date(timestamp).toString();
  	return date.substr(0, 15);
}

export default Ember.Helper.helper(timestampToDate);
