import { EmojiLabel } from "./emoji-classes"

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
export interface EmojiItem {
  emoji : string
  name  : EmojiLabel
  path  : string
}

const EMOJIS_LVL_1: EmojiItem[] = [
  {
    emoji: '✋',
    name: 'hand',
    path: '/img/emojis/game/hand.svg',
  },
  {
    emoji: '🖱',
    name: 'mouse',
    path: '/img/emojis/game/mouse.svg',
  },
  {
    emoji: '🔌',
    name: 'plug',
    path: '/img/emojis/game/plug.svg',
  },
  {
    emoji: '💡',
    name: 'light bulb',
    path: '/img/emojis/game/light bulb.svg',
  },
  {
    emoji: '📚',
    name: 'book',
    path: '/img/emojis/game/book.svg',
  },
  {
    emoji: '📱',
    name: 'cellphone',
    path: '/img/emojis/game/cellphone.svg',
  },
  {
    emoji: '⌨️',
    name: 'keyboard',
    path: '/img/emojis/game/keyboard.svg',
  },
  {
    emoji: '📺',
    name: 'tv',
    path: '/img/emojis/game/tv.svg',
  },
  {
    emoji: '💻',
    name: 'laptop',
    path: '/img/emojis/game/laptop.svg',
  },
  {
    emoji: '👕',
    name: 'shirt',
    path: '/img/emojis/game/shirt.svg',
  },
  {
    emoji: '👖',
    name: 'pants',
    path: '/img/emojis/game/pants.svg',
  },
  {
    emoji: '👞',
    name: 'shoe',
    path: '/img/emojis/game/shoe.svg',
  },
]

const EMOJIS_LVL_2: Array<EmojiItem> = [
  {
    emoji: '🔑',
    name: 'key',
    path: '/img/emojis/game/key.svg',
  },
  {
    emoji: '📰',
    name: 'newspaper',
    path: '/img/emojis/game/newspaper.svg',
  },
  {
    emoji: '🍽',
    name: 'plate',
    path: '/img/emojis/game/plate.svg',
  },
  {
    emoji: '🧦',
    name: 'sock',
    path: '/img/emojis/game/sock.svg',
  },
  {
    emoji: '🧥',
    name: 'coat',
    path: '/img/emojis/game/coat.svg',
  },
  {
    emoji: '👛',
    name: 'wallet',
    path: '/img/emojis/game/wallet.svg',
  },
  {
    emoji: '🛏',
    name: 'bed',
    path: '/img/emojis/game/bed.svg',
  },
  {
    emoji: '☕',
    name: 'cup',
    path: '/img/emojis/game/cup.svg',
  },
  {
    emoji: '⌚',
    name: 'watch',
    path: '/img/emojis/game/watch.svg',
  },
  {
    emoji: '🗑',
    name: 'trash can',
    path: '/img/emojis/game/trash can.svg',
  },
  {
    emoji: '✉️',
    name: 'envelope',
    path: '/img/emojis/game/envelope.svg',
  },
  {
    emoji: '🕶',
    name: 'sunglasses',
    path: '/img/emojis/game/sunglasses.svg',
  },
  {
    emoji: '🚽',
    name: 'toilet',
    path: '/img/emojis/game/toilet.svg',
  },
  {
    emoji: '🕑',
    name: 'clock',
    path: '/img/emojis/game/clock.svg',
  },
  {
    emoji: '🧢',
    name: 'hat',
    path: '/img/emojis/game/hat.svg',
  },
  {
    emoji: '🎒',
    name: 'backpack',
    path: '/img/emojis/game/backpack.svg',
  },
  {
    emoji: '🎧',
    name: 'headphones',
    path: '/img/emojis/game/headphones.svg',
  },
  {
    emoji: '🖥',
    name: 'display',
    path: '/img/emojis/game/display.svg',
  },
  {
    emoji: '🥄',
    name: 'spoon',
    path: '/img/emojis/game/spoon.svg',
  },
  {
    emoji: '🥣',
    name: 'bowl',
    path: '/img/emojis/game/bowl.svg',
  },
]

