let song_name = document.getElementById('song_name');
let previous = document.getElementById('previous');
let play = document.getElementById('play');
let next = document.getElementById('next');
let progress_bar = document.getElementById("progress-bar");
var music =document.getElementById('music');
var progress = document.getElementById("progress");


console.log(play)

let songs_list = [

{
    song_name:'yaariyan',
    song: 'yaariyan.mp3'
},

{
    song_name:'Stay',
    song: 'Stay.mp3'
},
{
    song_name:'Kola Kalle',
    song: 'Kola Kalle.mp3'
},
{
    song_name:'O Manasa',
    song: 'O Manasa.mp3'
},
{
    song_name:'BTS',
    song: 'BTS.mp3'
},
{
    song_name:'V (BTS)',
    song: 'V (BTS).mp3'
}

]

// keeping track of which song is playing and if song is playing or not
let i=0;
let flag=false;
// showing song name on screen
var audio = new Audio(songs_list[i].song);
song_name.innerHTML=songs_list[i].song_name


// function to play/pause song
play.addEventListener('click',function(){
if(flag===false){
audio.play()
flag=true;
console.log(flag)
}
else{

    audio.pause()
    flag=false;
console.log(flag)
}
})
// function to play next song
next.addEventListener('click',function(){
    audio.pause()
    flag = false;
i= i+1;
if(i>=songs_list.length){
i=0;

}
console.log(i)
 audio = new Audio(songs_list[i].song);
song_name.innerHTML=songs_list[i].song_name
if(flag===false){
    audio.play()
    flag=true;
    console.log(flag)
    }

})
// function to play previous song
previous.addEventListener('click',function(){
    audio.pause()
    flag = false;
i= i-1;

if(i<=0){
i=songs_list.length-1;
console.log(i)
}

 audio = new Audio(songs_list[i].song);
song_name.innerHTML=songs_list[i].song_name
if(flag===false){
    audio.play()
    flag=true;
    console.log(flag)
    
}
})

function updateProgressBar() {
    const progress = (audio.currentTime / audio.duration) * 100;
    document.getElementById('progress').style.width = progress + '%';
  }
audio.addEventListener('timeupdate', updateProgressBar);

progress_bar.onclick= function(e){
    audio.currentTime = ((e.offsetX/progress_bar.offsetWidth)*audio.duration);
}


























