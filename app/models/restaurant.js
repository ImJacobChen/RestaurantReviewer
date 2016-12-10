import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	image: DS.attr('string'),
	stars: DS.attr('number'),
	type: DS.attr('string'),
	address: DS.attr('string'),
	description: DS.attr('string'),
	openingtimes: DS.attr(),
	reviews: DS.hasMany('review', { async: true, inverse: null })
});
