var ToDoItemWidget = function ToDoItemWidget( config ) {
	config = config || {};

	// Call parent constructor
	ToDoItemWidget.parent.call( this, config );

	this.creationTime = config.creationTime;

	this.deleteButton = new OO.ui.ButtonWidget( {
		label: 'Delete'
	} );

	this.deleteButton.connect( this, { click: 'onDeleteButtonClick' } );

	this.$element
		.addClass( 'todo-itemWidget' )
		.append( this.deleteButton.$element );
};

OO.inheritClass( ToDoItemWidget, OO.ui.OptionWidget );

ToDoItemWidget.prototype.onDeleteButtonClick = function () {
	this.emit( 'delete' );
};

ToDoItemWidget.prototype.getCreationTime = function () {
	return this.creationTime;
};

ToDoItemWidget.prototype.getPrettyCreationTime= function () {
	var date = new Date( this.creationTime ),
		monthNames = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec'
		];

	return [
		date.getDate(),
		monthNames[ date.getMonth() ],
		date.getFullYear(),
		date.getHours() + ':' + date.getMinutes()
	].join( ' ' );
};