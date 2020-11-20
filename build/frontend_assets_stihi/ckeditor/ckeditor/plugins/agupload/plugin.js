CKEDITOR.plugins.add( 'agupload', {
    icons: 'agupload',
    init: function( editor ) {
        // Plugin logic goes here...
        
        editor.addCommand( 'agupload', {
			/*
			new CKEDITOR.command( editor, {
			    exec: function( editor ) {
					editor.fire( 'someEvent2');
			    }
			})
			*/

			exec: function( editor ) {
	        	editor.fire( 'someEvent2', {'name': editor.name});
	        	console.log('fired: '+editor.name);
    		}
        });

        // new CKEDITOR.dialogCommand( 'aguploadDialog' )

		editor.ui.addButton( 'agupload', {
		    label: 'YouTube',
		    command: 'agupload',
		    toolbar: 'insert,0'
		});    }
});