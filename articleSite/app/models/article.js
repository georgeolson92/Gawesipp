import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  header: DS.attr(),
  paragraph_content: DS.attr(),
  quote: DS.attr(),
  quote_person: DS.attr(),
  city: DS.attr(),
  categories: DS.attr(),
  tags: DS.attr(),
  minutesToRead: DS.attr(),
  image: DS.attr()
});
