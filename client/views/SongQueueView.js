// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
  	this.collection.on('add', function(){ // update
  		// if !song playing, start song at collection[0]
  		this.render();

  	},this);
  	this.collection.on('remove', function(){ // update
  		// if !song playing, start song at collection[0]
  		this.render();

  	},this);
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
    return this;
  }

});
