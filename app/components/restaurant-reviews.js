import Ember from 'ember';

export default Ember.Component.extend({
	reviewName: "",
	reviewBody: "",
	reviewRating: null,

	store: Ember.inject.service(),

	actions: {
		postReview(id) {
			var store = this.get('store');

			// Create review record
			var newReview = store.createRecord('review', {
				name: this.get('reviewName'),
				body: this.get('reviewBody'),
				rating: this.get('reviewRating'),
				timestamp: new Date().getTime(),
				restaurant: id
			});

			// Add record to restaurant
			var restaurant = this.get('restaurant');
			restaurant.get('reviews').addObject(newReview);

			// Save review then restaurant
			newReview.save().then(function() {
				return restaurant.save();
			});
		}
	}
});
