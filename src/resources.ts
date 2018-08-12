import * as ex from 'excalibur';
import { LevelData } from './scenes/level/level';

export const Textures = {
    Sword: new ex.Texture(require('./images/sword.png')),
    SpeechBubble: new ex.Texture(require('./images/speech.png')),
    Button: new ex.Texture(require('./images/button.png')),
    Rocket: new ex.Texture(require('./images/rocket.png')),
    TV: new ex.Texture(require('./images/tv.png')),
    WoodTile: new ex.Texture(require('./images/wood_tile.png')),
    BrickTile: new ex.Texture(require('./images/brick_tile.png')),
    SmallThruster: new ex.Texture(require('./images/small_thruster.png')),
    Background:  new ex.Texture(require('./images/background.png')),
    Goal:  new ex.Texture(require('./images/goal.png')),
}

export const Levels:  {[key: string]: LevelData} = {
    Level1: require('./scenes/level1.json'),
    Level2: require('./scenes/level2.json'),
}

