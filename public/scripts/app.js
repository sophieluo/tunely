/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */




$(document).ready(function() {
    console.log('app.js loaded!');


    $.ajax({
        method: 'GET',
        url: '/api/albums',
        type: 'json',
        success: handleGetAlbumSuccess,
        error: handleGetAlbumSuccess
    })

    // Handlebars templating



});

function handleGetAlbumSuccess(data) {
    var receivedAlbum = data.albums;
    receivedAlbum.forEach(function(e) {
        renderAlbum(e);
    });

    function renderAlbum(e) {
        var source = $('#albums-template').html();
        var template = Handlebars.compile(source);
        var albumsHtml = template({
            album: e
        });
        $('#albums').prepend(albumsHtml);
    };
};

function handleGetAlbumError(a, b, c) {
    console.log("Error!")
}
