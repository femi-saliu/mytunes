// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());
    console.log("songQueue created");



    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */
    //var queue = this.get('songQueue');

    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song){
      // add song to queue model
      // if queue is empty, play song, else enqueue
      this.get('songQueue').push(song); // Duplicates?
      // if collection has one song, update currentSong
      if (this.get('songQueue').length === 1){
        this.set('currentSong', this.get('songQueue').at(0));
      }
      console.log(this.get('songQueue'));
    },this);

    params.library.on('dequeue', function(song){
      // add song to queue model
      // if queue is empty, play song, else enqueue
      this.get('songQueue').remove(song); // Duplicates?
      // if collection has one song, update currentSong
      if (this.get('songQueue').length === 1){
        this.set('currentSong', this.get('songQueue').at(0));
      }

      //TODO - if the user clicks on the song that is playing
      // dequeue then start the next song
      console.log(this.get('songQueue'));
    },this);


  },

  songEnded: function(){
    // console.log("song ended function call");
    // console.log("currentSong before shift:", this.get('songQueue').at(0));
    this.get('songQueue').shift();
    this.set('currentSong',this.get('songQueue').at(0));
    // console.log("currentSong after shift:", this.get('songQueue').at(0));
  }

});
