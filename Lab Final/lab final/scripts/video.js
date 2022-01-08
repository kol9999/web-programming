var player = videojs('videoPlayer', {
    autoplay: 'muted',
    controls: true,
    poster: 'https://picsum.photos/800/450',
    loop: false,
    playbackRates: [0.25, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4],
    plugins: {
        hotkeys: {
            enableModifiersForNumbers: false,
            seekStep: 30
        }
    }
});


