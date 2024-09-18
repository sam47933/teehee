info.onCountdownEnd(function () {
    sprites.destroy(mySprite)
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    info.changeScoreBy(1)
    pause(1000)
})
info.player1.onScore(20, function () {
    game.gameOver(true)
})
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`teehee`)
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
controller.moveSprite(mySprite)
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
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(img`
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
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three))
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f . . f . . . . . . . . 
    . . . . f . . f . . . . . . . . 
    . . . . f . . f . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f . . . . . . . . . 
    . . . . f . . f . . . . . . . . 
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
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f . . f . . . . . . . 
    . . . . . f . . f . . . . . . . 
    . . . . . f . . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
info.startCountdown(60)