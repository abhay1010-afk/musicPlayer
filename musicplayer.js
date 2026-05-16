let songname=document.querySelector("#song-name");
let songsinger=document.querySelector("#song-artist");
let songimage=document.querySelector(".song-image");
let playpausebutton=document.querySelector("#play-pause");
let volumerange=document.querySelector("#volume-range");
let volsvg=document.querySelector("#vol-svg");
let songrange=document.querySelector("#song-duration");
let musicanime=document.querySelector("#music-anime");
let playlistimg=document.querySelector("#playlist-img");
let playlistclass=document.querySelector(".playlist");
let playlistsong=document.querySelectorAll(".playlist-song");
let index=1;
let playingsong=false;
let track=document.createElement("audio");
let songs=[
    {
        name:"Beliver",
        path:"believer-295993.mp3",
        // image:"images/images.clear.png",
        singer:"Imagine Dragons"
    
    },
    {
        name:"Thunder",
        path:"Thunder.mp3",
        // image:"download(3).jpeg",
        singer:"Imagine Dragons"
    },
    {
        name:"Malang-sajna",
        path:"Malang-Sajna-Slowed-Reverb.mp3",
        // image:"Malang-Sajna-Slowed-Reverb.jpg",
        singer:"Arjit Singh"
    },
    {
        name:"Faded",
        path:"Faded-Instrumental.mp3",
        // image:"images/images.Faded-Instrumental.jpg",
        singer:"Alan Walker"

    }
]
function loadtrack(index){
    track.src=songs[index].path;
    songname.innerHTML=songs[index].name;
    songsinger.innerHTML=songs[index].singer;
//    songimage.style=`background-image: url("${songs[index].image}")`;
volume();
songduration();
setInterval(()=>{
songrange.max=track.duration 
songrange.value=track.currentTime
},1000)
track.loop=true;
track.load();
}
loadtrack(index);
function playpause(){
    if(playingsong==false){
        playsong();
        
    }
    else{
      
        pausesong();
    }
}
function playsong(){
    track.play();
    playingsong=true;
    playpausebutton.src="pause.svg";
    musicanime.style.display="block";
}
function pausesong(){
    track.pause();
    playingsong=false;
    playpausebutton.src="play.svg";
    musicanime.style.display="none";

}
//for next song
function next(){
    if (index<songs.length-1) {
        index++;
        loadtrack(index);
        playsong();
    }else{
        index=0;
        loadtrack(index);
        playsong();
    }
}
//for previous song
function previous(){
    if (index>0) {
        index--;
        loadtrack(index);
        playsong();
    }else{
        index=songs.length-1;
        loadtrack(index);
        playsong();
    }
}
function volume(){
     track.volume=volumerange.value/100; 
     if (volumerange.value==0) {
        volsvg.src="mute.svg";
     }
     else{
        volsvg.src="volume.svg";
     }
}
function songduration(){
    track.currentTime=songrange.value;
}
playlistimg.addEventListener("click",()=>{
playlistclass.classList.toggle("playlist-active");
if (playlistclass.classList.contains("playlist-active")) {
    playlistimg.src="cross.svg";
}
else{
    playlistimg.src="playlist.svg";
}
})
playlistsong.forEach((song,index)=>{
  song.addEventListener('click',()=>{
    loadtrack(index);
    playsong();
    playlistclass.classList.remove("playlist-active");
    playlistimg.src="playlist.svg";
  })
})