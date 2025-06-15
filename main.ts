statusbars.onZero(StatusBarKind.Health, function (status) {
    carnival.onGameOverExpanded(carnival.WinTypes.Lose)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
    statusbar.value += -10
})
function makeBadGuyStuff () {
    BadGuyProjectile = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    BadGuyProjectile.setPosition(4, randint(52, 113))
    BadGuyProjectile.setVelocity(randint(60, 90), 0)
    BadGuyProjectile.lifespan = 5000
    animation.runImageAnimation(
    BadGuyProjectile,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 . . . . . . . . . . 
        . . . . . 4 4 . . . . 2 . . . . 
        . . . . . 4 5 4 . . 4 2 . . . . 
        . . . . . 4 5 5 d 4 2 . . . . . 
        . . . . . 4 5 5 5 5 2 . . . . . 
        . . . . 4 5 5 5 5 2 . . . . . . 
        . . . . 4 4 2 4 5 2 . . . . . . 
        . . . 4 4 2 . . 4 4 . . . . . . 
        . . . . . . . . . 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 2 . . . . . 
        . . . 4 . . . 2 2 4 . . . . . . 
        . . . 4 4 2 2 5 4 . . . . . . . 
        . . . . 4 5 5 5 d . . . . . . . 
        . . . . . 4 5 5 5 4 . . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . 2 4 5 4 4 4 4 4 . . . . 
        . . . . 4 4 4 . . . . . . . . . 
        . . . . 4 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 4 . . . . 
        . . . . . . . . . 4 4 4 . . . . 
        . . . . 4 4 4 4 4 5 4 2 . . . . 
        . . . . . 4 5 5 5 5 2 . . . . . 
        . . . . . . 4 5 5 5 4 . . . . . 
        . . . . . . . d 5 5 5 4 . . . . 
        . . . . . . . 4 5 2 2 4 4 . . . 
        . . . . . . 4 2 2 . . . 4 . . . 
        . . . . . 2 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
}
let BadGuyProjectile: Sprite = null
let statusbar: StatusBarSprite = null
game.splash("UnderTale:", "A battle from Undertale.")
game.splash("I don't know how to make", "the player attack sorry.")
game.splash("Dodge the balls.", "You stinky butt-face.")
tiles.setCurrentTilemap(tilemap`level1`)
carnival.startCountdownGame(40, carnival.WinTypes.Win)
let Heart = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f . f f f . . . . 
    . . . . f 3 3 3 f 3 3 3 f . . . 
    . . . . f 3 3 3 3 3 1 3 f . . . 
    . . . . f 3 3 3 3 3 3 3 f . . . 
    . . . . . f 3 b b b 3 f . . . . 
    . . . . . f f b b b f f . . . . 
    . . . . . . f f b f f . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Heart)
Heart.setPosition(74, 82)
Heart.setStayInScreen(true)
let Bad_boi = sprites.create(img`
    . . . . . . . c c c . . . . . . 
    . . . . . . c b 5 c . . . . . . 
    . . . . c c c 5 5 c c c . . . . 
    . . c c b c 5 5 5 5 c c c c . . 
    . c b b 5 b 5 5 5 5 b 5 b b c . 
    . c b 5 5 b b 5 5 b b 5 5 b c . 
    . . f 5 5 5 b b b b 5 5 5 c . . 
    . . f f 5 5 5 5 5 5 5 5 f f . . 
    . . f f f b 2 e e 2 b f f f . . 
    . . f f f 1 2 b b 2 1 f f f . . 
    . . . f f b b b b b b f f . . . 
    . . . e e f e e e e f e e . . . 
    . . e b c b 5 b b 5 b f b e . . 
    . . e e f 5 5 5 5 5 5 f e e . . 
    . . . . c b 5 5 5 5 b c . . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Enemy)
Bad_boi.setPosition(79, 27)
statusbar = statusbars.create(120, 4, StatusBarKind.Health)
statusbar.setLabel("HP", 1)
statusbar.value = 100
statusbar.setPosition(77, 115)
game.onUpdateInterval(200, function () {
    makeBadGuyStuff()
})
