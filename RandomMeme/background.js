chrome.browserAction.onClicked.addListener((tab) => {
    let audioPlayer = new Audio();
    const audioClips = ["depression.mp3", "bruh.mp3", "spaghett.mp3"];
    const randomClipNum = Math.floor(Math.random() * audioClips.length);
    audioPlayer.src = audioClips[randomClipNum];
    audioPlayer.play();
});

