{
  function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
      videoId: "Rk54JNn7Qw4",
      playerVars: { mute: 1 },
      events: {
        onStateChange: e => {
          let data = e.data;
          console.log(data);
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

  vocal.volume = +(v0.textContent = localStorage.getItem("0") ?? (localStorage.setItem("0", 50), 50)) * .01;
  track.volume = +(v1.textContent = localStorage.getItem("1") ?? (localStorage.setItem("1", 50), 50)) * .01;

  s0.oninput = e => vocal.volume = +(v0.textContent = e.target.value) * .01;
  s1.oninput = e => track.volume = +(v0.textContent = e.target.value) * .01;
}