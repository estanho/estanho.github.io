$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** Click event on Toggle Menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

});