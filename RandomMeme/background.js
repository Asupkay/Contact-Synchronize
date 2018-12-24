chrome.browserAction.onClicked.addListener((tab) => {
    let audioPlayer = new Audio();
    audioPlayer.src = "depression.mp3";
    audioPlayer.play();
});

