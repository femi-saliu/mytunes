var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song){
      this.get('songQueue').push(song.clone());
      if (this.get('songQueue').length === 1){
        this.set('currentSong', this.get('songQueue').at(0));
      }
    },this);

    this.get('songQueue').on('dequeue', function(song){
      if (this.get('songQueue').indexOf(song)===0){
        this.songEnded();
      } else {
        this.get('songQueue').remove(song);
      }
    },this);


  },

  songEnded: function(){
    this.get('songQueue').shift();
    this.set('currentSong',this.get('songQueue').at(0));
  }

});
