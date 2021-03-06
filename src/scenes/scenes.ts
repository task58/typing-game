import {InputManager} from "phaser3-components-ts/InputManager"
import { LoadScene } from "./loadScene";
import {TitleScene} from "./titleScene";
import {MenuScene} from "./menuScene"
import {ScreenManager} from "phaser3-components-ts/ScreenManager";
import { FreeModeScene } from "./freeMode";
import { ErrorScene } from "./errorScene";

export let Scenes = [
    LoadScene,
    TitleScene,
    MenuScene,
    FreeModeScene,
    ErrorScene,
    ScreenManager,
    InputManager
]