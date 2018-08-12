import * as ex from 'excalibur';
import { LevelData } from './levels/level';

export const Textures = {
    Sword: new ex.Texture(require('./images/sword.png')),
    SpeechBubble: new ex.Texture(require('./images/speech.png')),
    Button: new ex.Texture(require('./images/button.png')),
    Panel: new ex.Texture(require('./images/panel.png')),
    ArrowRight: new ex.Texture(require('./images/arrow.png')),
    ArrowLeft: new ex.Texture(require('./images/arrow2.png')),
    Rocket: new ex.Texture(require('./images/rocket.png')),
    TV: new ex.Texture(require('./images/tv.png')),
    Sofa: new ex.Texture(require('./images/sofa.png')),
    Lamp: new ex.Texture(require('./images/lamp.png')),
    WoodTile: new ex.Texture(require('./images/wood_tile.png')),
    BrickTile: new ex.Texture(require('./images/brick_tile.png')),
    SmallThruster: new ex.Texture(require('./images/small_thruster.png')),
    RadialThruster: new ex.Texture(require('./images/radial_thruster.png')),
    Background:  new ex.Texture(require('./images/background.png')),
    Goal:  new ex.Texture(require('./images/goal.png')),
}

export const Levels:  {[key: string]: LevelData} = {
    Level1: require('./levels/level1.json'),
    Level2: require('./levels/level2.json'),
    Level3: require('./levels/level3.json'),
    Level4: require('./levels/level4.json'),
    Level5: require('./levels/level5.json'),
}

