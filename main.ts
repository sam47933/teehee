info.player1.onScore(15, function () {
    game.gameOver(true)
    game.reset()
})
info.onCountdownEnd(function () {
    sprites.destroy(mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pause(1000)
})
let mySprite: Sprite = null
scene.setBackgroundColor(6)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f . . . f . . . . . . . . 
    . . . f . . . f . . . . . . . . 
    . . . f . . . f . . . . . . . . 
    . . . f . . . f . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f . . . . . . . . . 
    . . . f . . . f . . . . . . . . 
    . . . f . . . f . . . . . . . . 
    . . . f . . . f . . . . . . . . 
    . . . . f f f . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . d 3 3 3 . . . . . . . 
    . . . . d 3 3 3 3 3 . . . . . . 
    . . . . 3 3 . . 3 3 . . . . . . 
    . . . . 3 3 . . 3 3 . . . . . . 
    . . . . 3 3 3 3 3 d . . . . . . 
    . . . . . 3 3 3 d . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 155, 155)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f . . f . . . . . . . . 
    . . . . f . . f . . . . . . . . 
    . . . . f . . f . . . . . . . . 
    . . . . f . . f . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f . . . . . . . . . 
    . . . . f . . f . . . . . . . . 
    . . . . f . . f . . . . . . . . 
    . . . . . f f . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f . . f . . . . . . . . 
    . . . . f . . f . . . . . . . . 
    . . . . f . . f . . . . . . . . 
    . . . . f . . f . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f . . . . . . . . . 
    . . . . f . . f . . . . . . . . 
    . . . . . f f . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f . . . f . . . . . . . . 
    . . . f . . . f . . . . . . . . 
    . . . f . . . f . . . . . . . . 
    . . . f . . . f . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f f . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
info.startCountdown(120)
info.changeCountdownBy(-1)
