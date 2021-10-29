import { createClient } from 'pexels';

const client = createClient('563492ad6f91700001000001c1970c23dc89484fbd68d3b9bae046c4');
const query = 'news';

let list = document.querySelector('.wrapper-video');

let item;

if(list){
    item = list.querySelector('.videos-number');
    list.innerHTML = '';
}

let iframe = document.querySelector('.videos-destacado iframe');

client.videos.search({ query, per_page: 3 })
.then(videos => {
    videos.videos.map(video => {
        //console.log(video);
        add_video(video)
    })
});

function add_video(video){
    if(item){
    let new_item = item.cloneNode(true);

    let title = new_item.querySelector('#info');
    title.innerHTML= video.user.name;

    let thumbnail = new_item.querySelector('#video-thumbnail');
    thumbnail.setAttribute('src', video.video_pictures[0].picture);

    let duration= new_item.querySelector('#duration');
    duration.innerHTML =video.duration;

    add_event( new_item, video.video_files[2].link );

    list.insertAdjacentElement('beforeend', new_item);
    }
}

function add_event(item, link){
    item.addEventListener('click', e => {
        e.preventDefault();
        iframe.setAttribute('src', link)
    })
}