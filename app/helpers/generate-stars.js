import Ember from 'ember';

export function generateStars(params/*, hash*/) {
	var [stars] = params;
	var html = `<div class="stars" title="Rating. ${stars} stars">`;
	for (var i = 0; i < stars; i++) {
		html += `<img src="/images/gold_star.svg.png" role="presentation">`;
	}
	html += '</div>';
  	return Ember.String.htmlSafe(html);
}

export default Ember.Helper.helper(generateStars);