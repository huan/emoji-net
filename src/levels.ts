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
import { EmojiName } from './emoji-classes'

export interface EmojiItem {
  emoji : string
  name  : EmojiName
  svg   : string
}

const EMOJIS_LVL_1: EmojiItem[] = [
  {
    emoji: '✋',
    name: 'hand',
    svg: '/img/emojis/game/hand.svg',
  },
  {
    emoji: '🖱',
    name: 'mouse',
    svg: '/img/emojis/game/mouse.svg',
  },
  {
    emoji: '🔌',
    name: 'plug',
    svg: '/img/emojis/game/plug.svg',
  },
  {
    emoji: '💡',
    name: 'light bulb',
    svg: '/img/emojis/game/light bulb.svg',
  },
  {
    emoji: '📚',
    name: 'book',
    svg: '/img/emojis/game/book.svg',
  },
  {
    emoji: '📱',
    name: 'cellphone',
    svg: '/img/emojis/game/cellphone.svg',
  },
  {
    emoji: '⌨️',
    name: 'keyboard',
    svg: '/img/emojis/game/keyboard.svg',
  },
  {
    emoji: '📺',
    name: 'tv',
    svg: '/img/emojis/game/tv.svg',
  },
  {
    emoji: '💻',
    name: 'laptop',
    svg: '/img/emojis/game/laptop.svg',
  },
  {
    emoji: '👕',
    name: 'shirt',
    svg: '/img/emojis/game/shirt.svg',
  },
  {
    emoji: '👖',
    name: 'pants',
    svg: '/img/emojis/game/pants.svg',
  },
  {
    emoji: '👞',
    name: 'shoe',
    svg: '/img/emojis/game/shoe.svg',
  },
]

const EMOJIS_LVL_2: Array<EmojiItem> = [
  {
    emoji: '🔑',
    name: 'key',
    svg: '/img/emojis/game/key.svg',
  },
  {
    emoji: '📰',
    name: 'newspaper',
    svg: '/img/emojis/game/newspaper.svg',
  },
  {
    emoji: '🍽',
    name: 'plate',
    svg: '/img/emojis/game/plate.svg',
  },
  {
    emoji: '🧦',
    name: 'sock',
    svg: '/img/emojis/game/sock.svg',
  },
  {
    emoji: '🧥',
    name: 'coat',
    svg: '/img/emojis/game/coat.svg',
  },
  {
    emoji: '👛',
    name: 'wallet',
    svg: '/img/emojis/game/wallet.svg',
  },
  {
    emoji: '🛏',
    name: 'bed',
    svg: '/img/emojis/game/bed.svg',
  },
  {
    emoji: '☕',
    name: 'cup',
    svg: '/img/emojis/game/cup.svg',
  },
  {
    emoji: '⌚',
    name: 'watch',
    svg: '/img/emojis/game/watch.svg',
  },
  {
    emoji: '🗑',
    name: 'trash can',
    svg: '/img/emojis/game/trash can.svg',
  },
  {
    emoji: '✉️',
    name: 'envelope',
    svg: '/img/emojis/game/envelope.svg',
  },
  {
    emoji: '🕶',
    name: 'sunglasses',
    svg: '/img/emojis/game/sunglasses.svg',
  },
  {
    emoji: '🚽',
    name: 'toilet',
    svg: '/img/emojis/game/toilet.svg',
  },
  {
    emoji: '🕑',
    name: 'clock',
    svg: '/img/emojis/game/clock.svg',
  },
  {
    emoji: '🧢',
    name: 'hat',
    svg: '/img/emojis/game/hat.svg',
  },
  {
    emoji: '🎒',
    name: 'backpack',
    svg: '/img/emojis/game/backpack.svg',
  },
  {
    emoji: '🎧',
    name: 'headphones',
    svg: '/img/emojis/game/headphones.svg',
  },
  {
    emoji: '🖥',
    name: 'display',
    svg: '/img/emojis/game/display.svg',
  },
  {
    emoji: '🥄',
    name: 'spoon',
    svg: '/img/emojis/game/spoon.svg',
  },
  {
    emoji: '🥣',
    name: 'bowl',
    svg: '/img/emojis/game/bowl.svg',
  },
]

