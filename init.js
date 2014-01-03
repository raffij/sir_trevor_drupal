jQuery(document).ready(function () {

  SirTrevor.Blocks.Image = SirTrevor.Block.extend({

    type: "Image",
    
    droppable: false,
    uploadable: true,
    
    icon_name: 'image',
    
    loadData: function(data){
      // Create our image tag
      this.$editor.html(jQuery('<img>', { src: data.file.url }));
    },

    onUploadComplete: function(attachment, win) {
      data = { 
        file: {
          url: attachment.url,
          id: attachment.id,
          width: attachment.width,
          height: attachment.height,
          filename: attachment.name
        }
      };

      this.$inputs.hide();
      this.$editor.html(jQuery('<img>', { src: attachment.url })).show();
      this.setData(data);
      this.ready();

      win.close();
    },

    onUploadButtonClicked: function(ev){ 
      ev.preventDefault(); 

      var button = jQuery(ev.currentTarget);
      this.imceOpen();
    },
    
    onBlockRender: function(){
      /* Setup the upload button */
      var _editor = this;
      this.$inputs.find('input').hide();
      this.$inputs.find('button').bind('click', _.bind(this.onUploadButtonClicked, this));
    },

    imceOpen: function() {
      window.sir_trevor_drupal_imceload = _.bind(function(win) {
        win.imce.setSendTo('Add file to content', _.bind(this.onUploadComplete, this));
      }, this);
      var url = this.imceUrl() + '?app=sir_trevor_drupal|imceload@sir_trevor_drupal_imceload|';
      window.open(url, '', 'width=760,height=560,resizable=1');
    },

    imceUrl: function() {
      return Drupal.settings.sir_trevor_drupal.imceURL;
    },

    imceCreatePopup: function(content) {
      jQuery('body').append(content);
    }

  });

  jQuery('.sir-trevor-js').each( function() {
    new SirTrevor.Editor({
      el: jQuery(this)
    });
  });

});