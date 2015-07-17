var LibraryView = Backbone.View.extend({

  tagName: 'div',

  initialize: function() {
    this.render();
  },

  render: function(){
    this.$el.children().detach();
    this.$el.html('<h4 class="center-align">Library</h4>').append(
      this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
