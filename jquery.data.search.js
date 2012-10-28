/**
 * jQuery Simple Search. A simple jQuery plugin for filtering 
 * through elements that match a specified search parameter. 
 * @version 1.0
 *
 * @dependency jQuery 1.8.2
 * @dependency jQuery UI 1.9.0
 *
 * @author Matt Goucher ( matt[at]mattgoucher[dot]com )
 **/

(function($){

    $.widget('jquery.search', {

        options: {
            listItems:     null,
            disableSubmit: false
        },

        _create: function() {

            var self = this;

            // You gotta specify a list homie.
            if ( !self.options.listItems ) {
                throw 'Invalid List Specified';
                return;
            }

            // Disable the default form actions
            if ( self.options.disableSubmit ) {
                self.element.closest('form').bind('submit', function(e){
                    e.preventDefault();
                });
            }

            // Cache the list of searchable items
            self.items = self.options.listItems;

            // Search for the items
            self.element.bind('keyup', function(e){
                self.searchItems( self.element.val() );
            });

        },

        // Loop through each item, and check against query
        searchItems: function( query ) {

            var self = this,
                regex = RegExp( self._cleanQuery(query), "i");

            // No need to search empty queries.
            if ( !query || query == '' ) {
                self.reset();
                return;
            }

            self.items.each(function(i){
                var item = $(this);
                if ( !regex.test(item.data('search')) ) {
                    item.hide();
                }
            });

        },

        // Show all items
        reset: function() {
            this.items.each(function(){
                $(this).show();
            });
        },

        // Escape any garbage from input
        _cleanQuery: function( input ) {
            return (input + '').replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, "\\$1");
        }

    });

}(jQuery));
