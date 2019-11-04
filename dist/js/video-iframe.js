'use strict';

function getVideoId(el){
    var src = el.getAttribute('data-src');
    return src.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i)[1];
}

document.querySelectorAll('.video-block').forEach(function(el){
    let id = getVideoId(el);
    console.log(id);
    el.querySelector('.img-preview').src = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
});

let videoBtn = document.querySelectorAll('.play-video-btn');

videoBtn.forEach(function(el){
    el.addEventListener('click', function(){
        let el = this.closest('.video-block');
        let id = getVideoId(el);
        el.querySelector('.iframe-block').innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?rel=0&showinfo=0&autoplay=1&enablejsapi=1&version=3&playerapiid=ytplayer" allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>`;
        el.classList.add('playing');
    });
});