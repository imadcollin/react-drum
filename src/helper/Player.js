var Sound = require('react-native-sound');

class Player {
  constructor(title) {
    this.title = title;
    Sound.setCategory('Playback');
    this.sound = new Sound(`${title}.mp3`)//Default Instance. 
  }

  play(title) {
    this.sound.release();
    this.sound = new Sound(`${title}.mp3`, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('something went wrong');
        return;
      }
      console.log("load..", this.sound.isLoaded());
      this.sound.play((success) => {
        console.log("playing..", this.sound.isPlaying());
        if (success) {
          console.log("played succesfully")
        } else {
          console.log("failed to play...!")
        };
      });
    });

  };
  stop() {
    if (this.sound.isPlaying()) {
      //this.sound.reset();
      this.sound.stop();
      this.sound.release();
    }
  }
}

export default Player;