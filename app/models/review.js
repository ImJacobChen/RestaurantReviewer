import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	body: DS.attr('string'),
	rating: DS.attr('number'),
	timestamp: DS.attr('number'),
	restaurant: DS.belongsTo('restaurant', { async: true, inverse: null })
});
