import Phaser from "phaser";

const config = {
  type: Phaser.CANVAS,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);
var bg ;
function preload() {

this.load.multiatlas(
    "logo",
    "src/assets/logo/logo.json",
    "src/assets/logo",
);
this.load.multiatlas(
  "fireballs",
  "src/assets/all fireballs/fireballs.json",
  "src/assets/all fireballs",
);


}

function create() {
  this.anims.create({
    key: "logo",
    frames: this.anims.generateFrameNames("logo", {
        start: 1,
        end: 74,
        zeroPad: 0,
        prefix: "logo (",
        suffix: ").png",
    }),
    repeat: -1,
    repeatDelay: 1500,
  });
  this.anims.create({
    key: "fireballs",
    frames: this.anims.generateFrameNames("fireballs", {
        start: 0,
        end: 20,
        zeroPad: 0,
        prefix: "all fireballs-",
        suffix: ".png",
    }),
    repeat: -1,
  
  });

  this.add.sprite(400,100, "logo").setOrigin(0.5).setScale(0.5).play("logo");
  this.add.sprite(400,300, "fireballs").setOrigin(0.5).play("fireballs");


}