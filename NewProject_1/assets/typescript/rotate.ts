
import { _decorator, Component, Node, tween, Vec3, Sprite, repeat } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Rotate
 * DateTime = Sun Sep 05 2021 19:47:40 GMT+0530 (India Standard Time)
 * Author = chandan_krishnani
 * FileBasename = rotate.ts
 * FileBasenameNoExtension = rotate
 * URL = db://assets/typescript/rotate.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('Rotate')
export class Rotate extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        // [3]
    
        /** Easing Node, here will ease the Node's position property */
        tween(this.node)
            .to(0.2, { scale: new Vec3(0, 0.5,0) }, {})
            .to(0.2,{ scale: new Vec3(0.5,0.5,0)},{})
            .to(0.2, { scale: new Vec3(0, 0.5,0) }, {})
            .to(0.2,{ scale: new Vec3(0.5,0.5,0)},{})
            .to(0.2, { scale: new Vec3(0, 0.5,0) }, {})
            .to(0.2,{ scale: new Vec3(0.5,0.5,0)},{})
            
            .start();
         

    }
    flip()
    {

        
    }
    onLoad()
    {
        this.node.on(Node.EventType.TOUCH_START,this.flip,this);
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
 */
