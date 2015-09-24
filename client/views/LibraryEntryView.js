var LibraryEntryView = Backbone.View.extend({

  tagName: 'div',
  className: 'red hoverable row',

  template: _.template('<div class="col s3 white-text"><%= artist %></div><div class="col s9 white-text"><%= title %></div>'),

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