const EMOJIS_LVL_3: Array<EmojiItem> = [
  {
    emoji: '🧣',
    name: 'scarf',
    svg: '/img/emojis/game/scarf.svg',
  },
  {
    emoji: '✂️',
    name: 'scissors',
    svg: '/img/emojis/game/scissors.svg',
  },
  {
    emoji: '🗄',
    name: 'cabinet',
    svg: '/img/emojis/game/cabinet.svg',
  },
  {
    emoji: '🌲',
    name: 'tree',
    svg: '/img/emojis/game/tree.svg',
  },
  {
    emoji: '🍺',
    name: 'beer',
    svg: '/img/emojis/game/beer.svg',
  },
  {
    emoji: '🛋',
    name: 'sofa',
    svg: '/img/emojis/game/sofa.svg',
  },
  {
    emoji: '🏠',
    name: 'house',
    svg: '/img/emojis/game/house.svg',
  },
  {
    emoji: '🏢',
    name: 'building',
    svg: '/img/emojis/game/building.svg',
  },
  {
    emoji: '🚲',
    name: 'bicycle',
    svg: '/img/emojis/game/bicycle.svg',
  },
  {
    emoji: '🍳',
    name: 'frying pan',
    svg: '/img/emojis/game/frying pan.svg',
  },
  {
    emoji: '🍷',
    name: 'wine',
    svg: '/img/emojis/game/wine.svg',
  },
  {
    emoji: '🍞',
    name: 'bread',
    svg: '/img/emojis/game/bread.svg',
  },
  {
    emoji: '🖨',
    name: 'printer',
    svg: '/img/emojis/game/printer.svg',
  },
  {
    emoji: '🍌',
    name: 'banana',
    svg: '/img/emojis/game/banana.svg',
  },
  {
    emoji: '🚗',
    name: 'car',
    svg: '/img/emojis/game/car.svg',
  },
  {
    emoji: '🌼',
    name: 'flower',
    svg: '/img/emojis/game/flower.svg',
  },
  {
    emoji: '🧤',
    name: 'glove',
    svg: '/img/emojis/game/glove.svg',
  },
  {
    emoji: '☂️',
    name: 'umbrella',
    svg: '/img/emojis/game/umbrella.svg',
  },
  {
    emoji: '🛁',
    name: 'bathtub',
    svg: '/img/emojis/game/bathtub.svg',
  },
  {
    emoji: '📷',
    name: 'camera',
    svg: '/img/emojis/game/camera.svg',
  },
]

const EMOJIS_LVL_4: Array<EmojiItem> = [
  {
    emoji: '🐱',
    name: 'cat',
    svg: '/img/emojis/game/cat.svg',
  },
  {
    emoji: '🎸',
    name: 'guitar',
    svg: '/img/emojis/game/guitar.svg',
  },
  {
    emoji: '🐶',
    name: 'dog',
    svg: '/img/emojis/game/dog.svg',
  },
  {
    emoji: '🍊',
    name: 'orange',
    svg: '/img/emojis/game/orange.svg',
  },
  {
    emoji: '🍓',
    name: 'strawberry',
    svg: '/img/emojis/game/strawberry.svg',
  },
  {
    emoji: '🎹',
    name: 'piano',
    svg: '/img/emojis/game/piano.svg',
  },
  {
    emoji: '🔨',
    name: 'hammer',
    svg: '/img/emojis/game/hammer.svg',
  },
  {
    emoji: '🎤',
    name: 'microphone',
    svg: '/img/emojis/game/microphone.svg',
  },
  {
    emoji: '🥦',
    name: 'broccoli',
    svg: '/img/emojis/game/broccoli.svg',
  },
  {
    emoji: '💄',
    name: 'lipstick',
    svg: '/img/emojis/game/lipstick.svg',
  },
  {
    emoji: '🔒',
    name: 'lock',
    svg: '/img/emojis/game/lock.svg',
  },
  {
    emoji: '📪',
    name: 'mailbox',
    svg: '/img/emojis/game/mailbox.svg',
  },
  {
    emoji: '⚽',
    name: 'soccer ball',
    svg: '/img/emojis/game/soccer ball.svg',
  },
  {
    emoji: '🍄',
    name: 'mushroom',
    svg: '/img/emojis/game/mushroom.svg',
  },
  {
    emoji: '🍋',
    name: 'lemon',
    svg: '/img/emojis/game/lemon.svg',
  },
  {
    emoji: '⚾',
    name: 'baseball',
    svg: '/img/emojis/game/baseball.svg',
  },
  {
    emoji: '🏀',
    name: 'basketball',
    svg: '/img/emojis/game/basketball.svg',
  },
  {
    emoji: '🔦',
    name: 'flashlight',
    svg: '/img/emojis/game/flashlight.svg',
  },
  {
    emoji: '🕯',
    name: 'candle',
    svg: '/img/emojis/game/candle.svg',
  },
  {
    emoji: '📻',
    name: 'radio',
    svg: '/img/emojis/game/radio.svg',
  },
]

