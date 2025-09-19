var a0_0x2ac117 = a0_0x43a2;
(function (_0x5875c0, _0x595698) {
    var _0x4f6d49 = a0_0x43a2
        , _0x3d79a6 = _0x5875c0();
    while (!![]) {
        try {
            var _0xba43e2 = parseInt(_0x4f6d49(0x308)) / 0x1 * (parseInt(_0x4f6d49(0x371)) / 0x2) + -parseInt(_0x4f6d49(0x33f)) / 0x3 + -parseInt(_0x4f6d49(0x266)) / 0x4 + -parseInt(_0x4f6d49(0x34f)) / 0x5 + -parseInt(_0x4f6d49(0x2c5)) / 0x6 * (-parseInt(_0x4f6d49(0x2c1)) / 0x7) + parseInt(_0x4f6d49(0x24a)) / 0x8 + -parseInt(_0x4f6d49(0x332)) / 0x9 * (-parseInt(_0x4f6d49(0x2cd)) / 0xa);
            if (_0xba43e2 === _0x595698)
                break;
            else
                _0x3d79a6['push'](_0x3d79a6['shift']());
        } catch (_0x5e3a16) {
            _0x3d79a6['push'](_0x3d79a6['shift']());
        }
    }
}(a0_0x563d, 0xb4896));
var stage, canvasW = 0x0, canvasH = 0x0;
function initGameCanvas(_0x1cb48d, _0x4847f1) {
    var _0x420441 = a0_0x43a2;
    const _0x4f714f = document[_0x420441(0x370)](_0x420441(0x1cb));
    _0x4f714f[_0x420441(0x1ec)] = _0x1cb48d,
        _0x4f714f[_0x420441(0x1b5)] = _0x4847f1,
        canvasW = _0x1cb48d,
        canvasH = _0x4847f1,
        stage = new createjs[(_0x420441(0x2aa))]('gameCanvas', {
            'antialias': !![]
        }),
        createjs[_0x420441(0x203)][_0x420441(0x1d9)](stage),
        stage['enableMouseOver'](0x14),
        stage['mouseMoveOutside'] = !![],
        createjs[_0x420441(0x23e)]['timingMode'] = createjs[_0x420441(0x23e)][_0x420441(0x2d9)],
        createjs[_0x420441(0x23e)][_0x420441(0x252)] = 0x3c,
        createjs[_0x420441(0x23e)][_0x420441(0x208)](_0x420441(0x259), tick);
}
var safeZoneGuide = ![], canvasContainer, mainContainer, gameContainer, resultContainer, exitContainer, optionsContainer, shareContainer, shareSaveContainer, socialContainer, guideline, bg, bgP, logo, logoP, itemExit, itemExitP, popTitleTxt, popDescTxt, buttonConfirm, buttonCancel, itemResult, itemResultP, buttonContinue, resultTitleTxt, resultDescTxt, buttonShare, buttonSave, resultTitleOutlineTxt, resultDescOutlineTxt, resultShareTxt, resultShareOutlineTxt, popTitleOutlineTxt, popDescOutlineTxt, buttonSettings, buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonMusicOn, buttonMusicOff, buttonExit;
$[a0_0x2ac117(0x2f8)] = {};
var themeContainer, adventureContainer, statusContainer, gridContainer, maskContainer, bgContainer, snakeContainer, strokeContainer, scoreContainer, brickContainer, touchContainer, brickStatusContainer, brickIconContainer, scoreStatusContainer, levelStatusContainer, touchMoveContainer, buttonClassic, buttonAdventure, buttonArrowL, buttonArrowR, buttonSelectTheme, itemAdventurePop, adventureTitleTxt, adventureTitleShadowTxt, adventureSizeTxt, adventureWallTxt, adventureBrickTxt, sizeTxt, itemNumberSize, buttonRowL, buttonRowR, buttonColumnL, buttonColumnR, buttonAdventureStart, gridWall, gridGround, levelTxt, levelShadowTxt, pointTxt, pointShadowTxt, brickTxt, brickShadowTxt, itemStatus, statusTxt, buttonTouch, buttonTouchMove, gridMask, snakeStroke, resultTitleShadowTxt, resultDescShadowTxt, popTitleShadowTxt;
$[a0_0x2ac117(0x237)] = {},
    $[a0_0x2ac117(0x318)] = {};
