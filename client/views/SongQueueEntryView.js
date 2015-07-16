var SongQueueEntryView = Backbone.View.extend({
  tagName: 'div',

  className: "blue hoverable row",

  template: _.template('<div class="col s1 white-text">X</div><div class="col s3 white-text"><%= artist %></div> <div class="col s8 white-text"><%= title %></div>'),

  events: {
  	'click': function() {
  	  this.model.dequeue();
  	}
  },


  render: function(){
  	return this.$el.html(this.template(this.model.attributes));
  }
});
