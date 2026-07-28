// Single source of truth for the wardrobe.
// Both the Selector (controls) and the Preview (stacked mannequin) read from this.
// `key` drives the thumbnail crop (Selector.css) and the layer z-index (Preview.css).

import {
    Blank,
    //tops
    BaseTop,
    BlackCropTank,
    WhiteTee,
    PinkTee,
    BlueTee,
    GreenTee,
    LeopardCrop,
    LeopardTube,
    PurpleTube,
    WhiteBlouse,
    GinghamRedBlouse,
    PurpleOffShoulder,
    RedOffShoulder,
    //overwear
    BlackBolero,
    WhiteBolero,
    //bottoms
    BaseBottom,
    HeartJeans,
    BlackSkirt,
    GreenSkirt,
    whiteSkirt,
    //stockings
    BlackFishnets,
    //shoes
    BlackMaryJanes,
    BlackPlatformBoots,
    BrownBoots,
    PinkConverse,
    RedConverse,
    RedMaryJanes,
    WhiteKittenHeels,
} from './assets'

export const categories = [
    {
        key: 'tops',
        items: [BaseTop, BlackCropTank, WhiteTee, PinkTee, BlueTee, GreenTee, LeopardCrop, LeopardTube, PurpleTube, WhiteBlouse, GinghamRedBlouse, PurpleOffShoulder, RedOffShoulder],
    },
    {
        key: 'overwear',
        items: [Blank, BlackBolero, WhiteBolero],
    },
    {
        key: 'bottoms',
        items: [BaseBottom, HeartJeans, BlackSkirt, GreenSkirt, whiteSkirt],
    },
    {
        key: 'stockings',
        items: [Blank, BlackFishnets],
    },
    {
        key: 'shoes',
        items: [BlackMaryJanes, BlackPlatformBoots, BrownBoots, PinkConverse, RedConverse, RedMaryJanes, WhiteKittenHeels],
    },
]

// Initial selection: first item of every category.
export const initialSelection = Object.fromEntries(categories.map(({ key }) => [key, 0]))
