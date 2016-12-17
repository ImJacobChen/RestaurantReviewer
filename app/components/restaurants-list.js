import Ember from 'ember';

export default Ember.Component.extend({

	filters: [],
	searchRefine: "",
	filterPanelDisplay: false,

	willDestroyElement() {
		var filters = this.get('filters');
		filters.clear();

		var searchRefine = this.get('searchRefine');
		searchRefine = "";
	},

	filteredRestaurants: function() {
		var filters = this.get('filters');
		var searchRefine = this.get('searchRefine');

		return this.get('restaurants')
			.filter(function(restaurant) {
				if (filters.length < 1) {
					return true;
				}
				else {
					return filters.includes(restaurant.data.type);
				}
			}).filter(function(restaurant) {
				if (searchRefine === "") {
					return true;
				}
				else {
					let restaurantName = restaurant.data.name.toLowerCase();
					let query = searchRefine.toLowerCase();

					return restaurantName.includes(query);
				}
			});
	}.property('filters.[]', 'searchRefine'),

	actions: {
		filter(value) {
			var filters = this.get('filters');
			
			if (filters.includes(value)) {
				filters.removeObject(value);
			}
			else {
				filters.pushObject(value);
			}
		},
		resetCheckboxes() {
			console.log('Reset Checkboxes');
		},
		toggleFilterPanel() {
			this.toggleProperty('filterPanelDisplay');
		}
	}
});
