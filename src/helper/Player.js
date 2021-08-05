var Sound = require('react-native-sound');

class Player {
  constructor(title) {
    this.title = title;
    Sound.setCategory('Playback');
  }

  play(title) {
    this.sound = new Sound(`${title}.mp3`, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('something went wrong');
        return;
      }
      this.sound.play((success) => {
        if (success) {
          console.log("played succesfully")
        } else {
          console.log("failed to play...!")
        };
      })
    })
  };
  stop() {
    this.sound.stop();
    this.sound.release();
  }
}

export default Player;