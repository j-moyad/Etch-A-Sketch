$(document).ready( function() {
    
    function createGrid(cells) {
        $('.cell').remove();
        $('.row').remove();
        
        $('body').bind('mousedown selectstart', function(event) {
            event.preventDefault();
        });
        
        for(var i=0; i<cells; i++) {
            $('#sketch').append('<div class="row"></div>');
        }
        for(var j=0; j<cells;j++) {
            $('.row').append('<div class="cell"></div>');
        }
        
        $('.cell').width(640/cells + 'px');
        $('.cell').height(640/cells + 'px');
        
        $('.cell:first-child').addClass('left');
        $('.cell:last-child').addClass('right');
        $('.row:first-child').children().addClass('top');
        $('.row:last-child').children().addClass('bottom');
        
        var isDown = false;

        $(document).mousedown(function() {
            isDown = true;
        })
        $(document).mouseup(function() {
            isDown = false;
        });
      
        $('.cell').on('mouseenter', function(event) {
            if(isDown)
                $(this).addClass('color');
        });
        
        $('.cell').on('mouseover', function(event) {
            $(this).css('background-color', '#0933AF');
        });
        
        $('.cell').on('mouseout', function(event) {
            $(this).css('background-color', 'none');
        });
        
        $('.cell').on('mousedown', function(event) {
            $(this).addClass('color');
        });
        
        $('.cell').on('click', function(event) {
            $(this).addClass('color');
        });
        
        $('.cell').on('dblclick', function(event) {
            $(this).removeClass('color');
        });
        
    }
    
    createGrid(64);
    
    $('#clear').click(function() {
        $('.color').removeClass('color');
        var cells = prompt("How many cells per row do you want?");
        createGrid(cells);
    });
});