const EMOJIS_LVL_3: Array<EmojiItem> = [
  {
    emoji: '🧣',
    name: 'scarf',
    path: '/img/emojis/game/scarf.svg',
  },
  {
    emoji: '✂️',
    name: 'scissors',
    path: '/img/emojis/game/scissors.svg',
  },
  {
    emoji: '🗄',
    name: 'cabinet',
    path: '/img/emojis/game/cabinet.svg',
  },
  {
    emoji: '🌲',
    name: 'tree',
    path: '/img/emojis/game/tree.svg',
  },
  {
    emoji: '🍺',
    name: 'beer',
    path: '/img/emojis/game/beer.svg',
  },
  {
    emoji: '🛋',
    name: 'sofa',
    path: '/img/emojis/game/sofa.svg',
  },
  {
    emoji: '🏠',
    name: 'house',
    path: '/img/emojis/game/house.svg',
  },
  {
    emoji: '🏢',
    name: 'building',
    path: '/img/emojis/game/building.svg',
  },
  {
    emoji: '🚲',
    name: 'bicycle',
    path: '/img/emojis/game/bicycle.svg',
  },
  {
    emoji: '🍳',
    name: 'frying pan',
    path: '/img/emojis/game/frying pan.svg',
  },
  {
    emoji: '🍷',
    name: 'wine',
    path: '/img/emojis/game/wine.svg',
  },
  {
    emoji: '🍞',
    name: 'bread',
    path: '/img/emojis/game/bread.svg',
  },
  {
    emoji: '🖨',
    name: 'printer',
    path: '/img/emojis/game/printer.svg',
  },
  {
    emoji: '🍌',
    name: 'banana',
    path: '/img/emojis/game/banana.svg',
  },
  {
    emoji: '🚗',
    name: 'car',
    path: '/img/emojis/game/car.svg',
  },
  {
    emoji: '🌼',
    name: 'flower',
    path: '/img/emojis/game/flower.svg',
  },
  {
    emoji: '🧤',
    name: 'glove',
    path: '/img/emojis/game/glove.svg',
  },
  {
    emoji: '☂️',
    name: 'umbrella',
    path: '/img/emojis/game/umbrella.svg',
  },
  {
    emoji: '🛁',
    name: 'bathtub',
    path: '/img/emojis/game/bathtub.svg',
  },
  {
    emoji: '📷',
    name: 'camera',
    path: '/img/emojis/game/camera.svg',
  },
]

const EMOJIS_LVL_4: Array<EmojiItem> = [
  {
    emoji: '🐱',
    name: 'cat',
    path: '/img/emojis/game/cat.svg',
  },
  {
    emoji: '🎸',
    name: 'guitar',
    path: '/img/emojis/game/guitar.svg',
  },
  {
    emoji: '🐶',
    name: 'dog',
    path: '/img/emojis/game/dog.svg',
  },
  {
    emoji: '🍊',
    name: 'orange',
    path: '/img/emojis/game/orange.svg',
  },
  {
    emoji: '🍓',
    name: 'strawberry',
    path: '/img/emojis/game/strawberry.svg',
  },
  {
    emoji: '🎹',
    name: 'piano',
    path: '/img/emojis/game/piano.svg',
  },
  {
    emoji: '🔨',
    name: 'hammer',
    path: '/img/emojis/game/hammer.svg',
  },
  {
    emoji: '🎤',
    name: 'microphone',
    path: '/img/emojis/game/microphone.svg',
  },
  {
    emoji: '🥦',
    name: 'broccoli',
    path: '/img/emojis/game/broccoli.svg',
  },
  {
    emoji: '💄',
    name: 'lipstick',
    path: '/img/emojis/game/lipstick.svg',
  },
  {
    emoji: '🔒',
    name: 'lock',
    path: '/img/emojis/game/lock.svg',
  },
  {
    emoji: '📪',
    name: 'mailbox',
    path: '/img/emojis/game/mailbox.svg',
  },
  {
    emoji: '⚽',
    name: 'soccer ball',
    path: '/img/emojis/game/soccer ball.svg',
  },
  {
    emoji: '🍄',
    name: 'mushroom',
    path: '/img/emojis/game/mushroom.svg',
  },
  {
    emoji: '🍋',
    name: 'lemon',
    path: '/img/emojis/game/lemon.svg',
  },
  {
    emoji: '⚾',
    name: 'baseball',
    path: '/img/emojis/game/baseball.svg',
  },
  {
    emoji: '🏀',
    name: 'basketball',
    path: '/img/emojis/game/basketball.svg',
  },
  {
    emoji: '🔦',
    name: 'flashlight',
    path: '/img/emojis/game/flashlight.svg',
  },
  {
    emoji: '🕯',
    name: 'candle',
    path: '/img/emojis/game/candle.svg',
  },
  {
    emoji: '📻',
    name: 'radio',
    path: '/img/emojis/game/radio.svg',
  },
]

