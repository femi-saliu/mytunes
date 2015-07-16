// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'div',
  className: 'red hoverable row',

  template: _.template('<div class="col s3 white-text"><%= artist %></div><div class="col s9 white-text"><%= title %></div>'),

  events: {
    'click': function() {
      // this.model.play(); // eventually change -> add to queue
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
