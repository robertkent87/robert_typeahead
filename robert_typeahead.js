(function ($) {
  Drupal.behaviors.myBehavior = {
    attach: function (context, settings) {
      // Set up path to the module
      var modulePath = Drupal.settings.robert_typeahead.basePath;

      // Set up our suggestions dataset
      var states = new Bloodhound({
        prefetch: '/'+modulePath+'/states.json',
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
        queryTokenizer: Bloodhound.tokenizers.whitespace
      });

      // Attach typeahead to our search input field
      $('.typeahead', context).typeahead({
        minLength: 2
      }, {
        name: 'states',
        displayKey: 'name',
        source: states
      });
    }
  };
}(jQuery));