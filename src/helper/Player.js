var Sound = require('react-native-sound');

class Player {
  constructor(title) {
    this.title = title;
    Sound.setCategory('Playback');
  }

  play(title) {
    var that = this;
    this.sound = new Sound(`${title}.mp3`, Sound.MAIN_BUNDLE, () => that.sound.play());
  };
  pause() {
    this.sound.pause();
  }
}

export default Player;