function buildGameCanvas() {
    var _0x298745 = a0_0x2ac117;
    canvasContainer = new createjs[(_0x298745(0x234))](),
        mainContainer = new createjs['Container'](),
        gameContainer = new createjs['Container'](),
        exitContainer = new createjs[(_0x298745(0x234))](),
        resultContainer = new createjs[(_0x298745(0x234))](),
        shareContainer = new createjs['Container'](),
        shareSaveContainer = new createjs[(_0x298745(0x234))](),
        socialContainer = new createjs[(_0x298745(0x234))](),
        themeContainer = new createjs[(_0x298745(0x234))](),
        adventureContainer = new createjs[(_0x298745(0x234))](),
        statusContainer = new createjs['Container'](),
        gridContainer = new createjs[(_0x298745(0x234))](),
        maskContainer = new createjs[(_0x298745(0x234))](),
        bgContainer = new createjs[(_0x298745(0x234))](),
        snakeContainer = new createjs[(_0x298745(0x234))](),
        strokeContainer = new createjs[(_0x298745(0x234))](),
        scoreContainer = new createjs['Container'](),
        brickContainer = new createjs[(_0x298745(0x234))](),
        touchContainer = new createjs['Container'](),
        brickStatusContainer = new createjs[(_0x298745(0x234))](),
        brickIconContainer = new createjs[(_0x298745(0x234))](),
        scoreStatusContainer = new createjs[(_0x298745(0x234))](),
        levelStatusContainer = new createjs['Container'](),
        touchContainer = new createjs[(_0x298745(0x234))](),
        touchMoveContainer = new createjs[(_0x298745(0x234))](),
        bg = new createjs[(_0x298745(0x2de))](loader[_0x298745(0x339)](_0x298745(0x1d7))),
        bgP = new createjs['Bitmap'](loader['getResult'](_0x298745(0x232))),
        logo = new createjs[(_0x298745(0x2de))](loader[_0x298745(0x339)](_0x298745(0x2bb))),
        logoP = new createjs['Bitmap'](loader[_0x298745(0x339)](_0x298745(0x356))),
        buttonClassic = new createjs[(_0x298745(0x2de))](loader[_0x298745(0x339)](_0x298745(0x32d))),
        centerReg(buttonClassic),
        buttonAdventure = new createjs[(_0x298745(0x2de))](loader['getResult'](_0x298745(0x29b))),
        centerReg(buttonAdventure),
        buttonArrowL = new createjs[(_0x298745(0x2de))](loader['getResult'](_0x298745(0x1fa))),
        centerReg(buttonArrowL),
        buttonArrowR = new createjs['Bitmap'](loader[_0x298745(0x339)]('buttonArrowR')),
        centerReg(buttonArrowR),
        buttonSelectTheme = new createjs[(_0x298745(0x2de))](loader[_0x298745(0x339)](_0x298745(0x25e))),
        centerReg(buttonSelectTheme),
        themeContainer[_0x298745(0x27d)](buttonArrowL, buttonArrowR, buttonSelectTheme),
        itemAdventurePop = new createjs[(_0x298745(0x2de))](loader[_0x298745(0x339)]('itemAdventurePop')),
        centerReg(itemAdventurePop),
        adventureTitleTxt = new createjs[(_0x298745(0x355))](),
        adventureTitleTxt[_0x298745(0x35c)] = _0x298745(0x2e9),
        adventureTitleTxt[_0x298745(0x1e1)] = _0x298745(0x210),
        adventureTitleTxt[_0x298745(0x37b)] = _0x298745(0x353),
        adventureTitleTxt[_0x298745(0x204)] = _0x298745(0x328),
        adventureTitleTxt[_0x298745(0x286)] = textStrings['adventureTitle'],
        adventureTitleShadowTxt = new createjs[(_0x298745(0x355))](),
        adventureTitleShadowTxt[_0x298745(0x35c)] = _0x298745(0x2e9),
        adventureTitleShadowTxt[_0x298745(0x1e1)] = '#883310',
        adventureTitleShadowTxt['textAlign'] = _0x298745(0x353),
        adventureTitleShadowTxt[_0x298745(0x204)] = _0x298745(0x328),
        adventureTitleShadowTxt[_0x298745(0x286)] = textStrings[_0x298745(0x298)],
        adventureSizeTxt = new createjs['Text'](),
        adventureSizeTxt[_0x298745(0x35c)] = _0x298745(0x205),
        adventureSizeTxt[_0x298745(0x1e1)] = '#883310',
        adventureSizeTxt[_0x298745(0x37b)] = _0x298745(0x353),
        adventureSizeTxt[_0x298745(0x204)] = _0x298745(0x328),
        adventureSizeTxt[_0x298745(0x286)] = textStrings['adventureSize'],
        adventureWallTxt = new createjs['Text'](),
        adventureWallTxt[_0x298745(0x35c)] = '40px\x20bpreplaybold',
        adventureWallTxt['color'] = _0x298745(0x2b9),
        adventureWallTxt[_0x298745(0x37b)] = _0x298745(0x353),
        adventureWallTxt['textBaseline'] = _0x298745(0x328),
        adventureWallTxt[_0x298745(0x286)] = textStrings[_0x298745(0x1f3)],
        adventureBrickTxt = new createjs[(_0x298745(0x355))](),
        adventureBrickTxt[_0x298745(0x35c)] = _0x298745(0x205),
        adventureBrickTxt[_0x298745(0x1e1)] = _0x298745(0x2b9),
        adventureBrickTxt[_0x298745(0x37b)] = _0x298745(0x353),
        adventureBrickTxt[_0x298745(0x204)] = _0x298745(0x328),
        adventureBrickTxt['text'] = textStrings[_0x298745(0x1e9)],
        sizeTxt = new createjs[(_0x298745(0x355))](),
        sizeTxt[_0x298745(0x35c)] = _0x298745(0x205),
        sizeTxt[_0x298745(0x1e1)] = '#883310',
        sizeTxt['textAlign'] = _0x298745(0x353),
        sizeTxt[_0x298745(0x204)] = _0x298745(0x328),
        sizeTxt[_0x298745(0x286)] = textStrings[_0x298745(0x2f8)],
        itemNumberSize = new createjs[(_0x298745(0x2de))](loader[_0x298745(0x339)](_0x298745(0x2b2))),
        centerReg(itemNumberSize),
        buttonRowL = new createjs[(_0x298745(0x2de))](loader[_0x298745(0x339)](_0x298745(0x270))),
        centerReg(buttonRowL),
        buttonRowR = new createjs[(_0x298745(0x2de))](loader[_0x298745(0x339)]('buttonPlus')),
        centerReg(buttonRowR),
        buttonColumnL = new createjs[(_0x298745(0x2de))](loader[_0x298745(0x339)](_0x298745(0x270))),
        centerReg(buttonColumnL),
        buttonColumnR = new createjs[(_0x298745(0x2de))](loader['getResult']('buttonPlus')),
        centerReg(buttonColumnR),
        buttonAdventureStart = new createjs['Bitmap'](loader['getResult'](_0x298745(0x231))),
        centerReg(buttonAdventureStart),
        adventureContainer[_0x298745(0x27d)](itemAdventurePop, adventureTitleShadowTxt, adventureTitleTxt, adventureBrickTxt, adventureWallTxt, adventureSizeTxt, buttonAdventureStart, itemNumberSize, buttonRowL, buttonRowR, buttonColumnL, buttonColumnR, sizeTxt);
    for (var _0x851457 = 0x0; _0x851457 < 0x2; _0x851457++) {
        var _0xe33b2 = 0x2c
            , _0x214f1e = 0x2c
            , _0xe7ff50 = {
                'regX': _0xe33b2 / 0x2,
                'regY': _0x214f1e / 0x2,
                'height': _0x214f1e,
                'width': _0xe33b2,
                'count': 0x2
            }
            , _0x3f2f2c = {
                'enable': {
                    'frames': [0x0]
                },
                'disable': {
                    'frames': [0x1]
                }
            }
            , _0x41bb85 = new createjs[(_0x298745(0x2b8))]({
                'images': [loader[_0x298745(0x339)](_0x298745(0x37d))],
                'frames': _0xe7ff50,
                'animations': _0x3f2f2c
            });
        $[_0x298745(0x237)][_0x851457] = new createjs[(_0x298745(0x2ee))](_0x41bb85, 'enable'),
            $[_0x298745(0x237)][_0x851457][_0x298745(0x282)] = new createjs[(_0x298745(0x32c))](new createjs[(_0x298745(0x2a8))]()[_0x298745(0x2fa)]('#000')[_0x298745(0x357)](-0x14, -0x19, 0x96, 0x32)),
            adventureContainer[_0x298745(0x27d)]($['radio'][_0x851457]);
    }
    gridWall = new createjs['Shape'](),
        gridGround = new createjs[(_0x298745(0x32c))](),
        levelTxt = new createjs[(_0x298745(0x355))](),
        levelTxt['font'] = '35px\x20bpreplaybold',
        levelTxt[_0x298745(0x1e1)] = _0x298745(0x210),
        levelTxt[_0x298745(0x37b)] = _0x298745(0x24d),
        levelTxt[_0x298745(0x204)] = _0x298745(0x328),
        levelShadowTxt = new createjs[(_0x298745(0x355))](),
        levelShadowTxt[_0x298745(0x35c)] = '35px\x20bpreplaybold',
        levelShadowTxt[_0x298745(0x1e1)] = _0x298745(0x2b9),
        levelShadowTxt[_0x298745(0x37b)] = _0x298745(0x24d),
        levelShadowTxt['textBaseline'] = 'alphabetic',
        levelShadowTxt['y'] = 0x5,
        levelStatusContainer['addChild'](levelShadowTxt, levelTxt),
        pointTxt = new createjs[(_0x298745(0x355))](),
        pointTxt[_0x298745(0x35c)] = _0x298745(0x369),
        pointTxt[_0x298745(0x1e1)] = _0x298745(0x210),
        pointTxt[_0x298745(0x37b)] = _0x298745(0x353),
        pointTxt[_0x298745(0x204)] = _0x298745(0x328),
        pointShadowTxt = new createjs[(_0x298745(0x355))](),
        pointShadowTxt[_0x298745(0x35c)] = _0x298745(0x369),
        pointShadowTxt[_0x298745(0x1e1)] = _0x298745(0x2b9),
        pointShadowTxt[_0x298745(0x37b)] = 'center',
        pointShadowTxt[_0x298745(0x204)] = _0x298745(0x328),
        pointShadowTxt['y'] = 0x5,
        scoreStatusContainer[_0x298745(0x27d)](pointShadowTxt, pointTxt),
        brickTxt = new createjs[(_0x298745(0x355))](),
        brickTxt[_0x298745(0x35c)] = _0x298745(0x369),
        brickTxt['color'] = _0x298745(0x210),
        brickTxt['textAlign'] = _0x298745(0x24d),
        brickTxt[_0x298745(0x204)] = _0x298745(0x328),
        brickShadowTxt = new createjs[(_0x298745(0x355))](),
        brickShadowTxt['font'] = '35px\x20bpreplaybold',
        brickShadowTxt['color'] = _0x298745(0x2b9),
        brickShadowTxt[_0x298745(0x37b)] = _0x298745(0x24d),
        brickShadowTxt[_0x298745(0x204)] = _0x298745(0x328),
        brickShadowTxt['y'] = 0x5,
        brickTxt['x'] = brickShadowTxt['x'] = 0x19,
        brickStatusContainer['addChild'](brickIconContainer, brickShadowTxt, brickTxt),
        itemStatus = new createjs[(_0x298745(0x2de))](loader['getResult'](_0x298745(0x2ca))),
        centerReg(itemStatus),
        statusTxt = new createjs['Text'](),
        statusTxt['font'] = _0x298745(0x369),
        statusTxt[_0x298745(0x1e1)] = _0x298745(0x2b9),
        statusTxt[_0x298745(0x37b)] = _0x298745(0x353),
        statusTxt[_0x298745(0x204)] = 'alphabetic',
        statusTxt['y'] = 0x8,
        statusContainer[_0x298745(0x27d)](itemStatus, statusTxt),
        buttonTouch = new createjs['Bitmap'](loader[_0x298745(0x339)](_0x298745(0x34b))),
        centerReg(buttonTouch),
        touchMoveContainer[_0x298745(0x27d)](buttonTouch);
    var _0x28376b = ['Up', _0x298745(0x27b), _0x298745(0x283), _0x298745(0x2f6)]
        , _0x4acaa2 = [0x0, 0x5a, 0xb4, 0x10e];
    if (gameSettings[_0x298745(0x36b)]) {
        buttonTouchMove = new createjs['Bitmap'](loader[_0x298745(0x339)]('buttonTouchMove')),
            centerReg(buttonTouchMove);
        for (var _0x851457 = 0x0; _0x851457 < _0x28376b['length']; _0x851457++) {
            $[_0x298745(0x318)][_0x28376b[_0x851457]] = new createjs['Bitmap'](loader[_0x298745(0x339)](_0x298745(0x2b4))),
                centerReg($[_0x298745(0x318)][_0x28376b[_0x851457]]),
                $[_0x298745(0x318)][_0x28376b[_0x851457]][_0x298745(0x22d)] = ![],
                $[_0x298745(0x318)]['arrow' + _0x28376b[_0x851457]] = new createjs['Bitmap'](loader['getResult'](_0x298745(0x24e))),
                centerReg($[_0x298745(0x318)][_0x298745(0x215) + _0x28376b[_0x851457]]),
                $['touch'][_0x28376b[_0x851457]][_0x298745(0x21e)] = $[_0x298745(0x318)]['arrow' + _0x28376b[_0x851457]][_0x298745(0x21e)] = $[_0x298745(0x318)][_0x28376b[_0x851457]][_0x298745(0x1da)][_0x298745(0x321)],
                $['touch']['arrow' + _0x28376b[_0x851457]]['rotation'] = $['touch'][_0x28376b[_0x851457]][_0x298745(0x344)] = _0x4acaa2[_0x851457],
                createHitarea($[_0x298745(0x318)][_0x298745(0x215) + _0x28376b[_0x851457]]),
                touchMoveContainer['addChild']($[_0x298745(0x318)][_0x28376b[_0x851457]], $[_0x298745(0x318)][_0x298745(0x215) + _0x28376b[_0x851457]]);
        }
        touchMoveContainer[_0x298745(0x27d)](buttonTouchMove);
    } else {
        var _0x27b3ff = 0x28;
        for (var _0x851457 = 0x0; _0x851457 < _0x28376b['length']; _0x851457++) {
            $[_0x298745(0x318)][_0x28376b[_0x851457]] = new createjs[(_0x298745(0x2de))](loader[_0x298745(0x339)](_0x298745(0x34b) + _0x28376b[_0x851457] + 'Press')),
                centerReg($['touch'][_0x28376b[_0x851457]]),
                $[_0x298745(0x318)][_0x28376b[_0x851457]][_0x298745(0x22d)] = ![],
                $[_0x298745(0x318)][_0x298745(0x215) + _0x28376b[_0x851457]] = new createjs[(_0x298745(0x2de))](loader['getResult']('buttonTouch' + _0x28376b[_0x851457])),
                centerReg($[_0x298745(0x318)]['arrow' + _0x28376b[_0x851457]]);
            if (_0x851457 == 0x0)
                $[_0x298745(0x318)][_0x28376b[_0x851457]]['y'] = $[_0x298745(0x318)]['arrow' + _0x28376b[_0x851457]]['y'] = -_0x27b3ff;
            else {
                if (_0x851457 == 0x1)
                    $['touch'][_0x28376b[_0x851457]]['x'] = $[_0x298745(0x318)][_0x298745(0x215) + _0x28376b[_0x851457]]['x'] = _0x27b3ff;
                else {
                    if (_0x851457 == 0x2)
                        $[_0x298745(0x318)][_0x28376b[_0x851457]]['y'] = $[_0x298745(0x318)][_0x298745(0x215) + _0x28376b[_0x851457]]['y'] = _0x27b3ff;
                    else
                        _0x851457 == 0x3 && ($[_0x298745(0x318)][_0x28376b[_0x851457]]['x'] = $['touch']['arrow' + _0x28376b[_0x851457]]['x'] = -_0x27b3ff);
                }
            }
            createHitarea($[_0x298745(0x318)][_0x298745(0x215) + _0x28376b[_0x851457]]),
                touchMoveContainer['addChild']($[_0x298745(0x318)][_0x28376b[_0x851457]], $['touch']['arrow' + _0x28376b[_0x851457]]);
        }
    }
    touchContainer['addChild'](touchMoveContainer),
        gridMask = new createjs[(_0x298745(0x32c))](),
        snakeStroke = new createjs[(_0x298745(0x32c))](),
        itemResult = new createjs[(_0x298745(0x2de))](loader[_0x298745(0x339)]('itemPop')),
        itemResultP = new createjs[(_0x298745(0x2de))](loader['getResult'](_0x298745(0x31c))),
        buttonContinue = new createjs[(_0x298745(0x2de))](loader[_0x298745(0x339)](_0x298745(0x2ed))),
        centerReg(buttonContinue),
        resultShareTxt = new createjs['Text'](),
        resultShareTxt['font'] = _0x298745(0x229),
        resultShareTxt[_0x298745(0x1e1)] = '#883310',
        resultShareTxt[_0x298745(0x37b)] = _0x298745(0x353),
        resultShareTxt[_0x298745(0x204)] = _0x298745(0x328),
        resultShareTxt[_0x298745(0x286)] = textStrings[_0x298745(0x2f8)],
        resultTitleTxt = new createjs[(_0x298745(0x355))](),
        resultTitleTxt['font'] = '75px\x20bpreplaybold',
        resultTitleTxt[_0x298745(0x1e1)] = _0x298745(0x210),
        resultTitleTxt[_0x298745(0x37b)] = 'center',
        resultTitleTxt['textBaseline'] = _0x298745(0x328),
        resultTitleTxt[_0x298745(0x286)] = textStrings[_0x298745(0x368)],
        resultTitleShadowTxt = new createjs[(_0x298745(0x355))](),
        resultTitleShadowTxt[_0x298745(0x35c)] = _0x298745(0x2e9),
        resultTitleShadowTxt[_0x298745(0x1e1)] = '#883310',
        resultTitleShadowTxt[_0x298745(0x37b)] = _0x298745(0x353),
        resultTitleShadowTxt[_0x298745(0x204)] = 'alphabetic',
        resultTitleShadowTxt[_0x298745(0x286)] = textStrings[_0x298745(0x368)],
        resultDescTxt = new createjs[(_0x298745(0x355))](),
        resultDescTxt['font'] = _0x298745(0x304),
        resultDescTxt[_0x298745(0x1e1)] = '#13ff00',
        resultDescTxt[_0x298745(0x37b)] = _0x298745(0x353),
        resultDescTxt['textBaseline'] = _0x298745(0x328),
        resultDescTxt[_0x298745(0x286)] = '',
        resultDescShadowTxt = new createjs[(_0x298745(0x355))](),
        resultDescShadowTxt[_0x298745(0x35c)] = _0x298745(0x304),
        resultDescShadowTxt['color'] = '#883310',
        resultDescShadowTxt[_0x298745(0x37b)] = _0x298745(0x353),
        resultDescShadowTxt[_0x298745(0x204)] = _0x298745(0x328),
        resultDescShadowTxt[_0x298745(0x286)] = '',
        socialContainer[_0x298745(0x22d)] = ![],
        socialContainer[_0x298745(0x36f)] = 0x1,
        shareContainer[_0x298745(0x27d)](resultShareTxt, socialContainer);
    if (shareSettings[_0x298745(0x1d9)]) {
        buttonShare = new createjs[(_0x298745(0x2de))](loader['getResult'](_0x298745(0x2b6))),
            centerReg(buttonShare);
        var _0x244e79 = {
            'x': 0x0,
            'y': 0x2d,
            'spaceX': 0x41
        };
        _0x244e79['x'] = -((shareSettings[_0x298745(0x2bd)][_0x298745(0x211)] - 0x1) * _0x244e79[_0x298745(0x220)] / 0x2);
        for (let _0xe014e1 = 0x0; _0xe014e1 < shareSettings[_0x298745(0x2bd)][_0x298745(0x211)]; _0xe014e1++) {
            var _0x4f70db = shareSettings[_0x298745(0x2bd)][_0xe014e1]
                , _0x233815 = String(_0x4f70db[0x0])[_0x298745(0x365)]() + String(_0x4f70db)[_0x298745(0x2e7)](0x1);
            $[_0x298745(0x2f8)]['button' + _0xe014e1] = new createjs[(_0x298745(0x2de))](loader[_0x298745(0x339)](_0x298745(0x341) + _0x233815)),
                $[_0x298745(0x2f8)][_0x298745(0x341) + _0xe014e1][_0x298745(0x1e8)] = _0x4f70db,
                centerReg($[_0x298745(0x2f8)]['button' + _0xe014e1]),
                $[_0x298745(0x2f8)][_0x298745(0x341) + _0xe014e1]['x'] = _0x244e79['x'],
                $[_0x298745(0x2f8)][_0x298745(0x341) + _0xe014e1]['y'] = _0x244e79['y'],
                socialContainer['addChild']($[_0x298745(0x2f8)]['button' + _0xe014e1]),
                _0x244e79['x'] += _0x244e79[_0x298745(0x220)];
        }
        buttonShare['y'] = buttonShare[_0x298745(0x1da)][_0x298745(0x321)] / 0x2 + 0xa,
            shareContainer['addChild'](buttonShare);
    }
    typeof toggleScoreboardSave == 'function' && (buttonSave = new createjs[(_0x298745(0x2de))](loader[_0x298745(0x339)](_0x298745(0x272))),
        centerReg(buttonSave),
        buttonSave['y'] = buttonSave[_0x298745(0x1da)][_0x298745(0x321)] / 0x2 + 0xa,
        shareSaveContainer[_0x298745(0x27d)](buttonSave)),
        buttonFullscreen = new createjs['Bitmap'](loader[_0x298745(0x339)](_0x298745(0x2f5))),
        centerReg(buttonFullscreen),
        buttonSoundOn = new createjs[(_0x298745(0x2de))](loader[_0x298745(0x339)]('buttonSoundOn')),
        centerReg(buttonSoundOn),
        buttonSoundOff = new createjs[(_0x298745(0x2de))](loader['getResult'](_0x298745(0x2db))),
        centerReg(buttonSoundOff),
        buttonSoundOn[_0x298745(0x22d)] = ![],
        buttonExit = new createjs[(_0x298745(0x2de))](loader[_0x298745(0x339)](_0x298745(0x335))),
        centerReg(buttonExit),
        buttonSettings = new createjs[(_0x298745(0x2de))](loader[_0x298745(0x339)](_0x298745(0x245))),
        centerReg(buttonSettings),
        createHitarea(buttonFullscreen),
        createHitarea(buttonSoundOn),
        createHitarea(buttonSoundOff),
        createHitarea(buttonExit),
        createHitarea(buttonSettings),
        optionsContainer = new createjs['Container'](),
        optionsContainer[_0x298745(0x27d)](buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonExit),
        optionsContainer[_0x298745(0x22d)] = ![],
        itemExit = new createjs['Bitmap'](loader[_0x298745(0x339)](_0x298745(0x330))),
        itemExitP = new createjs['Bitmap'](loader[_0x298745(0x339)](_0x298745(0x31c))),
        buttonConfirm = new createjs['Bitmap'](loader[_0x298745(0x339)](_0x298745(0x2e8))),
        centerReg(buttonConfirm),
        buttonCancel = new createjs['Bitmap'](loader[_0x298745(0x339)](_0x298745(0x212))),
        centerReg(buttonCancel),
        popTitleTxt = new createjs[(_0x298745(0x355))](),
        popTitleTxt[_0x298745(0x35c)] = '75px\x20bpreplaybold',
        popTitleTxt['color'] = '#fff',
        popTitleTxt[_0x298745(0x37b)] = 'center',
        popTitleTxt['textBaseline'] = _0x298745(0x328),
        popTitleTxt[_0x298745(0x286)] = textStrings[_0x298745(0x1b8)],
        popTitleShadowTxt = new createjs[(_0x298745(0x355))](),
        popTitleShadowTxt[_0x298745(0x35c)] = _0x298745(0x2e9),
        popTitleShadowTxt['color'] = '#883310',
        popTitleShadowTxt[_0x298745(0x37b)] = _0x298745(0x353),
        popTitleShadowTxt[_0x298745(0x204)] = _0x298745(0x328),
        popTitleShadowTxt['text'] = textStrings[_0x298745(0x1b8)],
        popDescTxt = new createjs[(_0x298745(0x355))](),
        popDescTxt[_0x298745(0x35c)] = _0x298745(0x369),
        popDescTxt[_0x298745(0x1fd)] = 0x28,
        popDescTxt[_0x298745(0x1e1)] = _0x298745(0x2b9),
        popDescTxt['textAlign'] = _0x298745(0x353),
        popDescTxt[_0x298745(0x204)] = _0x298745(0x328),
        popDescTxt[_0x298745(0x286)] = textStrings[_0x298745(0x2fe)],
        exitContainer['addChild'](itemExit, itemExitP, popTitleShadowTxt, popTitleTxt, popDescTxt, buttonConfirm, buttonCancel),
        exitContainer[_0x298745(0x22d)] = ![],
        guideline = new createjs[(_0x298745(0x32c))](),
        mainContainer[_0x298745(0x27d)](logo, logoP, buttonClassic, buttonAdventure),
        maskContainer['addChild'](snakeStroke, snakeContainer),
        gridContainer['addChild'](gridWall, gridGround, bgContainer, scoreContainer, brickContainer, maskContainer),
        gameContainer[_0x298745(0x27d)](levelStatusContainer, brickStatusContainer, scoreStatusContainer, statusContainer, touchContainer),
        resultContainer['addChild'](itemResult, itemResultP, buttonContinue, resultTitleShadowTxt, resultTitleTxt, resultDescShadowTxt, resultDescTxt, shareContainer, shareSaveContainer),
        canvasContainer[_0x298745(0x27d)](bg, bgP, mainContainer, gridContainer, themeContainer, adventureContainer, gameContainer, resultContainer, exitContainer, optionsContainer, buttonSettings, guideline),
        stage[_0x298745(0x27d)](canvasContainer),
        changeViewport(viewport[_0x298745(0x1ba)]),
        resizeGameFunc();
}
function changeViewport(_0x272460) {
    _0x272460 ? (stageW = landscapeSize['w'],
        stageH = landscapeSize['h'],
        contentW = landscapeSize['cW'],
        contentH = landscapeSize['cH']) : (stageW = portraitSize['w'],
            stageH = portraitSize['h'],
            contentW = portraitSize['cW'],
            contentH = portraitSize['cH']),
        canvasW = stageW,
        canvasH = stageH,
        changeCanvasViewport();
}
function changeCanvasViewport() {
    var _0x157b92 = a0_0x2ac117;
    canvasContainer != undefined && (stage[_0x157b92(0x296)] = stage['scaleY'] = dpr,
        safeZoneGuide && guideline[_0x157b92(0x2ae)][_0x157b92(0x1c5)]()[_0x157b92(0x239)](0x2)[_0x157b92(0x274)](_0x157b92(0x316))[_0x157b92(0x357)]((stageW - contentW) / 0x2, (stageH - contentH) / 0x2, contentW, contentH),
        viewport[_0x157b92(0x1ba)] ? (bg[_0x157b92(0x22d)] = !![],
            bgP[_0x157b92(0x22d)] = ![],
            logo[_0x157b92(0x22d)] = !![],
            logoP[_0x157b92(0x22d)] = ![],
            adventureSettings['enable'] ? (buttonClassic['x'] = canvasW / 0x2 - 0x8c,
                buttonClassic['y'] = canvasH / 0x64 * 0x4b,
                buttonAdventure['x'] = canvasW / 0x2 + 0x8c,
                buttonAdventure['y'] = canvasH / 0x64 * 0x4b,
                buttonAdventure[_0x157b92(0x22d)] = !![]) : (buttonClassic['x'] = canvasW / 0x2,
                    buttonClassic['y'] = canvasH / 0x64 * 0x4b,
                    buttonAdventure[_0x157b92(0x22d)] = ![]),
            buttonArrowL['x'] = canvasW / 0x2 - 0x190,
            buttonArrowL['y'] = canvasH / 0x2,
            buttonArrowR['x'] = canvasW / 0x2 + 0x190,
            buttonArrowR['y'] = canvasH / 0x2,
            buttonSelectTheme['x'] = canvasW / 0x2,
            buttonSelectTheme['y'] = canvasH / 0x64 * 0x4b,
            itemAdventurePop['x'] = canvasW / 0x2,
            itemAdventurePop['y'] = canvasH / 0x2,
            adventureTitleTxt['x'] = canvasW / 0x2,
            adventureTitleTxt['y'] = canvasH / 0x64 * 0x23,
            adventureTitleShadowTxt['x'] = canvasW / 0x2,
            adventureTitleShadowTxt['y'] = adventureTitleTxt['y'] + 0xa,
            buttonAdventureStart['x'] = canvasW / 0x2,
            buttonAdventureStart['y'] = canvasH / 0x64 * 0x44,
            buttonRowL['x'] = canvasW / 0x2 + 0xa0 - 0x1e,
            buttonRowR['x'] = canvasW / 0x2 + 0xa0 + 0x1e,
            buttonColumnL['x'] = canvasW / 0x2 - 0xa0 - 0x1e,
            buttonColumnR['x'] = canvasW / 0x2 - 0xa0 + 0x1e,
            adventureSizeTxt['x'] = canvasW / 0x2,
            adventureSizeTxt['y'] = canvasH / 0x64 * 0x2b,
            itemNumberSize['x'] = canvasW / 0x2,
            sizeTxt['x'] = canvasW / 0x2,
            itemNumberSize['y'] = buttonRowL['y'] = buttonRowR['y'] = buttonColumnL['y'] = buttonColumnR['y'] = canvasH / 0x64 * 0x30,
            sizeTxt['y'] = itemNumberSize['y'] + 0x14,
            $[_0x157b92(0x237)][0x0]['x'] = canvasW / 0x2 - 0x96,
            $[_0x157b92(0x237)][0x0]['y'] = canvasH / 0x64 * 0x39,
            adventureWallTxt['x'] = $['radio'][0x0]['x'] + 0x50,
            adventureWallTxt['y'] = $[_0x157b92(0x237)][0x0]['y'] + 0xe,
            $[_0x157b92(0x237)][0x1]['x'] = canvasW / 0x2 + 0x32,
            $[_0x157b92(0x237)][0x1]['y'] = canvasH / 0x64 * 0x39,
            adventureBrickTxt['x'] = $[_0x157b92(0x237)][0x1]['x'] + 0x50,
            adventureBrickTxt['y'] = $[_0x157b92(0x237)][0x1]['y'] + 0xe,
            statusContainer['x'] = canvasW / 0x2,
            statusContainer['y'] = canvasH / 0x2,
            itemResult[_0x157b92(0x22d)] = !![],
            itemResultP[_0x157b92(0x22d)] = ![],
            buttonContinue['x'] = canvasW / 0x2,
            buttonContinue['y'] = canvasH / 0x64 * 0x44,
            shareContainer['x'] = shareSaveContainer['x'] = canvasW / 0x2,
            shareContainer['y'] = shareSaveContainer['y'] = canvasH / 0x64 * 0x31,
            resultTitleTxt['x'] = canvasW / 0x2,
            resultTitleTxt['y'] = canvasH / 0x64 * 0x23,
            resultTitleShadowTxt['x'] = resultTitleTxt['x'],
            resultTitleShadowTxt['y'] = resultTitleTxt['y'] + 0xa,
            resultDescTxt['x'] = canvasW / 0x2,
            resultDescTxt['y'] = canvasH / 0x64 * 0x2c,
            resultDescShadowTxt['x'] = resultDescTxt['x'],
            resultDescShadowTxt['y'] = resultDescTxt['y'] + 0x8,
            itemExit[_0x157b92(0x22d)] = !![],
            itemExitP['visible'] = ![],
            buttonConfirm['x'] = canvasW / 0x2,
            buttonConfirm['y'] = canvasH / 0x64 * 0x38,
            buttonCancel['x'] = canvasW / 0x2,
            buttonCancel['y'] = canvasH / 0x64 * 0x44,
            popTitleTxt['x'] = canvasW / 0x2,
            popTitleTxt['y'] = canvasH / 0x64 * 0x23,
            popTitleShadowTxt['x'] = popTitleTxt['x'],
            popTitleShadowTxt['y'] = popTitleTxt['y'] + 0xa,
            popDescTxt['x'] = canvasW / 0x2,
            popDescTxt['y'] = canvasH / 0x64 * 0x2b) : (bg[_0x157b92(0x22d)] = ![],
                bgP[_0x157b92(0x22d)] = !![],
                logo[_0x157b92(0x22d)] = ![],
                logoP['visible'] = !![],
                adventureSettings[_0x157b92(0x1d9)] ? (buttonClassic['x'] = canvasW / 0x2,
                    buttonClassic['y'] = canvasH / 0x64 * 0x49,
                    buttonAdventure['x'] = canvasW / 0x2,
                    buttonAdventure['y'] = canvasH / 0x64 * 0x55,
                    buttonAdventure[_0x157b92(0x22d)] = !![]) : (buttonClassic['x'] = canvasW / 0x2,
                        buttonClassic['y'] = canvasH / 0x64 * 0x4b,
                        buttonAdventure[_0x157b92(0x22d)] = ![]),
                buttonArrowL['x'] = canvasW / 0x2 - 0xfa,
                buttonArrowL['y'] = canvasH / 0x2,
                buttonArrowR['x'] = canvasW / 0x2 + 0xfa,
                buttonArrowR['y'] = canvasH / 0x2,
                buttonSelectTheme['x'] = canvasW / 0x2,
                buttonSelectTheme['y'] = canvasH / 0x64 * 0x55,
                itemAdventurePop['x'] = canvasW / 0x2,
                itemAdventurePop['y'] = canvasH / 0x2,
                adventureTitleTxt['x'] = canvasW / 0x2,
                adventureTitleTxt['y'] = canvasH / 0x64 * 0x26,
                adventureTitleShadowTxt['x'] = canvasW / 0x2,
                adventureTitleShadowTxt['y'] = adventureTitleTxt['y'] + 0xa,
                buttonAdventureStart['x'] = canvasW / 0x2,
                buttonAdventureStart['y'] = canvasH / 0x64 * 0x40,
                buttonRowL['x'] = canvasW / 0x2 + 0xa0 - 0x1e,
                buttonRowR['x'] = canvasW / 0x2 + 0xa0 + 0x1e,
                buttonColumnL['x'] = canvasW / 0x2 - 0xa0 - 0x1e,
                buttonColumnR['x'] = canvasW / 0x2 - 0xa0 + 0x1e,
                adventureSizeTxt['x'] = canvasW / 0x2,
                adventureSizeTxt['y'] = canvasH / 0x64 * 0x2c,
                itemNumberSize['x'] = canvasW / 0x2,
                sizeTxt['x'] = canvasW / 0x2,
                itemNumberSize['y'] = buttonRowL['y'] = buttonRowR['y'] = buttonColumnL['y'] = buttonColumnR['y'] = canvasH / 0x64 * 0x31,
                sizeTxt['y'] = itemNumberSize['y'] + 0x14,
                $['radio'][0x0]['x'] = canvasW / 0x2 - 0x96,
                $['radio'][0x0]['y'] = canvasH / 0x64 * 0x38,
                adventureWallTxt['x'] = $['radio'][0x0]['x'] + 0x50,
                adventureWallTxt['y'] = $[_0x157b92(0x237)][0x0]['y'] + 0xe,
                $['radio'][0x1]['x'] = canvasW / 0x2 + 0x32,
                $[_0x157b92(0x237)][0x1]['y'] = canvasH / 0x64 * 0x38,
                adventureBrickTxt['x'] = $[_0x157b92(0x237)][0x1]['x'] + 0x50,
                adventureBrickTxt['y'] = $[_0x157b92(0x237)][0x1]['y'] + 0xe,
                statusContainer['x'] = canvasW / 0x2,
                statusContainer['y'] = canvasH / 0x2,
                itemResult[_0x157b92(0x22d)] = ![],
                itemResultP[_0x157b92(0x22d)] = !![],
                buttonContinue['x'] = canvasW / 0x2,
                buttonContinue['y'] = canvasH / 0x64 * 0x40,
                shareContainer['x'] = shareSaveContainer['x'] = canvasW / 0x2,
                shareContainer['y'] = shareSaveContainer['y'] = canvasH / 0x64 * 0x31,
                resultTitleTxt['x'] = canvasW / 0x2,
                resultTitleTxt['y'] = canvasH / 0x64 * 0x26,
                resultTitleShadowTxt['x'] = resultTitleTxt['x'],
                resultTitleShadowTxt['y'] = resultTitleTxt['y'] + 0xa,
                resultDescTxt['x'] = canvasW / 0x2,
                resultDescTxt['y'] = canvasH / 0x64 * 0x2d,
                resultDescShadowTxt['x'] = resultDescTxt['x'],
                resultDescShadowTxt['y'] = resultDescTxt['y'] + 0x8,
                itemExit[_0x157b92(0x22d)] = ![],
                itemExitP[_0x157b92(0x22d)] = !![],
                buttonConfirm['x'] = canvasW / 0x2,
                buttonConfirm['y'] = canvasH / 0x64 * 0x37,
                buttonCancel['x'] = canvasW / 0x2,
                buttonCancel['y'] = canvasH / 0x64 * 0x40,
                popTitleTxt['x'] = canvasW / 0x2,
                popTitleTxt['y'] = canvasH / 0x64 * 0x26,
                popTitleShadowTxt['x'] = popTitleTxt['x'],
                popTitleShadowTxt['y'] = popTitleTxt['y'] + 0xa,
                popDescTxt['x'] = canvasW / 0x2,
                popDescTxt['y'] = canvasH / 0x64 * 0x2b));
}
function resizeCanvas() {
    var _0x3b0bcb = a0_0x2ac117;
    if (canvasContainer != undefined) {
        buttonSettings['x'] = canvasW - offset['x'] - 0x32,
            buttonSettings['y'] = offset['y'] + 0x2d;
        var _0x21df5f = 0x3c
            , _0x32f7ca = 0x0;
        buttonSoundOn['x'] = buttonSoundOff['x'] = buttonSettings['x'],
            buttonSoundOn['y'] = buttonSoundOff['y'] = buttonSettings['y'] + _0x21df5f,
            buttonSoundOn['x'] = buttonSoundOff['x'],
            buttonSoundOn['y'] = buttonSoundOff['y'] = buttonSettings['y'] + _0x21df5f;
        typeof buttonMusicOn != _0x3b0bcb(0x1b4) ? (buttonMusicOn['x'] = buttonMusicOff['x'] = buttonSettings['x'],
            buttonMusicOn['y'] = buttonMusicOff['y'] = buttonSettings['y'] + _0x21df5f * 0x2,
            buttonMusicOn['x'] = buttonMusicOff['x'],
            buttonMusicOn['y'] = buttonMusicOff['y'] = buttonSettings['y'] + _0x21df5f * 0x2,
            _0x32f7ca = 0x2) : _0x32f7ca = 0x1;
        buttonFullscreen['x'] = buttonSettings['x'],
            buttonFullscreen['y'] = buttonSettings['y'] + _0x21df5f * (_0x32f7ca + 0x1);
        curPage == _0x3b0bcb(0x326) || curPage == _0x3b0bcb(0x243) ? (buttonExit['visible'] = ![],
            buttonFullscreen['x'] = buttonSettings['x'],
            buttonFullscreen['y'] = buttonSettings['y'] + _0x21df5f * (_0x32f7ca + 0x1)) : (buttonExit[_0x3b0bcb(0x22d)] = !![],
                buttonExit['x'] = buttonSettings['x'],
                buttonExit['y'] = buttonSettings['y'] + _0x21df5f * (_0x32f7ca + 0x2));
        if (gameSettings['screenControlSide'] == _0x3b0bcb(0x290))
            touchMoveContainer['x'] = canvasW - offset['x'] - 0x82,
                touchMoveContainer['y'] = canvasH - offset['y'] - 0x82;
        else
            gameSettings['screenControlSide'] == 'left' ? (touchMoveContainer['x'] = offset['x'] + 0x82,
                touchMoveContainer['y'] = canvasH - offset['y'] - 0x82) : (touchMoveContainer['x'] = canvasW / 0x2,
                    touchMoveContainer['y'] = canvasH - offset['y'] - 0x82);
        resizeGrid();
    }
}
function removeGameCanvas() {
    var _0xa67b1b = a0_0x2ac117;
    stage[_0xa67b1b(0x367)] = !![],
        stage[_0xa67b1b(0x2f0)](),
        stage[_0xa67b1b(0x2c2)](),
        createjs[_0xa67b1b(0x23e)]['removeEventListener'](_0xa67b1b(0x259), tick),
        createjs['Ticker'][_0xa67b1b(0x361)]('tick', stage);
}
function tick(_0x55fc37) {
    var _0xcc6b04 = a0_0x2ac117;
    updateGame(),
        stage[_0xcc6b04(0x2c2)](_0x55fc37);
}
function centerReg(_0xde53e) {
    var _0x13413f = a0_0x2ac117;
    _0xde53e['regX'] = _0xde53e['image'][_0x13413f(0x2c6)] / 0x2,
        _0xde53e['regY'] = _0xde53e[_0x13413f(0x1da)]['naturalHeight'] / 0x2;
}
function createHitarea(_0x147ff4) {
    var _0x548aa2 = a0_0x2ac117;
    _0x147ff4[_0x548aa2(0x282)] = new createjs[(_0x548aa2(0x32c))](new createjs['Graphics']()['beginFill'](_0x548aa2(0x320))[_0x548aa2(0x357)](0x0, 0x0, _0x147ff4[_0x548aa2(0x1da)]['naturalWidth'], _0x147ff4['image'][_0x548aa2(0x321)]));
}
const themesArr = [{
    'src': a0_0x2ac117(0x21b),
    'feed': 'assets/snake_feed_07.png',
    'brick': a0_0x2ac117(0x1c4),
    'score': ['assets/snake_score_07.png'],
    'stroke': {
        'stroke': 0xf,
        'color': '#7b552d',
        'dashed': [0xc, 0x14],
        'dashedColor': a0_0x2ac117(0x1d3)
    },
    'design': {
        'wall': a0_0x2ac117(0x1e7),
        'floor': a0_0x2ac117(0x262)
    }
}, {
    'src': a0_0x2ac117(0x209),
    'feed': a0_0x2ac117(0x31a),
    'brick': 'assets/snake_brick_06.png',
    'score': [a0_0x2ac117(0x20d)],
    'stroke': {
        'stroke': 0x14,
        'color': a0_0x2ac117(0x315)
    },
    'design': {
        'wall': a0_0x2ac117(0x28b),
        'floor': a0_0x2ac117(0x2f1)
    }
}, {
    'src': a0_0x2ac117(0x2da),
    'feed': a0_0x2ac117(0x322),
    'brick': 'assets/snake_brick_05.png',
    'score': [a0_0x2ac117(0x27c)],
    'design': {
        'wall': a0_0x2ac117(0x29d),
        'floor': a0_0x2ac117(0x221)
    }
}, {
    'src': a0_0x2ac117(0x307),
    'feed': a0_0x2ac117(0x28e),
    'brick': 'assets/snake_brick_04.png',
    'score': [a0_0x2ac117(0x284), 'assets/snake_score_03_b.png', a0_0x2ac117(0x2c8)],
    'design': {
        'wall': a0_0x2ac117(0x1f5),
        'floor': a0_0x2ac117(0x2a9)
    }
}, {
    'src': a0_0x2ac117(0x364),
    'feed': 'assets/snake_feed_03.png',
    'brick': a0_0x2ac117(0x294),
    'score': [a0_0x2ac117(0x284), a0_0x2ac117(0x1ef), a0_0x2ac117(0x2c8)],
    'design': {
        'wall': a0_0x2ac117(0x2d0),
        'floor': a0_0x2ac117(0x2c9)
    }
}, {
    'src': 'assets/snake_02.png',
    'feed': 'assets/snake_feed_02.png',
    'brick': a0_0x2ac117(0x2a6),
    'score': [a0_0x2ac117(0x358)],
    'design': {
        'wall': a0_0x2ac117(0x320),
        'floor': '#94D300'
    }
}, {
    'src': 'assets/snake_01.png',
    'feed': 'assets/snake_feed_01.png',
    'brick': 'assets/snake_brick_01.png',
    'score': [a0_0x2ac117(0x20a)],
    'stroke': {
        'stroke': 0x1e,
        'color': '#000'
    },
    'design': {
        'wall': '#556642',
        'floor': a0_0x2ac117(0x285)
    }
}, {
    'src': a0_0x2ac117(0x34a),
    'feed': 'assets/snake_feed_00.png',
    'brick': 'assets/snake_brick_00.png',
    'score': [a0_0x2ac117(0x2eb)],
    'design': {
        'wall': a0_0x2ac117(0x320),
        'floor': '#abcc9a'
    }
}]
    , defaultSettings = {
        'row': 0xc,
        'column': 0x13,
        'wall': ![],
        'brick': !![]
    }
    , adventureSettings = {
        'enable': !![],
        'rowMin': 0xa,
        'rowMax': 0x1e,
        'columnMin': 0xa,
        'columnMax': 0x1e,
        'wall': !![],
        'brick': !![]
    }
    , gameSettings = {
        'gridSize': 0x28,
        'wallSize': 0xa,
        'swipeControl': !![],
        'showScreenControl': !![],
        'screenControlScale': 0x1,
        'screenControlStick': ![],
        'screenControlSide': a0_0x2ac117(0x290),
        'screenControlAlpha': 0.6,
        'keyboard': {
            'up': [0x57, 0x26],
            'left': [0x41, 0x25],
            'right': [0x44, 0x27],
            'down': [0x53, 0x28]
        },
        'snakeLength': 0x5,
        'level': {
            'speed': 0xc8,
            'speedTimes': 0x3,
            'speedIncrease': 0xa,
            'score': 0x64,
            'brickTimes': 0x3
        }
    }
    , textStrings = {
        'adventureTitle': a0_0x2ac117(0x1f9),
        'adventureSize': a0_0x2ac117(0x354),
        'adventureWall': 'WALL',
        'adventureBrick': a0_0x2ac117(0x238),
        'gridSize': '[COLUMN]\x20x\x20[ROW]',
        'point': a0_0x2ac117(0x2b5),
        'level': a0_0x2ac117(0x366),
        'brick': a0_0x2ac117(0x271),
        'gameover': a0_0x2ac117(0x292),
        'exitTitle': 'EXIT\x20GAME',
        'exitMessage': 'Are\x20you\x20sure\x20you\x20want\x0ato\x20quit\x20game?',
        'share': a0_0x2ac117(0x36e),
        'resultTitle': 'GAME\x20OVER',
        'resultDesc': '[NUMBER]'
    }
    , shareSettings = {
        'enable': !![],
        'options': [a0_0x2ac117(0x1b6), a0_0x2ac117(0x258), a0_0x2ac117(0x222), a0_0x2ac117(0x223), 'reddit', 'linkedin'],
        'shareTitle': 'Highscore\x20on\x20Snake\x20Game\x20is\x20[SCORE]',
        'shareText': a0_0x2ac117(0x314),
        'customScore': !![],
        'gtag': !![]
    }
    , playerData = {
        'score': 0x0,
        'level': 0x0,
        'brick': 0x0
    }
    , gameData = {
        'paused': !![],
        'themeNum': 0x0,
        'type': a0_0x2ac117(0x317),
        'control': ![],
        'adventure': {
            'row': 0x0,
            'column': 0x0,
            'wall': ![],
            'brick': ![]
        },
        'settings': {},
        'grid': [],
        'area': [],
        'snake': [],
        'snakeFeed': [],
        'score': [],
        'brick': [],
        'level': {
            'speed': 0x0,
            'speedTimes': 0x0,
            'brickTimes': 0x0
        },
        'dir': '',
        'nextDir': '',
        'increase': ![],
        'complete': ![]
    }
    , tweenData = {
        'score': 0x0,
        'tweenScore': 0x0
    }
    , gestureData = {
        'pX': '',
        'pY': '',
        'pX2': '',
        'pY2': '',
        'lastDirection': -0x1,
        'curDirection': -0x1,
        'directionArr': []
    };
