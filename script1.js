let allmusic=[
    {
        Name:"Dekha Tenu Pehli Pehli Baar Ve, Mohammad Faiz",
        musicname:"m1.mp3"
    },
    {
        Name:"O Sajni Re (Laapataa Ladies) Arijit Singh",
        musicname:"m2.mp3"
    },
    {
        Name:"Ye Tune Kya Kiya  Arijit Singh",
        musicname:"m3.mp3"
    }
]

musicindex=0;
let currentmusic=0;
var songname=document.querySelector(".songname");
var mainaudio=document.querySelector(".mainaudio");
var playpause=document.querySelector(".playpauseimg")

// window.addEventListener("load",()=>
// {
//     loadmusic(musicindex);
// })

// function loadmusic(indexno)
// {
//     songname.innerHTML=allmusic[indexno].Name;
//     mainaudio.src=`${allmusic[indexno].musicname}.mp3`;
// }

const setmusic=(i)=>{
    let song=allmusic[i];
    currentmusic=i;
    mainaudio.src =song.musicname;
    songname.innerHTML=song.Name;

}

 setmusic(0);

var next=document.querySelector(".next");
next.addEventListener('click',()=>{
    if(currentmusic>=allmusic.length-1)
    {
        currentmusic=0;
    }
    else{
        currentmusic++;
    }
    setmusic(currentmusic);
    playpause.src='play1.png';

})
var previous=document.querySelector(".previous");
previous.addEventListener('click',()=>{
    if(currentmusic<=0)
    {
        currentmusic=allmusic.length-1;
    }
    else{
        currentmusic--;
    }
    setmusic(currentmusic);
    playpause.src='play1.png';

})
playpause.addEventListener('click',()=>
{
    if(mainaudio.paused)
    {
        mainaudio.play();
        playpause.src='pause.webp';

    }
    else{
        mainaudio.pause();
        playpause.src='play1.png';
    }
})
var seecbar=document.querySelector("#seecbar");
mainaudio.addEventListener('timeupdate',()=>
{
    // console.log("timeupdate");
    var progress=parseInt((mainaudio.currentTime/mainaudio.duration)*100);
    seecbar.value=progress;

})
seecbar.addEventListener('change',()=>
{
    mainaudio.currentTime=(seecbar.value*mainaudio.duration)/100;
})