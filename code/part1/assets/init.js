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
		list = new OO.ui.SelectWidget( {
			classes: [ 'todo-list' ]
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
			new OO.ui.OptionWidget( {
				data: input.getValue(),
				label: input.getValue()
			} )
		] );
	} );

	// Append the app widgets
	$( '.wrapper' ).append(
		input.$element,
		list.$element
	);
} );
