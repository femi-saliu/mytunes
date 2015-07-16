// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
  	console.log("play");
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){
  	console.log("enqueue from song");
  	// trigger enqueue
  	this.trigger('enqueue',this);
  },

  dequeue: function(){
  	console.log("about to remove from queue");
  	this.trigger('dequeue',this);
  }

});
