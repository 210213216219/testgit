{
  function onYouTubeIframeAPIReady() {
    let player = new YT.Player("player", {
      videoId: "Rk54JNn7Qw4",
      playerVars: { mute: 1 },
      events: {
        onStateChange: e => {
          let data = e.data;
          if (data == 1) {
            vocal.play();
            track.play();
          } else if (data == 2) {
            vocal.pause();
            track.pause();
          }
        }
      }
    });
  }
  let vocal = new Audio("vocal.flac");
  let track = new Audio("track.flac");
  player.nextElementSibling.oninput = e => vocal.volume = +e.target.value * .01;
  player.nextElementSibling.nextElementSibling.oninput = e => track.volume = +e.target.value * .01;
}