const EMOJIS_LVL_5: Array<EmojiItem> = [
  {
    emoji: '🐟',
    name: 'fish',
    path: '/img/emojis/game/fish.svg',
  },
  {
    emoji: '🍨',
    name: 'icecream',
    path: '/img/emojis/game/icecream.svg',
  },
  {
    emoji: '🍕',
    name: 'pizza',
    path: '/img/emojis/game/pizza.svg',
  },
  {
    emoji: '🐦',
    name: 'bird',
    path: '/img/emojis/game/bird.svg',
  },
  {
    emoji: '📼',
    name: 'cassette',
    path: '/img/emojis/game/cassette.svg',
  },
  {
    emoji: '🍔',
    name: 'hamburger',
    path: '/img/emojis/game/hamburger.svg',
  },
  {
    emoji: '🌭',
    name: 'hotdog',
    path: '/img/emojis/game/hotdog.svg',
  },
  {
    emoji: '🍟',
    name: 'fries',
    path: '/img/emojis/game/fries.svg',
  },
  {
    emoji: '🍜',
    name: 'ramen',
    path: '/img/emojis/game/ramen.svg',
  },
  {
    emoji: '🍩',
    name: 'donut',
    path: '/img/emojis/game/donut.svg',
  },
  {
    emoji: '🍣',
    name: 'sushi',
    path: '/img/emojis/game/sushi.svg',
  },
  {
    emoji: '🌮',
    name: 'taco',
    path: '/img/emojis/game/taco.svg',
  },
  {
    emoji: '🌯',
    name: 'burrito',
    path: '/img/emojis/game/burrito.svg',
  },
  {
    emoji: '🚦',
    name: 'traffic light',
    path: '/img/emojis/game/traffic light.svg',
  },
  {
    emoji: '🚎',
    name: 'bus',
    path: '/img/emojis/game/bus.svg',
  },
  {
    emoji: '🚚',
    name: 'truck',
    path: '/img/emojis/game/truck.svg',
  },
  {
    emoji: '🔩',
    name: 'screw',
    path: '/img/emojis/game/screw.svg',
  },
  {
    emoji: '🎷',
    name: 'sax',
    path: '/img/emojis/game/sax.svg',
  },
  {
    emoji: '🍼',
    name: 'baby bottle',
    path: '/img/emojis/game/baby bottle.svg',
  },
  {
    emoji: '🛵',
    name: 'motor scooter',
    path: '/img/emojis/game/motor scooter.svg',
  },
  {
    emoji: '🔎',
    name: 'magnifying glass',
    path: '/img/emojis/game/magnifying glass.svg',
  },
  {
    emoji: '🎃',
    name: 'jack o lantern',
    path: '/img/emojis/game/jack o lantern.svg',
  },
]

// Items for the demo are always selected in the same order as they are defined
// here.
const EMOJIS_LVL_DEMO: Array<EmojiItem> = [
  {
    emoji: '⌚',
    name: 'watch',
    path: '/img/emojis/game/watch.svg',
  },
  {
    emoji: '👞',
    name: 'shoe',
    path: '/img/emojis/game/shoe.svg',
  },
  {
    emoji: '🍌',
    name: 'banana',
    path: '/img/emojis/game/banana.svg',
  },
  {
    emoji: '🍺',
    name: 'beer',
    path: '/img/emojis/game/beer.svg',
  },
  {
    emoji: '🎃',
    name: 'jack o lantern',
    path: '/img/emojis/game/jack o lantern.svg',
  },
]

export {
  EMOJIS_LVL_1,
  EMOJIS_LVL_2,
  EMOJIS_LVL_3,
  EMOJIS_LVL_4,
  EMOJIS_LVL_5,
  EMOJIS_LVL_DEMO,
}
