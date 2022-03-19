const videos = [
    "섬광.mp4",
    "forest1.mp4",
    "forest.mp4",
    "star.mp4",
    "library.mp4"
];

const chosenVideo = videos[Math.floor(Math.random() * videos.length)];

const bgVideo = document.createElement("video");

bgVideo.src = `video/${chosenVideo}`;
bgVideo.autoplay = true;
bgVideo.loop = true;
bgVideo.muted =  true;
bgVideo.type = "mp4";
bgVideo.style.zIndex = -1;
document.body.prepend(bgVideo);