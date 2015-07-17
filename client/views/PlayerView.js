var PlayerView = Backbone.View.extend({

  el:'<audio controls autoplay class="hoverable"/>',

  initialize: function() {},

  setSong: function(song){
    this.model = song;
    this.render();
  },

  events: {
    'ended': function(){
      this.trigger('ended',this);
    }
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
