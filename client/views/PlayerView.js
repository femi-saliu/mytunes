// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  // placeholder? needs a current song attr
  initialize: function() {
  },

  // updates model to be the next song to be played
  setSong: function(song){
    this.model = song;
    this.render();
  },

  // changes the song that is currently playing
  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
