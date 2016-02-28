/**
 * A demo ToDo app made with OOjs-UI
 * Tutorial by Moriel Schottlender
 * http://moriel.smarterthanthat.com
 * License: GPLv2
 */
$( document ).ready( function () {
	var input = new OO.ui.TextInputWidget( {
			placeholder: 'ToDo item',
			classes: [ 'todo-input' ]
		} ),
		list = new ToDoListWidget( {
			classes: [ 'todo-list' ]
		} ),
		info = new OO.ui.LabelWidget( {
			label: 'Information',
			classes: [ 'todo-info' ]
		} );

	// Respond to 'enter' keypress
	input.on( 'enter', function () {
		// Check for duplicates
		if ( list.getItemFromData( input.getValue() ) ) {
			input.$element.addClass( 'todo-error' );
			return;
		}
		input.$element.removeClass( 'todo-error' );

		// Add the item
		list.addItems( [
			new ToDoItemWidget( {
				data: input.getValue(),
				label: input.getValue(),
				timestamp: Date.now()
			} )
		] );
	} );

	list.on( 'choose', function ( item ) {
		info.setLabel( item.getData() + ' (' + item.getPrettyTimestamp() + ')' );
	} );

	// Append the app widgets
	$( '.wrapper' ).append(
		input.$element,
		list.$element,
		info.$element
	);
} );
