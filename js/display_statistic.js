
$(function() {    
    var $newItemForm;
    $newItemForm = $('#newItemForm');
    $newItemForm.on('submit', function(e) {
        e.preventDefault();
        $("#singleton").text('nombre de singleton: 77445');
        $("#duplicate").text('nombre de doublon: 2256');
    });
});
