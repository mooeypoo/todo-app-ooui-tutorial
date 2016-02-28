var ToDoListWidget = function ToDoListWidget( config ) {
	config = config || {};

	// Call parent constructor
	ToDoListWidget.parent.call( this, config );

	this.aggregate( {
		delete: 'itemDelete'
	} );

	this.connect( this, { itemDelete: 'onItemDelete' } );
};

OO.inheritClass( ToDoListWidget, OO.ui.SelectWidget );

ToDoListWidget.prototype.onItemDelete = function ( itemWidget ) {
	this.removeItems( [ itemWidget ] );
};
