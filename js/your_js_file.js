
$(function() {    
    var $list, $newItemForm;
    $list = $('ul');
    $newItemForm = $('#newItemForm');
    $newItemForm.on('submit', function(e) {
        e.preventDefault();
        $list.append('<li>' + 'nombre de singleton:77445' + '</li>');
        $list.append('<li>' + 'nombre de doublon:2256' + '</li>');
    });
});
