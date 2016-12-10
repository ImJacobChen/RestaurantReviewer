import Ember from 'ember';

export default Ember.Component.extend({

	filters: [],
	filterPanelDisplay: false,

	willDestroyElement() {
		var filters = this.get('filters');
		filters.clear();
	},

	filteredRestaurants: function() {
		var filters = this.get('filters');
		return this.get('restaurants').filter(function(restaurant) {
			if (filters.length < 1) {
				return true;
			}
			else {
				return filters.includes(restaurant.data.type);
			}
		});
	}.property('filters.[]'),

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
