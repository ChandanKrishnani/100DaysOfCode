
import { _decorator, Component, Node, director, PhysicsSystem, systemEvent, SystemEvent, KeyCode, RigidBody, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Physics
 * DateTime = Sun Sep 05 2021 18:13:59 GMT+0530 (India Standard Time)
 * Author = chandan_krishnani
 * FileBasename = Physics.ts
 * FileBasenameNoExtension = Physics
 * URL = db://assets/Typescript/Physics.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('Physics')
export class Physics extends Component {
    jumpbrid(event:any)
    {
        switch(event.keyCode)
        {
        case KeyCode.SPACE:
            console.log("space pressed");
            const localCenter = RigidBody.getLocalCenter();
            break;
        }

    }
   onLoad()
   {
       var manager=PhysicsSystem.instance;

       manager.enable=true;
       director.preloadScene("start",function(){
           console.log("Scene preloaded");

       });
       systemEvent.on(SystemEvent.EventType.KEY_UP,this.jumpbrid,this);


   }
    start () {
        // [3]
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
