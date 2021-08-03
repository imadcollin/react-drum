var Sound = require('react-native-sound');

class Player {
  constructor(title) {
    console.log('reac');
    this.title = title;
    Sound.setCategory('Playback');
  }
  play = title => {
    var test = new Sound(`${title}.mp3`, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      test.play(success => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });
  };
  pause = x => console.log('rrr');
}

export default Player;
