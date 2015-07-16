var SongQueueView = Backbone.View.extend({

	tagName: 'div',

  initialize: function() {
  	this.render();
  	this.collection.on('add', function(){
  		this.render();

  	},this);
  	this.collection.on('remove', function(){
  		this.render();

  	},this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html('<h4 class="center-align">Song Queue</h4>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
    return this;
  }

});
