$(document).ready(function () {
    $('#upload-file-btn').click(function() {
            var form_data = new FormData($('#upload-file')[0]);
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:5000/upload',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            success: function(data) {
                alert(data)
            },
        });
        });
    $('#btn').click(function() {
        //e.preventDefault();
        let hasVal = $("#dow-form").val().trim();
        alert('qq');
        alert(hasVal);
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:5000/download',
            data: hasVal,
            dataType: 'text',
            success: function(data) {
                alert(data)
            },
        });
    });
    $('#del-btn').click(function() {
        let hasVal = $("#del-form").val().trim();
        alert('qq');
        alert(hasVal);
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:5000/delete',
            data: hasVal,
            dataType: 'text',
            success: function(data) {
                alert(data)
            },
        });
    });
});
