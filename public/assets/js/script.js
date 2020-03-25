$(function() {
    $('#order-burger').on('click', function(event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $('#new-burger').val().trim(),
            devoured: 0
        }
        if (newBurger.burger_name !== "") {
           //console.log(newBuger);
            $.ajax('api/burgers', {
                type: 'POST',
                data: newBurger
            }).then(
                function() {
                    location.reload();
                }
            )
            $('#new-burger').val(''); 
        }
    })

    $("#create-burger").keyup(function(event) {
        if (event.keyCode === 13) {
            $("#order-burger").click();
        }
    });

    $('.menu-order').on('click', function(event) {
        event.preventDefault();
        var name = $(this).attr('id');
        var newBurger = {
            burger_name: name,
            devoured: 0
        }
        $.ajax('api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(
            function() {
                location.reload();
            }
        )
    })

    $('.devour-burger').on('click', function(event) {
        event.preventDefault();
        var id = $(this).data('burgerid');
        var devouredStatus = {
            devoured: 1
        }
        $.ajax('api/burgers/' + id, {
            type: "PUT",
            data: devouredStatus
        }).then( function() {
            location.reload();
        })
    })
});