function buildGameButton() {
    var _0x4e2658 = a0_0x2ac117;
    $(window)[_0x4e2658(0x30c)](function () {
        !buttonSoundOn['visible'] && toggleSoundInMute(![]),
            typeof buttonMusicOn != 'undefined' && (!buttonMusicOn['visible'] && toggleMusicInMute(![]));
    }),
        $(window)[_0x4e2658(0x36d)](function () {
            var _0x3f94f7 = _0x4e2658;
            !buttonSoundOn[_0x3f94f7(0x22d)] && toggleSoundInMute(!![]),
                typeof buttonMusicOn != _0x3f94f7(0x1b4) && (!buttonMusicOn[_0x3f94f7(0x22d)] && toggleMusicInMute(!![]));
        });
    audioOn && (muteSoundOn && toggleSoundMute(!![]),
        muteMusicOn && toggleMusicMute(!![]));
    if (!isDesktop) { } else {
        var _0x3ba71b = window[_0x4e2658(0x2e5)] != window[_0x4e2658(0x264)][_0x4e2658(0x2e5)] ? !![] : ![];
        _0x3ba71b ? (this[_0x4e2658(0x338)][_0x4e2658(0x1f1)] = keydown,
            this[_0x4e2658(0x338)][_0x4e2658(0x2ea)] = keyup,
            $(window)[_0x4e2658(0x36d)](function () {
                appendFocusFrame();
            }),
            appendFocusFrame()) : (this[_0x4e2658(0x338)][_0x4e2658(0x1f1)] = keydown,
                this[_0x4e2658(0x338)]['onkeyup'] = keyup);
    }
    buttonClassic[_0x4e2658(0x289)] = _0x4e2658(0x1e3),
        buttonClassic[_0x4e2658(0x208)](_0x4e2658(0x217), function (_0x5307f9) {
            var _0x4d7dd5 = _0x4e2658;
            playSound(_0x4d7dd5(0x34c)),
                gameData['type'] = 'classic',
                goPage(_0x4d7dd5(0x1b7));
        }),
        buttonAdventure['cursor'] = 'pointer',
        buttonAdventure[_0x4e2658(0x208)](_0x4e2658(0x217), function (_0x4b6d5c) {
            var _0x322b8a = _0x4e2658;
            playSound(_0x322b8a(0x34c)),
                gameData[_0x322b8a(0x1cc)] = 'adventure',
                goPage(_0x322b8a(0x1b7));
        }),
        buttonArrowL[_0x4e2658(0x289)] = _0x4e2658(0x1e3),
        buttonArrowL[_0x4e2658(0x208)](_0x4e2658(0x217), function (_0x54087e) {
            var _0x407490 = _0x4e2658;
            playSound(_0x407490(0x201)),
                toggleTheme(![]);
        }),
        buttonArrowR[_0x4e2658(0x289)] = 'pointer',
        buttonArrowR[_0x4e2658(0x208)](_0x4e2658(0x217), function (_0x381d1e) {
            var _0x41c2c3 = _0x4e2658;
            playSound(_0x41c2c3(0x201)),
                toggleTheme(!![]);
        }),
        buttonSelectTheme[_0x4e2658(0x289)] = _0x4e2658(0x1e3),
        buttonSelectTheme[_0x4e2658(0x208)]('click', function (_0x184e3c) {
            var _0x2fc83a = _0x4e2658;
            playSound(_0x2fc83a(0x201)),
                gameData['type'] == _0x2fc83a(0x317) ? goPage(_0x2fc83a(0x23f)) : goPage(_0x2fc83a(0x27a));
        }),
        buttonRowL[_0x4e2658(0x289)] = _0x4e2658(0x1e3),
        buttonRowL[_0x4e2658(0x208)](_0x4e2658(0x217), function (_0x577b9b) {
            var _0x5af227 = _0x4e2658;
            playSound(_0x5af227(0x201)),
                toggleAdventureRow(![]);
        }),
        buttonRowR['cursor'] = _0x4e2658(0x1e3),
        buttonRowR[_0x4e2658(0x208)](_0x4e2658(0x217), function (_0x13c096) {
            var _0x3495a3 = _0x4e2658;
            playSound(_0x3495a3(0x201)),
                toggleAdventureRow(!![]);
        }),
        buttonColumnL[_0x4e2658(0x289)] = _0x4e2658(0x1e3),
        buttonColumnL[_0x4e2658(0x208)]('click', function (_0xd1a36) {
            var _0x50c063 = _0x4e2658;
            playSound(_0x50c063(0x201)),
                toggleAdventureColumn(![]);
        }),
        buttonColumnR[_0x4e2658(0x289)] = _0x4e2658(0x1e3),
        buttonColumnR['addEventListener'](_0x4e2658(0x217), function (_0x155e0b) {
            var _0x332ea4 = _0x4e2658;
            playSound(_0x332ea4(0x201)),
                toggleAdventureColumn(!![]);
        }),
        buttonAdventureStart[_0x4e2658(0x289)] = _0x4e2658(0x1e3),
        buttonAdventureStart[_0x4e2658(0x208)](_0x4e2658(0x217), function (_0xc23165) {
            var _0x31a282 = _0x4e2658;
            playSound(_0x31a282(0x34c)),
                goPage('game');
        }),
        itemExit[_0x4e2658(0x208)](_0x4e2658(0x217), function (_0x48545f) { }),
        buttonContinue[_0x4e2658(0x289)] = _0x4e2658(0x1e3),
        buttonContinue[_0x4e2658(0x208)](_0x4e2658(0x217), function (_0x285607) {
            var _0x428eb3 = _0x4e2658;
            playSound('soundButton'),
                goPage(_0x428eb3(0x326));
        });
    if (shareSettings[_0x4e2658(0x1d9)]) {
        buttonShare[_0x4e2658(0x289)] = _0x4e2658(0x1e3),
            buttonShare[_0x4e2658(0x208)](_0x4e2658(0x217), function (_0x49af9c) {
                var _0x4c42dd = _0x4e2658;
                playSound(_0x4c42dd(0x34c)),
                    toggleSocialShare(!![]);
            });
        for (let _0x54daff = 0x0; _0x54daff < shareSettings['options'][_0x4e2658(0x211)]; _0x54daff++) {
            $['share']['button' + _0x54daff][_0x4e2658(0x289)] = _0x4e2658(0x1e3),
                $[_0x4e2658(0x2f8)][_0x4e2658(0x341) + _0x54daff]['addEventListener']('click', function (_0x40f646) {
                    var _0x44dcc4 = _0x4e2658;
                    shareLinks(_0x40f646[_0x44dcc4(0x24f)][_0x44dcc4(0x1e8)], addCommas(playerData[_0x44dcc4(0x260)]));
                });
        }
    }
    buttonSoundOff['cursor'] = _0x4e2658(0x1e3),
        buttonSoundOff['addEventListener'](_0x4e2658(0x217), function (_0x3db44f) {
            toggleSoundMute(!![]);
        }),
        buttonSoundOn[_0x4e2658(0x289)] = _0x4e2658(0x1e3),
        buttonSoundOn['addEventListener'](_0x4e2658(0x217), function (_0xb50ee2) {
            toggleSoundMute(![]);
        }),
        typeof buttonMusicOff != _0x4e2658(0x1b4) && (buttonMusicOff[_0x4e2658(0x289)] = _0x4e2658(0x1e3),
            buttonMusicOff['addEventListener'](_0x4e2658(0x217), function (_0x51be2d) {
                toggleMusicMute(!![]);
            })),
        typeof buttonMusicOn != _0x4e2658(0x1b4) && (buttonMusicOn['cursor'] = _0x4e2658(0x1e3),
            buttonMusicOn[_0x4e2658(0x208)](_0x4e2658(0x217), function (_0x2f1eae) {
                toggleMusicMute(![]);
            })),
        buttonFullscreen[_0x4e2658(0x289)] = _0x4e2658(0x1e3),
        buttonFullscreen[_0x4e2658(0x208)](_0x4e2658(0x217), function (_0x584e9a) {
            toggleFullScreen();
        }),
        buttonExit[_0x4e2658(0x289)] = _0x4e2658(0x1e3),
        buttonExit['addEventListener'](_0x4e2658(0x217), function (_0x4c5d5a) {
            togglePop(!![]),
                toggleOptions();
        }),
        buttonSettings[_0x4e2658(0x289)] = _0x4e2658(0x1e3),
        buttonSettings[_0x4e2658(0x208)](_0x4e2658(0x217), function (_0x39bec2) {
            toggleOptions();
        }),
        buttonConfirm[_0x4e2658(0x289)] = _0x4e2658(0x1e3),
        buttonConfirm[_0x4e2658(0x208)](_0x4e2658(0x217), function (_0x12c1fd) {
            var _0x37fddc = _0x4e2658;
            playSound(_0x37fddc(0x34c)),
                togglePop(![]),
                stopSound(),
                stopGame(),
                goPage(_0x37fddc(0x326));
        }),
        buttonCancel[_0x4e2658(0x289)] = _0x4e2658(0x1e3),
        buttonCancel[_0x4e2658(0x208)](_0x4e2658(0x217), function (_0x3d48ae) {
            var _0x56e585 = _0x4e2658;
            playSound(_0x56e585(0x34c)),
                togglePop(![]);
        }),
        $[_0x4e2658(0x237)][0x0][_0x4e2658(0x289)] = _0x4e2658(0x1e3),
        $[_0x4e2658(0x237)][0x0]['addEventListener']('click', function (_0x5d4699) {
            playSound('soundButton'),
                toggleRadio('wall');
        }),
        $[_0x4e2658(0x237)][0x1][_0x4e2658(0x289)] = _0x4e2658(0x1e3),
        $[_0x4e2658(0x237)][0x1][_0x4e2658(0x208)](_0x4e2658(0x217), function (_0x6fcda4) {
            var _0x59c534 = _0x4e2658;
            playSound(_0x59c534(0x34c)),
                toggleRadio(_0x59c534(0x2d7));
        }),
        gameData[_0x4e2658(0x27a)]['column'] = adventureSettings['columnMin'],
        gameData['adventure'][_0x4e2658(0x257)] = adventureSettings['rowMin'],
        gameData[_0x4e2658(0x27a)][_0x4e2658(0x1fb)] = adventureSettings[_0x4e2658(0x1fb)],
        gameData[_0x4e2658(0x27a)]['brick'] = adventureSettings[_0x4e2658(0x2d7)],
        adventureSettings[_0x4e2658(0x1fb)] ? $['radio'][0x0]['gotoAndStop'](_0x4e2658(0x1d9)) : $['radio'][0x0][_0x4e2658(0x1bd)](_0x4e2658(0x34d)),
        adventureSettings['brick'] ? $['radio'][0x1][_0x4e2658(0x1bd)](_0x4e2658(0x1d9)) : $[_0x4e2658(0x237)][0x1][_0x4e2658(0x1bd)](_0x4e2658(0x34d)),
        checkAdventureSettings(),
        setupSwipeControl(),
        setupTouchControl(),
        preventScrolling();
}
function preventScrolling() {
    var _0x593c6e = a0_0x2ac117;
    const _0x5305a4 = window['self'] !== window[_0x593c6e(0x309)];
    if (_0x5305a4) {
        var _0x3a4794 = [0x20, 0x26, 0x25, 0x28, 0x27];
        $(window)['on'](_0x593c6e(0x1c9), function (_0x85386d) {
            var _0x5854ff = _0x593c6e;
            _0x3a4794[_0x5854ff(0x24c)](_0x85386d['keyCode']) != -0x1 && _0x85386d[_0x5854ff(0x2f4)]();
        });
    }
}
function appendFocusFrame() {
    var _0x5cd8e6 = a0_0x2ac117;
    $('#mainHolder')[_0x5cd8e6(0x23a)](_0x5cd8e6(0x2bc)),
        $('#focus')[_0x5cd8e6(0x217)](function () {
            var _0x5822ab = _0x5cd8e6;
            $(_0x5822ab(0x32e))['remove']();
        });
}
function keydown(_0x22137e) {
    var _0x5541ae = a0_0x2ac117;
    if (gameSettings[_0x5541ae(0x1bb)][_0x5541ae(0x24d)][_0x5541ae(0x24c)](_0x22137e[_0x5541ae(0x2a0)]) != -0x1)
        gameData[_0x5541ae(0x1b9)][_0x5541ae(0x24d)] = !![];
    else {
        if (gameSettings[_0x5541ae(0x1bb)][_0x5541ae(0x290)][_0x5541ae(0x24c)](_0x22137e[_0x5541ae(0x2a0)]) != -0x1)
            gameData[_0x5541ae(0x1b9)][_0x5541ae(0x290)] = !![];
        else {
            if (gameSettings[_0x5541ae(0x1bb)]['up'][_0x5541ae(0x24c)](_0x22137e[_0x5541ae(0x2a0)]) != -0x1)
                gameData[_0x5541ae(0x1b9)]['up'] = !![];
            else
                gameSettings[_0x5541ae(0x1bb)][_0x5541ae(0x25f)][_0x5541ae(0x24c)](_0x22137e[_0x5541ae(0x2a0)]) != -0x1 && (gameData[_0x5541ae(0x1b9)][_0x5541ae(0x25f)] = !![]);
        }
    }
}
function keyup(_0xb9111d) {
    var _0x20a725 = a0_0x2ac117;
    if (gameSettings['keyboard'][_0x20a725(0x24d)]['indexOf'](_0xb9111d[_0x20a725(0x2a0)]) != -0x1)
        gameData[_0x20a725(0x1b9)]['left'] = ![];
    else {
        if (gameSettings[_0x20a725(0x1bb)]['right']['indexOf'](_0xb9111d['keyCode']) != -0x1)
            gameData['moveControl']['right'] = ![];
        else {
            if (gameSettings['keyboard']['up'][_0x20a725(0x24c)](_0xb9111d[_0x20a725(0x2a0)]) != -0x1)
                gameData[_0x20a725(0x1b9)]['up'] = ![];
            else
                gameSettings['keyboard'][_0x20a725(0x25f)][_0x20a725(0x24c)](_0xb9111d['keyCode']) != -0x1 && (gameData[_0x20a725(0x1b9)][_0x20a725(0x25f)] = ![]);
        }
    }
}
function toggleRadio(_0x5af0e2) {
    var _0x39c659 = a0_0x2ac117;
    gameData[_0x39c659(0x27a)][_0x5af0e2] ? gameData['adventure'][_0x5af0e2] = ![] : gameData[_0x39c659(0x27a)][_0x5af0e2] = !![];
    var _0x3f1fab = _0x5af0e2 == _0x39c659(0x1fb) ? 0x0 : 0x1;
    gameData['adventure'][_0x5af0e2] ? $[_0x39c659(0x237)][_0x3f1fab][_0x39c659(0x1bd)](_0x39c659(0x1d9)) : $[_0x39c659(0x237)][_0x3f1fab][_0x39c659(0x1bd)](_0x39c659(0x34d));
}
function toggleTheme(_0x586350) {
    var _0x517942 = a0_0x2ac117;
    _0x586350 ? (gameData[_0x517942(0x35b)]++,
        gameData[_0x517942(0x35b)] = gameData['themeNum'] > themesArr[_0x517942(0x211)] - 0x1 ? 0x0 : gameData['themeNum']) : (gameData['themeNum']--,
            gameData[_0x517942(0x35b)] = gameData[_0x517942(0x35b)] < 0x0 ? themesArr[_0x517942(0x211)] - 0x1 : gameData[_0x517942(0x35b)]),
        buildGrid();
}
function toggleAdventureRow(_0x56e6d0) {
    var _0x8519e6 = a0_0x2ac117;
    _0x56e6d0 ? (gameData[_0x8519e6(0x27a)][_0x8519e6(0x257)]++,
        gameData[_0x8519e6(0x27a)][_0x8519e6(0x257)] = gameData['adventure'][_0x8519e6(0x257)] > adventureSettings[_0x8519e6(0x28c)] ? adventureSettings['rowMax'] : gameData['adventure'][_0x8519e6(0x257)]) : (gameData[_0x8519e6(0x27a)]['row']--,
            gameData[_0x8519e6(0x27a)][_0x8519e6(0x257)] = gameData['adventure'][_0x8519e6(0x257)] < adventureSettings[_0x8519e6(0x22e)] ? adventureSettings[_0x8519e6(0x22e)] : gameData[_0x8519e6(0x27a)]['row']),
        checkAdventureSettings();
}
function toggleAdventureColumn(_0x1e2c2f) {
    var _0x52bc91 = a0_0x2ac117;
    _0x1e2c2f ? (gameData['adventure'][_0x52bc91(0x226)]++,
        gameData[_0x52bc91(0x27a)][_0x52bc91(0x226)] = gameData[_0x52bc91(0x27a)][_0x52bc91(0x226)] > adventureSettings[_0x52bc91(0x1c6)] ? adventureSettings[_0x52bc91(0x1c6)] : gameData[_0x52bc91(0x27a)][_0x52bc91(0x226)]) : (gameData[_0x52bc91(0x27a)][_0x52bc91(0x226)]--,
            gameData[_0x52bc91(0x27a)][_0x52bc91(0x226)] = gameData[_0x52bc91(0x27a)][_0x52bc91(0x226)] < adventureSettings[_0x52bc91(0x1f0)] ? adventureSettings[_0x52bc91(0x1f0)] : gameData[_0x52bc91(0x27a)][_0x52bc91(0x226)]),
        checkAdventureSettings();
}
function checkAdventureSettings() {
    var _0x16440f = a0_0x2ac117
        , _0xe0758f = textStrings[_0x16440f(0x2d6)][_0x16440f(0x30a)](_0x16440f(0x2ec), gameData[_0x16440f(0x27a)][_0x16440f(0x226)]);
    _0xe0758f = _0xe0758f[_0x16440f(0x30a)](_0x16440f(0x362), gameData[_0x16440f(0x27a)][_0x16440f(0x257)]),
        sizeTxt[_0x16440f(0x286)] = _0xe0758f;
}
function toggleSocialShare(_0x4d42d1) {
    var _0x476330 = a0_0x2ac117;
    if (!shareSettings[_0x476330(0x1d9)])
        return;
    buttonShare[_0x476330(0x22d)] = _0x4d42d1 == !![] ? ![] : !![],
        shareSaveContainer[_0x476330(0x22d)] = _0x4d42d1 == !![] ? ![] : !![],
        socialContainer[_0x476330(0x22d)] = _0x4d42d1,
        _0x4d42d1 && (typeof buttonSave !== _0x476330(0x1b4) && TweenMax['to'](buttonShare, 0x3, {
            'overwrite': !![],
            'onComplete': toggleSocialShare,
            'onCompleteParams': [![]]
        }));
}
function positionShareButtons() {
    var _0x43d491 = a0_0x2ac117;
    if (!shareSettings[_0x43d491(0x1d9)])
        return;
    typeof buttonShare !== _0x43d491(0x1b4) && (typeof buttonSave !== 'undefined' && (buttonSave[_0x43d491(0x22d)] ? (buttonShare['x'] = -(buttonShare['image']['naturalWidth'] / 0x2 + 0x5),
        buttonSave['x'] = buttonShare['image'][_0x43d491(0x2c6)] / 0x2 + 0x5) : buttonShare['x'] = 0x0));
}
function togglePop(_0x3f2253) {
    exitContainer['visible'] = _0x3f2253;
}
var curPage = '';
function goPage(_0x40ec6b) {
    var _0x2e53c9 = a0_0x2ac117;
    curPage = _0x40ec6b,
        mainContainer[_0x2e53c9(0x22d)] = ![],
        themeContainer[_0x2e53c9(0x22d)] = ![],
        adventureContainer[_0x2e53c9(0x22d)] = ![],
        gridContainer[_0x2e53c9(0x22d)] = ![],
        gameContainer[_0x2e53c9(0x22d)] = ![],
        resultContainer[_0x2e53c9(0x22d)] = ![],
        togglePop(![]),
        toggleOptions(![]),
        stopGame();
    var _0x470dae = null;
    switch (_0x40ec6b) {
        case _0x2e53c9(0x326):
            _0x470dae = mainContainer;
            break;
        case _0x2e53c9(0x1b7):
            _0x470dae = themeContainer,
                gridContainer['visible'] = !![],
                gameData['settings'] = {
                    'row': 0xf,
                    'column': 0xf,
                    'wall': defaultSettings[_0x2e53c9(0x1fb)],
                    'brick': defaultSettings[_0x2e53c9(0x2d7)]
                },
                gameData[_0x2e53c9(0x1fe)] = ![],
                buildGrid();
            break;
        case _0x2e53c9(0x27a):
            _0x470dae = adventureContainer;
            break;
        case _0x2e53c9(0x23f):
            _0x470dae = gameContainer,
                gridContainer[_0x2e53c9(0x22d)] = !![],
                startGame();
            break;
        case 'result':
            _0x470dae = resultContainer,
                stopGame(),
                toggleSocialShare(![]),
                playSound(_0x2e53c9(0x2ac)),
                tweenData[_0x2e53c9(0x2d2)] = 0x0,
                TweenMax['to'](tweenData, 0.5, {
                    'tweenScore': playerData['score'],
                    'overwrite': !![],
                    'onUpdate': function () {
                        var _0xab9a57 = _0x2e53c9;
                        resultDescTxt[_0xab9a57(0x286)] = resultDescShadowTxt[_0xab9a57(0x286)] = textStrings['resultDesc'][_0xab9a57(0x30a)](_0xab9a57(0x379), addCommas(Math[_0xab9a57(0x1c3)](tweenData[_0xab9a57(0x2d2)])));
                    }
                }),
                saveGame(playerData[_0x2e53c9(0x260)]);
            break;
    }
    _0x470dae != null && (_0x470dae[_0x2e53c9(0x22d)] = !![],
        _0x470dae[_0x2e53c9(0x254)] = 0x0,
        TweenMax['to'](_0x470dae, 0.5, {
            'alpha': 0x1,
            'overwrite': !![]
        })),
        resizeCanvas();
}
function startGame() {
    var _0x3c5718 = a0_0x2ac117;
    gameData[_0x3c5718(0x1fe)] = ![],
        gameData[_0x3c5718(0x1ee)] = ![],
        gameData[_0x3c5718(0x1d0)] = !![],
        gameData[_0x3c5718(0x1b9)] = {
            'left': ![],
            'right': ![],
            'up': ![],
            'down': ![]
        },
        gameData[_0x3c5718(0x1cc)] == _0x3c5718(0x317) ? gameData[_0x3c5718(0x1d2)] = {
            'row': defaultSettings['row'],
            'column': defaultSettings['column'],
            'wall': defaultSettings['wall'],
            'brick': defaultSettings[_0x3c5718(0x2d7)]
        } : gameData['settings'] = {
            'row': gameData[_0x3c5718(0x27a)]['row'],
            'column': gameData[_0x3c5718(0x27a)][_0x3c5718(0x226)],
            'wall': gameData[_0x3c5718(0x27a)][_0x3c5718(0x1fb)],
            'brick': gameData[_0x3c5718(0x27a)][_0x3c5718(0x2d7)]
        },
        brickContainer[_0x3c5718(0x2f0)](),
        gameData['brick'] = [],
        statusContainer[_0x3c5718(0x254)] = 0x0,
        buildGrid(),
        updateBrickIcon(),
        updateGameStats(),
        playSound(_0x3c5718(0x275)),
        touchContainer[_0x3c5718(0x22d)] = ![],
        gameSettings[_0x3c5718(0x32a)] ? (touchContainer[_0x3c5718(0x22d)] = !![],
            touchContainer[_0x3c5718(0x254)] = gameSettings[_0x3c5718(0x1d5)]) : !isDesktop && (touchContainer['visible'] = !![],
                touchContainer['alpha'] = gameSettings['screenControlAlpha']);
}
function setupSnakeLevel() {
    var _0x520de8 = a0_0x2ac117;
    tweenData[_0x520de8(0x2d2)] = 0x0,
        playerData[_0x520de8(0x260)] = 0x0,
        playerData[_0x520de8(0x2c0)] = 0x0,
        playerData['brick'] = 0x0,
        gameData[_0x520de8(0x2c0)][_0x520de8(0x235)] = gameSettings[_0x520de8(0x2c0)][_0x520de8(0x235)],
        gameData[_0x520de8(0x2c0)][_0x520de8(0x2f2)] = 0x0,
        gameData[_0x520de8(0x2c0)][_0x520de8(0x29c)] = 0x0;
}
function stopGame() {
    var _0x391e61 = a0_0x2ac117;
    gameData['paused'] = !![],
        gameData[_0x391e61(0x1d0)] = ![],
        TweenMax[_0x391e61(0x340)](![], !![], ![]);
}
function saveGame(_0x3f9cfb) {
    var _0xcc972e = a0_0x2ac117;
    typeof toggleScoreboardSave == 'function' && ($[_0xcc972e(0x230)][_0xcc972e(0x260)] = _0x3f9cfb,
        typeof type != 'undefined' && ($[_0xcc972e(0x230)][_0xcc972e(0x1cc)] = type),
        toggleScoreboardSave(!![]));
}
function buildGrid() {
    var _0x3a7605 = a0_0x2ac117;
    bgContainer[_0x3a7605(0x2f0)](),
        bgContainer['removeAllChildren'](),
        brickContainer[_0x3a7605(0x2f0)](),
        gameData['grid'] = [],
        gameData['area'] = [];
    var _0x403323 = {
        'x': 0x0,
        'y': 0x0
    }
        , _0x3d239e = gameSettings[_0x3a7605(0x2d6)];
    for (var _0x246f1f = 0x0; _0x246f1f < gameData['settings'][_0x3a7605(0x257)]; _0x246f1f++) {
        gameData[_0x3a7605(0x347)][_0x3a7605(0x20b)]([]),
            gameData[_0x3a7605(0x1d8)][_0x3a7605(0x20b)]([]);
        for (var _0x5c749e = 0x0; _0x5c749e < gameData['settings'][_0x3a7605(0x226)]; _0x5c749e++) {
            var _0x3c0bdb = new createjs[(_0x3a7605(0x32c))]();
            _0x3c0bdb['graphics']['beginFill'](themesArr[gameData['themeNum']][_0x3a7605(0x343)]['floor'])[_0x3a7605(0x357)](-(_0x3d239e / 0x2), -(_0x3d239e / 0x2), _0x3d239e + 0x1, _0x3d239e + 0x1),
                _0x3c0bdb['x'] = _0x403323['x'],
                _0x3c0bdb['y'] = _0x403323['y'],
                _0x3c0bdb['visible'] = ![],
                bgContainer['addChild'](_0x3c0bdb),
                _0x403323['x'] += _0x3d239e,
                gameData[_0x3a7605(0x347)][_0x246f1f][_0x5c749e] = _0x3c0bdb,
                gameData[_0x3a7605(0x1d8)][_0x246f1f][_0x5c749e] = 0x0;
        }
        _0x403323['x'] = 0x0,
            _0x403323['y'] += _0x3d239e;
    }
    gameData['settings'][_0x3a7605(0x1ec)] = gameData['settings'][_0x3a7605(0x226)] * _0x3d239e - _0x3d239e,
        gameData[_0x3a7605(0x1d2)]['height'] = gameData[_0x3a7605(0x1d2)]['row'] * _0x3d239e - _0x3d239e,
        gridWall['graphics'][_0x3a7605(0x1c5)](),
        gridGround['graphics'][_0x3a7605(0x1c5)](),
        gridMask[_0x3a7605(0x2ae)][_0x3a7605(0x1c5)](),
        gridWall['graphics'][_0x3a7605(0x2fa)](themesArr[gameData[_0x3a7605(0x35b)]][_0x3a7605(0x343)][_0x3a7605(0x1fb)])[_0x3a7605(0x357)](-(gameSettings['wallSize'] + _0x3d239e / 0x2), -(gameSettings[_0x3a7605(0x27f)] + _0x3d239e / 0x2), gameData[_0x3a7605(0x1d2)]['width'] + _0x3d239e + gameSettings[_0x3a7605(0x27f)] * 0x2, gameData[_0x3a7605(0x1d2)][_0x3a7605(0x1b5)] + _0x3d239e + gameSettings[_0x3a7605(0x27f)] * 0x2),
        gridGround[_0x3a7605(0x2ae)]['beginFill'](themesArr[gameData[_0x3a7605(0x35b)]]['design']['floor'])[_0x3a7605(0x357)](-(_0x3d239e / 0x2), -(_0x3d239e / 0x2), gameData[_0x3a7605(0x1d2)]['width'] + _0x3d239e, gameData['settings'][_0x3a7605(0x1b5)] + _0x3d239e),
        gridMask[_0x3a7605(0x2ae)][_0x3a7605(0x2fa)](_0x3a7605(0x316))[_0x3a7605(0x357)](0x0, 0x0, gameData[_0x3a7605(0x1d2)][_0x3a7605(0x226)] * _0x3d239e, gameData[_0x3a7605(0x1d2)][_0x3a7605(0x257)] * _0x3d239e),
        gridMask['x'] = -(_0x3d239e / 0x2),
        gridMask['y'] = -(_0x3d239e / 0x2),
        maskContainer[_0x3a7605(0x377)] = gridMask,
        gameData['dir'] = gameData[_0x3a7605(0x2c4)] = _0x3a7605(0x290),
        setupSnakeLevel(),
        createSnake(),
        insertType('score');
    if (curPage == _0x3a7605(0x1b7)) {
        var _0x557f44 = gameData[_0x3a7605(0x2f3)][0x0][_0x3a7605(0x257)];
        for (var _0x4fd320 = 0x0; _0x4fd320 < 0xa; _0x4fd320++) {
            insertType(_0x3a7605(0x2d7), _0x557f44);
        }
    }
    resizeGrid(),
        toggleLoopSnake(!![]);
}
function resizeGrid() {
    var _0x2a5c7c = a0_0x2ac117;
    gridContainer[_0x2a5c7c(0x296)] = gridContainer[_0x2a5c7c(0x249)] = 0x1;
    var _0x119f43 = 0x1c2
        , _0x2a3234 = 0x30c;
    !viewport[_0x2a5c7c(0x1ba)] && (_0x119f43 = 0x2ee,
        _0x2a3234 = 0x212);
    var _0x25bb66 = 0x1
        , _0x5943b0 = 0x1;
    gameData[_0x2a5c7c(0x1d2)][_0x2a5c7c(0x1b5)] > _0x119f43 && (_0x5943b0 = _0x119f43 / gameData[_0x2a5c7c(0x1d2)][_0x2a5c7c(0x1b5)]);
    gameData[_0x2a5c7c(0x1d2)]['width'] > _0x2a3234 && (_0x25bb66 = _0x2a3234 / gameData[_0x2a5c7c(0x1d2)][_0x2a5c7c(0x1ec)]);
    _0x25bb66 < _0x5943b0 ? gridContainer[_0x2a5c7c(0x296)] = gridContainer[_0x2a5c7c(0x249)] = _0x25bb66 : gridContainer[_0x2a5c7c(0x296)] = gridContainer[_0x2a5c7c(0x249)] = _0x5943b0;
    var _0x47f072 = gridContainer['scaleX']
        , _0x38e94d = gameSettings[_0x2a5c7c(0x2d6)] * _0x47f072
        , _0x206521 = gameSettings[_0x2a5c7c(0x27f)] * _0x47f072;
    gridContainer['x'] = canvasW / 0x2 - gameData[_0x2a5c7c(0x1d2)][_0x2a5c7c(0x1ec)] * _0x47f072 / 0x2,
        gridContainer['y'] = canvasH / 0x2 - gameData[_0x2a5c7c(0x1d2)][_0x2a5c7c(0x1b5)] * _0x47f072 / 0x2,
        levelStatusContainer['x'] = canvasW / 0x2 - (gameData[_0x2a5c7c(0x1d2)][_0x2a5c7c(0x1ec)] * _0x47f072 / 0x2 + _0x38e94d / 0x2),
        levelStatusContainer['y'] = canvasH / 0x2 - (gameData['settings']['height'] * _0x47f072 / 0x2 + (_0x38e94d / 0x2 + _0x206521 + 0xa)),
        brickStatusContainer['x'] = levelStatusContainer['x'] + 0xa0,
        brickStatusContainer['y'] = levelStatusContainer['y'],
        scoreStatusContainer['x'] = canvasW / 0x2,
        scoreStatusContainer['y'] = canvasH / 0x2 + (gameData[_0x2a5c7c(0x1d2)]['height'] * _0x47f072 / 0x2 + (_0x38e94d / 0x2 + _0x206521 + 0x23));
}
function createSnake() {
    var _0x5f88f = a0_0x2ac117;
    snakeContainer[_0x5f88f(0x2f0)](),
        gameData['snake'] = [],
        gameData[_0x5f88f(0x2e6)] = [],
        gameData['increase'] = ![];
    var _0x188a96 = gameSettings[_0x5f88f(0x329)];
    _0x188a96 = _0x188a96 > gameData[_0x5f88f(0x1d2)][_0x5f88f(0x226)] ? gameData['settings'][_0x5f88f(0x226)] - 0x2 : _0x188a96;
    var _0x24e715 = Math[_0x5f88f(0x1c3)](gameData['settings'][_0x5f88f(0x257)] / 0x2)
        , _0x5b97ef = Math['floor'](gameData[_0x5f88f(0x1d2)][_0x5f88f(0x226)] / 0x2) + Math['floor'](_0x188a96 / 0x2);
    for (var _0x3b37cc = 0x0; _0x3b37cc < _0x188a96; _0x3b37cc++) {
        var _0xbacc87 = createSnakeShape();
        gameData[_0x5f88f(0x2f3)][_0x5f88f(0x20b)](_0xbacc87),
            gameData[_0x5f88f(0x1d8)][_0x24e715][_0x5b97ef] = 0x1,
            _0xbacc87['x'] = gameData[_0x5f88f(0x347)][_0x24e715][_0x5b97ef]['x'],
            _0xbacc87['y'] = gameData[_0x5f88f(0x347)][_0x24e715][_0x5b97ef]['y'],
            _0xbacc87[_0x5f88f(0x35e)] = {
                'x': _0xbacc87['x'],
                'y': _0xbacc87['y']
            },
            _0xbacc87[_0x5f88f(0x257)] = _0x24e715,
            _0xbacc87[_0x5f88f(0x226)] = _0x5b97ef,
            _0x5b97ef--;
    }
    checkSnakeRotation();
}
function createSnakeShape() {
    var _0x16645e = a0_0x2ac117
        , _0x3c6b35 = 0x1
        , _0x4c9e01 = 0x2a
        , _0x5a6ca1 = 0x2a
        , _0x48131c = {
            'regX': _0x4c9e01 / 0x2,
            'regY': _0x5a6ca1 / 0x2,
            'height': _0x5a6ca1,
            'width': _0x4c9e01,
            'count': 0x6
        }
        , _0x5b5612 = {
            'idle': {
                'frames': [0x0],
                'speed': _0x3c6b35
            },
            'tongue': {
                'frames': [0x1],
                'speed': _0x3c6b35
            },
            'eat': {
                'frames': [0x2],
                'speed': _0x3c6b35
            },
            'body': {
                'frames': [0x3],
                'speed': _0x3c6b35
            },
            'bodybend': {
                'frames': [0x4],
                'speed': _0x3c6b35
            },
            'tail': {
                'frames': [0x5],
                'speed': _0x3c6b35
            }
        }
        , _0x1248e9 = new createjs[(_0x16645e(0x2b8))]({
            'images': [loader['getResult']('snake' + gameData[_0x16645e(0x35b)])],
            'frames': _0x48131c,
            'animations': _0x5b5612
        })
        , _0x14d7c0 = new createjs['Sprite'](_0x1248e9, 'idle');
    return snakeContainer['addChild'](_0x14d7c0),
        _0x14d7c0;
}
function insertType(_0x56c696, _0x3c0abf) {
    var _0x4a7243 = a0_0x2ac117;
    _0x56c696 == _0x4a7243(0x260) && (gameData[_0x4a7243(0x260)][_0x4a7243(0x211)] > 0x0 && TweenMax[_0x4a7243(0x2be)](gameData['score'][0x0]),
        scoreContainer['removeAllChildren'](),
        gameData[_0x4a7243(0x260)] = []);
    var _0xc2da9c = [];
    for (var _0x156963 = 0x0; _0x156963 < gameData[_0x4a7243(0x1d2)]['row']; _0x156963++) {
        for (var _0x57b65b = 0x0; _0x57b65b < gameData[_0x4a7243(0x1d2)][_0x4a7243(0x226)]; _0x57b65b++) {
            if (gameData[_0x4a7243(0x1d8)][_0x156963][_0x57b65b] == 0x0) {
                var _0x4ee80f = ![];
                _0x3c0abf != undefined && (_0x3c0abf == _0x156963 && (_0x4ee80f = !![])),
                    !_0x4ee80f && _0xc2da9c['push']({
                        'r': _0x156963,
                        'c': _0x57b65b
                    });
            }
        }
    }
    shuffle(_0xc2da9c);
    var _0x2a505b, _0x2b8f02 = 0x2;
    if (_0x56c696 == _0x4a7243(0x260)) {
        var _0x1f11a3 = Math[_0x4a7243(0x1c3)](Math[_0x4a7243(0x2f9)]() * themesArr[gameData[_0x4a7243(0x35b)]]['score'][_0x4a7243(0x211)]);
        _0x2a505b = new createjs[(_0x4a7243(0x2de))](loader[_0x4a7243(0x339)](_0x4a7243(0x319) + _0x1f11a3 + '_' + gameData['themeNum'])),
            centerReg(_0x2a505b),
            scoreContainer[_0x4a7243(0x27d)](_0x2a505b),
            gameData[_0x4a7243(0x260)][_0x4a7243(0x20b)](_0x2a505b),
            animateScore(_0x2a505b);
    } else {
        _0x2b8f02 = 0x3,
            _0x2a505b = new createjs['Bitmap'](loader[_0x4a7243(0x339)](_0x4a7243(0x216) + gameData[_0x4a7243(0x35b)])),
            centerReg(_0x2a505b),
            brickContainer['addChild'](_0x2a505b),
            gameData[_0x4a7243(0x2d7)][_0x4a7243(0x20b)](_0x2a505b);
        if (curPage == 'game')
            playSound('soundBrick');
    }
    gameData[_0x4a7243(0x1d8)][_0xc2da9c[0x0]['r']][_0xc2da9c[0x0]['c']] = _0x2b8f02,
        _0x2a505b['x'] = gameData[_0x4a7243(0x347)][_0xc2da9c[0x0]['r']][_0xc2da9c[0x0]['c']]['x'],
        _0x2a505b['y'] = gameData[_0x4a7243(0x347)][_0xc2da9c[0x0]['r']][_0xc2da9c[0x0]['c']]['y'];
}
function animateScore(_0x4a41f3) {
    var _0xdf2ca9 = 0.3;
    TweenMax['to'](_0x4a41f3, _0xdf2ca9, {
        'scaleX': 0.7,
        'scaleY': 0.7,
        'overwrite': !![],
        'onComplete': function () {
            TweenMax['to'](_0x4a41f3, _0xdf2ca9, {
                'scaleX': 0x1,
                'scaleY': 0x1,
                'overwrite': !![],
                'onComplete': animateScore,
                'onCompleteParams': [_0x4a41f3]
            });
        }
    });
}
function checkSnakeRotation() {
    var _0x3c2577 = a0_0x2ac117;
    for (var _0x30a87e = 0x0; _0x30a87e < gameData[_0x3c2577(0x2f3)][_0x3c2577(0x211)]; _0x30a87e++) {
        var _0xbf0009 = gameData[_0x3c2577(0x2f3)][_0x30a87e];
        getSnakeRotation(_0x30a87e, _0xbf0009);
    }
}
function getSnakeRotation(_0x4f2737, _0x30b784) {
    var _0x49822b = a0_0x2ac117
        , _0xd803dd = gameSettings[_0x49822b(0x2d6)];
    _0x30b784['rotation'] = 0x0,
        _0x30b784[_0x49822b(0x296)] = _0x30b784[_0x49822b(0x249)] = 0x1;
    if (_0x4f2737 == 0x0) {
        if (gameData['nextDir'] == 'right')
            _0x30b784['scaleX'] = -0x1,
                _0x30b784[_0x49822b(0x344)] = 0x5a;
        else {
            if (gameData[_0x49822b(0x2c4)] == _0x49822b(0x25f))
                _0x30b784['rotation'] = 0xb4;
            else
                gameData[_0x49822b(0x2c4)] == _0x49822b(0x24d) && (_0x30b784['rotation'] = 0x10e);
        }
    } else {
        if (_0x4f2737 < gameData[_0x49822b(0x2f3)]['length'] - 0x1) {
            var _0x41ebeb = gameData[_0x49822b(0x2f3)][_0x4f2737 - 0x1]
                , _0x28eed3 = _0x30b784
                , _0x53f922 = gameData[_0x49822b(0x2f3)][_0x4f2737 + 0x1];
            if (getDistance(_0x41ebeb['x'], _0x41ebeb['y'], _0x28eed3['x'], _0x28eed3['y']) > gameSettings[_0x49822b(0x2d6)]) {
                if (_0x28eed3['x'] == _0x41ebeb['x'])
                    _0x41ebeb['y'] > _0x28eed3['y'] ? _0x41ebeb = {
                        'x': _0x28eed3['x'],
                        'y': _0x28eed3['y'] - _0xd803dd
                    } : _0x41ebeb = {
                        'x': _0x28eed3['x'],
                        'y': _0x28eed3['y'] + _0xd803dd
                    };
                else
                    _0x28eed3['y'] == _0x41ebeb['y'] && (_0x41ebeb['x'] > _0x28eed3['x'] ? _0x41ebeb = {
                        'x': _0x28eed3['x'] - _0xd803dd,
                        'y': _0x28eed3['y']
                    } : _0x41ebeb = {
                        'x': _0x28eed3['x'] + _0xd803dd,
                        'y': _0x28eed3['y']
                    });
            }
            if (getDistance(_0x53f922['x'], _0x53f922['y'], _0x28eed3['x'], _0x28eed3['y']) > gameSettings[_0x49822b(0x2d6)]) {
                if (_0x28eed3['x'] == _0x53f922['x'])
                    _0x53f922['y'] > _0x28eed3['y'] ? _0x53f922 = {
                        'x': _0x28eed3['x'],
                        'y': _0x28eed3['y'] - _0xd803dd
                    } : _0x53f922 = {
                        'x': _0x28eed3['x'],
                        'y': _0x28eed3['y'] + _0xd803dd
                    };
                else
                    _0x28eed3['y'] == _0x53f922['y'] && (_0x53f922['x'] > _0x28eed3['x'] ? _0x53f922 = {
                        'x': _0x28eed3['x'] - _0xd803dd,
                        'y': _0x28eed3['y']
                    } : _0x53f922 = {
                        'x': _0x28eed3['x'] + _0xd803dd,
                        'y': _0x28eed3['y']
                    });
            }
            if (_0x41ebeb['x'] == _0x28eed3['x'] && _0x53f922['x'] == _0x28eed3['x'])
                _0x30b784[_0x49822b(0x1bd)]('body');
            else {
                if (_0x41ebeb['y'] == _0x28eed3['y'] && _0x53f922['y'] == _0x28eed3['y'])
                    _0x30b784[_0x49822b(0x1bd)](_0x49822b(0x337)),
                        _0x30b784[_0x49822b(0x344)] = 0x5a;
                else {
                    _0x30b784[_0x49822b(0x1bd)](_0x49822b(0x23c));
                    if (_0x53f922['x'] < _0x28eed3['x'] && _0x41ebeb['y'] < _0x28eed3['y'])
                        _0x30b784[_0x49822b(0x344)] = 0x5a;
                    else {
                        if (_0x53f922['x'] < _0x28eed3['x'] && _0x41ebeb['y'] > _0x28eed3['y']) { } else {
                            if (_0x53f922['x'] > _0x28eed3['x'] && _0x41ebeb['y'] < _0x28eed3['y'])
                                _0x30b784[_0x49822b(0x344)] = -0xb4;
                            else {
                                if (_0x53f922['x'] > _0x28eed3['x'] && _0x41ebeb['y'] > _0x28eed3['y'])
                                    _0x30b784[_0x49822b(0x344)] = -0x5a;
                                else {
                                    if (_0x53f922['y'] < _0x28eed3['y'] && _0x41ebeb['x'] < _0x28eed3['x'])
                                        _0x30b784['rotation'] = 0x5a;
                                    else {
                                        if (_0x53f922['y'] < _0x28eed3['y'] && _0x41ebeb['x'] > _0x28eed3['x'])
                                            _0x30b784[_0x49822b(0x344)] = 0xb4;
                                        else {
                                            if (_0x53f922['y'] > _0x28eed3['y'] && _0x41ebeb['x'] < _0x28eed3['x']) { } else
                                                _0x53f922['y'] > _0x28eed3['y'] && _0x41ebeb['x'] > _0x28eed3['x'] && (_0x30b784['rotation'] = -0x5a);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else {
            _0x30b784[_0x49822b(0x1bd)](_0x49822b(0x2ad));
            var _0x41ebeb = gameData[_0x49822b(0x2f3)][_0x4f2737 - 0x1]
                , _0x28eed3 = _0x30b784;
            if (getDistance(_0x41ebeb['x'], _0x41ebeb['y'], _0x28eed3['x'], _0x28eed3['y']) > gameSettings[_0x49822b(0x2d6)]) {
                if (_0x41ebeb['x'] == _0x28eed3['x'])
                    _0x41ebeb['y'] > _0x28eed3['y'] ? _0x30b784['rotation'] = 0x0 : _0x30b784[_0x49822b(0x344)] = 0xb4;
                else
                    _0x41ebeb['y'] == _0x28eed3['y'] && (_0x41ebeb['x'] > _0x28eed3['x'] ? _0x30b784[_0x49822b(0x344)] = -0x5a : _0x30b784[_0x49822b(0x344)] = 0x5a);
            } else {
                if (_0x41ebeb['x'] == _0x28eed3['x'])
                    _0x41ebeb['y'] > _0x28eed3['y'] && (_0x30b784[_0x49822b(0x344)] = 0xb4);
                else
                    _0x41ebeb['y'] == _0x28eed3['y'] && (_0x41ebeb['x'] > _0x28eed3['x'] ? _0x30b784[_0x49822b(0x344)] = 0x5a : _0x30b784[_0x49822b(0x344)] = -0x5a);
            }
        }
    }
}
function toggleLoopSnake(_0x231cf1) {
    var _0x31da97 = a0_0x2ac117;
    _0x231cf1 ? (gameData[_0x31da97(0x372)] = !![],
        gameData[_0x31da97(0x2cc)] = new Date()) : gameData[_0x31da97(0x372)] = ![];
}
function loopSnake() {
    var _0x4c40e8 = a0_0x2ac117, _0x2a2bc9 = ![], _0x82ce52 = ![], _0x55f532 = ![], _0x371618 = ![], _0x4e8df5 = ![], _0x46681b = -0x1, _0x2e15aa = -0x1, _0x22cf4b, _0xfdb6ab = themesArr[gameData[_0x4c40e8(0x35b)]][_0x4c40e8(0x291)] == undefined ? ![] : !![];
    if (gameData[_0x4c40e8(0x1cd)]) {
        gameData['increase'] = ![];
        var _0x372697 = gameData[_0x4c40e8(0x2f3)][0x0][_0x4c40e8(0x257)]
            , _0x9b7e64 = gameData[_0x4c40e8(0x2f3)][0x0][_0x4c40e8(0x226)];
        _0x22cf4b = createSnakeShape(),
            _0x22cf4b['x'] = gameData['grid'][_0x372697][_0x9b7e64]['x'],
            _0x22cf4b['y'] = gameData[_0x4c40e8(0x347)][_0x372697][_0x9b7e64]['y'],
            _0x22cf4b[_0x4c40e8(0x35e)] = {
                'x': _0x22cf4b['x'],
                'y': _0x22cf4b['y']
            },
            _0x22cf4b[_0x4c40e8(0x257)] = _0x372697,
            _0x22cf4b[_0x4c40e8(0x226)] = _0x9b7e64,
            _0x22cf4b[_0x4c40e8(0x22d)] = ![],
            gameData['snake'][_0x4c40e8(0x240)](_0x22cf4b),
            _0x4e8df5 = !![];
    }
    for (var _0xcb8e9 = 0x0; _0xcb8e9 < gameData[_0x4c40e8(0x2f3)][_0x4c40e8(0x211)]; _0xcb8e9++) {
        var _0x301ad6 = gameData['snake'][_0xcb8e9]
            , _0x372697 = _0x301ad6[_0x4c40e8(0x257)]
            , _0x9b7e64 = _0x301ad6[_0x4c40e8(0x226)];
        if (_0xcb8e9 == 0x0) {
            if (gameData[_0x4c40e8(0x2c4)] == 'left')
                _0x9b7e64--;
            else {
                if (gameData[_0x4c40e8(0x2c4)] == _0x4c40e8(0x290))
                    _0x9b7e64++;
                else {
                    if (gameData['nextDir'] == 'up')
                        _0x372697--;
                    else
                        gameData[_0x4c40e8(0x2c4)] == 'down' && _0x372697++;
                }
            }
        } else
            _0x372697 = _0x46681b,
                _0x9b7e64 = _0x2e15aa;
        _0x46681b = _0x301ad6[_0x4c40e8(0x257)],
            _0x2e15aa = _0x301ad6[_0x4c40e8(0x226)];
        gameData[_0x4c40e8(0x1d2)][_0x4c40e8(0x1fb)] && ((_0x372697 < 0x0 || _0x372697 >= gameData[_0x4c40e8(0x1d2)]['row']) && (_0x2a2bc9 = !![]),
            (_0x9b7e64 < 0x0 || _0x9b7e64 >= gameData[_0x4c40e8(0x1d2)][_0x4c40e8(0x226)]) && (_0x2a2bc9 = !![]));
        _0x372697 = _0x372697 < 0x0 ? gameData[_0x4c40e8(0x1d2)][_0x4c40e8(0x257)] - 0x1 : _0x372697,
            _0x372697 = _0x372697 >= gameData[_0x4c40e8(0x1d2)][_0x4c40e8(0x257)] ? 0x0 : _0x372697,
            _0x9b7e64 = _0x9b7e64 < 0x0 ? gameData[_0x4c40e8(0x1d2)]['column'] - 0x1 : _0x9b7e64,
            _0x9b7e64 = _0x9b7e64 >= gameData['settings'][_0x4c40e8(0x226)] ? 0x0 : _0x9b7e64;
        gameData[_0x4c40e8(0x1d8)][_0x372697][_0x9b7e64] == 0x3 && (_0x82ce52 = !![]);
        if (!_0x2a2bc9 && !_0x82ce52) {
            gameData['area'][_0x372697][_0x9b7e64] == 0x1 && (_0x55f532 = !![]);
            if (!_0x55f532) {
                gameData[_0x4c40e8(0x1d8)][_0x301ad6[_0x4c40e8(0x257)]][_0x301ad6[_0x4c40e8(0x226)]] = 0x0,
                    _0x301ad6[_0x4c40e8(0x35e)]['x'] = gameData[_0x4c40e8(0x347)][_0x372697][_0x9b7e64]['x'],
                    _0x301ad6[_0x4c40e8(0x35e)]['y'] = gameData[_0x4c40e8(0x347)][_0x372697][_0x9b7e64]['y'];
                if (_0xfdb6ab && _0xcb8e9 == 0x0)
                    animateSnake(_0x301ad6, _0x372697, _0x9b7e64);
                else
                    _0xfdb6ab && _0xcb8e9 == gameData['snake'][_0x4c40e8(0x211)] - 0x1 ? animateSnake(_0x301ad6, _0x372697, _0x9b7e64) : (_0x301ad6['x'] = gameData[_0x4c40e8(0x347)][_0x372697][_0x9b7e64]['x'],
                        _0x301ad6['y'] = gameData[_0x4c40e8(0x347)][_0x372697][_0x9b7e64]['y']);
                _0x301ad6[_0x4c40e8(0x257)] = _0x372697,
                    _0x301ad6[_0x4c40e8(0x226)] = _0x9b7e64,
                    gameData[_0x4c40e8(0x1d8)][_0x372697][_0x9b7e64] == 0x2 && (_0x371618 = !![]),
                    gameData[_0x4c40e8(0x1d8)][_0x372697][_0x9b7e64] = 0x1;
            }
        }
        _0x4e8df5 && (_0xcb8e9 = gameData[_0x4c40e8(0x2f3)]['length'],
            _0x22cf4b['visible'] = !![]);
        if (_0x2a2bc9) {
            _0xcb8e9 = gameData[_0x4c40e8(0x2f3)]['length'];
            var _0x43a642 = Math['floor'](Math['random']() * 0x3);
            playSound(_0x4c40e8(0x280) + (_0x43a642 + 0x1)),
                endGame();
        }
        if (_0x82ce52) {
            _0xcb8e9 = gameData[_0x4c40e8(0x2f3)][_0x4c40e8(0x211)];
            var _0x43a642 = Math[_0x4c40e8(0x1c3)](Math[_0x4c40e8(0x2f9)]() * 0x3);
            playSound(_0x4c40e8(0x280) + (_0x43a642 + 0x1)),
                endGame();
        }
        if (_0x55f532) {
            _0xcb8e9 = gameData[_0x4c40e8(0x2f3)][_0x4c40e8(0x211)];
            var _0x43a642 = Math[_0x4c40e8(0x1c3)](Math[_0x4c40e8(0x2f9)]() * 0x3);
            playSound(_0x4c40e8(0x280) + (_0x43a642 + 0x1)),
                endGame();
        }
    }
    !_0x55f532 && !_0x82ce52 && !_0x2a2bc9 && checkSnakeRotation();
    checkScoreNearby();
    if (_0x371618) {
        var _0x43a642 = Math[_0x4c40e8(0x1c3)](Math['random']() * 0x2);
        playSound(_0x4c40e8(0x1e2) + (_0x43a642 + 0x1)),
            gameData[_0x4c40e8(0x1cd)] = !![],
            animateSnakeFeed(),
            increaseGameStats(),
            insertType('score');
    }
    gameData['dir'] != gameData[_0x4c40e8(0x2c4)] && playSound('soundSwing'),
        gameData[_0x4c40e8(0x20f)] = gameData[_0x4c40e8(0x2c4)];
}
function animateSnake(_0x3825af, _0x183bd8, _0xa77e68) {
    var _0x170355 = a0_0x2ac117
        , _0x1ab361 = ![]
        , _0x5bb13f = 0x0
        , _0x3a55ce = 0x0
        , _0x34da1d = gameSettings[_0x170355(0x2d6)];
    if (_0xa77e68 == 0x0 && _0x3825af['column'] == gameData[_0x170355(0x1d2)][_0x170355(0x226)] - 0x1)
        _0x1ab361 = !![],
            _0x5bb13f = _0x34da1d / 0x2;
    else
        _0xa77e68 == gameData[_0x170355(0x1d2)][_0x170355(0x226)] - 0x1 && _0x3825af[_0x170355(0x226)] == 0x0 && (_0x1ab361 = !![],
            _0x5bb13f = -(_0x34da1d / 0x2));
    if (_0x183bd8 == 0x0 && _0x3825af[_0x170355(0x257)] == gameData[_0x170355(0x1d2)]['row'] - 0x1)
        _0x1ab361 = !![],
            _0x3a55ce = _0x34da1d / 0x2;
    else
        _0x183bd8 == gameData[_0x170355(0x1d2)][_0x170355(0x257)] - 0x1 && _0x3825af[_0x170355(0x257)] == 0x0 && (_0x1ab361 = !![],
            _0x3a55ce = -(_0x34da1d / 0x2));
    _0x1ab361 ? (_0x3825af[_0x170355(0x1ca)] = _0x3825af['x'] + _0x5bb13f,
        _0x3825af[_0x170355(0x311)] = _0x3825af['y'] + _0x3a55ce,
        TweenMax['to'](_0x3825af, gameData[_0x170355(0x2c0)][_0x170355(0x235)] / 0x2 / 0x3e8, {
            'x': _0x3825af['x'] + _0x5bb13f,
            'y': _0x3825af['y'] + _0x3a55ce,
            'ease': Linear['easeNone'],
            'overwrite': !![],
            'onComplete': function () {
                var _0xb27782 = _0x170355;
                _0x3825af['nextX'] = gameData[_0xb27782(0x347)][_0x183bd8][_0xa77e68]['x'],
                    _0x3825af['nextY'] = gameData[_0xb27782(0x347)][_0x183bd8][_0xa77e68]['y'],
                    _0x3825af['x'] = gameData['grid'][_0x183bd8][_0xa77e68]['x'] - _0x5bb13f,
                    _0x3825af['y'] = gameData[_0xb27782(0x347)][_0x183bd8][_0xa77e68]['y'] - _0x3a55ce,
                    TweenMax['to'](_0x3825af, gameData['level'][_0xb27782(0x235)] / 0x2 / 0x3e8, {
                        'x': gameData[_0xb27782(0x347)][_0x183bd8][_0xa77e68]['x'],
                        'y': gameData['grid'][_0x183bd8][_0xa77e68]['y'],
                        'ease': Linear[_0xb27782(0x29a)],
                        'overwrite': !![]
                    });
            }
        })) : (_0x3825af[_0x170355(0x1ca)] = gameData['grid'][_0x183bd8][_0xa77e68]['x'],
            _0x3825af[_0x170355(0x311)] = gameData['grid'][_0x183bd8][_0xa77e68]['y'],
            TweenMax['to'](_0x3825af, gameData['level'][_0x170355(0x235)] / 0x3e8, {
                'x': gameData[_0x170355(0x347)][_0x183bd8][_0xa77e68]['x'],
                'y': gameData[_0x170355(0x347)][_0x183bd8][_0xa77e68]['y'],
                'ease': Linear[_0x170355(0x29a)],
                'overwrite': !![]
            }));
}
function checkScoreNearby() {
    var _0x1dc3f3 = a0_0x2ac117
        , _0x575fc1 = gameData['snake'][0x0];
    randomBoolean() ? _0x575fc1['gotoAndStop']('idle') : _0x575fc1[_0x1dc3f3(0x1bd)](_0x1dc3f3(0x32b));
    for (var _0x1275c8 = 0x0; _0x1275c8 < gameData[_0x1dc3f3(0x260)]['length']; _0x1275c8++) {
        var _0x23a782 = gameData[_0x1dc3f3(0x260)][_0x1275c8];
        getDistance(_0x23a782['x'], _0x23a782['y'], _0x575fc1['x'], _0x575fc1['y']) < gameSettings['gridSize'] * 0x3 && _0x575fc1[_0x1dc3f3(0x1bd)](_0x1dc3f3(0x227));
    }
}
function animateSnakeFeed() {
    var _0x2e2052 = a0_0x2ac117
        , _0x3af70c = new createjs['Bitmap'](loader['getResult'](_0x2e2052(0x2e6) + gameData[_0x2e2052(0x35b)]));
    centerReg(_0x3af70c),
        snakeContainer[_0x2e2052(0x27d)](_0x3af70c),
        gameData[_0x2e2052(0x2e6)][_0x2e2052(0x20b)](_0x3af70c);
    var _0x144865 = []
        , _0xfe35c4 = null
        , _0x5e2f40 = gameData[_0x2e2052(0x2f3)]['length'] > 0xa ? 0xa : gameData['snake']['length'];
    for (var _0x432452 = 0x0; _0x432452 < _0x5e2f40; _0x432452++) {
        var _0x5da9d7 = gameData[_0x2e2052(0x2f3)][_0x432452];
        _0xfe35c4 != null && getDistance(_0xfe35c4['x'], _0xfe35c4['y'], _0x5da9d7['x'], _0x5da9d7['y']) > gameSettings[_0x2e2052(0x2d6)] ? _0x432452 = _0x5e2f40 : _0x144865[_0x2e2052(0x20b)]({
            'x': _0x5da9d7['x'],
            'y': _0x5da9d7['y']
        }),
            _0xfe35c4 = _0x5da9d7;
    }
    _0x3af70c['x'] = gameData[_0x2e2052(0x2f3)][0x0]['x'],
        _0x3af70c['y'] = gameData[_0x2e2052(0x2f3)][0x0]['y'],
        _0x144865['length'] > 0x1 ? TweenMax['to'](_0x3af70c, getDuration(_0x144865[_0x2e2052(0x211)] * gameSettings[_0x2e2052(0x2d6)], 0x3e8), {
            'bezier': {
                'type': _0x2e2052(0x2b1),
                'values': _0x144865,
                'curviness': 0x0,
                'autoRotate': !![]
            },
            'scaleX': 0.5,
            'scaleY': 0.5,
            'ease': Linear[_0x2e2052(0x29a)],
            'repeat': 0x0,
            'overwrite': !![],
            'onComplete': animateSnakeFeedComplete
        }) : animateSnakeFeedComplete();
}
function loopSnakeFeed(_0x19a574) {
    var _0x1ecab5 = a0_0x2ac117
        , _0x5c4d54 = []
        , _0x4e14db = gameData['snake'][_0x19a574[_0x1ecab5(0x28d)]]
        , _0x379d0b = gameData[_0x1ecab5(0x2f3)][_0x19a574[_0x1ecab5(0x28d)] + 0x1];
    _0x19a574[_0x1ecab5(0x28d)]++;
    if (getDistance(_0x4e14db['x'], _0x4e14db['y'], _0x379d0b['x'], _0x379d0b['y']) > gameSettings['gridSize']) { } else
        _0x5c4d54[_0x1ecab5(0x20b)]({
            'x': _0x4e14db['x'],
            'y': _0x4e14db['y']
        }),
            _0x5c4d54['push']({
                'x': _0x379d0b['x'],
                'y': _0x379d0b['y']
            });
    _0x5c4d54[_0x1ecab5(0x211)] > 0x1 ? TweenMax['to'](_0x19a574, getDuration(gameSettings[_0x1ecab5(0x2d6)], 0x3e8), {
        'bezier': {
            'type': _0x1ecab5(0x2b1),
            'values': _0x5c4d54,
            'curviness': 0x0,
            'autoRotate': !![]
        },
        'ease': Linear['easeNone'],
        'repeat': 0x0,
        'overwrite': !![],
        'onComplete': loopSnakeFeedComplete,
        'onCompleteParams': [_0x19a574]
    }) : loopSnakeFeedComplete(_0x19a574);
}
function loopSnakeFeedComplete(_0x3fe1e9) {
    var _0x294383 = a0_0x2ac117;
    _0x3fe1e9['feedIndex'] < gameData[_0x294383(0x2f3)]['length'] - 0x3 ? loopSnakeFeed(_0x3fe1e9) : animateSnakeFeedComplete();
}
function getDuration(_0x2bd8f4, _0x31893b) {
    var _0x4e552b = _0x2bd8f4 / _0x31893b;
    return _0x4e552b;
}
function animateSnakeFeedComplete() {
    var _0x5bdbf3 = a0_0x2ac117
        , _0x54cd5a = gameData['snakeFeed'][0x0];
    snakeContainer[_0x5bdbf3(0x346)](_0x54cd5a),
        gameData[_0x5bdbf3(0x2e6)][_0x5bdbf3(0x33c)](0x0, 0x1);
}
function drawSnakeStroke() {
    var _0x3d975c = a0_0x2ac117;
    snakeStroke[_0x3d975c(0x2ae)][_0x3d975c(0x1c5)]();
    if (themesArr[gameData[_0x3d975c(0x35b)]][_0x3d975c(0x291)] == undefined)
        return;
    var _0x4936d6 = gameSettings[_0x3d975c(0x2d6)];
    gameData['allPath'] = [],
        gameData['findPath'] = [];
    for (var _0x2cb430 = 0x0; _0x2cb430 < gameData['settings'][_0x3d975c(0x257)]; _0x2cb430++) {
        for (var _0x6b647c = 0x0; _0x6b647c < gameData[_0x3d975c(0x1d2)][_0x3d975c(0x226)]; _0x6b647c++) {
            gameData['grid'][_0x2cb430][_0x6b647c][_0x3d975c(0x254)] = 0x1;
        }
    }
    for (var _0x365232 = 0x0; _0x365232 < gameData['snake'][_0x3d975c(0x211)]; _0x365232++) {
        var _0x3b0ef7 = gameData[_0x3d975c(0x2f3)][_0x365232]
            , _0x4df41e = _0x365232 == 0x0 ? null : gameData[_0x3d975c(0x2f3)][_0x365232 - 0x1]
            , _0xad5d2f = _0x365232 == gameData['snake']['length'] - 0x1 ? null : gameData['snake'][_0x365232 + 0x1]
            , _0x42664f = gameData[_0x3d975c(0x347)][_0x3b0ef7[_0x3d975c(0x257)]][_0x3b0ef7[_0x3d975c(0x226)]];
        _0x365232 == 0x0 && (gameData[_0x3d975c(0x2fc)][_0x3d975c(0x20b)]({
            'x': _0x3b0ef7['x'],
            'y': _0x3b0ef7['y']
        }),
            checkBackPos(_0x365232, _0xad5d2f['base'], _0x3b0ef7));
        if (_0x365232 != 0x0) {
            if (_0x365232 == gameData[_0x3d975c(0x2f3)][_0x3d975c(0x211)] - 0x1) {
                checkFrontPos(_0x365232, _0x4df41e[_0x3d975c(0x35e)], _0x3b0ef7[_0x3d975c(0x35e)]),
                    gameData[_0x3d975c(0x2fc)][_0x3d975c(0x20b)]({
                        'x': _0x3b0ef7[_0x3d975c(0x35e)]['x'],
                        'y': _0x3b0ef7[_0x3d975c(0x35e)]['y']
                    });
                var _0x30a8de = {
                    'x': _0x3b0ef7['nextX'],
                    'y': _0x3b0ef7[_0x3d975c(0x311)]
                };
                checkBackPos(_0x365232, _0x30a8de, _0x3b0ef7[_0x3d975c(0x35e)]),
                    gameData[_0x3d975c(0x2fc)][_0x3d975c(0x20b)]({
                        'x': _0x3b0ef7['nextX'],
                        'y': _0x3b0ef7[_0x3d975c(0x311)]
                    }),
                    gameData[_0x3d975c(0x2fc)][_0x3d975c(0x20b)]({
                        'x': _0x3b0ef7['x'],
                        'y': _0x3b0ef7['y']
                    });
            } else
                checkFrontPos(_0x365232, _0x4df41e[_0x3d975c(0x35e)], _0x3b0ef7['base']),
                    gameData[_0x3d975c(0x2fc)][_0x3d975c(0x20b)]({
                        'x': _0x3b0ef7['base']['x'],
                        'y': _0x3b0ef7[_0x3d975c(0x35e)]['y']
                    }),
                    checkBackPos(_0x365232, _0xad5d2f['base'], _0x3b0ef7[_0x3d975c(0x35e)]);
        }
    }
    cutNewPath();
    for (var _0x365232 = 0x0; _0x365232 < gameData['allPath']['length']; _0x365232++) {
        snakeStroke[_0x3d975c(0x2ae)]['setStrokeStyle'](themesArr[gameData[_0x3d975c(0x35b)]][_0x3d975c(0x291)][_0x3d975c(0x291)], 'round', 'round')['beginStroke'](themesArr[gameData['themeNum']][_0x3d975c(0x291)][_0x3d975c(0x1e1)]);
        for (var _0x1a65d5 = 0x0; _0x1a65d5 < gameData['allPath'][_0x365232]['length']; _0x1a65d5++) {
            snakeStroke[_0x3d975c(0x2ae)]['lt'](gameData['allPath'][_0x365232][_0x1a65d5]['x'], gameData[_0x3d975c(0x1ce)][_0x365232][_0x1a65d5]['y']);
        }
        snakeStroke['graphics'][_0x3d975c(0x31d)]();
    }
    if (themesArr[gameData[_0x3d975c(0x35b)]][_0x3d975c(0x291)][_0x3d975c(0x268)] != undefined)
        for (var _0x365232 = 0x0; _0x365232 < gameData['allPath'][_0x3d975c(0x211)]; _0x365232++) {
            snakeStroke['graphics'][_0x3d975c(0x239)](themesArr[gameData[_0x3d975c(0x35b)]][_0x3d975c(0x291)][_0x3d975c(0x291)])['setStrokeDash'](themesArr[gameData[_0x3d975c(0x35b)]][_0x3d975c(0x291)]['dashed'], 0x0)[_0x3d975c(0x274)](themesArr[gameData[_0x3d975c(0x35b)]][_0x3d975c(0x291)][_0x3d975c(0x31b)]);
            for (var _0x1a65d5 = 0x0; _0x1a65d5 < gameData['allPath'][_0x365232][_0x3d975c(0x211)]; _0x1a65d5++) {
                snakeStroke['graphics']['lt'](gameData[_0x3d975c(0x1ce)][_0x365232][_0x1a65d5]['x'], gameData[_0x3d975c(0x1ce)][_0x365232][_0x1a65d5]['y']);
            }
            snakeStroke[_0x3d975c(0x2ae)]['endStroke']();
        }
}
function cutNewPath() {
    var _0x559edb = a0_0x2ac117;
    gameData[_0x559edb(0x1ce)][_0x559edb(0x20b)](gameData['findPath']),
        gameData[_0x559edb(0x2fc)] = [];
}
function checkFrontPos(_0x31d064, _0x4e979d, _0x58964c) {
    var _0x260423 = a0_0x2ac117
        , _0x9808c3 = gameSettings[_0x260423(0x2d6)];
    if (_0x4e979d != null && getDistance(_0x4e979d['x'], _0x4e979d['y'], _0x58964c['x'], _0x58964c['y']) > _0x9808c3 * 0x2) {
        if (_0x4e979d['y'] == _0x58964c['y']) {
            if (_0x4e979d['x'] < _0x58964c['x'])
                gameData[_0x260423(0x2fc)][_0x260423(0x20b)]({
                    'x': gameData[_0x260423(0x1d2)][_0x260423(0x1ec)] + _0x9808c3 / 0x2,
                    'y': _0x58964c['y']
                });
            else
                _0x4e979d['x'] > _0x58964c['x'] && gameData[_0x260423(0x2fc)]['push']({
                    'x': -(_0x9808c3 / 0x2),
                    'y': _0x58964c['y']
                });
        }
        if (_0x4e979d['x'] == _0x58964c['x']) {
            if (_0x4e979d['y'] < _0x58964c['y'])
                gameData[_0x260423(0x2fc)][_0x260423(0x20b)]({
                    'x': _0x58964c['x'],
                    'y': gameData[_0x260423(0x1d2)][_0x260423(0x1b5)] + _0x9808c3 / 0x2
                });
            else
                _0x4e979d['y'] > _0x58964c['y'] && gameData['findPath'][_0x260423(0x20b)]({
                    'x': _0x58964c['x'],
                    'y': -(_0x9808c3 / 0x2)
                });
        }
    }
}
function checkBackPos(_0x4411af, _0x1ccd43, _0x55698f) {
    var _0x58b7b0 = a0_0x2ac117
        , _0x539ca3 = gameSettings[_0x58b7b0(0x2d6)];
    if (_0x1ccd43 != null && getDistance(_0x1ccd43['x'], _0x1ccd43['y'], _0x55698f['x'], _0x55698f['y']) > _0x539ca3 * 0x2) {
        if (_0x1ccd43['y'] == _0x55698f['y']) {
            if (_0x1ccd43['x'] > _0x55698f['x'])
                gameData['findPath']['push']({
                    'x': -(_0x539ca3 / 0x2),
                    'y': _0x55698f['y']
                }),
                    cutNewPath();
            else
                _0x1ccd43['x'] < _0x55698f['x'] && (gameData[_0x58b7b0(0x2fc)][_0x58b7b0(0x20b)]({
                    'x': gameData[_0x58b7b0(0x1d2)][_0x58b7b0(0x1ec)] + _0x539ca3 / 0x2,
                    'y': _0x55698f['y']
                }),
                    cutNewPath());
        }
        if (_0x1ccd43['x'] == _0x55698f['x']) {
            if (_0x1ccd43['y'] > _0x55698f['y'])
                gameData['findPath'][_0x58b7b0(0x20b)]({
                    'x': _0x55698f['x'],
                    'y': -(_0x539ca3 / 0x2)
                }),
                    cutNewPath();
            else
                _0x1ccd43['y'] < _0x55698f['y'] && (gameData['findPath'][_0x58b7b0(0x20b)]({
                    'x': _0x55698f['x'],
                    'y': gameData[_0x58b7b0(0x1d2)][_0x58b7b0(0x1b5)] + _0x539ca3 / 0x2
                }),
                    cutNewPath());
        }
    }
}
function gameControl(_0x2a3ba9) {
    var _0x5c5f21 = a0_0x2ac117;
    if (!gameData[_0x5c5f21(0x1d0)])
        return;
    toggleTouchArrow('up', ![]),
        toggleTouchArrow(_0x5c5f21(0x25f), ![]),
        toggleTouchArrow(_0x5c5f21(0x24d), ![]),
        toggleTouchArrow('right', ![]);
    gameData[_0x5c5f21(0x1b9)][_0x5c5f21(0x24d)] && (_0x2a3ba9 = _0x5c5f21(0x24d));
    gameData[_0x5c5f21(0x1b9)][_0x5c5f21(0x290)] && (_0x2a3ba9 = _0x5c5f21(0x290));
    gameData[_0x5c5f21(0x1b9)]['up'] && (_0x2a3ba9 = 'up');
    gameData[_0x5c5f21(0x1b9)][_0x5c5f21(0x25f)] && (_0x2a3ba9 = _0x5c5f21(0x25f));
    toggleTouchArrow(_0x2a3ba9, !![]);
    var _0x14213d = '';
    if (gameData[_0x5c5f21(0x20f)] == 'left')
        _0x14213d = _0x5c5f21(0x290);
    else {
        if (gameData[_0x5c5f21(0x20f)] == _0x5c5f21(0x290))
            _0x14213d = _0x5c5f21(0x24d);
        else {
            if (gameData['dir'] == 'up')
                _0x14213d = 'down';
            else
                gameData['dir'] == _0x5c5f21(0x25f) && (_0x14213d = 'up');
        }
    }
    _0x14213d != _0x2a3ba9 && (gameData[_0x5c5f21(0x2c4)] = _0x2a3ba9);
}
function checkControl() {
    var _0x4cbbb3 = a0_0x2ac117;
    if (!gameData[_0x4cbbb3(0x1d0)])
        return;
    var _0x10c25e = '';
    toggleTouchArrow('up', ![]),
        toggleTouchArrow('down', ![]),
        toggleTouchArrow(_0x4cbbb3(0x24d), ![]),
        toggleTouchArrow(_0x4cbbb3(0x290), ![]);
    gameData[_0x4cbbb3(0x1b9)][_0x4cbbb3(0x24d)] && (_0x10c25e = _0x4cbbb3(0x24d));
    gameData['moveControl'][_0x4cbbb3(0x290)] && (_0x10c25e = _0x4cbbb3(0x290));
    gameData[_0x4cbbb3(0x1b9)]['up'] && (_0x10c25e = 'up');
    gameData[_0x4cbbb3(0x1b9)]['down'] && (_0x10c25e = 'down');
    if (_0x10c25e != '') {
        toggleTouchArrow(_0x10c25e, !![]);
        var _0x9e4017 = '';
        if (gameData[_0x4cbbb3(0x20f)] == _0x4cbbb3(0x24d))
            _0x9e4017 = _0x4cbbb3(0x290);
        else {
            if (gameData[_0x4cbbb3(0x20f)] == _0x4cbbb3(0x290))
                _0x9e4017 = _0x4cbbb3(0x24d);
            else {
                if (gameData[_0x4cbbb3(0x20f)] == 'up')
                    _0x9e4017 = 'down';
                else
                    gameData[_0x4cbbb3(0x20f)] == _0x4cbbb3(0x25f) && (_0x9e4017 = 'up');
            }
        }
        _0x9e4017 != _0x10c25e && (gameData['nextDir'] = _0x10c25e);
    }
}
function updateBrickIcon() {
    var _0x3d8cc9 = a0_0x2ac117;
    brickIconContainer[_0x3d8cc9(0x2f0)]();
    var _0x45c125 = new createjs['Bitmap'](loader['getResult'](_0x3d8cc9(0x216) + gameData[_0x3d8cc9(0x35b)]));
    centerReg(_0x45c125),
        _0x45c125[_0x3d8cc9(0x296)] = _0x45c125['scaleY'] = 0.8,
        _0x45c125['y'] = -0xa,
        brickIconContainer[_0x3d8cc9(0x27d)](_0x45c125);
}
function increaseGameStats() {
    var _0x12ee62 = a0_0x2ac117;
    playerData['level']++,
        playerData[_0x12ee62(0x260)] += gameSettings[_0x12ee62(0x2c0)][_0x12ee62(0x260)],
        gameData['level']['speedTimes']++,
        gameData['level']['brickTimes']++,
        gameData['level'][_0x12ee62(0x2f2)] >= gameSettings[_0x12ee62(0x2c0)][_0x12ee62(0x2f2)] && (gameData[_0x12ee62(0x2c0)]['speedTimes'] = 0x0,
            gameData[_0x12ee62(0x2c0)][_0x12ee62(0x235)] -= gameSettings['level'][_0x12ee62(0x2ef)]),
        gameData[_0x12ee62(0x2c0)][_0x12ee62(0x29c)] >= gameSettings['level']['brickTimes'] && (gameData[_0x12ee62(0x2c0)][_0x12ee62(0x29c)] = 0x0,
            playerData[_0x12ee62(0x2d7)]++,
            insertType(_0x12ee62(0x2d7))),
        updateGameStats();
}
function updateGameStats() {
    var _0xb44983 = a0_0x2ac117;
    TweenMax['to'](tweenData, 0.5, {
        'tweenScore': playerData[_0xb44983(0x260)],
        'overwrite': !![],
        'onUpdate': function () {
            var _0x157e59 = _0xb44983;
            pointTxt[_0x157e59(0x286)] = pointShadowTxt['text'] = textStrings[_0x157e59(0x359)][_0x157e59(0x30a)](_0x157e59(0x379), addCommas(Math[_0x157e59(0x1c3)](tweenData[_0x157e59(0x2d2)])));
        }
    }),
        levelTxt[_0xb44983(0x286)] = levelShadowTxt[_0xb44983(0x286)] = textStrings[_0xb44983(0x2c0)][_0xb44983(0x30a)](_0xb44983(0x379), playerData[_0xb44983(0x2c0)]),
        brickTxt[_0xb44983(0x286)] = brickShadowTxt['text'] = textStrings['brick'][_0xb44983(0x30a)](_0xb44983(0x379), playerData[_0xb44983(0x2d7)]),
        brickStatusContainer[_0xb44983(0x22d)] = !![],
        !gameData['settings'][_0xb44983(0x2d7)] && (brickStatusContainer['visible'] = ![]);
}
function showGameStatus(_0x443ed5) {
    var _0x551364 = a0_0x2ac117;
    _0x443ed5 == _0x551364(0x213) && (statusTxt[_0x551364(0x286)] = textStrings[_0x551364(0x213)]),
        statusContainer[_0x551364(0x254)] = 0x0,
        TweenMax['to'](statusContainer, 0.5, {
            'alpha': 0x1,
            'overwrite': !![]
        });
}
function updateGame() {
    var _0x56c735 = a0_0x2ac117;
    if (!gameData[_0x56c735(0x1fe)]) {
        if (gameData['loopSnake']) {
            gameData[_0x56c735(0x26f)] = new Date();
            var _0xde3f5b = Math[_0x56c735(0x1c3)](gameData['nowDate'][_0x56c735(0x1d6)]() - gameData['startDate']['getTime']());
            _0xde3f5b > gameData[_0x56c735(0x2c0)]['speed'] && (gameData['startDate'] = new Date(),
                loopSnake());
        }
        drawSnakeStroke(),
            checkControl();
    }
}
function toggleTouchAlpha(_0x1812b3, _0x473699) {
    var _0x5f30ff = a0_0x2ac117;
    _0x473699 ? _0x1812b3['alpha'] = 0.6 : _0x1812b3[_0x5f30ff(0x254)] = 0x1;
}
function setupTouchControl() {
    var _0x38e43d = a0_0x2ac117;
    touchMoveContainer[_0x38e43d(0x296)] = touchMoveContainer[_0x38e43d(0x249)] = gameSettings[_0x38e43d(0x1de)];
    var _0x4b5e9f = ['Up', _0x38e43d(0x27b), 'Down', _0x38e43d(0x2f6)];
    if (gameSettings[_0x38e43d(0x36b)]) {
        buttonTouchMove[_0x38e43d(0x24b)]();
        for (var _0x43fcb3 = 0x0; _0x43fcb3 < _0x4b5e9f[_0x38e43d(0x211)]; _0x43fcb3++) {
            $[_0x38e43d(0x318)]['arrow' + _0x4b5e9f[_0x43fcb3]]['id'] = _0x4b5e9f[_0x43fcb3][_0x38e43d(0x218)](),
                $[_0x38e43d(0x318)][_0x38e43d(0x215) + _0x4b5e9f[_0x43fcb3]][_0x38e43d(0x208)](_0x38e43d(0x246), function (_0x48bfe4) {
                    var _0x127dab = _0x38e43d;
                    toggleTouchArrow(_0x48bfe4[_0x127dab(0x24f)]['id'], !![]),
                        gameData[_0x127dab(0x1b9)][_0x48bfe4[_0x127dab(0x24f)]['id']] = !![];
                }),
                $[_0x38e43d(0x318)]['arrow' + _0x4b5e9f[_0x43fcb3]]['addEventListener'](_0x38e43d(0x1f6), function (_0x2cda18) {
                    var _0x3b08a7 = _0x38e43d;
                    toggleTouchArrow(_0x2cda18[_0x3b08a7(0x24f)]['id'], ![]),
                        gameData['moveControl'][_0x2cda18[_0x3b08a7(0x24f)]['id']] = ![];
                });
        }
        buttonTouchMove[_0x38e43d(0x289)] = _0x38e43d(0x1e3),
            buttonTouchMove[_0x38e43d(0x208)](_0x38e43d(0x246), function (_0x28b3b2) {
                var _0x114f2a = _0x38e43d;
                toggleMoveEvent(_0x28b3b2, _0x114f2a(0x1f7));
            }),
            buttonTouchMove[_0x38e43d(0x208)](_0x38e43d(0x1f8), function (_0x1a5f53) {
                var _0x5c391f = _0x38e43d;
                toggleMoveEvent(_0x1a5f53, _0x5c391f(0x1cf));
            }),
            buttonTouchMove[_0x38e43d(0x208)](_0x38e43d(0x1f6), function (_0x587fa1) {
                var _0x12e8e0 = _0x38e43d;
                toggleMoveEvent(_0x587fa1, _0x12e8e0(0x233));
            });
    } else {
        gameData[_0x38e43d(0x265)] = ![];
        for (var _0x43fcb3 = 0x0; _0x43fcb3 < _0x4b5e9f[_0x38e43d(0x211)]; _0x43fcb3++) {
            $[_0x38e43d(0x318)][_0x4b5e9f[_0x43fcb3]]['id'] = _0x4b5e9f[_0x43fcb3][_0x38e43d(0x218)](),
                $[_0x38e43d(0x318)]['arrow' + _0x4b5e9f[_0x43fcb3]]['id'] = _0x4b5e9f[_0x43fcb3][_0x38e43d(0x218)](),
                $[_0x38e43d(0x318)][_0x38e43d(0x215) + _0x4b5e9f[_0x43fcb3]][_0x38e43d(0x208)](_0x38e43d(0x246), function (_0x51d45b) {
                    var _0xdb7da5 = _0x38e43d;
                    toggleTouchArrow(_0x51d45b[_0xdb7da5(0x24f)]['id'], !![]),
                        gameData[_0xdb7da5(0x1b9)][_0x51d45b[_0xdb7da5(0x24f)]['id']] = !![],
                        gameData[_0xdb7da5(0x265)] = !![];
                }),
                $[_0x38e43d(0x318)]['arrow' + _0x4b5e9f[_0x43fcb3]]['addEventListener'](_0x38e43d(0x1f6), function (_0xb8c3f2) {
                    var _0x9dc893 = _0x38e43d;
                    toggleTouchArrow(_0xb8c3f2[_0x9dc893(0x24f)]['id'], ![]),
                        gameData[_0x9dc893(0x1b9)][_0xb8c3f2[_0x9dc893(0x24f)]['id']] = ![],
                        resetControlPressed(),
                        gameData[_0x9dc893(0x265)] = ![];
                });
        }
        touchMoveContainer[_0x38e43d(0x208)](_0x38e43d(0x1f8), function (_0x434875) {
            var _0x157557 = _0x38e43d;
            if (gameData['touchPressed']) {
                var _0x2c8b9d = _0x434875[_0x157557(0x352)] - touchMoveContainer['x']
                    , _0x1fd16c = _0x434875[_0x157557(0x2af)] - touchMoveContainer['y'];
                resetControlPressed();
                for (var _0x568308 = 0x0; _0x568308 < _0x4b5e9f[_0x157557(0x211)]; _0x568308++) {
                    var _0x225c70 = getDistance($['touch']['arrow' + _0x4b5e9f[_0x568308]]['x'], $[_0x157557(0x318)][_0x157557(0x215) + _0x4b5e9f[_0x568308]]['y'], _0x2c8b9d, _0x1fd16c);
                    if (_0x225c70 < 0x1e) {
                        var _0x28a502 = _0x4b5e9f[_0x568308][_0x157557(0x218)]();
                        toggleTouchArrow(_0x28a502, !![]),
                            gameData[_0x157557(0x1b9)][_0x28a502] = !![];
                    }
                }
            }
        });
    }
}
function resetControlPressed() {
    var _0xa69687 = a0_0x2ac117;
    gameData[_0xa69687(0x1b9)]['up'] = ![],
        gameData['moveControl'][_0xa69687(0x24d)] = ![],
        gameData[_0xa69687(0x1b9)][_0xa69687(0x290)] = ![],
        gameData['moveControl'][_0xa69687(0x25f)] = ![],
        resetControlUI();
}
function toggleMoveEvent(_0x15dbb1, _0x330b54) {
    var _0x4d47a8 = a0_0x2ac117;
    switch (_0x330b54) {
        case _0x4d47a8(0x1f7):
            var _0x259f19 = touchMoveContainer[_0x4d47a8(0x2ab)](_0x15dbb1[_0x4d47a8(0x2e0)]['x'], _0x15dbb1['currentTarget']['y']);
            _0x15dbb1[_0x4d47a8(0x2e0)][_0x4d47a8(0x276)] = {
                'x': (_0x259f19['x'] - _0x15dbb1['stageX']) / dpr,
                'y': (_0x259f19['y'] - _0x15dbb1[_0x4d47a8(0x2af)]) / dpr
            };
            break;
        case _0x4d47a8(0x1cf):
            var _0x4c034d = touchMoveContainer[_0x4d47a8(0x2f7)](_0x15dbb1[_0x4d47a8(0x352)], _0x15dbb1[_0x4d47a8(0x2af)])
                , _0x42ab49 = _0x4c034d['x'] + _0x15dbb1['currentTarget']['offset']['x']
                , _0x3197c1 = _0x4c034d['y'] + _0x15dbb1[_0x4d47a8(0x2e0)]['offset']['y']
                , _0x2a0570 = dragLimit(_0x42ab49, _0x3197c1);
            _0x15dbb1[_0x4d47a8(0x2e0)]['x'] = _0x2a0570['x'],
                _0x15dbb1[_0x4d47a8(0x2e0)]['y'] = _0x2a0570['y'];
            var _0x47e90c = 0xa;
            gameData['moveControl']['up'] = ![],
                gameData[_0x4d47a8(0x1b9)][_0x4d47a8(0x24d)] = ![],
                gameData['moveControl'][_0x4d47a8(0x290)] = ![],
                gameData['moveControl'][_0x4d47a8(0x25f)] = ![],
                toggleTouchArrow(_0x4d47a8(0x24d), ![]),
                toggleTouchArrow(_0x4d47a8(0x290), ![]),
                toggleTouchArrow('up', ![]),
                toggleTouchArrow('down', ![]);
            _0x15dbb1[_0x4d47a8(0x2e0)]['x'] <= -_0x47e90c && (gameData['moveControl'][_0x4d47a8(0x24d)] = !![],
                toggleTouchArrow(_0x4d47a8(0x24d), !![]));
            _0x15dbb1['currentTarget']['x'] >= _0x47e90c && (gameData[_0x4d47a8(0x1b9)][_0x4d47a8(0x290)] = !![],
                toggleTouchArrow(_0x4d47a8(0x290), !![]));
            _0x15dbb1[_0x4d47a8(0x2e0)]['y'] <= -_0x47e90c && (gameData[_0x4d47a8(0x1b9)]['up'] = !![],
                toggleTouchArrow('up', !![]));
            _0x15dbb1[_0x4d47a8(0x2e0)]['y'] >= _0x47e90c && (gameData[_0x4d47a8(0x1b9)][_0x4d47a8(0x25f)] = !![],
                toggleTouchArrow(_0x4d47a8(0x25f), !![]));
            break;
        case _0x4d47a8(0x233):
            gameData[_0x4d47a8(0x1b9)]['up'] = ![],
                gameData['moveControl'][_0x4d47a8(0x24d)] = ![],
                gameData[_0x4d47a8(0x1b9)][_0x4d47a8(0x290)] = ![],
                gameData['moveControl'][_0x4d47a8(0x25f)] = ![],
                resetControlUI();
            break;
    }
}
function dragLimit(_0x23522c, _0x2f8206) {
    var _0x14a716 = a0_0x2ac117
        , _0x32df1e = 0x14
        , _0x118da5 = dragDistance([_0x23522c, _0x2f8206], [0x0, 0x0]);
    if (_0x118da5 <= _0x32df1e)
        return {
            'x': _0x23522c,
            'y': _0x2f8206
        };
    else {
        _0x23522c = _0x23522c - 0x0,
            _0x2f8206 = _0x2f8206 - 0x0;
        var _0x31803a = Math[_0x14a716(0x2d1)](_0x2f8206, _0x23522c);
        return {
            'x': Math[_0x14a716(0x26d)](_0x31803a) * _0x32df1e + 0x0,
            'y': Math['sin'](_0x31803a) * _0x32df1e + 0x0
        };
    }
}
function dragDistance(_0x1f26a9, _0x212851) {
    var _0x18b7a3 = a0_0x2ac117
        , _0x242e21 = _0x1f26a9[0x0]
        , _0x1b33bf = _0x1f26a9[0x1]
        , _0x4aa7c7 = _0x212851[0x0]
        , _0x3438c6 = _0x212851[0x1];
    return Math[_0x18b7a3(0x2ce)](Math[_0x18b7a3(0x2d5)](_0x242e21 - _0x4aa7c7, 0x2) + Math[_0x18b7a3(0x2d5)](_0x1b33bf - _0x3438c6, 0x2));
}
function resetControlUI() {
    var _0xf9720d = a0_0x2ac117;
    toggleTouchArrow('up', ![]),
        toggleTouchArrow('down', ![]),
        toggleTouchArrow(_0xf9720d(0x24d), ![]),
        toggleTouchArrow(_0xf9720d(0x290), ![]);
    if (gameSettings[_0xf9720d(0x36b)])
        buttonTouchMove['x'] = buttonTouchMove['y'] = 0x0;
}
function toggleTouchArrow(_0x4a59ab, _0x53cf36) {
    var _0x4502ca = a0_0x2ac117;
    _0x4a59ab = capitalizeFirstLetter(_0x4a59ab),
        _0x4a59ab && (!_0x53cf36 ? ($[_0x4502ca(0x318)][_0x4a59ab][_0x4502ca(0x22d)] = ![],
            $['touch'][_0x4502ca(0x215) + _0x4a59ab]['visible'] = !![]) : ($[_0x4502ca(0x318)][_0x4a59ab][_0x4502ca(0x22d)] = !![],
                $[_0x4502ca(0x318)][_0x4502ca(0x215) + _0x4a59ab]['visible'] = ![]));
}
function capitalizeFirstLetter(_0x36b79f) {
    var _0x41811b = a0_0x2ac117;
    return _0x36b79f[_0x41811b(0x200)](0x0)[_0x41811b(0x365)]() + _0x36b79f[_0x41811b(0x2e7)](0x1);
}
function setupSwipeControl() {
    var _0x182181 = a0_0x2ac117;
    stage[_0x182181(0x208)](_0x182181(0x1dc), handleMouseDown),
        stage[_0x182181(0x208)](_0x182181(0x22f), handleMouseUp);
}
function handleMouseDown(_0xebd080) {
    var _0x30e8bd = a0_0x2ac117;
    if (!_0xebd080['primary'])
        return;
    gestureData[_0x30e8bd(0x1df)] = -0x1,
        gestureData[_0x30e8bd(0x35d)] = -0x1,
        gestureData['pX'] = gestureData['pX2'] = stage[_0x30e8bd(0x255)],
        gestureData['pY'] = gestureData[_0x30e8bd(0x378)] = stage[_0x30e8bd(0x27e)],
        gestureData[_0x30e8bd(0x21f)] = [],
        stage[_0x30e8bd(0x208)](_0x30e8bd(0x28a), handleMouseMove);
}
function handleMouseMove(_0x396c25) {
    var _0x323bad = a0_0x2ac117;
    if (!_0x396c25[_0x323bad(0x1f4)])
        return;
    var _0xace3a5 = gestureData['pX'] - stage[_0x323bad(0x255)]
        , _0x331b5c = gestureData['pY'] - stage['mouseY']
        , _0x1c8f54 = _0xace3a5 * _0xace3a5 + _0x331b5c * _0x331b5c;
    if (_0x1c8f54 > 0x190) {
        var _0x5e6e3d = Math[_0x323bad(0x2d1)](_0x331b5c, _0xace3a5) * 57.2957795, _0x2b1cb4, _0x5f04ae;
        _0x5e6e3d >= 0x16 * -0x1 && _0x5e6e3d < 0x17 && (_0x2b1cb4 = 0x0,
            _0x5f04ae = _0x323bad(0x24d)),
            _0x5e6e3d >= 0x44 && _0x5e6e3d < 0x71 && (_0x2b1cb4 = Math['PI'] / 0x2,
                _0x5f04ae = 'up'),
            (_0x5e6e3d >= 0x9e || _0x5e6e3d < 0x9d * -0x1) && (_0x2b1cb4 = Math['PI'],
                _0x5f04ae = 'right'),
            _0x5e6e3d >= 0x70 * -0x1 && _0x5e6e3d < 0x43 * -0x1 && (_0x2b1cb4 = -Math['PI'] / 0x2,
                _0x5f04ae = _0x323bad(0x25f)),
            gestureData['pX2'] -= Math[_0x323bad(0x2ce)](_0x1c8f54) * Math[_0x323bad(0x26d)](_0x2b1cb4),
            gestureData[_0x323bad(0x378)] -= Math['sqrt'](_0x1c8f54) * Math[_0x323bad(0x269)](_0x2b1cb4),
            _0x2b1cb4 != gestureData[_0x323bad(0x35d)] ? gestureData['lastDirection'] = _0x2b1cb4 : gestureData[_0x323bad(0x1df)] != gestureData[_0x323bad(0x35d)] && (gestureData['directionArr'][_0x323bad(0x20b)](_0x5f04ae),
                gestureData[_0x323bad(0x1df)] = gestureData['lastDirection']),
            gestureData['pX'] = stage[_0x323bad(0x255)],
            gestureData['pY'] = stage[_0x323bad(0x27e)];
    }
}
function handleMouseUp(_0x2ad031) {
    var _0x297065 = a0_0x2ac117;
    if (!_0x2ad031[_0x297065(0x1f4)])
        return;
    stage[_0x297065(0x361)](_0x297065(0x28a), handleMouseMove);
    if (gestureData['directionArr'][_0x297065(0x211)] > 0x0) {
        var _0x183855 = gestureData[_0x297065(0x21f)][0x0];
        if (curPage == _0x297065(0x23f)) {
            gameData[_0x297065(0x1b9)]['up'] = ![],
                gameData[_0x297065(0x1b9)][_0x297065(0x25f)] = ![],
                gameData[_0x297065(0x1b9)][_0x297065(0x24d)] = ![],
                gameData[_0x297065(0x1b9)]['right'] = ![];
            if (_0x183855 == 'up')
                gameData[_0x297065(0x1b9)]['up'] = !![];
            else {
                if (_0x183855 == _0x297065(0x25f))
                    gameData[_0x297065(0x1b9)][_0x297065(0x25f)] = !![];
                else {
                    if (_0x183855 == _0x297065(0x24d))
                        gameData[_0x297065(0x1b9)][_0x297065(0x24d)] = !![];
                    else
                        _0x183855 == _0x297065(0x290) && (gameData[_0x297065(0x1b9)]['right'] = !![]);
                }
            }
        }
    }
}
function endGame() {
    var _0x3c1840 = a0_0x2ac117;
    gameData['paused'] = !![],
        playSound(_0x3c1840(0x1bf)),
        toggleLoopSnake(![]),
        resetControlUI(),
        showGameStatus(_0x3c1840(0x213)),
        TweenMax['to'](gameContainer, 0x3, {
            'overwrite': !![],
            'onComplete': function () {
                goPage('result');
            }
        });
}
function millisecondsToTimeGame(_0x380f84) {
    var _0x39b725 = a0_0x2ac117
        , _0x1ff06c = _0x380f84 % 0x3e8
        , _0x2abe90 = Math[_0x39b725(0x1c3)](_0x380f84 / 0x3e8 % 0x3c)
        , _0x20c15e = Math[_0x39b725(0x1c3)](_0x380f84 / (0x3c * 0x3e8) % 0x3c);
    return _0x2abe90 < 0xa && (_0x2abe90 = '0' + _0x2abe90),
        _0x20c15e < 0xa && (_0x20c15e = '0' + _0x20c15e),
        _0x20c15e + ':' + _0x2abe90;
}
function toggleOptions(_0x29ec77) {
    var _0x136684 = a0_0x2ac117;
    optionsContainer[_0x136684(0x22d)] ? optionsContainer['visible'] = ![] : optionsContainer[_0x136684(0x22d)] = !![],
        _0x29ec77 != undefined && (optionsContainer[_0x136684(0x22d)] = _0x29ec77);
}
function toggleSoundMute(_0xc56eef) {
    var _0x430a83 = a0_0x2ac117;
    buttonSoundOff[_0x430a83(0x22d)] = ![],
        buttonSoundOn[_0x430a83(0x22d)] = ![],
        toggleSoundInMute(_0xc56eef),
        _0xc56eef ? buttonSoundOn[_0x430a83(0x22d)] = !![] : buttonSoundOff['visible'] = !![];
}
function toggleMusicMute(_0x53c381) {
    var _0x4b2c6f = a0_0x2ac117;
    buttonMusicOff[_0x4b2c6f(0x22d)] = ![],
        buttonMusicOn['visible'] = ![],
        toggleMusicInMute(_0x53c381),
        _0x53c381 ? buttonMusicOn[_0x4b2c6f(0x22d)] = !![] : buttonMusicOff[_0x4b2c6f(0x22d)] = !![];
}
function toggleFullScreen() {
    var _0x4de50a = a0_0x2ac117;
    if (!document[_0x4de50a(0x1e4)] && !document[_0x4de50a(0x1db)] && !document[_0x4de50a(0x1d4)] && !document[_0x4de50a(0x25a)]) {
        if (document[_0x4de50a(0x21d)]['requestFullscreen'])
            document['documentElement'][_0x4de50a(0x363)]();
        else {
            if (document[_0x4de50a(0x21d)][_0x4de50a(0x360)])
                document[_0x4de50a(0x21d)][_0x4de50a(0x360)]();
            else {
                if (document[_0x4de50a(0x21d)][_0x4de50a(0x29f)])
                    document[_0x4de50a(0x21d)][_0x4de50a(0x29f)]();
                else
                    document[_0x4de50a(0x21d)][_0x4de50a(0x26c)] && document[_0x4de50a(0x21d)][_0x4de50a(0x26c)](Element['ALLOW_KEYBOARD_INPUT']);
            }
        }
    } else {
        if (document['exitFullscreen'])
            document['exitFullscreen']();
        else {
            if (document[_0x4de50a(0x2fd)])
                document['msExitFullscreen']();
            else {
                if (document[_0x4de50a(0x25c)])
                    document[_0x4de50a(0x25c)]();
                else
                    document['webkitExitFullscreen'] && document[_0x4de50a(0x236)]();
            }
        }
    }
}
function shareLinks(_0x5bcc66, _0xfc87e0) {
    var _0x37c3bb = a0_0x2ac117;
    shareSettings[_0x37c3bb(0x1ff)] && gtag(_0x37c3bb(0x1f2), _0x37c3bb(0x217), {
        'event_category': _0x37c3bb(0x2f8),
        'event_label': _0x5bcc66
    });
    var _0x2b205f = location[_0x37c3bb(0x295)];
    _0x2b205f = encodeURIComponent(_0x2b205f[_0x37c3bb(0x348)](0x0, _0x2b205f[_0x37c3bb(0x250)]('/') + 0x1));
    var _0x10ecd3 = shareSettings[_0x37c3bb(0x21c)]['replace'](_0x37c3bb(0x345), _0xfc87e0)
        , _0x1a43f0 = shareSettings[_0x37c3bb(0x1ed)][_0x37c3bb(0x30a)](_0x37c3bb(0x345), _0xfc87e0)
        , _0x3c5d35 = '';
    if (_0x5bcc66 == 'facebook')
        shareSettings[_0x37c3bb(0x247)] ? (_0x2b205f = decodeURIComponent(_0x2b205f),
            _0x3c5d35 = _0x37c3bb(0x1c2) + encodeURIComponent(_0x2b205f + 'share.php?title=' + _0x10ecd3 + _0x37c3bb(0x2df) + _0x2b205f + _0x37c3bb(0x375) + _0x2b205f + _0x37c3bb(0x2b3))) : _0x3c5d35 = _0x37c3bb(0x1c2) + _0x2b205f;
    else {
        if (_0x5bcc66 == _0x37c3bb(0x258))
            _0x3c5d35 = _0x37c3bb(0x2c7) + _0x1a43f0 + _0x37c3bb(0x2df) + _0x2b205f;
        else {
            if (_0x5bcc66 == 'whatsapp')
                _0x3c5d35 = _0x37c3bb(0x302) + _0x1a43f0 + '%20' + _0x2b205f;
            else {
                if (_0x5bcc66 == _0x37c3bb(0x223))
                    _0x3c5d35 = _0x37c3bb(0x323) + _0x2b205f + '&text=' + _0x1a43f0;
                else {
                    if (_0x5bcc66 == 'reddit')
                        _0x3c5d35 = _0x37c3bb(0x2cf) + _0x2b205f + '&title=' + _0x1a43f0;
                    else
                        _0x5bcc66 == 'linkedin' && (_0x3c5d35 = 'https://www.linkedin.com/sharing/share-offsite/?url=' + _0x2b205f);
                }
            }
        }
    }
    window[_0x37c3bb(0x225)](_0x3c5d35);
}
var stageWidth, stageHeight = 0x0, isLoaded = ![];
$(function () {
    var _0x1ad840 = a0_0x2ac117
        , _0x39d721 = function () {
            var _0x20c2ae = a0_0x43a2;
            try {
                createjs[_0x20c2ae(0x202)]['context']['state'] === 'suspended' && (createjs[_0x20c2ae(0x202)]['context']['resume'](),
                    window['removeEventListener'](_0x20c2ae(0x217), _0x39d721));
            } catch (_0x298fe3) {
                console[_0x20c2ae(0x36c)](_0x20c2ae(0x374)),
                    console['error'](_0x298fe3);
            }
        };
    window[_0x1ad840(0x208)](_0x1ad840(0x217), _0x39d721),
        window['location'][_0x1ad840(0x1dd)][_0x1ad840(0x334)](0x0, 0x4) === _0x1ad840(0x20c) && alert(_0x1ad840(0x33d)),
        $(window)['resize'](function () {
            resizeLoaderFunc();
        }),
        resizeLoaderFunc(),
        checkBrowser();
});
function resizeLoaderFunc() {
    var _0xcd756f = a0_0x2ac117;
    stageWidth = $(window)[_0xcd756f(0x1ec)](),
        stageHeight = $(window)[_0xcd756f(0x1b5)](),
        $(_0xcd756f(0x1c7))[_0xcd756f(0x248)](_0xcd756f(0x24d), checkContentWidth($('#mainLoader'))),
        $(_0xcd756f(0x1c7))['css']('top', checkContentHeight($(_0xcd756f(0x1c7)))),
        $('#notSupportHolder')[_0xcd756f(0x248)](_0xcd756f(0x24d), checkContentWidth($(_0xcd756f(0x1c7)))),
        $(_0xcd756f(0x35f))[_0xcd756f(0x248)]('top', checkContentHeight($('#mainLoader')));
}
var browserSupport = ![], isMobile, isTablet, isDesktop;
function checkBrowser() {
    var _0x3ef59b = a0_0x2ac117;
    if (typeof MobileDetect === 'function') {
        var _0x47fd8e = new MobileDetect(window[_0x3ef59b(0x305)]['userAgent']);
        isMobile = _0x47fd8e[_0x3ef59b(0x32f)](),
            isTablet = _0x47fd8e['tablet'](),
            isMobile == null && isTablet == null && (isDesktop = !![]);
    }
    var _0x213da9 = document[_0x3ef59b(0x37a)](_0x3ef59b(0x30b));
    _0x213da9[_0x3ef59b(0x278)] && (browserSupport = !![]),
        browserSupport ? !isLoaded && (isLoaded = !![],
            initPreload()) : $(_0x3ef59b(0x35f))[_0x3ef59b(0x351)]();
}
function initPreload() {
    var _0x53f00c = a0_0x2ac117;
    toggleLoader(!![]),
        checkMobileEvent(),
        $(window)[_0x53f00c(0x1fc)](function () {
            clearTimeout(resizeTimer),
                resizeTimer = setTimeout(checkMobileOrientation, 0x3e8);
        }),
        resizeGameFunc(),
        loader = new createjs[(_0x53f00c(0x2d3))](![]),
        manifest = [{
            'src': _0x53f00c(0x281),
            'id': _0x53f00c(0x1d7)
        }, {
            'src': _0x53f00c(0x224),
            'id': _0x53f00c(0x232)
        }, {
            'src': _0x53f00c(0x1c8),
            'id': _0x53f00c(0x2bb)
        }, {
            'src': _0x53f00c(0x253),
            'id': _0x53f00c(0x356)
        }, {
            'src': _0x53f00c(0x1ea),
            'id': 'buttonClassic'
        }, {
            'src': _0x53f00c(0x1c1),
            'id': _0x53f00c(0x29b)
        }, {
            'src': 'assets/button_start.png',
            'id': 'buttonStart'
        }, {
            'src': _0x53f00c(0x299),
            'id': 'buttonSelectTheme'
        }, {
            'src': 'assets/button_radio.png',
            'id': 'buttonRadio'
        }, {
            'src': 'assets/button_arrow_left.png',
            'id': _0x53f00c(0x1fa)
        }, {
            'src': 'assets/button_arrow_right.png',
            'id': 'buttonArrowR'
        }, {
            'src': _0x53f00c(0x2a2),
            'id': _0x53f00c(0x22a)
        }, {
            'src': _0x53f00c(0x297),
            'id': 'buttonArrowD'
        }, {
            'src': 'assets/button_plus.png',
            'id': _0x53f00c(0x1e0)
        }, {
            'src': _0x53f00c(0x301),
            'id': _0x53f00c(0x270)
        }, {
            'src': 'assets/item_number.png',
            'id': _0x53f00c(0x2b2)
        }, {
            'src': _0x53f00c(0x2a5),
            'id': 'itemStatus'
        }, {
            'src': _0x53f00c(0x21a),
            'id': _0x53f00c(0x350)
        }, {
            'src': _0x53f00c(0x293),
            'id': _0x53f00c(0x34b)
        }, {
            'src': 'assets/button_touch_move.png',
            'id': _0x53f00c(0x1e5)
        }, {
            'src': _0x53f00c(0x242),
            'id': _0x53f00c(0x24e)
        }, {
            'src': 'assets/button_touch_press.png',
            'id': _0x53f00c(0x2b4)
        }, {
            'src': _0x53f00c(0x1e6),
            'id': _0x53f00c(0x288)
        }, {
            'src': _0x53f00c(0x2e1),
            'id': _0x53f00c(0x30d)
        }, {
            'src': _0x53f00c(0x1bc),
            'id': _0x53f00c(0x2fb)
        }, {
            'src': _0x53f00c(0x35a),
            'id': _0x53f00c(0x2a1)
        }, {
            'src': _0x53f00c(0x2ba),
            'id': _0x53f00c(0x2d8)
        }, {
            'src': _0x53f00c(0x312),
            'id': _0x53f00c(0x310)
        }, {
            'src': _0x53f00c(0x37c),
            'id': _0x53f00c(0x2dd)
        }, {
            'src': _0x53f00c(0x261),
            'id': _0x53f00c(0x2ff)
        }, {
            'src': _0x53f00c(0x1eb),
            'id': _0x53f00c(0x2b6)
        }, {
            'src': _0x53f00c(0x23d),
            'id': _0x53f00c(0x272)
        }, {
            'src': _0x53f00c(0x2e3),
            'id': 'buttonFacebook'
        }, {
            'src': _0x53f00c(0x31f),
            'id': _0x53f00c(0x241)
        }, {
            'src': 'assets/social/button_whatsapp.png',
            'id': _0x53f00c(0x2b7)
        }, {
            'src': _0x53f00c(0x1d1),
            'id': _0x53f00c(0x23b)
        }, {
            'src': _0x53f00c(0x2a4),
            'id': _0x53f00c(0x251)
        }, {
            'src': _0x53f00c(0x331),
            'id': _0x53f00c(0x277)
        }, {
            'src': _0x53f00c(0x26e),
            'id': _0x53f00c(0x2ed)
        }, {
            'src': _0x53f00c(0x20e),
            'id': _0x53f00c(0x330)
        }, {
            'src': _0x53f00c(0x219),
            'id': _0x53f00c(0x31c)
        }, {
            'src': 'assets/button_confirm.png',
            'id': _0x53f00c(0x2e8)
        }, {
            'src': 'assets/button_cancel.png',
            'id': _0x53f00c(0x212)
        }, {
            'src': _0x53f00c(0x22b),
            'id': _0x53f00c(0x2f5)
        }, {
            'src': _0x53f00c(0x2e4),
            'id': _0x53f00c(0x244)
        }, {
            'src': _0x53f00c(0x303),
            'id': _0x53f00c(0x2db)
        }, {
            'src': _0x53f00c(0x2bf),
            'id': _0x53f00c(0x335)
        }, {
            'src': _0x53f00c(0x2dc),
            'id': 'buttonSettings'
        }];
    for (var _0x322005 = 0x0; _0x322005 < themesArr[_0x53f00c(0x211)]; _0x322005++) {
        manifest[_0x53f00c(0x20b)]({
            'src': themesArr[_0x322005][_0x53f00c(0x306)],
            'id': _0x53f00c(0x2f3) + _0x322005
        }),
            manifest['push']({
                'src': themesArr[_0x322005][_0x53f00c(0x34e)],
                'id': _0x53f00c(0x2e6) + _0x322005
            }),
            manifest[_0x53f00c(0x20b)]({
                'src': themesArr[_0x322005][_0x53f00c(0x2d7)],
                'id': _0x53f00c(0x216) + _0x322005
            });
        for (var _0x412d0c = 0x0; _0x412d0c < themesArr[_0x322005][_0x53f00c(0x260)][_0x53f00c(0x211)]; _0x412d0c++) {
            manifest[_0x53f00c(0x20b)]({
                'src': themesArr[_0x322005]['score'][_0x412d0c],
                'id': _0x53f00c(0x319) + _0x412d0c + '_' + _0x322005
            });
        }
    }
    typeof addScoreboardAssets == 'function' && addScoreboardAssets(),
        audioOn = !![],
        !isDesktop ? !enableMobileAudio && (audioOn = ![]) : !enableDesktopAudio && (audioOn = ![]),
        audioOn && (manifest[_0x53f00c(0x20b)]({
            'src': 'assets/sounds/sound_click.ogg',
            'id': _0x53f00c(0x34c)
        }),
            manifest['push']({
                'src': 'assets/sounds/sound_click_2.ogg',
                'id': _0x53f00c(0x201)
            }),
            manifest[_0x53f00c(0x20b)]({
                'src': _0x53f00c(0x207),
                'id': 'soundOver'
            }),
            manifest[_0x53f00c(0x20b)]({
                'src': _0x53f00c(0x327),
                'id': _0x53f00c(0x2ac)
            }),
            manifest['push']({
                'src': 'assets/sounds/sound_bite1.ogg',
                'id': _0x53f00c(0x287)
            }),
            manifest['push']({
                'src': 'assets/sounds/sound_bite2.ogg',
                'id': 'soundBite2'
            }),
            manifest[_0x53f00c(0x20b)]({
                'src': _0x53f00c(0x2e2),
                'id': _0x53f00c(0x300)
            }),
            manifest[_0x53f00c(0x20b)]({
                'src': 'assets/sounds/sound_wall1.ogg',
                'id': _0x53f00c(0x26a)
            }),
            manifest['push']({
                'src': _0x53f00c(0x349),
                'id': 'soundWall2'
            }),
            manifest['push']({
                'src': _0x53f00c(0x2cb),
                'id': _0x53f00c(0x342)
            }),
            manifest[_0x53f00c(0x20b)]({
                'src': _0x53f00c(0x313),
                'id': _0x53f00c(0x324)
            }),
            createjs[_0x53f00c(0x333)][_0x53f00c(0x22c)] = [_0x53f00c(0x336)],
            loader[_0x53f00c(0x2d4)](createjs[_0x53f00c(0x333)])),
        loader[_0x53f00c(0x208)](_0x53f00c(0x1ee), handleComplete),
        loader[_0x53f00c(0x208)](_0x53f00c(0x228), fileComplete),
        loader[_0x53f00c(0x208)]('error', handleFileError),
        loader['on'](_0x53f00c(0x30e), handleProgress, this),
        loader['loadManifest'](manifest);
}
function fileComplete(_0x2967c2) {
    var _0x4eb139 = a0_0x2ac117
        , _0x1e9ddb = _0x2967c2[_0x4eb139(0x29e)];
}
function handleFileError(_0x33f4a6) {
    var _0xf45745 = a0_0x2ac117;
    console[_0xf45745(0x214)](_0xf45745(0x25d), _0x33f4a6);
}
function handleProgress() {
    var _0x54726b = a0_0x2ac117;
    $(_0x54726b(0x376))['html'](Math[_0x54726b(0x30f)](loader[_0x54726b(0x30e)] / 0x1 * 0x64) + '%');
}
function handleComplete() {
    toggleLoader(![]),
        initMain();
}
; function toggleLoader(_0x5156f5) {
    var _0x2f3bd2 = a0_0x2ac117;
    _0x5156f5 ? $(_0x2f3bd2(0x1c7))[_0x2f3bd2(0x351)]() : $(_0x2f3bd2(0x1c7))[_0x2f3bd2(0x1c0)]();
}
var stageW = 0x500
    , stageH = 0x300
    , contentW = 0x400
    , contentH = 0x240;
const viewport = {
    'isLandscape': !![]
}
    , landscapeSize = {
        'w': stageW,
        'h': stageH,
        'cW': contentW,
        'cH': contentH
    }
    , portraitSize = {
        'w': 0x300,
        'h': 0x400,
        'cW': 0x240,
        'cH': 0x384
    };
function initMain() {
    var _0x3f479c = a0_0x2ac117;
    isDesktop && $(_0x3f479c(0x28f))[_0x3f479c(0x351)](),
        initGameCanvas(stageW, stageH),
        buildGameCanvas(),
        buildGameButton(),
        typeof buildScoreBoardCanvas == _0x3f479c(0x33a) && buildScoreBoardCanvas(),
        goPage('main'),
        checkMobileOrientation(),
        resizeCanvas();
}
var windowW = windowH = 0x0
    , scalePercent = 0x0;
const dpr = window[a0_0x2ac117(0x33e)] || 0x1
    , offset = {
        'x': 0x0,
        'y': 0x0,
        'left': 0x0,
        'top': 0x0
    };
function resizeGameFunc() {
    setTimeout(function () {
        var _0x28ab00 = a0_0x43a2;
        $('.mobileRotate')['css'](_0x28ab00(0x24d), checkContentWidth($(_0x28ab00(0x267)))),
            $(_0x28ab00(0x267))[_0x28ab00(0x248)]('top', checkContentHeight($(_0x28ab00(0x267)))),
            windowW = window['innerWidth'],
            windowH = window[_0x28ab00(0x2c3)],
            scalePercent = Math[_0x28ab00(0x273)](windowW / contentW, windowH / contentH),
            scalePercent = scalePercent > 0x1 ? 0x1 : scalePercent;
        windowW > stageW && windowH > stageH && (windowW > stageW && (scalePercent = windowW / stageW,
            stageH * scalePercent > windowH && (scalePercent = windowH / stageH)));
        const _0x2f0190 = stageW * scalePercent
            , _0xd0565f = stageH * scalePercent;
        offset[_0x28ab00(0x24d)] = 0x0,
            offset[_0x28ab00(0x309)] = 0x0;
        _0x2f0190 > windowW ? offset['left'] = -(_0x2f0190 - windowW) : offset[_0x28ab00(0x24d)] = windowW - _0x2f0190;
        _0xd0565f > windowH ? offset[_0x28ab00(0x309)] = -(_0xd0565f - windowH) : offset[_0x28ab00(0x309)] = windowH - _0xd0565f;
        offset['x'] = 0x0,
            offset['y'] = 0x0;
        offset[_0x28ab00(0x24d)] < 0x0 && (offset['x'] = Math[_0x28ab00(0x26b)](offset['left'] / scalePercent / 0x2));
        offset[_0x28ab00(0x309)] < 0x0 && (offset['y'] = Math['abs'](offset[_0x28ab00(0x309)] / scalePercent / 0x2));
        const _0x48ccf5 = document[_0x28ab00(0x370)](_0x28ab00(0x1cb))
            , _0x4b7267 = _0x48ccf5[_0x28ab00(0x278)]('2d');
        _0x48ccf5[_0x28ab00(0x2a3)][_0x28ab00(0x1ec)] = _0x2f0190 + 'px',
            _0x48ccf5[_0x28ab00(0x2a3)]['height'] = _0xd0565f + 'px',
            _0x48ccf5[_0x28ab00(0x2a3)][_0x28ab00(0x24d)] = offset['left'] / 0x2 + 'px',
            _0x48ccf5[_0x28ab00(0x2a3)]['top'] = offset[_0x28ab00(0x309)] / 0x2 + 'px',
            _0x48ccf5[_0x28ab00(0x1ec)] = stageW * dpr,
            _0x48ccf5[_0x28ab00(0x1b5)] = stageH * dpr,
            $(window)['scrollTop'](0x0),
            resizeCanvas(),
            typeof resizeScore == _0x28ab00(0x33a) && resizeScore();
    }, 0x64);
}
var resizeTimer;
function a0_0x563d() {
    var _0x22a0ee = ['isLandscape', 'keyboard', 'assets/button_touch_left.png', 'gotoAndStop', 'fadeIn', 'soundOver', 'hide', 'assets/button_adventure.png', 'https://www.facebook.com/sharer/sharer.php?u=', 'floor', 'assets/snake_brick_07.png', 'clear', 'columnMax', '#mainLoader', 'assets/logo.png', 'keydown', 'nextX', 'gameCanvas', 'type', 'increase', 'allPath', 'move', 'control', 'assets/social/button_telegram.png', 'settings', '#9A6B38', 'webkitFullscreenElement', 'screenControlAlpha', 'getTime', 'background', 'area', 'enable', 'image', 'mozFullScreenElement', 'stagemousedown', 'protocol', 'screenControlScale', 'curDirection', 'buttonPlus', 'color', 'soundBite', 'pointer', 'fullscreenElement', 'buttonTouchMove', 'assets/button_touch_up.png', '#E19800', 'shareOption', 'adventureBrick', 'assets/button_classic.png', 'assets/button_share.png', 'width', 'shareText', 'complete', 'assets/snake_score_03_b.png', 'columnMin', 'onkeydown', 'event', 'adventureWall', 'primary', '#56558E', 'pressup', 'drag', 'pressmove', 'ADVENTURE', 'buttonArrowL', 'wall', 'resize', 'lineHeight', 'paused', 'gtag', 'charAt', 'soundButton2', 'WebAudioPlugin', 'Touch', 'textBaseline', '40px\x20bpreplaybold', 'orientationchange', 'assets/sounds/sound_over.ogg', 'addEventListener', 'assets/snake_06.png', 'assets/snake_score_01.png', 'push', 'file', 'assets/snake_score_06.png', 'assets/item_pop.png', 'dir', '#fff', 'length', 'buttonCancel', 'gameover', 'log', 'arrow', 'snakeBrick', 'click', 'toLowerCase', 'assets/item_pop_p.png', 'assets/item_adventure_pop.png', 'assets/snake_07.png', 'shareTitle', 'documentElement', 'regY', 'directionArr', 'spaceX', '#2EA613', 'whatsapp', 'telegram', 'assets/background_p.png', 'open', 'column', 'eat', 'fileload', '25px\x20bpreplaybold', 'buttonArrowU', 'assets/button_fullscreen.png', 'alternateExtensions', 'visible', 'rowMin', 'stagemouseup', 'scoreData', 'buttonStart', 'backgroundP', 'drop', 'Container', 'speed', 'webkitExitFullscreen', 'radio', 'BRICK', 'setStrokeStyle', 'prepend', 'buttonTelegram', 'bodybend', 'assets/button_save.png', 'Ticker', 'game', 'unshift', 'buttonTwitter', 'assets/button_touch_arrow.png', 'result', 'buttonSoundOn', 'buttonSettings', 'mousedown', 'customScore', 'css', 'scaleY', '4741200yEEzPV', 'removeAllEventListeners', 'indexOf', 'left', 'buttonTouchArrow', 'target', 'lastIndexOf', 'buttonReddit', 'framerate', 'assets/logo_p.png', 'alpha', 'mouseX', 'innerWidth', 'row', 'twitter', 'tick', 'msFullscreenElement', 'sound', 'mozCancelFullScreen', 'error\x20', 'buttonSelectTheme', 'down', 'score', 'assets/button_touch_right_press.png', '#FFC837', 'defaultVol', 'parent', 'touchPressed', '1434544xhNvRw', '.mobileRotate', 'dashed', 'sin', 'soundWall1', 'abs', 'webkitRequestFullscreen', 'cos', 'assets/button_continue.png', 'nowDate', 'buttonMinus', ':\x20[NUMBER]', 'buttonSave', 'min', 'beginStroke', 'soundStart', 'offset', 'buttonLinkedin', 'getContext', 'fadeOut', 'adventure', 'Right', 'assets/snake_score_05.png', 'addChild', 'mouseY', 'wallSize', 'soundWall', 'assets/background.png', 'hitArea', 'Down', 'assets/snake_score_03_a.png', '#85A166', 'text', 'soundBite1', 'buttonTouchUp', 'cursor', 'stagemousemove', '#39741C', 'rowMax', 'feedIndex', 'assets/snake_feed_04.png', '#canvasHolder', 'right', 'stroke', 'GAME\x20OVER', 'assets/button_touch.png', 'assets/snake_brick_03.png', 'href', 'scaleX', 'assets/button_arrow_down.png', 'adventureTitle', 'assets/button_select_theme.png', 'easeNone', 'buttonAdventure', 'brickTimes', '#724125', 'item', 'mozRequestFullScreen', 'keyCode', 'buttonTouchRight', 'assets/button_arrow_up.png', 'style', 'assets/social/button_reddit.png', 'assets/item_status.png', 'assets/snake_brick_02.png', 'test', 'Graphics', '#B2B3F5', 'Stage', 'localToGlobal', 'soundResult', 'tail', 'graphics', 'stageY', 'stop', 'thru', 'itemNumber', 'share.jpg', 'buttonTouchPress', 'SCORE\x20:\x20[NUMBER]', 'buttonShare', 'buttonWhatsapp', 'SpriteSheet', '#883310', 'assets/button_touch_up_press.png', 'logo', '<div\x20id=\x22focus\x22\x20style=\x22position:absolute;\x20width:100%;\x20height:100%;\x20z-index:1000;\x22></div', 'options', 'killTweensOf', 'assets/button_exit.png', 'level', '2423855ATZpLv', 'update', 'innerHeight', 'nextDir', '6kEWiEa', 'naturalWidth', 'https://twitter.com/intent/tweet?text=', 'assets/snake_score_03_c.png', '#837934', 'itemStatus', 'assets/sounds/sound_wall3.ogg', 'startDate', '9380cFLhed', 'sqrt', 'https://www.reddit.com/submit?url=', '#5B4E45', 'atan2', 'tweenScore', 'LoadQueue', 'installPlugin', 'pow', 'gridSize', 'brick', 'buttonTouchUpPress', 'RAF_SYNCHED', 'assets/snake_05.png', 'buttonSoundOff', 'assets/button_settings.png', 'buttonTouchLeftPress', 'Bitmap', '&url=', 'currentTarget', 'assets/button_touch_down.png', 'assets/sounds/sound_swing.ogg', 'assets/social/button_facebook.png', 'assets/button_sound_on.png', 'location', 'snakeFeed', 'slice', 'buttonConfirm', '75px\x20bpreplaybold', 'onkeyup', 'assets/snake_score_00.png', '[COLUMN]', 'buttonContinue', 'Sprite', 'speedIncrease', 'removeAllChildren', '#A2D532', 'speedTimes', 'snake', 'preventDefault', 'buttonFullscreen', 'Left', 'globalToLocal', 'share', 'random', 'beginFill', 'buttonTouchLeft', 'findPath', 'msExitFullscreen', 'exitMessage', 'buttonTouchRightPress', 'soundSwing', 'assets/button_minus.png', 'https://api.whatsapp.com/send?text=', 'assets/button_sound_off.png', '55px\x20bpreplaybold', 'navigator', 'src', 'assets/snake_04.png', '139813tSNAtD', 'top', 'replace', 'canvas', 'focus', 'buttonTouchDown', 'progress', 'round', 'buttonTouchDownPress', 'nextY', 'assets/button_touch_down_press.png', 'assets/sounds/sound_brick.ogg', '[SCORE]\x20is\x20mine\x20new\x20highscore\x20on\x20Snake\x20Game!\x20Try\x20it\x20now!', '#0060d3', 'red', 'classic', 'touch', 'snakeScore', 'assets/snake_feed_06.png', 'dashedColor', 'itemPopP', 'endStroke', 'volume', 'assets/social/button_twitter.png', '#000', 'naturalHeight', 'assets/snake_feed_05.png', 'https://t.me/share/url?url=', 'soundBrick', '#rotateHolder', 'main', 'assets/sounds/sound_result.ogg', 'alphabetic', 'snakeLength', 'showScreenControl', 'tongue', 'Shape', 'buttonClassic', '#focus', 'mobile', 'itemPop', 'assets/social/button_linkedin.png', '25551ITBUeK', 'Sound', 'substr', 'buttonExit', 'mp3', 'body', 'document', 'getResult', 'function', 'off', 'splice', 'To\x20install\x20the\x20game\x20just\x20upload\x20folder\x20\x27game\x27\x20to\x20your\x20server.\x20The\x20game\x20won\x27t\x20run\x20locally\x20with\x20some\x20browser\x20like\x20Chrome\x20due\x20to\x20some\x20security\x20mode.', 'devicePixelRatio', '3826224IWVUmx', 'killAll', 'button', 'soundWall3', 'design', 'rotation', '[SCORE]', 'removeChild', 'grid', 'substring', 'assets/sounds/sound_wall2.ogg', 'assets/snake_00.png', 'buttonTouch', 'soundButton', 'disable', 'feed', '6840940SWLnXd', 'itemAdventurePop', 'show', 'stageX', 'center', 'Grid\x20Size', 'Text', 'logoP', 'drawRect', 'assets/snake_score_02.png', 'point', 'assets/button_touch_right.png', 'themeNum', 'font', 'lastDirection', 'base', '#notSupportHolder', 'msRequestFullscreen', 'removeEventListener', '[ROW]', 'requestFullscreen', 'assets/snake_03.png', 'toUpperCase', 'LVL\x20:\x20[NUMBER]', 'autoClear', 'resultTitle', '35px\x20bpreplaybold', 'play', 'screenControlStick', 'error', 'blur', 'Share\x20your\x20score:', 'scale', 'getElementById', '2dLYajB', 'loopSnake', 'sort', 'There\x20was\x20an\x20error\x20while\x20trying\x20to\x20resume\x20the\x20SoundJS\x20Web\x20Audio\x20context...', '&thumb=', '#mainLoader\x20span', 'mask', 'pY2', '[NUMBER]', 'createElement', 'textAlign', 'assets/button_touch_left_press.png', 'buttonRadio', 'undefined', 'height', 'facebook', 'theme', 'exitTitle', 'moveControl'];
    a0_0x563d = function () {
        return _0x22a0ee;
    }
        ;
    return a0_0x563d();
}
function checkMobileEvent() {
    var _0x1a269f = a0_0x2ac117;
    !isDesktop && ($(window)[_0x1a269f(0x33b)](_0x1a269f(0x206))['on'](_0x1a269f(0x206), function (_0x716399) {
        var _0x41ff57 = _0x1a269f;
        $('#canvasHolder')[_0x41ff57(0x1c0)](),
            $(_0x41ff57(0x325))[_0x41ff57(0x1c0)](),
            clearTimeout(resizeTimer),
            resizeTimer = setTimeout(checkMobileOrientation, 0x3e8);
    }),
        checkMobileOrientation());
}
function checkMobileOrientation() {
    var _0xe11292 = a0_0x2ac117
        , _0x157da0 = ![];
    window[_0xe11292(0x256)] > window[_0xe11292(0x2c3)] && (_0x157da0 = !![]),
        viewport[_0xe11292(0x1ba)] = _0x157da0,
        changeViewport(viewport[_0xe11292(0x1ba)]),
        resizeGameFunc(),
        $(_0xe11292(0x28f))[_0xe11292(0x351)]();
}
function toggleRotate(_0x559c43) {
    var _0x4d3981 = a0_0x2ac117;
    _0x559c43 ? $('#rotateHolder')[_0x4d3981(0x1be)]() : $(_0x4d3981(0x325))[_0x4d3981(0x279)](),
        resizeGameFunc();
}
function a0_0x43a2(_0x2b64bb, _0xa6d246) {
    var _0x563d02 = a0_0x563d();
    return a0_0x43a2 = function (_0x43a271, _0x374e57) {
        _0x43a271 = _0x43a271 - 0x1b4;
        var _0x5b7aae = _0x563d02[_0x43a271];
        return _0x5b7aae;
    }
        ,
        a0_0x43a2(_0x2b64bb, _0xa6d246);
}
function checkContentHeight(_0x2993e2) {
    var _0x45fe7f = a0_0x2ac117
        , _0x482fb3 = $(window)[_0x45fe7f(0x1b5)]()
        , _0x2549d5 = _0x482fb3 / 0x2 - _0x2993e2[_0x45fe7f(0x1b5)]() / 0x2;
    return _0x2549d5;
}
function checkContentWidth(_0xaf7d83) {
    var _0x205d96 = a0_0x2ac117
        , _0x26937e = $(window)[_0x205d96(0x1ec)]()
        , _0x26e071 = _0x26937e / 0x2 - _0xaf7d83[_0x205d96(0x1ec)]() / 0x2;
    return _0x26e071;
}
function shuffle(_0x4f0aac) {
    var _0x40668d = a0_0x2ac117, _0x38aa85 = _0x4f0aac['length'], _0x582bf4, _0x7785b7;
    while (0x0 !== _0x38aa85) {
        _0x7785b7 = Math[_0x40668d(0x1c3)](Math[_0x40668d(0x2f9)]() * _0x38aa85),
            _0x38aa85 -= 0x1,
            _0x582bf4 = _0x4f0aac[_0x38aa85],
            _0x4f0aac[_0x38aa85] = _0x4f0aac[_0x7785b7],
            _0x4f0aac[_0x7785b7] = _0x582bf4;
    }
    return _0x4f0aac;
}
function randomBoolean() {
    var _0x53bfe8 = a0_0x2ac117;
    return Math[_0x53bfe8(0x2f9)]() < 0.5;
}
function getDistance(_0x50e11d, _0x23986c, _0x3568d2, _0x3321ad) {
    var _0x15ea09 = a0_0x2ac117
        , _0x44a379 = Math[_0x15ea09(0x2ce)](Math[_0x15ea09(0x2d5)](_0x50e11d - _0x3568d2, 0x2) + Math[_0x15ea09(0x2d5)](_0x23986c - _0x3321ad, 0x2));
    return _0x44a379;
}
function sortOnObject(_0x227c1c, _0x461123, _0x17fcbe) {
    var _0x28f58a = a0_0x2ac117;
    return _0x17fcbe ? _0x227c1c['sort'](function (_0x48cb38, _0x102238) {
        var _0x3f7677 = _0x48cb38[_0x461123]
            , _0x557d9c = _0x102238[_0x461123];
        if (_0x3f7677 == _0x557d9c)
            return 0x0;
        return _0x3f7677 < _0x557d9c ? 0x1 : -0x1;
    }) : _0x227c1c[_0x28f58a(0x373)](function (_0x54fd9a, _0x5435e8) {
        var _0x3dfc3b = _0x54fd9a[_0x461123]
            , _0xf5fc8 = _0x5435e8[_0x461123];
        if (_0x3dfc3b == _0xf5fc8)
            return 0x0;
        return _0x3dfc3b > _0xf5fc8 ? 0x1 : -0x1;
    }),
        _0x227c1c;
}
function randomIntFromInterval(_0x1533b4, _0x4370d5) {
    var _0x582094 = a0_0x2ac117;
    return Math[_0x582094(0x1c3)](Math[_0x582094(0x2f9)]() * (_0x4370d5 - _0x1533b4 + 0x1) + _0x1533b4);
}
function addCommas(_0x1861d8) {
    var _0x3767cd = a0_0x2ac117;
    _0x1861d8 += '',
        x = _0x1861d8['split']('.'),
        x1 = x[0x0],
        x2 = x[_0x3767cd(0x211)] > 0x1 ? '.' + x[0x1] : '';
    var _0x436f2c = /(\d+)(\d{3})/;
    while (_0x436f2c[_0x3767cd(0x2a7)](x1)) {
        x1 = x1['replace'](_0x436f2c, '$1' + ',' + '$2');
    }
    return x1 + x2;
}
function swapArray(_0x3f3463, _0x15caf7, _0x13eb01) {
    var _0x23adc3 = _0x3f3463[_0x15caf7];
    _0x3f3463[_0x15caf7] = _0x3f3463[_0x13eb01],
        _0x3f3463[_0x13eb01] = _0x23adc3;
}
function getCenterPosition(_0x32cedf, _0x24bbf6, _0x245afe, _0x3f7232) {
    var _0x7a5be1 = {
        'x': 0x0,
        'y': 0x0
    };
    return _0x7a5be1['x'] = (_0x32cedf + _0x245afe) / 0x2,
        _0x7a5be1['y'] = (_0x24bbf6 + _0x3f7232) / 0x2,
        _0x7a5be1;
}
const enableDesktopAudio = !![]
    , enableMobileAudio = !![]
    , muteSoundOn = ![]
    , muteMusicOn = ![];
var audioOn, soundMute = ![], musicMute = ![];
$[a0_0x2ac117(0x25b)] = {};
var soundID = 0x0
    , soundPushArr = []
    , soundLoopPushArr = []
    , musicPushArr = [];
function playSound(_0x3cb9a3, _0x5ba6ea) {
    var _0x408390 = a0_0x2ac117;
    if (audioOn) {
        var _0x3493a1 = soundID;
        soundPushArr['push'](_0x3493a1),
            soundID++;
        var _0x39a548 = _0x5ba6ea == undefined ? 0x1 : _0x5ba6ea;
        $[_0x408390(0x25b)][_0x3493a1] = createjs[_0x408390(0x333)][_0x408390(0x36a)](_0x3cb9a3),
            $[_0x408390(0x25b)][_0x3493a1][_0x408390(0x263)] = _0x39a548,
            setSoundVolume(_0x3493a1),
            $[_0x408390(0x25b)][_0x3493a1][_0x408390(0x24b)](),
            $[_0x408390(0x25b)][_0x3493a1]['addEventListener']('complete', function () {
                var _0x5d60b3 = _0x408390
                    , _0x308346 = soundPushArr['indexOf'](_0x3493a1);
                _0x308346 != -0x1 && soundPushArr[_0x5d60b3(0x33c)](_0x308346, 0x1);
            });
    }
}
function playSoundLoop(_0x4f9d14) {
    var _0xfc3b07 = a0_0x2ac117;
    audioOn && ($['sound'][_0x4f9d14] == null && (soundLoopPushArr[_0xfc3b07(0x20b)](_0x4f9d14),
        $[_0xfc3b07(0x25b)][_0x4f9d14] = createjs[_0xfc3b07(0x333)][_0xfc3b07(0x36a)](_0x4f9d14),
        $['sound'][_0x4f9d14][_0xfc3b07(0x263)] = 0x1,
        setSoundLoopVolume(_0x4f9d14),
        $[_0xfc3b07(0x25b)][_0x4f9d14]['removeAllEventListeners'](),
        $['sound'][_0x4f9d14][_0xfc3b07(0x208)]('complete', function () {
            var _0x150b20 = _0xfc3b07;
            $[_0x150b20(0x25b)][_0x4f9d14][_0x150b20(0x36a)]();
        })));
}
function toggleSoundLoop(_0x3da704, _0x3ab48d) {
    var _0x1f826b = a0_0x2ac117;
    audioOn && ($[_0x1f826b(0x25b)][_0x3da704] != null && (_0x3ab48d ? $[_0x1f826b(0x25b)][_0x3da704][_0x1f826b(0x36a)]() : $[_0x1f826b(0x25b)][_0x3da704][_0x1f826b(0x1fe)] = !![]));
}
function stopSoundLoop(_0x26cf4e) {
    var _0x36fc90 = a0_0x2ac117;
    if (audioOn) {
        if ($['sound'][_0x26cf4e] != null) {
            $[_0x36fc90(0x25b)][_0x26cf4e]['stop'](),
                $[_0x36fc90(0x25b)][_0x26cf4e] = null;
            var _0x1637d2 = soundLoopPushArr[_0x36fc90(0x24c)](_0x26cf4e);
            _0x1637d2 != -0x1 && soundLoopPushArr[_0x36fc90(0x33c)](_0x1637d2, 0x1);
        }
    }
}
function playMusicLoop(_0x3bc392) {
    var _0x5366bc = a0_0x2ac117;
    audioOn && ($[_0x5366bc(0x25b)][_0x3bc392] == null && (musicPushArr[_0x5366bc(0x20b)](_0x3bc392),
        $[_0x5366bc(0x25b)][_0x3bc392] = createjs[_0x5366bc(0x333)][_0x5366bc(0x36a)](_0x3bc392),
        $['sound'][_0x3bc392][_0x5366bc(0x263)] = 0x1,
        setMusicVolume(_0x3bc392),
        $[_0x5366bc(0x25b)][_0x3bc392]['removeAllEventListeners'](),
        $['sound'][_0x3bc392]['addEventListener'](_0x5366bc(0x1ee), function () {
            var _0x5dbe30 = _0x5366bc;
            $[_0x5dbe30(0x25b)][_0x3bc392]['play']();
        })));
}
function toggleMusicLoop(_0x1be08a, _0x261f0c) {
    var _0x36ce9f = a0_0x2ac117;
    audioOn && ($[_0x36ce9f(0x25b)][_0x1be08a] != null && (_0x261f0c ? $[_0x36ce9f(0x25b)][_0x1be08a][_0x36ce9f(0x36a)]() : $[_0x36ce9f(0x25b)][_0x1be08a]['paused'] = !![]));
}
function stopMusicLoop(_0x3109b0) {
    var _0x54e482 = a0_0x2ac117;
    if (audioOn) {
        if ($['sound'][_0x3109b0] != null) {
            $[_0x54e482(0x25b)][_0x3109b0][_0x54e482(0x2b0)](),
                $[_0x54e482(0x25b)][_0x3109b0] = null;
            var _0x2679f4 = musicPushArr[_0x54e482(0x24c)](_0x3109b0);
            _0x2679f4 != -0x1 && musicPushArr[_0x54e482(0x33c)](_0x2679f4, 0x1);
        }
    }
}
function stopSound() {
    var _0x10b50e = a0_0x2ac117;
    createjs['Sound'][_0x10b50e(0x2b0)]();
}
function toggleSoundInMute(_0x1d2e33) {
    var _0x3c77ef = a0_0x2ac117;
    if (audioOn) {
        soundMute = _0x1d2e33;
        for (var _0x1749a3 = 0x0; _0x1749a3 < soundPushArr[_0x3c77ef(0x211)]; _0x1749a3++) {
            setSoundVolume(soundPushArr[_0x1749a3]);
        }
        for (var _0x1749a3 = 0x0; _0x1749a3 < soundLoopPushArr[_0x3c77ef(0x211)]; _0x1749a3++) {
            setSoundLoopVolume(soundLoopPushArr[_0x1749a3]);
        }
    }
}
function toggleMusicInMute(_0x43fedd) {
    var _0x379704 = a0_0x2ac117;
    if (audioOn) {
        musicMute = _0x43fedd;
        for (var _0x4173b3 = 0x0; _0x4173b3 < musicPushArr[_0x379704(0x211)]; _0x4173b3++) {
            setMusicVolume(musicPushArr[_0x4173b3]);
        }
    }
}
function setSoundVolume(_0x6c1c85, _0x46b30e) {
    var _0x4e7515 = a0_0x2ac117;
    if (audioOn) {
        var _0x31afc0 = soundPushArr[_0x4e7515(0x24c)](_0x6c1c85);
        if (_0x31afc0 != -0x1) {
            var _0x38cbe9 = _0x46b30e == undefined ? $[_0x4e7515(0x25b)][soundPushArr[_0x31afc0]][_0x4e7515(0x263)] : _0x46b30e
                , _0x160a9d = soundMute == ![] ? _0x38cbe9 : 0x0;
            $[_0x4e7515(0x25b)][soundPushArr[_0x31afc0]][_0x4e7515(0x31e)] = _0x160a9d,
                $[_0x4e7515(0x25b)][soundPushArr[_0x31afc0]]['defaultVol'] = _0x38cbe9;
        }
    }
}
function setSoundLoopVolume(_0x10346e, _0x21a83b) {
    var _0xc4b64a = a0_0x2ac117;
    if (audioOn) {
        var _0x4d4e35 = soundLoopPushArr[_0xc4b64a(0x24c)](_0x10346e);
        if (_0x4d4e35 != -0x1) {
            var _0x27f64f = _0x21a83b == undefined ? $[_0xc4b64a(0x25b)][soundLoopPushArr[_0x4d4e35]]['defaultVol'] : _0x21a83b
                , _0x5e41ad = soundMute == ![] ? _0x27f64f : 0x0;
            $['sound'][soundLoopPushArr[_0x4d4e35]][_0xc4b64a(0x31e)] = _0x5e41ad,
                $[_0xc4b64a(0x25b)][soundLoopPushArr[_0x4d4e35]][_0xc4b64a(0x263)] = _0x27f64f;
        }
    }
}
function setMusicVolume(_0x39440e, _0x23238f) {
    var _0x407fd3 = a0_0x2ac117;
    if (audioOn) {
        var _0x5195d1 = musicPushArr[_0x407fd3(0x24c)](_0x39440e);
        if (_0x5195d1 != -0x1) {
            var _0x1bc949 = _0x23238f == undefined ? $[_0x407fd3(0x25b)][musicPushArr[_0x5195d1]][_0x407fd3(0x263)] : _0x23238f
                , _0x4af02d = musicMute == ![] ? _0x1bc949 : 0x0;
            $[_0x407fd3(0x25b)][musicPushArr[_0x5195d1]][_0x407fd3(0x31e)] = _0x4af02d,
                $[_0x407fd3(0x25b)][musicPushArr[_0x5195d1]][_0x407fd3(0x263)] = _0x1bc949;
        }
    }
}