const EMOJIS_LVL_5: Array<EmojiItem> = [
  {
    emoji: '🐟',
    name: 'fish',
    svg: '/img/emojis/game/fish.svg',
  },
  {
    emoji: '🍨',
    name: 'icecream',
    svg: '/img/emojis/game/icecream.svg',
  },
  {
    emoji: '🍕',
    name: 'pizza',
    svg: '/img/emojis/game/pizza.svg',
  },
  {
    emoji: '🐦',
    name: 'bird',
    svg: '/img/emojis/game/bird.svg',
  },
  {
    emoji: '📼',
    name: 'cassette',
    svg: '/img/emojis/game/cassette.svg',
  },
  {
    emoji: '🍔',
    name: 'hamburger',
    svg: '/img/emojis/game/hamburger.svg',
  },
  {
    emoji: '🌭',
    name: 'hotdog',
    svg: '/img/emojis/game/hotdog.svg',
  },
  {
    emoji: '🍟',
    name: 'fries',
    svg: '/img/emojis/game/fries.svg',
  },
  {
    emoji: '🍜',
    name: 'ramen',
    svg: '/img/emojis/game/ramen.svg',
  },
  {
    emoji: '🍩',
    name: 'donut',
    svg: '/img/emojis/game/donut.svg',
  },
  {
    emoji: '🍣',
    name: 'sushi',
    svg: '/img/emojis/game/sushi.svg',
  },
  {
    emoji: '🌮',
    name: 'taco',
    svg: '/img/emojis/game/taco.svg',
  },
  {
    emoji: '🌯',
    name: 'burrito',
    svg: '/img/emojis/game/burrito.svg',
  },
  {
    emoji: '🚦',
    name: 'traffic light',
    svg: '/img/emojis/game/traffic light.svg',
  },
  {
    emoji: '🚎',
    name: 'bus',
    svg: '/img/emojis/game/bus.svg',
  },
  {
    emoji: '🚚',
    name: 'truck',
    svg: '/img/emojis/game/truck.svg',
  },
  {
    emoji: '🔩',
    name: 'screw',
    svg: '/img/emojis/game/screw.svg',
  },
  {
    emoji: '🎷',
    name: 'sax',
    svg: '/img/emojis/game/sax.svg',
  },
  {
    emoji: '🍼',
    name: 'baby bottle',
    svg: '/img/emojis/game/baby bottle.svg',
  },
  {
    emoji: '🛵',
    name: 'motor scooter',
    svg: '/img/emojis/game/motor scooter.svg',
  },
  {
    emoji: '🔎',
    name: 'magnifying glass',
    svg: '/img/emojis/game/magnifying glass.svg',
  },
  {
    emoji: '🎃',
    name: 'jack o lantern',
    svg: '/img/emojis/game/jack o lantern.svg',
  },
]

// Items for the demo are always selected in the same order as they are defined
// here.
const EMOJIS_LVL_DEMO: Array<EmojiItem> = [
  {
    emoji: '⌚',
    name: 'watch',
    svg: '/img/emojis/game/watch.svg',
  },
  {
    emoji: '👞',
    name: 'shoe',
    svg: '/img/emojis/game/shoe.svg',
  },
  {
    emoji: '🍌',
    name: 'banana',
    svg: '/img/emojis/game/banana.svg',
  },
  {
    emoji: '🍺',
    name: 'beer',
    svg: '/img/emojis/game/beer.svg',
  },
  {
    emoji: '🎃',
    name: 'jack o lantern',
    svg: '/img/emojis/game/jack o lantern.svg',
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
