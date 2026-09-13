import { PokemonData } from '../../domain/schemas/pokemon.schema';

export const MOCK_POKEMON_DATASET: PokemonData[] = [
  {
    "id": 1,
    "pokedexNumber": 1,
    "name": {
      "ja": "フシギダネ",
      "en": "Bulbasaur",
      "kana": "フシギダネ",
      "romaji": "Fushigidane"
    },
    "generation": 1,
    "types": [
      "grass",
      "poison"
    ],
    "category": "たねポケモン",
    "height": 0.7,
    "weight": 6.9,
    "abilities": [
      {
        "name": "しんりょく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ようりょくそ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 45,
      "attack": 49,
      "defense": 49,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 45
    },
    "flavorText": "ひなたで ひるねを する すがたを みかける。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 1,
        "name": "フシギダネ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
      },
      {
        "pokemonId": 2,
        "name": "フシギソウ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        "condition": "Level 16"
      }
    ]
  },
  {
    "id": 2,
    "pokedexNumber": 2,
    "name": {
      "ja": "フシギソウ",
      "en": "Ivysaur",
      "kana": "フシギソウ",
      "romaji": "Fushigisou"
    },
    "generation": 1,
    "types": [
      "grass",
      "poison"
    ],
    "category": "たねポケモン",
    "height": 1,
    "weight": 13,
    "abilities": [
      {
        "name": "しんりょく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ようりょくそ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 62,
      "defense": 63,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 60
    },
    "flavorText": "つぼみを ささえるため あしこしが つよくなる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/2.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/2.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 2,
        "name": "フシギソウ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
      },
      {
        "pokemonId": 3,
        "name": "フシギバナ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        "condition": "Level 32"
      }
    ]
  },
  {
    "id": 3,
    "pokedexNumber": 3,
    "name": {
      "ja": "フシギバナ",
      "en": "Venusaur",
      "kana": "フシギバナ",
      "romaji": "Fushigibana"
    },
    "generation": 1,
    "types": [
      "grass",
      "poison"
    ],
    "category": "たねポケモン",
    "height": 2,
    "weight": 100,
    "abilities": [
      {
        "name": "しんりょく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ようりょくそ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 80,
      "attack": 82,
      "defense": 83,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 80
    },
    "flavorText": "じゅうぶんな えいようと たいようの ひかりが",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/3.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/3.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 3,
        "name": "フシギバナ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
      }
    ]
  },
  {
    "id": 4,
    "pokedexNumber": 4,
    "name": {
      "ja": "ヒトカゲ",
      "en": "Charmander",
      "kana": "ヒトカゲ",
      "romaji": "Hitokage"
    },
    "generation": 1,
    "types": [
      "fire"
    ],
    "category": "とかげポケモン",
    "height": 0.6,
    "weight": 8.5,
    "abilities": [
      {
        "name": "もうか",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "サンパワー",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "specialAttack": 60,
      "specialDefense": 50,
      "speed": 65
    },
    "flavorText": "しっぽの ほのおは きぶんを ひょうげん。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/4.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/4.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 4,
        "name": "ヒトカゲ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
      },
      {
        "pokemonId": 5,
        "name": "リザード",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
        "condition": "Level 16"
      }
    ]
  },
  {
    "id": 5,
    "pokedexNumber": 5,
    "name": {
      "ja": "リザード",
      "en": "Charmeleon",
      "kana": "リザード",
      "romaji": "Lizardo"
    },
    "generation": 1,
    "types": [
      "fire"
    ],
    "category": "かえんポケモン",
    "height": 1.1,
    "weight": 19,
    "abilities": [
      {
        "name": "もうか",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "サンパワー",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 58,
      "attack": 64,
      "defense": 58,
      "specialAttack": 80,
      "specialDefense": 65,
      "speed": 80
    },
    "flavorText": "するどい ツメで ようしゃなく たたきのめす。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/5.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/5.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 5,
        "name": "リザード",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
      },
      {
        "pokemonId": 6,
        "name": "リザードン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        "condition": "Level 36"
      }
    ]
  },
  {
    "id": 6,
    "pokedexNumber": 6,
    "name": {
      "ja": "リザードン",
      "en": "Charizard",
      "kana": "リザードン",
      "romaji": "Lizardon"
    },
    "generation": 1,
    "types": [
      "fire",
      "flying"
    ],
    "category": "かえんポケモン",
    "height": 1.7,
    "weight": 90.5,
    "abilities": [
      {
        "name": "もうか",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "サンパワー",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "specialAttack": 109,
      "specialDefense": 85,
      "speed": 100
    },
    "flavorText": "つよい あいてを もとめて そらを とびまわる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/6.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/6.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 6,
        "name": "リザードン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
      }
    ]
  },
  {
    "id": 7,
    "pokedexNumber": 7,
    "name": {
      "ja": "ゼニガメ",
      "en": "Squirtle",
      "kana": "ゼニガメ",
      "romaji": "Zenigame"
    },
    "generation": 1,
    "types": [
      "water"
    ],
    "category": "かめのこポケモン",
    "height": 0.5,
    "weight": 9,
    "abilities": [
      {
        "name": "げきりゅう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "あめうけざら",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 44,
      "attack": 48,
      "defense": 65,
      "specialAttack": 50,
      "specialDefense": 64,
      "speed": 43
    },
    "flavorText": "こうらの やくめは みを まもる だけではない。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/7.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/7.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 7,
        "name": "ゼニガメ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
      },
      {
        "pokemonId": 8,
        "name": "カメール",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
        "condition": "Level 16"
      }
    ]
  },
  {
    "id": 8,
    "pokedexNumber": 8,
    "name": {
      "ja": "カメール",
      "en": "Wartortle",
      "kana": "カメール",
      "romaji": "Kameil"
    },
    "generation": 1,
    "types": [
      "water"
    ],
    "category": "かめポケモン",
    "height": 1,
    "weight": 22.5,
    "abilities": [
      {
        "name": "げきりゅう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "あめうけざら",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 59,
      "attack": 63,
      "defense": 80,
      "specialAttack": 65,
      "specialDefense": 80,
      "speed": 58
    },
    "flavorText": "ふさふさの けで おおわれた おおきな しっぽは",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/8.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/8.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 8,
        "name": "カメール",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
      },
      {
        "pokemonId": 9,
        "name": "カメックス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
        "condition": "Level 36"
      }
    ]
  },
  {
    "id": 9,
    "pokedexNumber": 9,
    "name": {
      "ja": "カメックス",
      "en": "Blastoise",
      "kana": "カメックス",
      "romaji": "Kamex"
    },
    "generation": 1,
    "types": [
      "water"
    ],
    "category": "こうらポケモン",
    "height": 1.6,
    "weight": 85.5,
    "abilities": [
      {
        "name": "げきりゅう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "あめうけざら",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 79,
      "attack": 83,
      "defense": 100,
      "specialAttack": 85,
      "specialDefense": 105,
      "speed": 78
    },
    "flavorText": "こうらの ふんしゃこうの ねらいは せいかく。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/9.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/9.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 9,
        "name": "カメックス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
      }
    ]
  },
  {
    "id": 10,
    "pokedexNumber": 10,
    "name": {
      "ja": "キャタピー",
      "en": "Caterpie",
      "kana": "キャタピー",
      "romaji": "Caterpie"
    },
    "generation": 1,
    "types": [
      "bug"
    ],
    "category": "いもむしポケモン",
    "height": 0.3,
    "weight": 2.9,
    "abilities": [
      {
        "name": "りんぷん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "にげあし",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 45,
      "attack": 30,
      "defense": 35,
      "specialAttack": 20,
      "specialDefense": 20,
      "speed": 45
    },
    "flavorText": "からだ よりも おおきな はっぱを みるみる",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 10,
        "name": "キャタピー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
      },
      {
        "pokemonId": 11,
        "name": "トランセル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
        "condition": "Level 7"
      }
    ]
  },
  {
    "id": 11,
    "pokedexNumber": 11,
    "name": {
      "ja": "トランセル",
      "en": "Metapod",
      "kana": "トランセル",
      "romaji": "Transel"
    },
    "generation": 1,
    "types": [
      "bug"
    ],
    "category": "さなぎポケモン",
    "height": 0.7,
    "weight": 9.9,
    "abilities": [
      {
        "name": "だっぴ",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 50,
      "attack": 20,
      "defense": 55,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 30
    },
    "flavorText": "からだの カラは てっぱんの ように かたい。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/11.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/11.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 11,
        "name": "トランセル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
      },
      {
        "pokemonId": 12,
        "name": "バタフリー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        "condition": "Level 10"
      }
    ]
  },
  {
    "id": 12,
    "pokedexNumber": 12,
    "name": {
      "ja": "バタフリー",
      "en": "Butterfree",
      "kana": "バタフリー",
      "romaji": "Butterfree"
    },
    "generation": 1,
    "types": [
      "bug",
      "flying"
    ],
    "category": "ちょうちょポケモン",
    "height": 1.1,
    "weight": 32,
    "abilities": [
      {
        "name": "ふくがん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "いろめがね",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 45,
      "defense": 50,
      "specialAttack": 90,
      "specialDefense": 80,
      "speed": 70
    },
    "flavorText": "おいしい はなの ミツを さがす のうりょくに",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/12.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/12.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 12,
        "name": "バタフリー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
      }
    ]
  },
  {
    "id": 13,
    "pokedexNumber": 13,
    "name": {
      "ja": "ビードル",
      "en": "Weedle",
      "kana": "ビードル",
      "romaji": "Beedle"
    },
    "generation": 1,
    "types": [
      "bug",
      "poison"
    ],
    "category": "けむしポケモン",
    "height": 0.3,
    "weight": 3.2,
    "abilities": [
      {
        "name": "りんぷん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "にげあし",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 40,
      "attack": 35,
      "defense": 30,
      "specialAttack": 20,
      "specialDefense": 20,
      "speed": 50
    },
    "flavorText": "とても するどい きゅうかくを もっている。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/13.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/13.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 13,
        "name": "ビードル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"
      },
      {
        "pokemonId": 14,
        "name": "コクーン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
        "condition": "Level 7"
      }
    ]
  },
  {
    "id": 14,
    "pokedexNumber": 14,
    "name": {
      "ja": "コクーン",
      "en": "Kakuna",
      "kana": "コクーン",
      "romaji": "Cocoon"
    },
    "generation": 1,
    "types": [
      "bug",
      "poison"
    ],
    "category": "さなぎポケモン",
    "height": 0.6,
    "weight": 10,
    "abilities": [
      {
        "name": "だっぴ",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 45,
      "attack": 25,
      "defense": 50,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 35
    },
    "flavorText": "ほとんど うごかず きに つかまっているが",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/14.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/14.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 14,
        "name": "コクーン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png"
      },
      {
        "pokemonId": 15,
        "name": "スピアー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
        "condition": "Level 10"
      }
    ]
  },
  {
    "id": 15,
    "pokedexNumber": 15,
    "name": {
      "ja": "スピアー",
      "en": "Beedrill",
      "kana": "スピアー",
      "romaji": "Spear"
    },
    "generation": 1,
    "types": [
      "bug",
      "poison"
    ],
    "category": "どくばちポケモン",
    "height": 1,
    "weight": 29.5,
    "abilities": [
      {
        "name": "むしのしらせ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "スナイパー",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 65,
      "attack": 90,
      "defense": 40,
      "specialAttack": 45,
      "specialDefense": 80,
      "speed": 75
    },
    "flavorText": "なわばりいしきが とても つよいので スピアーの",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/15.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/15.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 15,
        "name": "スピアー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
      }
    ]
  },
  {
    "id": 16,
    "pokedexNumber": 16,
    "name": {
      "ja": "ポッポ",
      "en": "Pidgey",
      "kana": "ポッポ",
      "romaji": "Poppo"
    },
    "generation": 1,
    "types": [
      "normal",
      "flying"
    ],
    "category": "ことりポケモン",
    "height": 0.3,
    "weight": 1.8,
    "abilities": [
      {
        "name": "するどいめ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ちどりあし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はとむね",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 56
    },
    "flavorText": "ほうこう かんかくに とても すぐれているので",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/16.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/16.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 16,
        "name": "ポッポ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
      },
      {
        "pokemonId": 17,
        "name": "ピジョン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
        "condition": "Level 18"
      }
    ]
  },
  {
    "id": 17,
    "pokedexNumber": 17,
    "name": {
      "ja": "ピジョン",
      "en": "Pidgeotto",
      "kana": "ピジョン",
      "romaji": "Pigeon"
    },
    "generation": 1,
    "types": [
      "normal",
      "flying"
    ],
    "category": "とりポケモン",
    "height": 1.1,
    "weight": 30,
    "abilities": [
      {
        "name": "するどいめ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ちどりあし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はとむね",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 63,
      "attack": 60,
      "defense": 55,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 71
    },
    "flavorText": "ひろい なわばりを とんで みまわりを する。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/17.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/17.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 17,
        "name": "ピジョン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png"
      },
      {
        "pokemonId": 18,
        "name": "ピジョット",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
        "condition": "Level 36"
      }
    ]
  },
  {
    "id": 18,
    "pokedexNumber": 18,
    "name": {
      "ja": "ピジョット",
      "en": "Pidgeot",
      "kana": "ピジョット",
      "romaji": "Pigeot"
    },
    "generation": 1,
    "types": [
      "normal",
      "flying"
    ],
    "category": "とりポケモン",
    "height": 1.5,
    "weight": 39.5,
    "abilities": [
      {
        "name": "するどいめ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ちどりあし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はとむね",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 83,
      "attack": 80,
      "defense": 75,
      "specialAttack": 70,
      "specialDefense": 70,
      "speed": 101
    },
    "flavorText": "うつくしい こうたくの はねを もつ ポケモン。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/18.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/18.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 18,
        "name": "ピジョット",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"
      }
    ]
  },
  {
    "id": 19,
    "pokedexNumber": 19,
    "name": {
      "ja": "コラッタ",
      "en": "Rattata",
      "kana": "コラッタ",
      "romaji": "Koratta"
    },
    "generation": 1,
    "types": [
      "normal"
    ],
    "category": "ねずみポケモン",
    "height": 0.3,
    "weight": 3.5,
    "abilities": [
      {
        "name": "にげあし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "こんじょう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はりきり",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 30,
      "attack": 56,
      "defense": 35,
      "specialAttack": 25,
      "specialDefense": 35,
      "speed": 72
    },
    "flavorText": "けいかいしんが とても つよく ねている ときも",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/19.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/19.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 19,
        "name": "コラッタ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
      },
      {
        "pokemonId": 20,
        "name": "ラッタ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
        "condition": "Level 20"
      }
    ]
  },
  {
    "id": 20,
    "pokedexNumber": 20,
    "name": {
      "ja": "ラッタ",
      "en": "Raticate",
      "kana": "ラッタ",
      "romaji": "Ratta"
    },
    "generation": 1,
    "types": [
      "normal"
    ],
    "category": "ねずみポケモン",
    "height": 0.7,
    "weight": 18.5,
    "abilities": [
      {
        "name": "にげあし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "こんじょう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はりきり",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 55,
      "attack": 81,
      "defense": 60,
      "specialAttack": 50,
      "specialDefense": 70,
      "speed": 97
    },
    "flavorText": "じょうぶな キバは どんどん のびるので",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/20.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/20.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 20,
        "name": "ラッタ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"
      }
    ]
  },
  {
    "id": 21,
    "pokedexNumber": 21,
    "name": {
      "ja": "オニスズメ",
      "en": "Spearow",
      "kana": "オニスズメ",
      "romaji": "Onisuzume"
    },
    "generation": 1,
    "types": [
      "normal",
      "flying"
    ],
    "category": "ことりポケモン",
    "height": 0.3,
    "weight": 2,
    "abilities": [
      {
        "name": "するどいめ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "スナイパー",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 40,
      "attack": 60,
      "defense": 30,
      "specialAttack": 31,
      "specialDefense": 31,
      "speed": 70
    },
    "flavorText": "おおきな なきごえは １キロ さきまで とどく。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/21.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/21.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 21,
        "name": "オニスズメ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png"
      },
      {
        "pokemonId": 22,
        "name": "オニドリル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
        "condition": "Level 20"
      }
    ]
  },
  {
    "id": 22,
    "pokedexNumber": 22,
    "name": {
      "ja": "オニドリル",
      "en": "Fearow",
      "kana": "オニドリル",
      "romaji": "Onidrill"
    },
    "generation": 1,
    "types": [
      "normal",
      "flying"
    ],
    "category": "くちばしポケモン",
    "height": 1.2,
    "weight": 38,
    "abilities": [
      {
        "name": "するどいめ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "スナイパー",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 65,
      "attack": 90,
      "defense": 65,
      "specialAttack": 61,
      "specialDefense": 61,
      "speed": 100
    },
    "flavorText": "ながい くびと くちばしは つちや みずの",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/22.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/22.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 22,
        "name": "オニドリル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png"
      }
    ]
  },
  {
    "id": 23,
    "pokedexNumber": 23,
    "name": {
      "ja": "アーボ",
      "en": "Ekans",
      "kana": "アーボ",
      "romaji": "Arbo"
    },
    "generation": 1,
    "types": [
      "poison"
    ],
    "category": "へびポケモン",
    "height": 2,
    "weight": 6.9,
    "abilities": [
      {
        "name": "いかく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "だっぴ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "きんちょうかん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 35,
      "attack": 60,
      "defense": 44,
      "specialAttack": 40,
      "specialDefense": 54,
      "speed": 55
    },
    "flavorText": "ぐるぐる からだを まいて やすんでいるのは",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/23.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/23.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 23,
        "name": "アーボ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png"
      },
      {
        "pokemonId": 24,
        "name": "アーボック",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
        "condition": "Level 22"
      }
    ]
  },
  {
    "id": 24,
    "pokedexNumber": 24,
    "name": {
      "ja": "アーボック",
      "en": "Arbok",
      "kana": "アーボック",
      "romaji": "Arbok"
    },
    "generation": 1,
    "types": [
      "poison"
    ],
    "category": "コブラポケモン",
    "height": 3.5,
    "weight": 65,
    "abilities": [
      {
        "name": "いかく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "だっぴ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "きんちょうかん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 95,
      "defense": 69,
      "specialAttack": 65,
      "specialDefense": 79,
      "speed": 80
    },
    "flavorText": "しめつける ちからは とても きょうりょく。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/24.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/24.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 24,
        "name": "アーボック",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png"
      }
    ]
  },
  {
    "id": 25,
    "pokedexNumber": 25,
    "name": {
      "ja": "ピカチュウ",
      "en": "Pikachu",
      "kana": "ピカチュウ",
      "romaji": "Pikachu"
    },
    "generation": 1,
    "types": [
      "electric"
    ],
    "category": "ねずみポケモン",
    "height": 0.4,
    "weight": 6,
    "abilities": [
      {
        "name": "せいでんき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ひらいしん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 90
    },
    "flavorText": "はじめて みる ものには でんげきを あてる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/25.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/25.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 25,
        "name": "ピカチュウ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
      },
      {
        "pokemonId": 26,
        "name": "ライチュウ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
        "condition": "use Thunder Stone"
      }
    ]
  },
  {
    "id": 26,
    "pokedexNumber": 26,
    "name": {
      "ja": "ライチュウ",
      "en": "Raichu",
      "kana": "ライチュウ",
      "romaji": "Raichu"
    },
    "generation": 1,
    "types": [
      "electric"
    ],
    "category": "ねずみポケモン",
    "height": 0.8,
    "weight": 30,
    "abilities": [
      {
        "name": "せいでんき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ひらいしん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 90,
      "defense": 55,
      "specialAttack": 90,
      "specialDefense": 80,
      "speed": 110
    },
    "flavorText": "でんきぶくろに でんきが たまりすぎた ときは",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/26.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/26.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 26,
        "name": "ライチュウ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"
      }
    ]
  },
  {
    "id": 27,
    "pokedexNumber": 27,
    "name": {
      "ja": "サンド",
      "en": "Sandshrew",
      "kana": "サンド",
      "romaji": "Sand"
    },
    "generation": 1,
    "types": [
      "ground"
    ],
    "category": "ねずみポケモン",
    "height": 0.6,
    "weight": 12,
    "abilities": [
      {
        "name": "すながくれ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "すなかき",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 50,
      "attack": 75,
      "defense": 85,
      "specialAttack": 20,
      "specialDefense": 30,
      "speed": 40
    },
    "flavorText": "すいぶんを むだなく きゅうしゅうする からだの",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/27.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/27.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 27,
        "name": "サンド",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png"
      },
      {
        "pokemonId": 28,
        "name": "サンドパン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
        "condition": "Level 22"
      }
    ]
  },
  {
    "id": 28,
    "pokedexNumber": 28,
    "name": {
      "ja": "サンドパン",
      "en": "Sandslash",
      "kana": "サンドパン",
      "romaji": "Sandpan"
    },
    "generation": 1,
    "types": [
      "ground"
    ],
    "category": "ねずみポケモン",
    "height": 1,
    "weight": 29.5,
    "abilities": [
      {
        "name": "すながくれ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "すなかき",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 75,
      "attack": 100,
      "defense": 110,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 65
    },
    "flavorText": "せなかを まるめると トゲトゲの ボールみたい。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/28.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/28.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 28,
        "name": "サンドパン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png"
      }
    ]
  },
  {
    "id": 29,
    "pokedexNumber": 29,
    "name": {
      "ja": "ニドラン♀",
      "en": "Nidoran♀",
      "kana": "ニドラン♀",
      "romaji": "Nidoran♀"
    },
    "generation": 1,
    "types": [
      "poison"
    ],
    "category": "どくばりポケモン",
    "height": 0.4,
    "weight": 7,
    "abilities": [
      {
        "name": "どくのトゲ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "とうそうしん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はりきり",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 55,
      "attack": 47,
      "defense": 52,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 41
    },
    "flavorText": "ちいさい からだを まもるため きょうりょくな",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/29.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/29.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 29,
        "name": "ニドラン♀",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png"
      },
      {
        "pokemonId": 30,
        "name": "ニドリーナ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
        "condition": "Level 16"
      }
    ]
  },
  {
    "id": 30,
    "pokedexNumber": 30,
    "name": {
      "ja": "ニドリーナ",
      "en": "Nidorina",
      "kana": "ニドリーナ",
      "romaji": "Nidorina"
    },
    "generation": 1,
    "types": [
      "poison"
    ],
    "category": "どくばりポケモン",
    "height": 0.8,
    "weight": 20,
    "abilities": [
      {
        "name": "どくのトゲ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "とうそうしん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はりきり",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 70,
      "attack": 62,
      "defense": 67,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 56
    },
    "flavorText": "なかまや かぞくと いっしょの ときは おたがい",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/30.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/30.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 30,
        "name": "ニドリーナ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png"
      },
      {
        "pokemonId": 31,
        "name": "ニドクイン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
        "condition": "use Moon Stone"
      }
    ]
  },
  {
    "id": 31,
    "pokedexNumber": 31,
    "name": {
      "ja": "ニドクイン",
      "en": "Nidoqueen",
      "kana": "ニドクイン",
      "romaji": "Nidoqueen"
    },
    "generation": 1,
    "types": [
      "poison",
      "ground"
    ],
    "category": "ドリルポケモン",
    "height": 1.3,
    "weight": 60,
    "abilities": [
      {
        "name": "どくのトゲ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "とうそうしん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ちからずく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 90,
      "attack": 92,
      "defense": 87,
      "specialAttack": 75,
      "specialDefense": 85,
      "speed": 76
    },
    "flavorText": "かたい ウロコで おおわれた からだを ぶつけて",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/31.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/31.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 31,
        "name": "ニドクイン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png"
      }
    ]
  },
  {
    "id": 32,
    "pokedexNumber": 32,
    "name": {
      "ja": "ニドラン♂",
      "en": "Nidoran♂",
      "kana": "ニドラン♂",
      "romaji": "Nidoran♂"
    },
    "generation": 1,
    "types": [
      "poison"
    ],
    "category": "どくばりポケモン",
    "height": 0.5,
    "weight": 9,
    "abilities": [
      {
        "name": "どくのトゲ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "とうそうしん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はりきり",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 46,
      "attack": 57,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 50
    },
    "flavorText": "みみを うごかす きんにくが はったつしていて",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/32.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/32.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 32,
        "name": "ニドラン♂",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png"
      },
      {
        "pokemonId": 33,
        "name": "ニドリーノ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
        "condition": "Level 16"
      }
    ]
  },
  {
    "id": 33,
    "pokedexNumber": 33,
    "name": {
      "ja": "ニドリーノ",
      "en": "Nidorino",
      "kana": "ニドリーノ",
      "romaji": "Nidorino"
    },
    "generation": 1,
    "types": [
      "poison"
    ],
    "category": "どくばりポケモン",
    "height": 0.9,
    "weight": 19.5,
    "abilities": [
      {
        "name": "どくのトゲ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "とうそうしん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はりきり",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 61,
      "attack": 72,
      "defense": 57,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 65
    },
    "flavorText": "ダイヤモンドよりも かたい ツノを もつ。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/33.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/33.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 33,
        "name": "ニドリーノ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png"
      },
      {
        "pokemonId": 34,
        "name": "ニドキング",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
        "condition": "use Moon Stone"
      }
    ]
  },
  {
    "id": 34,
    "pokedexNumber": 34,
    "name": {
      "ja": "ニドキング",
      "en": "Nidoking",
      "kana": "ニドキング",
      "romaji": "Nidoking"
    },
    "generation": 1,
    "types": [
      "poison",
      "ground"
    ],
    "category": "ドリルポケモン",
    "height": 1.4,
    "weight": 62,
    "abilities": [
      {
        "name": "どくのトゲ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "とうそうしん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ちからずく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 81,
      "attack": 102,
      "defense": 77,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 85
    },
    "flavorText": "ふとい しっぽの ひとふりは がんじょうな",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/34.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/34.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 34,
        "name": "ニドキング",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png"
      }
    ]
  },
  {
    "id": 35,
    "pokedexNumber": 35,
    "name": {
      "ja": "ピッピ",
      "en": "Clefairy",
      "kana": "ピッピ",
      "romaji": "Pippi"
    },
    "generation": 1,
    "types": [
      "fairy"
    ],
    "category": "ようせいポケモン",
    "height": 0.6,
    "weight": 7.5,
    "abilities": [
      {
        "name": "メロメロボディ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "マジックガード",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "フレンドガード",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 70,
      "attack": 45,
      "defense": 48,
      "specialAttack": 60,
      "specialDefense": 65,
      "speed": 35
    },
    "flavorText": "まんげつの よるは げんき いっぱいに あそぶ。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/35.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/35.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 35,
        "name": "ピッピ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
      },
      {
        "pokemonId": 36,
        "name": "ピクシー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
        "condition": "use Moon Stone"
      }
    ]
  },
  {
    "id": 36,
    "pokedexNumber": 36,
    "name": {
      "ja": "ピクシー",
      "en": "Clefable",
      "kana": "ピクシー",
      "romaji": "Pixy"
    },
    "generation": 1,
    "types": [
      "fairy"
    ],
    "category": "ようせいポケモン",
    "height": 1.3,
    "weight": 40,
    "abilities": [
      {
        "name": "メロメロボディ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "マジックガード",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "てんねん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 95,
      "attack": 70,
      "defense": 73,
      "specialAttack": 95,
      "specialDefense": 90,
      "speed": 60
    },
    "flavorText": "つばさを つかって とぶように スキップ。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/36.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/36.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 36,
        "name": "ピクシー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png"
      }
    ]
  },
  {
    "id": 37,
    "pokedexNumber": 37,
    "name": {
      "ja": "ロコン",
      "en": "Vulpix",
      "kana": "ロコン",
      "romaji": "Rokon"
    },
    "generation": 1,
    "types": [
      "fire"
    ],
    "category": "きつねポケモン",
    "height": 0.6,
    "weight": 9.9,
    "abilities": [
      {
        "name": "もらいび",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ひでり",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 38,
      "attack": 41,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 65,
      "speed": 65
    },
    "flavorText": "からだの なかで ほのおが いつも もえている。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/37.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/37.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 37,
        "name": "ロコン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png"
      },
      {
        "pokemonId": 38,
        "name": "キュウコン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
        "condition": "use Fire Stone"
      }
    ]
  },
  {
    "id": 38,
    "pokedexNumber": 38,
    "name": {
      "ja": "キュウコン",
      "en": "Ninetales",
      "kana": "キュウコン",
      "romaji": "Kyukon"
    },
    "generation": 1,
    "types": [
      "fire"
    ],
    "category": "きつねポケモン",
    "height": 1.1,
    "weight": 19.9,
    "abilities": [
      {
        "name": "もらいび",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ひでり",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 73,
      "attack": 76,
      "defense": 75,
      "specialAttack": 81,
      "specialDefense": 100,
      "speed": 100
    },
    "flavorText": "９にんの せいなる ちからを もった せんにんが",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/38.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/38.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 38,
        "name": "キュウコン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png"
      }
    ]
  },
  {
    "id": 39,
    "pokedexNumber": 39,
    "name": {
      "ja": "プリン",
      "en": "Jigglypuff",
      "kana": "プリン",
      "romaji": "Purin"
    },
    "generation": 1,
    "types": [
      "normal",
      "fairy"
    ],
    "category": "ふうせんポケモン",
    "height": 0.5,
    "weight": 5.5,
    "abilities": [
      {
        "name": "メロメロボディ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "かちき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "フレンドガード",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 115,
      "attack": 45,
      "defense": 20,
      "specialAttack": 45,
      "specialDefense": 25,
      "speed": 20
    },
    "flavorText": "こえの はちょうを じざいに かえる せいたいを",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/39.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/39.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 39,
        "name": "プリン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"
      },
      {
        "pokemonId": 40,
        "name": "プクリン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
        "condition": "use Moon Stone"
      }
    ]
  },
  {
    "id": 40,
    "pokedexNumber": 40,
    "name": {
      "ja": "プクリン",
      "en": "Wigglytuff",
      "kana": "プクリン",
      "romaji": "Pukurin"
    },
    "generation": 1,
    "types": [
      "normal",
      "fairy"
    ],
    "category": "ふうせんポケモン",
    "height": 1,
    "weight": 12,
    "abilities": [
      {
        "name": "メロメロボディ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "かちき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "おみとおし",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 140,
      "attack": 70,
      "defense": 45,
      "specialAttack": 85,
      "specialDefense": 50,
      "speed": 45
    },
    "flavorText": "だんりょくせいに すぐれた からだは おおきく",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/40.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/40.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 40,
        "name": "プクリン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png"
      }
    ]
  },
  {
    "id": 41,
    "pokedexNumber": 41,
    "name": {
      "ja": "ズバット",
      "en": "Zubat",
      "kana": "ズバット",
      "romaji": "Zubat"
    },
    "generation": 1,
    "types": [
      "poison",
      "flying"
    ],
    "category": "こうもりポケモン",
    "height": 0.8,
    "weight": 7.5,
    "abilities": [
      {
        "name": "せいしんりょく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "すりぬけ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "specialAttack": 30,
      "specialDefense": 40,
      "speed": 55
    },
    "flavorText": "たいようの ひかりを あびると たいちょうが",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/41.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/41.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 41,
        "name": "ズバット",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png"
      },
      {
        "pokemonId": 42,
        "name": "ゴルバット",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
        "condition": "Level 22"
      }
    ]
  },
  {
    "id": 42,
    "pokedexNumber": 42,
    "name": {
      "ja": "ゴルバット",
      "en": "Golbat",
      "kana": "ゴルバット",
      "romaji": "Golbat"
    },
    "generation": 1,
    "types": [
      "poison",
      "flying"
    ],
    "category": "こうもりポケモン",
    "height": 1.6,
    "weight": 55,
    "abilities": [
      {
        "name": "せいしんりょく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "すりぬけ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 75,
      "attack": 80,
      "defense": 70,
      "specialAttack": 65,
      "specialDefense": 75,
      "speed": 90
    },
    "flavorText": "４ほんの キバで かみつき けつえきを のむ。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/42.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/42.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 42,
        "name": "ゴルバット",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png"
      },
      {
        "pokemonId": 169,
        "name": "クロバット",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png",
        "condition": "high Friendship"
      }
    ]
  },
  {
    "id": 43,
    "pokedexNumber": 43,
    "name": {
      "ja": "ナゾノクサ",
      "en": "Oddish",
      "kana": "ナゾノクサ",
      "romaji": "Nazonokusa"
    },
    "generation": 1,
    "types": [
      "grass",
      "poison"
    ],
    "category": "ざっそうポケモン",
    "height": 0.5,
    "weight": 5.4,
    "abilities": [
      {
        "name": "ようりょくそ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "にげあし",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 45,
      "attack": 50,
      "defense": 55,
      "specialAttack": 75,
      "specialDefense": 65,
      "speed": 30
    },
    "flavorText": "えいよう たっぷりの つちを さがして うまる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/43.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/43.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 43,
        "name": "ナゾノクサ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png"
      },
      {
        "pokemonId": 44,
        "name": "クサイハナ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
        "condition": "Level 21"
      }
    ]
  },
  {
    "id": 44,
    "pokedexNumber": 44,
    "name": {
      "ja": "クサイハナ",
      "en": "Gloom",
      "kana": "クサイハナ",
      "romaji": "Kusaihana"
    },
    "generation": 1,
    "types": [
      "grass",
      "poison"
    ],
    "category": "ざっそうポケモン",
    "height": 0.8,
    "weight": 8.6,
    "abilities": [
      {
        "name": "ようりょくそ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "あくしゅう",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 65,
      "defense": 70,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 40
    },
    "flavorText": "きけんを かんじると めしべの はなつ くさい",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/44.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/44.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 44,
        "name": "クサイハナ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png"
      },
      {
        "pokemonId": 45,
        "name": "ラフレシア",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
        "condition": "use Leaf Stone"
      },
      {
        "pokemonId": 182,
        "name": "キレイハナ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png",
        "condition": "use Sun Stone"
      }
    ]
  },
  {
    "id": 45,
    "pokedexNumber": 45,
    "name": {
      "ja": "ラフレシア",
      "en": "Vileplume",
      "kana": "ラフレシア",
      "romaji": "Ruffresia"
    },
    "generation": 1,
    "types": [
      "grass",
      "poison"
    ],
    "category": "フラワーポケモン",
    "height": 1.2,
    "weight": 18.6,
    "abilities": [
      {
        "name": "ようりょくそ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ほうし",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 75,
      "attack": 80,
      "defense": 85,
      "specialAttack": 110,
      "specialDefense": 90,
      "speed": 50
    },
    "flavorText": "どくかふんは ひどい アレルギーを おこす。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/45.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/45.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 45,
        "name": "ラフレシア",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png"
      }
    ]
  },
  {
    "id": 46,
    "pokedexNumber": 46,
    "name": {
      "ja": "パラス",
      "en": "Paras",
      "kana": "パラス",
      "romaji": "Paras"
    },
    "generation": 1,
    "types": [
      "bug",
      "grass"
    ],
    "category": "きのこポケモン",
    "height": 0.3,
    "weight": 5.4,
    "abilities": [
      {
        "name": "ほうし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "かんそうはだ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "しめりけ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 35,
      "attack": 70,
      "defense": 55,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 25
    },
    "flavorText": "パラスから ようぶんを すいとって おおきくなる",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/46.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/46.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 46,
        "name": "パラス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png"
      },
      {
        "pokemonId": 47,
        "name": "パラセクト",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
        "condition": "Level 24"
      }
    ]
  },
  {
    "id": 47,
    "pokedexNumber": 47,
    "name": {
      "ja": "パラセクト",
      "en": "Parasect",
      "kana": "パラセクト",
      "romaji": "Parasect"
    },
    "generation": 1,
    "types": [
      "bug",
      "grass"
    ],
    "category": "きのこポケモン",
    "height": 1,
    "weight": 29.5,
    "abilities": [
      {
        "name": "ほうし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "かんそうはだ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "しめりけ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 95,
      "defense": 80,
      "specialAttack": 60,
      "specialDefense": 80,
      "speed": 30
    },
    "flavorText": "パラセクトは しゅうだんで たいぼくの ねもとに",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/47.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/47.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 47,
        "name": "パラセクト",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png"
      }
    ]
  },
  {
    "id": 48,
    "pokedexNumber": 48,
    "name": {
      "ja": "コンパン",
      "en": "Venonat",
      "kana": "コンパン",
      "romaji": "Kongpang"
    },
    "generation": 1,
    "types": [
      "bug",
      "poison"
    ],
    "category": "こんちゅうポケモン",
    "height": 1,
    "weight": 30,
    "abilities": [
      {
        "name": "ふくがん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "いろめがね",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "にげあし",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 55,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 55,
      "speed": 45
    },
    "flavorText": "みを まもるために ほそく かたい たいもうが",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/48.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/48.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 48,
        "name": "コンパン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png"
      },
      {
        "pokemonId": 49,
        "name": "モルフォン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
        "condition": "Level 31"
      }
    ]
  },
  {
    "id": 49,
    "pokedexNumber": 49,
    "name": {
      "ja": "モルフォン",
      "en": "Venomoth",
      "kana": "モルフォン",
      "romaji": "Morphon"
    },
    "generation": 1,
    "types": [
      "bug",
      "poison"
    ],
    "category": "どくがポケモン",
    "height": 1.5,
    "weight": 12.5,
    "abilities": [
      {
        "name": "りんぷん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "いろめがね",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ミラクルスキン",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 70,
      "attack": 65,
      "defense": 60,
      "specialAttack": 90,
      "specialDefense": 75,
      "speed": 90
    },
    "flavorText": "やこうせいで よるに かつどうを はじめる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/49.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/49.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 49,
        "name": "モルフォン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png"
      }
    ]
  },
  {
    "id": 50,
    "pokedexNumber": 50,
    "name": {
      "ja": "ディグダ",
      "en": "Diglett",
      "kana": "ディグダ",
      "romaji": "Digda"
    },
    "generation": 1,
    "types": [
      "ground"
    ],
    "category": "もぐらポケモン",
    "height": 0.2,
    "weight": 0.8,
    "abilities": [
      {
        "name": "すながくれ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ありじごく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "すなのちから",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 10,
      "attack": 55,
      "defense": 25,
      "specialAttack": 35,
      "specialDefense": 45,
      "speed": 95
    },
    "flavorText": "ほとんどの のうかは ディグダを そだてている。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/50.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/50.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 50,
        "name": "ディグダ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png"
      },
      {
        "pokemonId": 51,
        "name": "ダグトリオ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
        "condition": "Level 26"
      }
    ]
  },
  {
    "id": 51,
    "pokedexNumber": 51,
    "name": {
      "ja": "ダグトリオ",
      "en": "Dugtrio",
      "kana": "ダグトリオ",
      "romaji": "Dugtrio"
    },
    "generation": 1,
    "types": [
      "ground"
    ],
    "category": "もぐらポケモン",
    "height": 0.7,
    "weight": 33.3,
    "abilities": [
      {
        "name": "すながくれ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ありじごく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "すなのちから",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 35,
      "attack": 100,
      "defense": 50,
      "specialAttack": 50,
      "specialDefense": 70,
      "speed": 120
    },
    "flavorText": "もともと ひとつの からだから ３つごに",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/51.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/51.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 51,
        "name": "ダグトリオ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png"
      }
    ]
  },
  {
    "id": 52,
    "pokedexNumber": 52,
    "name": {
      "ja": "ニャース",
      "en": "Meowth",
      "kana": "ニャース",
      "romaji": "Nyarth"
    },
    "generation": 1,
    "types": [
      "normal"
    ],
    "category": "ばけねこポケモン",
    "height": 0.4,
    "weight": 4.2,
    "abilities": [
      {
        "name": "ものひろい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "テクニシャン",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "きんちょうかん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 90
    },
    "flavorText": "するどい ツメを ひっこめて ぬきあし さしあし",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/52.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/52.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 52,
        "name": "ニャース",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png"
      },
      {
        "pokemonId": 53,
        "name": "ペルシアン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
        "condition": "Level 28"
      }
    ]
  },
  {
    "id": 53,
    "pokedexNumber": 53,
    "name": {
      "ja": "ペルシアン",
      "en": "Persian",
      "kana": "ペルシアン",
      "romaji": "Persian"
    },
    "generation": 1,
    "types": [
      "normal"
    ],
    "category": "シャムネコポケモン",
    "height": 1,
    "weight": 32,
    "abilities": [
      {
        "name": "じゅうなん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "テクニシャン",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "きんちょうかん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 65,
      "attack": 70,
      "defense": 60,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 115
    },
    "flavorText": "たくましい ６ぽんの ヒゲは くうきの うごきで",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/53.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/53.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 53,
        "name": "ペルシアン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png"
      }
    ]
  },
  {
    "id": 54,
    "pokedexNumber": 54,
    "name": {
      "ja": "コダック",
      "en": "Psyduck",
      "kana": "コダック",
      "romaji": "Koduck"
    },
    "generation": 1,
    "types": [
      "water"
    ],
    "category": "あひるポケモン",
    "height": 0.8,
    "weight": 19.6,
    "abilities": [
      {
        "name": "しめりけ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ノーてんき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "すいすい",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 50,
      "attack": 52,
      "defense": 48,
      "specialAttack": 65,
      "specialDefense": 50,
      "speed": 55
    },
    "flavorText": "ふしぎな ちからを はっきしている コダックから",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/54.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/54.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 54,
        "name": "コダック",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png"
      },
      {
        "pokemonId": 55,
        "name": "ゴルダック",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
        "condition": "Level 33"
      }
    ]
  },
  {
    "id": 55,
    "pokedexNumber": 55,
    "name": {
      "ja": "ゴルダック",
      "en": "Golduck",
      "kana": "ゴルダック",
      "romaji": "Golduck"
    },
    "generation": 1,
    "types": [
      "water"
    ],
    "category": "あひるポケモン",
    "height": 1.7,
    "weight": 76.6,
    "abilities": [
      {
        "name": "しめりけ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ノーてんき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "すいすい",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 80,
      "attack": 82,
      "defense": 78,
      "specialAttack": 95,
      "specialDefense": 80,
      "speed": 85
    },
    "flavorText": "てあしの みずかきと りゅうせんけいの からだが",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/55.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/55.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 55,
        "name": "ゴルダック",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png"
      }
    ]
  },
  {
    "id": 56,
    "pokedexNumber": 56,
    "name": {
      "ja": "マンキー",
      "en": "Mankey",
      "kana": "マンキー",
      "romaji": "Mankey"
    },
    "generation": 1,
    "types": [
      "fighting"
    ],
    "category": "ぶたざるポケモン",
    "height": 0.5,
    "weight": 28,
    "abilities": [
      {
        "name": "やるき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "いかりのつぼ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "まけんき",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 40,
      "attack": 80,
      "defense": 35,
      "specialAttack": 35,
      "specialDefense": 45,
      "speed": 70
    },
    "flavorText": "からだが ふるえ はないきが あらくなれば",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/56.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/56.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 56,
        "name": "マンキー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png"
      },
      {
        "pokemonId": 57,
        "name": "オコリザル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
        "condition": "Level 28"
      }
    ]
  },
  {
    "id": 57,
    "pokedexNumber": 57,
    "name": {
      "ja": "オコリザル",
      "en": "Primeape",
      "kana": "オコリザル",
      "romaji": "Okorizaru"
    },
    "generation": 1,
    "types": [
      "fighting"
    ],
    "category": "ぶたざるポケモン",
    "height": 1,
    "weight": 32,
    "abilities": [
      {
        "name": "やるき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "いかりのつぼ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "まけんき",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 65,
      "attack": 105,
      "defense": 60,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 95
    },
    "flavorText": "はげしく おこる ことで けっこうが よくなり",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/57.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/57.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 57,
        "name": "オコリザル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png"
      }
    ]
  },
  {
    "id": 58,
    "pokedexNumber": 58,
    "name": {
      "ja": "ガーディ",
      "en": "Growlithe",
      "kana": "ガーディ",
      "romaji": "Gardie"
    },
    "generation": 1,
    "types": [
      "fire"
    ],
    "category": "こいぬポケモン",
    "height": 0.7,
    "weight": 19,
    "abilities": [
      {
        "name": "いかく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "もらいび",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "せいぎのこころ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 55,
      "attack": 70,
      "defense": 45,
      "specialAttack": 70,
      "specialDefense": 50,
      "speed": 60
    },
    "flavorText": "きゅうかくに すぐれ いちど かいだ においは",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/58.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/58.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 58,
        "name": "ガーディ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png"
      },
      {
        "pokemonId": 59,
        "name": "ウインディ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
        "condition": "use Fire Stone"
      }
    ]
  },
  {
    "id": 59,
    "pokedexNumber": 59,
    "name": {
      "ja": "ウインディ",
      "en": "Arcanine",
      "kana": "ウインディ",
      "romaji": "Windie"
    },
    "generation": 1,
    "types": [
      "fire"
    ],
    "category": "でんせつポケモン",
    "height": 1.9,
    "weight": 155,
    "abilities": [
      {
        "name": "いかく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "もらいび",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "せいぎのこころ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 90,
      "attack": 110,
      "defense": 80,
      "specialAttack": 100,
      "specialDefense": 80,
      "speed": 95
    },
    "flavorText": "１００００キロの きょりを いっちゅうやで",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/59.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/59.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 59,
        "name": "ウインディ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png"
      }
    ]
  },
  {
    "id": 60,
    "pokedexNumber": 60,
    "name": {
      "ja": "ニョロモ",
      "en": "Poliwag",
      "kana": "ニョロモ",
      "romaji": "Nyoromo"
    },
    "generation": 1,
    "types": [
      "water"
    ],
    "category": "おたまポケモン",
    "height": 0.6,
    "weight": 12.4,
    "abilities": [
      {
        "name": "ちょすい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "しめりけ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "すいすい",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 40,
      "attack": 50,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 90
    },
    "flavorText": "うずまき もようの ないぞうが すけてしまうほど",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/60.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/60.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 60,
        "name": "ニョロモ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png"
      },
      {
        "pokemonId": 61,
        "name": "ニョロゾ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
        "condition": "Level 25"
      }
    ]
  },
  {
    "id": 61,
    "pokedexNumber": 61,
    "name": {
      "ja": "ニョロゾ",
      "en": "Poliwhirl",
      "kana": "ニョロゾ",
      "romaji": "Nyorozo"
    },
    "generation": 1,
    "types": [
      "water"
    ],
    "category": "おたまポケモン",
    "height": 1,
    "weight": 20,
    "abilities": [
      {
        "name": "ちょすい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "しめりけ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "すいすい",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 65,
      "attack": 65,
      "defense": 65,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 90
    },
    "flavorText": "いつも からだの ひょうめんが えきたいで",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/61.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/61.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 61,
        "name": "ニョロゾ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png"
      },
      {
        "pokemonId": 62,
        "name": "ニョロボン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
        "condition": "use Water Stone"
      },
      {
        "pokemonId": 186,
        "name": "ニョロトノ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png",
        "condition": "trade holding Kings Rock"
      }
    ]
  },
  {
    "id": 62,
    "pokedexNumber": 62,
    "name": {
      "ja": "ニョロボン",
      "en": "Poliwrath",
      "kana": "ニョロボン",
      "romaji": "Nyorobon"
    },
    "generation": 1,
    "types": [
      "water",
      "fighting"
    ],
    "category": "おたまポケモン",
    "height": 1.3,
    "weight": 54,
    "abilities": [
      {
        "name": "ちょすい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "しめりけ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "すいすい",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 90,
      "attack": 95,
      "defense": 95,
      "specialAttack": 70,
      "specialDefense": 90,
      "speed": 70
    },
    "flavorText": "はったつした きょうじんな きんにくは どんなに",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/62.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/62.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 62,
        "name": "ニョロボン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png"
      }
    ]
  },
  {
    "id": 63,
    "pokedexNumber": 63,
    "name": {
      "ja": "ケーシィ",
      "en": "Abra",
      "kana": "ケーシィ",
      "romaji": "Casey"
    },
    "generation": 1,
    "types": [
      "psychic"
    ],
    "category": "ねんりきポケモン",
    "height": 0.9,
    "weight": 19.5,
    "abilities": [
      {
        "name": "シンクロ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "せいしんりょく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "マジックガード",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 25,
      "attack": 20,
      "defense": 15,
      "specialAttack": 105,
      "specialDefense": 55,
      "speed": 90
    },
    "flavorText": "まいにち １８じかん ねむらないと ねぶそくで",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/63.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/63.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 63,
        "name": "ケーシィ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png"
      },
      {
        "pokemonId": 64,
        "name": "ユンゲラー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
        "condition": "Level 16"
      }
    ]
  },
  {
    "id": 64,
    "pokedexNumber": 64,
    "name": {
      "ja": "ユンゲラー",
      "en": "Kadabra",
      "kana": "ユンゲラー",
      "romaji": "Yungerer"
    },
    "generation": 1,
    "types": [
      "psychic"
    ],
    "category": "ねんりきポケモン",
    "height": 1.3,
    "weight": 56.5,
    "abilities": [
      {
        "name": "シンクロ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "せいしんりょく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "マジックガード",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 40,
      "attack": 35,
      "defense": 30,
      "specialAttack": 120,
      "specialDefense": 70,
      "speed": 105
    },
    "flavorText": "ぎんの スプーンは アルファはを たかめる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/64.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/64.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 64,
        "name": "ユンゲラー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png"
      },
      {
        "pokemonId": 65,
        "name": "フーディン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
        "condition": "Trade"
      }
    ]
  },
  {
    "id": 65,
    "pokedexNumber": 65,
    "name": {
      "ja": "フーディン",
      "en": "Alakazam",
      "kana": "フーディン",
      "romaji": "Foodin"
    },
    "generation": 1,
    "types": [
      "psychic"
    ],
    "category": "ねんりきポケモン",
    "height": 1.5,
    "weight": 48,
    "abilities": [
      {
        "name": "シンクロ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "せいしんりょく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "マジックガード",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 55,
      "attack": 50,
      "defense": 45,
      "specialAttack": 135,
      "specialDefense": 95,
      "speed": 120
    },
    "flavorText": "のうが どんどん おおきくなったので くびでは",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/65.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/65.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 65,
        "name": "フーディン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png"
      }
    ]
  },
  {
    "id": 66,
    "pokedexNumber": 66,
    "name": {
      "ja": "ワンリキー",
      "en": "Machop",
      "kana": "ワンリキー",
      "romaji": "Wanriky"
    },
    "generation": 1,
    "types": [
      "fighting"
    ],
    "category": "かいりきポケモン",
    "height": 0.8,
    "weight": 19.5,
    "abilities": [
      {
        "name": "こんじょう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ノーガード",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ふくつのこころ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 70,
      "attack": 80,
      "defense": 50,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 35
    },
    "flavorText": "どんなに うんどうを しても いたくならない",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/66.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/66.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 66,
        "name": "ワンリキー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png"
      },
      {
        "pokemonId": 67,
        "name": "ゴーリキー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
        "condition": "Level 28"
      }
    ]
  },
  {
    "id": 67,
    "pokedexNumber": 67,
    "name": {
      "ja": "ゴーリキー",
      "en": "Machoke",
      "kana": "ゴーリキー",
      "romaji": "Goriky"
    },
    "generation": 1,
    "types": [
      "fighting"
    ],
    "category": "かいりきポケモン",
    "height": 1.5,
    "weight": 70.5,
    "abilities": [
      {
        "name": "こんじょう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ノーガード",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ふくつのこころ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 80,
      "attack": 100,
      "defense": 70,
      "specialAttack": 50,
      "specialDefense": 60,
      "speed": 45
    },
    "flavorText": "きたえあげた きんにくは はがねの かたさ。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/67.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/67.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 67,
        "name": "ゴーリキー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png"
      },
      {
        "pokemonId": 68,
        "name": "カイリキー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
        "condition": "Trade"
      }
    ]
  },
  {
    "id": 68,
    "pokedexNumber": 68,
    "name": {
      "ja": "カイリキー",
      "en": "Machamp",
      "kana": "カイリキー",
      "romaji": "Kairiky"
    },
    "generation": 1,
    "types": [
      "fighting"
    ],
    "category": "かいりきポケモン",
    "height": 1.6,
    "weight": 130,
    "abilities": [
      {
        "name": "こんじょう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ノーガード",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ふくつのこころ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 90,
      "attack": 130,
      "defense": 80,
      "specialAttack": 65,
      "specialDefense": 85,
      "speed": 55
    },
    "flavorText": "なんでも なげとばす パワーを もつが こまかい",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/68.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/68.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 68,
        "name": "カイリキー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png"
      }
    ]
  },
  {
    "id": 69,
    "pokedexNumber": 69,
    "name": {
      "ja": "マダツボミ",
      "en": "Bellsprout",
      "kana": "マダツボミ",
      "romaji": "Madatsubomi"
    },
    "generation": 1,
    "types": [
      "grass",
      "poison"
    ],
    "category": "フラワーポケモン",
    "height": 0.7,
    "weight": 4,
    "abilities": [
      {
        "name": "ようりょくそ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "くいしんぼう",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 50,
      "attack": 75,
      "defense": 35,
      "specialAttack": 70,
      "specialDefense": 30,
      "speed": 40
    },
    "flavorText": "ほそく しなやかな からだは どんな つよい",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/69.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/69.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 69,
        "name": "マダツボミ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png"
      },
      {
        "pokemonId": 70,
        "name": "ウツドン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
        "condition": "Level 21"
      }
    ]
  },
  {
    "id": 70,
    "pokedexNumber": 70,
    "name": {
      "ja": "ウツドン",
      "en": "Weepinbell",
      "kana": "ウツドン",
      "romaji": "Utsudon"
    },
    "generation": 1,
    "types": [
      "grass",
      "poison"
    ],
    "category": "ハエとりポケモン",
    "height": 1,
    "weight": 6.4,
    "abilities": [
      {
        "name": "ようりょくそ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "くいしんぼう",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 65,
      "attack": 90,
      "defense": 50,
      "specialAttack": 85,
      "specialDefense": 45,
      "speed": 55
    },
    "flavorText": "よるに なると おしりの フックを きの えだに",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/70.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/70.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 70,
        "name": "ウツドン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png"
      },
      {
        "pokemonId": 71,
        "name": "ウツボット",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
        "condition": "use Leaf Stone"
      }
    ]
  },
  {
    "id": 71,
    "pokedexNumber": 71,
    "name": {
      "ja": "ウツボット",
      "en": "Victreebel",
      "kana": "ウツボット",
      "romaji": "Utsubot"
    },
    "generation": 1,
    "types": [
      "grass",
      "poison"
    ],
    "category": "ハエとりポケモン",
    "height": 1.7,
    "weight": 15.5,
    "abilities": [
      {
        "name": "ようりょくそ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "くいしんぼう",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "specialAttack": 100,
      "specialDefense": 70,
      "speed": 70
    },
    "flavorText": "あたまに ついた ながい つるを ちいさな",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/71.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/71.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 71,
        "name": "ウツボット",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png"
      }
    ]
  },
  {
    "id": 72,
    "pokedexNumber": 72,
    "name": {
      "ja": "メノクラゲ",
      "en": "Tentacool",
      "kana": "メノクラゲ",
      "romaji": "Menokurage"
    },
    "generation": 1,
    "types": [
      "water",
      "poison"
    ],
    "category": "くらげポケモン",
    "height": 0.9,
    "weight": 45.5,
    "abilities": [
      {
        "name": "クリアボディ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ヘドロえき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "あめうけざら",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 40,
      "attack": 40,
      "defense": 35,
      "specialAttack": 50,
      "specialDefense": 100,
      "speed": 70
    },
    "flavorText": "たいようこうせんを からだの なかの すいぶんで",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/72.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/72.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 72,
        "name": "メノクラゲ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png"
      },
      {
        "pokemonId": 73,
        "name": "ドククラゲ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
        "condition": "Level 30"
      }
    ]
  },
  {
    "id": 73,
    "pokedexNumber": 73,
    "name": {
      "ja": "ドククラゲ",
      "en": "Tentacruel",
      "kana": "ドククラゲ",
      "romaji": "Dokukurage"
    },
    "generation": 1,
    "types": [
      "water",
      "poison"
    ],
    "category": "くらげポケモン",
    "height": 1.6,
    "weight": 55,
    "abilities": [
      {
        "name": "クリアボディ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ヘドロえき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "あめうけざら",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 80,
      "attack": 70,
      "defense": 65,
      "specialAttack": 80,
      "specialDefense": 120,
      "speed": 100
    },
    "flavorText": "じゆうに のびちぢみする しょくしゅで えものを",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/73.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/73.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 73,
        "name": "ドククラゲ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png"
      }
    ]
  },
  {
    "id": 74,
    "pokedexNumber": 74,
    "name": {
      "ja": "イシツブテ",
      "en": "Geodude",
      "kana": "イシツブテ",
      "romaji": "Isitsubute"
    },
    "generation": 1,
    "types": [
      "rock",
      "ground"
    ],
    "category": "がんせきポケモン",
    "height": 0.4,
    "weight": 20,
    "abilities": [
      {
        "name": "いしあたま",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "がんじょう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "すながくれ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 40,
      "attack": 80,
      "defense": 100,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 20
    },
    "flavorText": "じめんに はんぶん うまり ぐっすり ねむる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/74.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/74.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 74,
        "name": "イシツブテ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png"
      },
      {
        "pokemonId": 75,
        "name": "ゴローン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
        "condition": "Level 25"
      }
    ]
  },
  {
    "id": 75,
    "pokedexNumber": 75,
    "name": {
      "ja": "ゴローン",
      "en": "Graveler",
      "kana": "ゴローン",
      "romaji": "Golone"
    },
    "generation": 1,
    "types": [
      "rock",
      "ground"
    ],
    "category": "がんせきポケモン",
    "height": 1,
    "weight": 105,
    "abilities": [
      {
        "name": "いしあたま",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "がんじょう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "すながくれ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 55,
      "attack": 95,
      "defense": 115,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 35
    },
    "flavorText": "いわを たべて せいちょうする ポケモンだ。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/75.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/75.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 75,
        "name": "ゴローン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png"
      },
      {
        "pokemonId": 76,
        "name": "ゴローニャ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
        "condition": "Trade"
      }
    ]
  },
  {
    "id": 76,
    "pokedexNumber": 76,
    "name": {
      "ja": "ゴローニャ",
      "en": "Golem",
      "kana": "ゴローニャ",
      "romaji": "Golonya"
    },
    "generation": 1,
    "types": [
      "rock",
      "ground"
    ],
    "category": "メガトンポケモン",
    "height": 1.4,
    "weight": 300,
    "abilities": [
      {
        "name": "いしあたま",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "がんじょう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "すながくれ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 80,
      "attack": 120,
      "defense": 130,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 45
    },
    "flavorText": "おおきな じしんが おこると やまに すんでいる",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/76.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/76.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 76,
        "name": "ゴローニャ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png"
      }
    ]
  },
  {
    "id": 77,
    "pokedexNumber": 77,
    "name": {
      "ja": "ポニータ",
      "en": "Ponyta",
      "kana": "ポニータ",
      "romaji": "Ponyta"
    },
    "generation": 1,
    "types": [
      "fire"
    ],
    "category": "ひのうまポケモン",
    "height": 1,
    "weight": 30,
    "abilities": [
      {
        "name": "にげあし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "もらいび",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ほのおのからだ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 50,
      "attack": 85,
      "defense": 55,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 90
    },
    "flavorText": "うまれて すぐは たちあがるのも やっとだが",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/77.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/77.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 77,
        "name": "ポニータ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png"
      },
      {
        "pokemonId": 78,
        "name": "ギャロップ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
        "condition": "Level 40"
      }
    ]
  },
  {
    "id": 78,
    "pokedexNumber": 78,
    "name": {
      "ja": "ギャロップ",
      "en": "Rapidash",
      "kana": "ギャロップ",
      "romaji": "Gallop"
    },
    "generation": 1,
    "types": [
      "fire"
    ],
    "category": "ひのうまポケモン",
    "height": 1.7,
    "weight": 95,
    "abilities": [
      {
        "name": "にげあし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "もらいび",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ほのおのからだ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 65,
      "attack": 100,
      "defense": 70,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 105
    },
    "flavorText": "いつもは のんびり のはらを かけまわっているが",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/78.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/78.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 78,
        "name": "ギャロップ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png"
      }
    ]
  },
  {
    "id": 79,
    "pokedexNumber": 79,
    "name": {
      "ja": "ヤドン",
      "en": "Slowpoke",
      "kana": "ヤドン",
      "romaji": "Yadon"
    },
    "generation": 1,
    "types": [
      "water",
      "psychic"
    ],
    "category": "まぬけポケモン",
    "height": 1.2,
    "weight": 36,
    "abilities": [
      {
        "name": "どんかん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "マイペース",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "さいせいりょく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 90,
      "attack": 65,
      "defense": 65,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 15
    },
    "flavorText": "しっぽを かわに いれて エサを つっているが",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/79.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/79.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 79,
        "name": "ヤドン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png"
      },
      {
        "pokemonId": 80,
        "name": "ヤドラン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
        "condition": "Level 37"
      },
      {
        "pokemonId": 199,
        "name": "ヤドキング",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png",
        "condition": "trade holding Kings Rock"
      }
    ]
  },
  {
    "id": 80,
    "pokedexNumber": 80,
    "name": {
      "ja": "ヤドラン",
      "en": "Slowbro",
      "kana": "ヤドラン",
      "romaji": "Yadoran"
    },
    "generation": 1,
    "types": [
      "water",
      "psychic"
    ],
    "category": "やどかりポケモン",
    "height": 1.6,
    "weight": 78.5,
    "abilities": [
      {
        "name": "どんかん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "マイペース",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "さいせいりょく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 95,
      "attack": 75,
      "defense": 110,
      "specialAttack": 100,
      "specialDefense": 80,
      "speed": 30
    },
    "flavorText": "シェルダーが かみついて いるので しっぽで",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/80.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/80.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 80,
        "name": "ヤドラン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png"
      }
    ]
  },
  {
    "id": 81,
    "pokedexNumber": 81,
    "name": {
      "ja": "コイル",
      "en": "Magnemite",
      "kana": "コイル",
      "romaji": "Coil"
    },
    "generation": 1,
    "types": [
      "electric",
      "steel"
    ],
    "category": "じしゃくポケモン",
    "height": 0.3,
    "weight": 6,
    "abilities": [
      {
        "name": "じりょく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "がんじょう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "アナライズ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 25,
      "attack": 35,
      "defense": 70,
      "specialAttack": 95,
      "specialDefense": 55,
      "speed": 45
    },
    "flavorText": "さゆうの ユニットから でんじはを だす ことで",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/81.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/81.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 81,
        "name": "コイル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png"
      },
      {
        "pokemonId": 82,
        "name": "レアコイル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
        "condition": "Level 30"
      }
    ]
  },
  {
    "id": 82,
    "pokedexNumber": 82,
    "name": {
      "ja": "レアコイル",
      "en": "Magneton",
      "kana": "レアコイル",
      "romaji": "Rarecoil"
    },
    "generation": 1,
    "types": [
      "electric",
      "steel"
    ],
    "category": "じしゃくポケモン",
    "height": 1,
    "weight": 60,
    "abilities": [
      {
        "name": "じりょく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "がんじょう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "アナライズ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 50,
      "attack": 60,
      "defense": 95,
      "specialAttack": 120,
      "specialDefense": 70,
      "speed": 70
    },
    "flavorText": "つよい じりょくで きかいを こわしてしまうので",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/82.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/82.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 82,
        "name": "レアコイル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png"
      },
      {
        "pokemonId": 462,
        "name": "ジバコイル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png",
        "condition": "level up in a Magnetic Field area"
      }
    ]
  },
  {
    "id": 83,
    "pokedexNumber": 83,
    "name": {
      "ja": "カモネギ",
      "en": "Farfetch’d",
      "kana": "カモネギ",
      "romaji": "Kamonegi"
    },
    "generation": 1,
    "types": [
      "normal",
      "flying"
    ],
    "category": "かるがもポケモン",
    "height": 0.8,
    "weight": 15,
    "abilities": [
      {
        "name": "するどいめ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "せいしんりょく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "まけんき",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 52,
      "attack": 90,
      "defense": 55,
      "specialAttack": 58,
      "specialDefense": 62,
      "speed": 60
    },
    "flavorText": "もっている しょくぶつの クキにも よいものと",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/83.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/83.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 83,
        "name": "カモネギ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png"
      }
    ]
  },
  {
    "id": 84,
    "pokedexNumber": 84,
    "name": {
      "ja": "ドードー",
      "en": "Doduo",
      "kana": "ドードー",
      "romaji": "Dodo"
    },
    "generation": 1,
    "types": [
      "normal",
      "flying"
    ],
    "category": "ふたごどりポケモン",
    "height": 1.4,
    "weight": 39.2,
    "abilities": [
      {
        "name": "にげあし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はやおき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ちどりあし",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 35,
      "attack": 85,
      "defense": 45,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 75
    },
    "flavorText": "２つの あたまが どうじに ねむることは ない。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/84.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/84.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 84,
        "name": "ドードー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png"
      },
      {
        "pokemonId": 85,
        "name": "ドードリオ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
        "condition": "Level 31"
      }
    ]
  },
  {
    "id": 85,
    "pokedexNumber": 85,
    "name": {
      "ja": "ドードリオ",
      "en": "Dodrio",
      "kana": "ドードリオ",
      "romaji": "Dodorio"
    },
    "generation": 1,
    "types": [
      "normal",
      "flying"
    ],
    "category": "みつごどりポケモン",
    "height": 1.8,
    "weight": 85.2,
    "abilities": [
      {
        "name": "にげあし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はやおき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ちどりあし",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 110,
      "defense": 70,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 110
    },
    "flavorText": "３つあるのは あたまだけでは ないらしい。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/85.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/85.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 85,
        "name": "ドードリオ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png"
      }
    ]
  },
  {
    "id": 86,
    "pokedexNumber": 86,
    "name": {
      "ja": "パウワウ",
      "en": "Seel",
      "kana": "パウワウ",
      "romaji": "Pawou"
    },
    "generation": 1,
    "types": [
      "water"
    ],
    "category": "あしかポケモン",
    "height": 1.1,
    "weight": 90,
    "abilities": [
      {
        "name": "あついしぼう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "うるおいボディ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "アイスボディ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 65,
      "attack": 45,
      "defense": 55,
      "specialAttack": 45,
      "specialDefense": 70,
      "speed": 45
    },
    "flavorText": "こおりに おおわれた うみで エサを とる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/86.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/86.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 86,
        "name": "パウワウ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png"
      },
      {
        "pokemonId": 87,
        "name": "ジュゴン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
        "condition": "Level 34"
      }
    ]
  },
  {
    "id": 87,
    "pokedexNumber": 87,
    "name": {
      "ja": "ジュゴン",
      "en": "Dewgong",
      "kana": "ジュゴン",
      "romaji": "Jugon"
    },
    "generation": 1,
    "types": [
      "water",
      "ice"
    ],
    "category": "あしかポケモン",
    "height": 1.7,
    "weight": 120,
    "abilities": [
      {
        "name": "あついしぼう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "うるおいボディ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "アイスボディ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 90,
      "attack": 70,
      "defense": 80,
      "specialAttack": 70,
      "specialDefense": 95,
      "speed": 70
    },
    "flavorText": "つめたい こおりの うえで ねるのが だいすき。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/87.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/87.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 87,
        "name": "ジュゴン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png"
      }
    ]
  },
  {
    "id": 88,
    "pokedexNumber": 88,
    "name": {
      "ja": "ベトベター",
      "en": "Grimer",
      "kana": "ベトベター",
      "romaji": "Betbeter"
    },
    "generation": 1,
    "types": [
      "poison"
    ],
    "category": "ヘドロポケモン",
    "height": 0.9,
    "weight": 30,
    "abilities": [
      {
        "name": "あくしゅう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ねんちゃく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "どくしゅ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 80,
      "attack": 80,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 25
    },
    "flavorText": "おせんされた かいていの ヘドロから うまれた。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/88.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/88.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 88,
        "name": "ベトベター",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png"
      },
      {
        "pokemonId": 89,
        "name": "ベトベトン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
        "condition": "Level 38"
      }
    ]
  },
  {
    "id": 89,
    "pokedexNumber": 89,
    "name": {
      "ja": "ベトベトン",
      "en": "Muk",
      "kana": "ベトベトン",
      "romaji": "Betbeton"
    },
    "generation": 1,
    "types": [
      "poison"
    ],
    "category": "ヘドロポケモン",
    "height": 1.2,
    "weight": 30,
    "abilities": [
      {
        "name": "あくしゅう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ねんちゃく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "どくしゅ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 105,
      "attack": 105,
      "defense": 75,
      "specialAttack": 65,
      "specialDefense": 100,
      "speed": 50
    },
    "flavorText": "からだから しみだしている たいえきは はなが",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/89.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/89.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 89,
        "name": "ベトベトン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png"
      }
    ]
  },
  {
    "id": 90,
    "pokedexNumber": 90,
    "name": {
      "ja": "シェルダー",
      "en": "Shellder",
      "kana": "シェルダー",
      "romaji": "Shellder"
    },
    "generation": 1,
    "types": [
      "water"
    ],
    "category": "２まいがいポケモン",
    "height": 0.3,
    "weight": 4,
    "abilities": [
      {
        "name": "シェルアーマー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "スキルリンク",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ぼうじん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 30,
      "attack": 65,
      "defense": 100,
      "specialAttack": 45,
      "specialDefense": 25,
      "speed": 40
    },
    "flavorText": "よるに なると おおきな ベロで かいていの",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/90.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/90.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 90,
        "name": "シェルダー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png"
      },
      {
        "pokemonId": 91,
        "name": "パルシェン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
        "condition": "use Water Stone"
      }
    ]
  },
  {
    "id": 91,
    "pokedexNumber": 91,
    "name": {
      "ja": "パルシェン",
      "en": "Cloyster",
      "kana": "パルシェン",
      "romaji": "Parshen"
    },
    "generation": 1,
    "types": [
      "water",
      "ice"
    ],
    "category": "２まいがいポケモン",
    "height": 1.5,
    "weight": 132.5,
    "abilities": [
      {
        "name": "シェルアーマー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "スキルリンク",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ぼうじん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 50,
      "attack": 95,
      "defense": 180,
      "specialAttack": 85,
      "specialDefense": 45,
      "speed": 70
    },
    "flavorText": "のみこんだ かいすいを うしろへ いきおい よく",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/91.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/91.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 91,
        "name": "パルシェン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png"
      }
    ]
  },
  {
    "id": 92,
    "pokedexNumber": 92,
    "name": {
      "ja": "ゴース",
      "en": "Gastly",
      "kana": "ゴース",
      "romaji": "Ghos"
    },
    "generation": 1,
    "types": [
      "ghost",
      "poison"
    ],
    "category": "ガスじょうポケモン",
    "height": 1.3,
    "weight": 0.1,
    "abilities": [
      {
        "name": "ふゆう",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 30,
      "attack": 35,
      "defense": 30,
      "specialAttack": 100,
      "specialDefense": 35,
      "speed": 80
    },
    "flavorText": "きょうふうを うけると ガスじょうの からだは",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/92.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/92.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 92,
        "name": "ゴース",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png"
      },
      {
        "pokemonId": 93,
        "name": "ゴースト",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
        "condition": "Level 25"
      }
    ]
  },
  {
    "id": 93,
    "pokedexNumber": 93,
    "name": {
      "ja": "ゴースト",
      "en": "Haunter",
      "kana": "ゴースト",
      "romaji": "Ghost"
    },
    "generation": 1,
    "types": [
      "ghost",
      "poison"
    ],
    "category": "ガスじょうポケモン",
    "height": 1.6,
    "weight": 0.1,
    "abilities": [
      {
        "name": "ふゆう",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 45,
      "attack": 50,
      "defense": 45,
      "specialAttack": 115,
      "specialDefense": 55,
      "speed": 95
    },
    "flavorText": "やみに うかぶ ゴーストが てまねきしても",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/93.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/93.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 93,
        "name": "ゴースト",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png"
      },
      {
        "pokemonId": 94,
        "name": "ゲンガー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
        "condition": "Trade"
      }
    ]
  },
  {
    "id": 94,
    "pokedexNumber": 94,
    "name": {
      "ja": "ゲンガー",
      "en": "Gengar",
      "kana": "ゲンガー",
      "romaji": "Gangar"
    },
    "generation": 1,
    "types": [
      "ghost",
      "poison"
    ],
    "category": "シャドーポケモン",
    "height": 1.5,
    "weight": 40.5,
    "abilities": [
      {
        "name": "のろわれボディ",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 65,
      "defense": 60,
      "specialAttack": 130,
      "specialDefense": 75,
      "speed": 110
    },
    "flavorText": "まよなか がいとうの あかりで できた かげが",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/94.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/94.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 94,
        "name": "ゲンガー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
      }
    ]
  },
  {
    "id": 95,
    "pokedexNumber": 95,
    "name": {
      "ja": "イワーク",
      "en": "Onix",
      "kana": "イワーク",
      "romaji": "Iwark"
    },
    "generation": 1,
    "types": [
      "rock",
      "ground"
    ],
    "category": "いわへびポケモン",
    "height": 8.8,
    "weight": 210,
    "abilities": [
      {
        "name": "いしあたま",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "がんじょう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "くだけるよろい",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 35,
      "attack": 45,
      "defense": 160,
      "specialAttack": 30,
      "specialDefense": 45,
      "speed": 70
    },
    "flavorText": "のうみそに じしゃくが あるので つちの なかを",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/95.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/95.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 95,
        "name": "イワーク",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png"
      },
      {
        "pokemonId": 208,
        "name": "ハガネール",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png",
        "condition": "trade holding Metal Coat"
      }
    ]
  },
  {
    "id": 96,
    "pokedexNumber": 96,
    "name": {
      "ja": "スリープ",
      "en": "Drowzee",
      "kana": "スリープ",
      "romaji": "Sleepe"
    },
    "generation": 1,
    "types": [
      "psychic"
    ],
    "category": "さいみんポケモン",
    "height": 1,
    "weight": 32.4,
    "abilities": [
      {
        "name": "ふみん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "よちむ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "せいしんりょく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 48,
      "defense": 45,
      "specialAttack": 43,
      "specialDefense": 90,
      "speed": 42
    },
    "flavorText": "ねむっているとき キミの はなが ムズムズしたら",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/96.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/96.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 96,
        "name": "スリープ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png"
      },
      {
        "pokemonId": 97,
        "name": "スリーパー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
        "condition": "Level 26"
      }
    ]
  },
  {
    "id": 97,
    "pokedexNumber": 97,
    "name": {
      "ja": "スリーパー",
      "en": "Hypno",
      "kana": "スリーパー",
      "romaji": "Sleeper"
    },
    "generation": 1,
    "types": [
      "psychic"
    ],
    "category": "さいみんポケモン",
    "height": 1.6,
    "weight": 75.6,
    "abilities": [
      {
        "name": "ふみん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "よちむ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "せいしんりょく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 85,
      "attack": 73,
      "defense": 70,
      "specialAttack": 73,
      "specialDefense": 115,
      "speed": 67
    },
    "flavorText": "てに もっている ふりこの うごきと かがやきが",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/97.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/97.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 97,
        "name": "スリーパー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png"
      }
    ]
  },
  {
    "id": 98,
    "pokedexNumber": 98,
    "name": {
      "ja": "クラブ",
      "en": "Krabby",
      "kana": "クラブ",
      "romaji": "Crab"
    },
    "generation": 1,
    "types": [
      "water"
    ],
    "category": "さわがにポケモン",
    "height": 0.4,
    "weight": 6.5,
    "abilities": [
      {
        "name": "かいりきバサミ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "シェルアーマー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ちからずく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 30,
      "attack": 105,
      "defense": 90,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 50
    },
    "flavorText": "すなはまに あなを ほり そこで くらしている。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/98.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/98.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 98,
        "name": "クラブ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png"
      },
      {
        "pokemonId": 99,
        "name": "キングラー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
        "condition": "Level 28"
      }
    ]
  },
  {
    "id": 99,
    "pokedexNumber": 99,
    "name": {
      "ja": "キングラー",
      "en": "Kingler",
      "kana": "キングラー",
      "romaji": "Kingler"
    },
    "generation": 1,
    "types": [
      "water"
    ],
    "category": "はさみポケモン",
    "height": 1.3,
    "weight": 60,
    "abilities": [
      {
        "name": "かいりきバサミ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "シェルアーマー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ちからずく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 55,
      "attack": 130,
      "defense": 115,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 75
    },
    "flavorText": "キングラーは きょだいな ハサミを ふって",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/99.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/99.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 99,
        "name": "キングラー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png"
      }
    ]
  },
  {
    "id": 100,
    "pokedexNumber": 100,
    "name": {
      "ja": "ビリリダマ",
      "en": "Voltorb",
      "kana": "ビリリダマ",
      "romaji": "Biriridama"
    },
    "generation": 1,
    "types": [
      "electric"
    ],
    "category": "ボールポケモン",
    "height": 0.5,
    "weight": 10.4,
    "abilities": [
      {
        "name": "ぼうおん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "せいでんき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ゆうばく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 40,
      "attack": 30,
      "defense": 50,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 100
    },
    "flavorText": "モンスターボールを つくっている かいしゃで",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/100.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/100.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 100,
        "name": "ビリリダマ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png"
      },
      {
        "pokemonId": 101,
        "name": "マルマイン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
        "condition": "Level 30"
      }
    ]
  },
  {
    "id": 101,
    "pokedexNumber": 101,
    "name": {
      "ja": "マルマイン",
      "en": "Electrode",
      "kana": "マルマイン",
      "romaji": "Marumine"
    },
    "generation": 1,
    "types": [
      "electric"
    ],
    "category": "ボールポケモン",
    "height": 1.2,
    "weight": 66.6,
    "abilities": [
      {
        "name": "ぼうおん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "せいでんき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ゆうばく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 50,
      "defense": 70,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 150
    },
    "flavorText": "くうきちゅうの でんきエネルギーを たべる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/101.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/101.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 101,
        "name": "マルマイン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png"
      }
    ]
  },
  {
    "id": 102,
    "pokedexNumber": 102,
    "name": {
      "ja": "タマタマ",
      "en": "Exeggcute",
      "kana": "タマタマ",
      "romaji": "Tamatama"
    },
    "generation": 1,
    "types": [
      "grass",
      "psychic"
    ],
    "category": "たまごポケモン",
    "height": 0.4,
    "weight": 2.5,
    "abilities": [
      {
        "name": "ようりょくそ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "しゅうかく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 40,
      "defense": 80,
      "specialAttack": 60,
      "specialDefense": 45,
      "speed": 40
    },
    "flavorText": "なかまおもいの ６この たまごは おたがいに",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/102.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/102.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 102,
        "name": "タマタマ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png"
      },
      {
        "pokemonId": 103,
        "name": "ナッシー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
        "condition": "use Leaf Stone"
      }
    ]
  },
  {
    "id": 103,
    "pokedexNumber": 103,
    "name": {
      "ja": "ナッシー",
      "en": "Exeggutor",
      "kana": "ナッシー",
      "romaji": "Nassy"
    },
    "generation": 1,
    "types": [
      "grass",
      "psychic"
    ],
    "category": "やしのみポケモン",
    "height": 2,
    "weight": 120,
    "abilities": [
      {
        "name": "ようりょくそ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "しゅうかく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 95,
      "attack": 95,
      "defense": 85,
      "specialAttack": 125,
      "specialDefense": 75,
      "speed": 55
    },
    "flavorText": "なんごく うまれの ナッシーの あたまは つよい",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/103.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/103.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 103,
        "name": "ナッシー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png"
      }
    ]
  },
  {
    "id": 104,
    "pokedexNumber": 104,
    "name": {
      "ja": "カラカラ",
      "en": "Cubone",
      "kana": "カラカラ",
      "romaji": "Karakara"
    },
    "generation": 1,
    "types": [
      "ground"
    ],
    "category": "こどくポケモン",
    "height": 0.4,
    "weight": 6.5,
    "abilities": [
      {
        "name": "いしあたま",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ひらいしん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "カブトアーマー",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 50,
      "attack": 50,
      "defense": 95,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 35
    },
    "flavorText": "２どと あえない ははおやの おもかげを",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/104.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/104.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 104,
        "name": "カラカラ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png"
      },
      {
        "pokemonId": 105,
        "name": "ガラガラ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
        "condition": "Level 28"
      }
    ]
  },
  {
    "id": 105,
    "pokedexNumber": 105,
    "name": {
      "ja": "ガラガラ",
      "en": "Marowak",
      "kana": "ガラガラ",
      "romaji": "Garagara"
    },
    "generation": 1,
    "types": [
      "ground"
    ],
    "category": "ほねずきポケモン",
    "height": 1,
    "weight": 45,
    "abilities": [
      {
        "name": "いしあたま",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ひらいしん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "カブトアーマー",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 80,
      "defense": 110,
      "specialAttack": 50,
      "specialDefense": 80,
      "speed": 45
    },
    "flavorText": "ははおやに あえない かなしみを のりこえた",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/105.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/105.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 105,
        "name": "ガラガラ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png"
      }
    ]
  },
  {
    "id": 106,
    "pokedexNumber": 106,
    "name": {
      "ja": "サワムラー",
      "en": "Hitmonlee",
      "kana": "サワムラー",
      "romaji": "Sawamular"
    },
    "generation": 1,
    "types": [
      "fighting"
    ],
    "category": "キックポケモン",
    "height": 1.5,
    "weight": 49.8,
    "abilities": [
      {
        "name": "じゅうなん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "すてみ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "かるわざ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 50,
      "attack": 120,
      "defense": 53,
      "specialAttack": 35,
      "specialDefense": 110,
      "speed": 87
    },
    "flavorText": "じざいに のびちぢみする あしで きょうれつな",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/106.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/106.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 106,
        "name": "サワムラー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png"
      }
    ]
  },
  {
    "id": 107,
    "pokedexNumber": 107,
    "name": {
      "ja": "エビワラー",
      "en": "Hitmonchan",
      "kana": "エビワラー",
      "romaji": "Ebiwalar"
    },
    "generation": 1,
    "types": [
      "fighting"
    ],
    "category": "パンチポケモン",
    "height": 1.4,
    "weight": 50.2,
    "abilities": [
      {
        "name": "するどいめ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "てつのこぶし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "せいしんりょく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 50,
      "attack": 105,
      "defense": 79,
      "specialAttack": 35,
      "specialDefense": 110,
      "speed": 76
    },
    "flavorText": "せかいチャンピオンを めざしていた ボクサーの",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/107.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/107.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 107,
        "name": "エビワラー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png"
      }
    ]
  },
  {
    "id": 108,
    "pokedexNumber": 108,
    "name": {
      "ja": "ベロリンガ",
      "en": "Lickitung",
      "kana": "ベロリンガ",
      "romaji": "Beroringa"
    },
    "generation": 1,
    "types": [
      "normal"
    ],
    "category": "なめまわしポケモン",
    "height": 1.2,
    "weight": 65.5,
    "abilities": [
      {
        "name": "マイペース",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "どんかん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ノーてんき",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 90,
      "attack": 55,
      "defense": 75,
      "specialAttack": 60,
      "specialDefense": 75,
      "speed": 30
    },
    "flavorText": "はじめて めに する ものは かならず ペロリ。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/108.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/108.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 108,
        "name": "ベロリンガ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png"
      },
      {
        "pokemonId": 463,
        "name": "ベロベルト",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png",
        "condition": "after Rollout learned"
      }
    ]
  },
  {
    "id": 109,
    "pokedexNumber": 109,
    "name": {
      "ja": "ドガース",
      "en": "Koffing",
      "kana": "ドガース",
      "romaji": "Dogars"
    },
    "generation": 1,
    "types": [
      "poison"
    ],
    "category": "どくガスポケモン",
    "height": 0.6,
    "weight": 1,
    "abilities": [
      {
        "name": "ふゆう",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 40,
      "attack": 65,
      "defense": 95,
      "specialAttack": 60,
      "specialDefense": 45,
      "speed": 35
    },
    "flavorText": "しげきを あたえると ガスの どくそが つよまり",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/109.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/109.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 109,
        "name": "ドガース",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png"
      },
      {
        "pokemonId": 110,
        "name": "マタドガス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
        "condition": "Level 35"
      }
    ]
  },
  {
    "id": 110,
    "pokedexNumber": 110,
    "name": {
      "ja": "マタドガス",
      "en": "Weezing",
      "kana": "マタドガス",
      "romaji": "Matadogas"
    },
    "generation": 1,
    "types": [
      "poison"
    ],
    "category": "どくガスポケモン",
    "height": 1.2,
    "weight": 9.5,
    "abilities": [
      {
        "name": "ふゆう",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 65,
      "attack": 90,
      "defense": 120,
      "specialAttack": 85,
      "specialDefense": 70,
      "speed": 60
    },
    "flavorText": "くさった なまゴミから でる ガスが だいすき。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/110.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/110.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 110,
        "name": "マタドガス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png"
      }
    ]
  },
  {
    "id": 111,
    "pokedexNumber": 111,
    "name": {
      "ja": "サイホーン",
      "en": "Rhyhorn",
      "kana": "サイホーン",
      "romaji": "Sihorn"
    },
    "generation": 1,
    "types": [
      "ground",
      "rock"
    ],
    "category": "とげとげポケモン",
    "height": 1,
    "weight": 115,
    "abilities": [
      {
        "name": "ひらいしん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "いしあたま",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "すてみ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 80,
      "attack": 85,
      "defense": 95,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 25
    },
    "flavorText": "ひたすら まっすぐ つきすすみ こわしまくる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/111.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/111.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 111,
        "name": "サイホーン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png"
      },
      {
        "pokemonId": 112,
        "name": "サイドン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
        "condition": "Level 42"
      }
    ]
  },
  {
    "id": 112,
    "pokedexNumber": 112,
    "name": {
      "ja": "サイドン",
      "en": "Rhydon",
      "kana": "サイドン",
      "romaji": "Sidon"
    },
    "generation": 1,
    "types": [
      "ground",
      "rock"
    ],
    "category": "ドリルポケモン",
    "height": 1.9,
    "weight": 120,
    "abilities": [
      {
        "name": "ひらいしん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "いしあたま",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "すてみ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 105,
      "attack": 130,
      "defense": 120,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 40
    },
    "flavorText": "ドリルに なる ツノで がんせきを はかいする。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/112.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/112.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 112,
        "name": "サイドン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png"
      },
      {
        "pokemonId": 464,
        "name": "ドサイドン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png",
        "condition": "trade holding Protector"
      }
    ]
  },
  {
    "id": 113,
    "pokedexNumber": 113,
    "name": {
      "ja": "ラッキー",
      "en": "Chansey",
      "kana": "ラッキー",
      "romaji": "Lucky"
    },
    "generation": 1,
    "types": [
      "normal"
    ],
    "category": "たまごポケモン",
    "height": 1.1,
    "weight": 34.6,
    "abilities": [
      {
        "name": "しぜんかいふく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "てんのめぐみ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "いやしのこころ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 250,
      "attack": 5,
      "defense": 5,
      "specialAttack": 35,
      "specialDefense": 105,
      "speed": 50
    },
    "flavorText": "えいよう まんてんの タマゴを まいにち うむ。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/113.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/113.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 113,
        "name": "ラッキー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png"
      },
      {
        "pokemonId": 242,
        "name": "ハピナス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png",
        "condition": "high Friendship"
      }
    ]
  },
  {
    "id": 114,
    "pokedexNumber": 114,
    "name": {
      "ja": "モンジャラ",
      "en": "Tangela",
      "kana": "モンジャラ",
      "romaji": "Monjara"
    },
    "generation": 1,
    "types": [
      "grass"
    ],
    "category": "ツルじょうポケモン",
    "height": 1,
    "weight": 35,
    "abilities": [
      {
        "name": "ようりょくそ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "リーフガード",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "さいせいりょく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 65,
      "attack": 55,
      "defense": 115,
      "specialAttack": 100,
      "specialDefense": 40,
      "speed": 60
    },
    "flavorText": "てきに つかまれると ツルは ぷちっと きれる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/114.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/114.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 114,
        "name": "モンジャラ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png"
      },
      {
        "pokemonId": 465,
        "name": "モジャンボ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png",
        "condition": "after Ancient Power learned"
      }
    ]
  },
  {
    "id": 115,
    "pokedexNumber": 115,
    "name": {
      "ja": "ガルーラ",
      "en": "Kangaskhan",
      "kana": "ガルーラ",
      "romaji": "Garura"
    },
    "generation": 1,
    "types": [
      "normal"
    ],
    "category": "おやこポケモン",
    "height": 2.2,
    "weight": 80,
    "abilities": [
      {
        "name": "はやおき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "きもったま",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "せいしんりょく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 105,
      "attack": 95,
      "defense": 80,
      "specialAttack": 40,
      "specialDefense": 80,
      "speed": 90
    },
    "flavorText": "ガルーラの こどもが １ぴきで あそんでいても",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/115.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/115.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 115,
        "name": "ガルーラ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png"
      }
    ]
  },
  {
    "id": 116,
    "pokedexNumber": 116,
    "name": {
      "ja": "タッツー",
      "en": "Horsea",
      "kana": "タッツー",
      "romaji": "Tattu"
    },
    "generation": 1,
    "types": [
      "water"
    ],
    "category": "ドラゴンポケモン",
    "height": 0.4,
    "weight": 8,
    "abilities": [
      {
        "name": "すいすい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "スナイパー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "しめりけ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 30,
      "attack": 40,
      "defense": 70,
      "specialAttack": 70,
      "specialDefense": 25,
      "speed": 60
    },
    "flavorText": "きけんを かんじると はんしゃてきに くちから",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/116.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/116.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 116,
        "name": "タッツー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png"
      },
      {
        "pokemonId": 117,
        "name": "シードラ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
        "condition": "Level 32"
      }
    ]
  },
  {
    "id": 117,
    "pokedexNumber": 117,
    "name": {
      "ja": "シードラ",
      "en": "Seadra",
      "kana": "シードラ",
      "romaji": "Seadra"
    },
    "generation": 1,
    "types": [
      "water"
    ],
    "category": "ドラゴンポケモン",
    "height": 1.2,
    "weight": 25,
    "abilities": [
      {
        "name": "どくのトゲ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "スナイパー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "しめりけ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 55,
      "attack": 65,
      "defense": 95,
      "specialAttack": 95,
      "specialDefense": 45,
      "speed": 85
    },
    "flavorText": "サンゴの えだの すきまに もぐって ねむる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/117.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/117.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 117,
        "name": "シードラ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png"
      },
      {
        "pokemonId": 230,
        "name": "キングドラ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png",
        "condition": "trade holding Dragon Scale"
      }
    ]
  },
  {
    "id": 118,
    "pokedexNumber": 118,
    "name": {
      "ja": "トサキント",
      "en": "Goldeen",
      "kana": "トサキント",
      "romaji": "Tosakinto"
    },
    "generation": 1,
    "types": [
      "water"
    ],
    "category": "きんぎょポケモン",
    "height": 0.6,
    "weight": 15,
    "abilities": [
      {
        "name": "すいすい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "みずのベール",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ひらいしん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 45,
      "attack": 67,
      "defense": 60,
      "specialAttack": 35,
      "specialDefense": 50,
      "speed": 63
    },
    "flavorText": "すいちゅうで ゆうがに たなびく ひれが とても",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/118.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/118.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 118,
        "name": "トサキント",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png"
      },
      {
        "pokemonId": 119,
        "name": "アズマオウ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
        "condition": "Level 33"
      }
    ]
  },
  {
    "id": 119,
    "pokedexNumber": 119,
    "name": {
      "ja": "アズマオウ",
      "en": "Seaking",
      "kana": "アズマオウ",
      "romaji": "Azumao"
    },
    "generation": 1,
    "types": [
      "water"
    ],
    "category": "きんぎょポケモン",
    "height": 1.3,
    "weight": 39,
    "abilities": [
      {
        "name": "すいすい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "みずのベール",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ひらいしん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 80,
      "attack": 92,
      "defense": 65,
      "specialAttack": 65,
      "specialDefense": 80,
      "speed": 68
    },
    "flavorText": "タマゴを まもるため オスと メスは こうたいで",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/119.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/119.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 119,
        "name": "アズマオウ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png"
      }
    ]
  },
  {
    "id": 120,
    "pokedexNumber": 120,
    "name": {
      "ja": "ヒトデマン",
      "en": "Staryu",
      "kana": "ヒトデマン",
      "romaji": "Hitodeman"
    },
    "generation": 1,
    "types": [
      "water"
    ],
    "category": "ほしがたポケモン",
    "height": 0.8,
    "weight": 34.5,
    "abilities": [
      {
        "name": "はっこう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "しぜんかいふく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "アナライズ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 30,
      "attack": 45,
      "defense": 55,
      "specialAttack": 70,
      "specialDefense": 55,
      "speed": 85
    },
    "flavorText": "なつの おわりごろ よるに すなはまへ いくと",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/120.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/120.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 120,
        "name": "ヒトデマン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png"
      },
      {
        "pokemonId": 121,
        "name": "スターミー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
        "condition": "use Water Stone"
      }
    ]
  },
  {
    "id": 121,
    "pokedexNumber": 121,
    "name": {
      "ja": "スターミー",
      "en": "Starmie",
      "kana": "スターミー",
      "romaji": "Starmie"
    },
    "generation": 1,
    "types": [
      "water",
      "psychic"
    ],
    "category": "なぞのポケモン",
    "height": 1.1,
    "weight": 80,
    "abilities": [
      {
        "name": "はっこう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "しぜんかいふく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "アナライズ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 75,
      "defense": 85,
      "specialAttack": 100,
      "specialDefense": 85,
      "speed": 115
    },
    "flavorText": "からだの ちゅうしんに ある コアと よばれる",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/121.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/121.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 121,
        "name": "スターミー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png"
      }
    ]
  },
  {
    "id": 122,
    "pokedexNumber": 122,
    "name": {
      "ja": "バリヤード",
      "en": "Mr. Mime",
      "kana": "バリヤード",
      "romaji": "Barrierd"
    },
    "generation": 1,
    "types": [
      "psychic",
      "fairy"
    ],
    "category": "バリアーポケモン",
    "height": 1.3,
    "weight": 54.5,
    "abilities": [
      {
        "name": "ぼうおん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "フィルター",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "テクニシャン",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 65,
      "specialAttack": 100,
      "specialDefense": 120,
      "speed": 90
    },
    "flavorText": "めに みえない ものを みぶりで そこに あると",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/122.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/122.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 122,
        "name": "バリヤード",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png"
      }
    ]
  },
  {
    "id": 123,
    "pokedexNumber": 123,
    "name": {
      "ja": "ストライク",
      "en": "Scyther",
      "kana": "ストライク",
      "romaji": "Strike"
    },
    "generation": 1,
    "types": [
      "bug",
      "flying"
    ],
    "category": "かまきりポケモン",
    "height": 1.5,
    "weight": 56,
    "abilities": [
      {
        "name": "むしのしらせ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "テクニシャン",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ふくつのこころ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 70,
      "attack": 110,
      "defense": 80,
      "specialAttack": 55,
      "specialDefense": 80,
      "speed": 105
    },
    "flavorText": "めにも とまらぬ スピードが りょううでの",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/123.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/123.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 123,
        "name": "ストライク",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png"
      },
      {
        "pokemonId": 212,
        "name": "ハッサム",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png",
        "condition": "trade holding Metal Coat"
      }
    ]
  },
  {
    "id": 124,
    "pokedexNumber": 124,
    "name": {
      "ja": "ルージュラ",
      "en": "Jynx",
      "kana": "ルージュラ",
      "romaji": "Rougela"
    },
    "generation": 1,
    "types": [
      "ice",
      "psychic"
    ],
    "category": "ひとがたポケモン",
    "height": 1.4,
    "weight": 40.6,
    "abilities": [
      {
        "name": "どんかん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "よちむ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "かんそうはだ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 65,
      "attack": 50,
      "defense": 35,
      "specialAttack": 115,
      "specialDefense": 95,
      "speed": 95
    },
    "flavorText": "おどるような こしつきで リズミカルに あるく。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/124.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/124.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 124,
        "name": "ルージュラ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png"
      }
    ]
  },
  {
    "id": 125,
    "pokedexNumber": 125,
    "name": {
      "ja": "エレブー",
      "en": "Electabuzz",
      "kana": "エレブー",
      "romaji": "Eleboo"
    },
    "generation": 1,
    "types": [
      "electric"
    ],
    "category": "でんげきポケモン",
    "height": 1.1,
    "weight": 30,
    "abilities": [
      {
        "name": "せいでんき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "やるき",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 65,
      "attack": 83,
      "defense": 57,
      "specialAttack": 95,
      "specialDefense": 85,
      "speed": 105
    },
    "flavorText": "あらしが くると きの うえ など カミナリの",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/125.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/125.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 125,
        "name": "エレブー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png"
      },
      {
        "pokemonId": 466,
        "name": "エレキブル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png",
        "condition": "trade holding Electirizer"
      }
    ]
  },
  {
    "id": 126,
    "pokedexNumber": 126,
    "name": {
      "ja": "ブーバー",
      "en": "Magmar",
      "kana": "ブーバー",
      "romaji": "Boober"
    },
    "generation": 1,
    "types": [
      "fire"
    ],
    "category": "ひふきポケモン",
    "height": 1.3,
    "weight": 44.5,
    "abilities": [
      {
        "name": "ほのおのからだ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "やるき",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 65,
      "attack": 95,
      "defense": 57,
      "specialAttack": 100,
      "specialDefense": 85,
      "speed": 93
    },
    "flavorText": "たたかいに なると からだから しゃくねつの",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/126.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/126.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 126,
        "name": "ブーバー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png"
      },
      {
        "pokemonId": 467,
        "name": "ブーバーン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png",
        "condition": "trade holding Magmarizer"
      }
    ]
  },
  {
    "id": 127,
    "pokedexNumber": 127,
    "name": {
      "ja": "カイロス",
      "en": "Pinsir",
      "kana": "カイロス",
      "romaji": "Kailios"
    },
    "generation": 1,
    "types": [
      "bug"
    ],
    "category": "くわがたポケモン",
    "height": 1.5,
    "weight": 55,
    "abilities": [
      {
        "name": "かいりきバサミ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "かたやぶり",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "じしんかじょう",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 65,
      "attack": 125,
      "defense": 100,
      "specialAttack": 55,
      "specialDefense": 70,
      "speed": 85
    },
    "flavorText": "じぶんの たいじゅうの ２ばいも ある あいてを",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/127.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/127.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 127,
        "name": "カイロス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png"
      }
    ]
  },
  {
    "id": 128,
    "pokedexNumber": 128,
    "name": {
      "ja": "ケンタロス",
      "en": "Tauros",
      "kana": "ケンタロス",
      "romaji": "Kentauros"
    },
    "generation": 1,
    "types": [
      "normal"
    ],
    "category": "あばれうしポケモン",
    "height": 1.4,
    "weight": 88.4,
    "abilities": [
      {
        "name": "いかく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "いかりのつぼ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ちからずく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 75,
      "attack": 100,
      "defense": 95,
      "specialAttack": 40,
      "specialDefense": 70,
      "speed": 110
    },
    "flavorText": "いつも あばれて いないと きが すまない。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/128.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/128.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 128,
        "name": "ケンタロス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png"
      }
    ]
  },
  {
    "id": 129,
    "pokedexNumber": 129,
    "name": {
      "ja": "コイキング",
      "en": "Magikarp",
      "kana": "コイキング",
      "romaji": "Koiking"
    },
    "generation": 1,
    "types": [
      "water"
    ],
    "category": "さかなポケモン",
    "height": 0.9,
    "weight": 10,
    "abilities": [
      {
        "name": "すいすい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "びびり",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 20,
      "attack": 10,
      "defense": 55,
      "specialAttack": 15,
      "specialDefense": 20,
      "speed": 80
    },
    "flavorText": "はねる ことしか しない なさけない ポケモン。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/129.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/129.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 129,
        "name": "コイキング",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png"
      },
      {
        "pokemonId": 130,
        "name": "ギャラドス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
        "condition": "Level 20"
      }
    ]
  },
  {
    "id": 130,
    "pokedexNumber": 130,
    "name": {
      "ja": "ギャラドス",
      "en": "Gyarados",
      "kana": "ギャラドス",
      "romaji": "Gyarados"
    },
    "generation": 1,
    "types": [
      "water",
      "flying"
    ],
    "category": "きょうあくポケモン",
    "height": 6.5,
    "weight": 235,
    "abilities": [
      {
        "name": "いかく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "じしんかじょう",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 95,
      "attack": 125,
      "defense": 79,
      "specialAttack": 60,
      "specialDefense": 100,
      "speed": 81
    },
    "flavorText": "いちど あばれはじめると すべてを もやさないと",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/130.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/130.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 130,
        "name": "ギャラドス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png"
      }
    ]
  },
  {
    "id": 131,
    "pokedexNumber": 131,
    "name": {
      "ja": "ラプラス",
      "en": "Lapras",
      "kana": "ラプラス",
      "romaji": "Laplace"
    },
    "generation": 1,
    "types": [
      "water",
      "ice"
    ],
    "category": "のりものポケモン",
    "height": 2.5,
    "weight": 220,
    "abilities": [
      {
        "name": "ちょすい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "シェルアーマー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "うるおいボディ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 130,
      "attack": 85,
      "defense": 80,
      "specialAttack": 85,
      "specialDefense": 95,
      "speed": 60
    },
    "flavorText": "ひとが ぜつめつの ききに おいこんでしまった。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/131.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/131.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 131,
        "name": "ラプラス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png"
      }
    ]
  },
  {
    "id": 132,
    "pokedexNumber": 132,
    "name": {
      "ja": "メタモン",
      "en": "Ditto",
      "kana": "メタモン",
      "romaji": "Metamon"
    },
    "generation": 1,
    "types": [
      "normal"
    ],
    "category": "へんしんポケモン",
    "height": 0.3,
    "weight": 4,
    "abilities": [
      {
        "name": "じゅうなん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "かわりもの",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 48,
      "attack": 48,
      "defense": 48,
      "specialAttack": 48,
      "specialDefense": 48,
      "speed": 48
    },
    "flavorText": "からだの さいぼうを くみかえて へんしんする。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/132.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/132.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 132,
        "name": "メタモン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
      }
    ]
  },
  {
    "id": 133,
    "pokedexNumber": 133,
    "name": {
      "ja": "イーブイ",
      "en": "Eevee",
      "kana": "イーブイ",
      "romaji": "Eievui"
    },
    "generation": 1,
    "types": [
      "normal"
    ],
    "category": "しんかポケモン",
    "height": 0.3,
    "weight": 6.5,
    "abilities": [
      {
        "name": "にげあし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "てきおうりょく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "きけんよち",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 55,
      "attack": 55,
      "defense": 50,
      "specialAttack": 45,
      "specialDefense": 65,
      "speed": 55
    },
    "flavorText": "くらしている かんきょうで とつぜんへんい する",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/133.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/133.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 133,
        "name": "イーブイ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
      },
      {
        "pokemonId": 134,
        "name": "シャワーズ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
        "condition": "use Water Stone"
      },
      {
        "pokemonId": 135,
        "name": "サンダース",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
        "condition": "use Thunder Stone"
      },
      {
        "pokemonId": 136,
        "name": "ブースター",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
        "condition": "use Fire Stone"
      },
      {
        "pokemonId": 196,
        "name": "エーフィ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png",
        "condition": "high Friendship, Daytime"
      },
      {
        "pokemonId": 197,
        "name": "ブラッキー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png",
        "condition": "high Friendship, Nighttime"
      },
      {
        "pokemonId": 470,
        "name": "リーフィア",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png",
        "condition": "level up near a Mossy Rock"
      },
      {
        "pokemonId": 471,
        "name": "グレイシア",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png",
        "condition": "level up near an Icy Rock"
      },
      {
        "pokemonId": 700,
        "name": "ニンフィア",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png",
        "condition": "High Affection and knowing Fairy move"
      }
    ]
  },
  {
    "id": 134,
    "pokedexNumber": 134,
    "name": {
      "ja": "シャワーズ",
      "en": "Vaporeon",
      "kana": "シャワーズ",
      "romaji": "Showers"
    },
    "generation": 1,
    "types": [
      "water"
    ],
    "category": "あわはきポケモン",
    "height": 1,
    "weight": 29,
    "abilities": [
      {
        "name": "ちょすい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "うるおいボディ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 130,
      "attack": 65,
      "defense": 60,
      "specialAttack": 110,
      "specialDefense": 95,
      "speed": 65
    },
    "flavorText": "とつぜんへんいに より すいちゅうで せいかつ",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/134.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/134.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 134,
        "name": "シャワーズ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"
      }
    ]
  },
  {
    "id": 135,
    "pokedexNumber": 135,
    "name": {
      "ja": "サンダース",
      "en": "Jolteon",
      "kana": "サンダース",
      "romaji": "Thunders"
    },
    "generation": 1,
    "types": [
      "electric"
    ],
    "category": "かみなりポケモン",
    "height": 0.8,
    "weight": 24.5,
    "abilities": [
      {
        "name": "ちくでん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はやあし",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 65,
      "attack": 65,
      "defense": 60,
      "specialAttack": 110,
      "specialDefense": 95,
      "speed": 130
    },
    "flavorText": "さいぼうの だす よわい でんきを たいもうの",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/135.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/135.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 135,
        "name": "サンダース",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png"
      }
    ]
  },
  {
    "id": 136,
    "pokedexNumber": 136,
    "name": {
      "ja": "ブースター",
      "en": "Flareon",
      "kana": "ブースター",
      "romaji": "Booster"
    },
    "generation": 1,
    "types": [
      "fire"
    ],
    "category": "ほのおポケモン",
    "height": 0.9,
    "weight": 25,
    "abilities": [
      {
        "name": "もらいび",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "こんじょう",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 65,
      "attack": 130,
      "defense": 60,
      "specialAttack": 95,
      "specialDefense": 110,
      "speed": 65
    },
    "flavorText": "ふさふさの たいもうは あがりすぎた たいおんを",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/136.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/136.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 136,
        "name": "ブースター",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png"
      }
    ]
  },
  {
    "id": 137,
    "pokedexNumber": 137,
    "name": {
      "ja": "ポリゴン",
      "en": "Porygon",
      "kana": "ポリゴン",
      "romaji": "Porygon"
    },
    "generation": 1,
    "types": [
      "normal"
    ],
    "category": "バーチャルポケモン",
    "height": 0.8,
    "weight": 36.5,
    "abilities": [
      {
        "name": "トレース",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ダウンロード",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "アナライズ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 65,
      "attack": 60,
      "defense": 70,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 40
    },
    "flavorText": "ぜんしんを プログラム データに もどして",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/137.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/137.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 137,
        "name": "ポリゴン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png"
      },
      {
        "pokemonId": 233,
        "name": "ポリゴン２",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png",
        "condition": "trade holding Upgrade"
      }
    ]
  },
  {
    "id": 138,
    "pokedexNumber": 138,
    "name": {
      "ja": "オムナイト",
      "en": "Omanyte",
      "kana": "オムナイト",
      "romaji": "Omnite"
    },
    "generation": 1,
    "types": [
      "rock",
      "water"
    ],
    "category": "うずまきポケモン",
    "height": 0.4,
    "weight": 7.5,
    "abilities": [
      {
        "name": "すいすい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "シェルアーマー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "くだけるよろい",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 35,
      "attack": 40,
      "defense": 100,
      "specialAttack": 90,
      "specialDefense": 55,
      "speed": 35
    },
    "flavorText": "おおむかしに ぜつめつしたが にんげんの てで",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/138.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/138.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 138,
        "name": "オムナイト",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png"
      },
      {
        "pokemonId": 139,
        "name": "オムスター",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
        "condition": "Level 40"
      }
    ]
  },
  {
    "id": 139,
    "pokedexNumber": 139,
    "name": {
      "ja": "オムスター",
      "en": "Omastar",
      "kana": "オムスター",
      "romaji": "Omstar"
    },
    "generation": 1,
    "types": [
      "rock",
      "water"
    ],
    "category": "うずまきポケモン",
    "height": 1,
    "weight": 35,
    "abilities": [
      {
        "name": "すいすい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "シェルアーマー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "くだけるよろい",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 70,
      "attack": 60,
      "defense": 125,
      "specialAttack": 115,
      "specialDefense": 70,
      "speed": 55
    },
    "flavorText": "しょくしゅを あやつり えものを つかまえる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/139.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/139.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 139,
        "name": "オムスター",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png"
      }
    ]
  },
  {
    "id": 140,
    "pokedexNumber": 140,
    "name": {
      "ja": "カブト",
      "en": "Kabuto",
      "kana": "カブト",
      "romaji": "Kabuto"
    },
    "generation": 1,
    "types": [
      "rock",
      "water"
    ],
    "category": "こうらポケモン",
    "height": 0.5,
    "weight": 11.5,
    "abilities": [
      {
        "name": "すいすい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "カブトアーマー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "くだけるよろい",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 30,
      "attack": 80,
      "defense": 90,
      "specialAttack": 55,
      "specialDefense": 45,
      "speed": 55
    },
    "flavorText": "かせきから ふっかつした ポケモンだが まれに",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/140.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/140.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 140,
        "name": "カブト",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png"
      },
      {
        "pokemonId": 141,
        "name": "カブトプス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
        "condition": "Level 40"
      }
    ]
  },
  {
    "id": 141,
    "pokedexNumber": 141,
    "name": {
      "ja": "カブトプス",
      "en": "Kabutops",
      "kana": "カブトプス",
      "romaji": "Kabutops"
    },
    "generation": 1,
    "types": [
      "rock",
      "water"
    ],
    "category": "こうらポケモン",
    "height": 1.3,
    "weight": 40.5,
    "abilities": [
      {
        "name": "すいすい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "カブトアーマー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "くだけるよろい",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 115,
      "defense": 105,
      "specialAttack": 65,
      "specialDefense": 70,
      "speed": 80
    },
    "flavorText": "すいちゅうを およぎ えものを とらえていた。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/141.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/141.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 141,
        "name": "カブトプス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png"
      }
    ]
  },
  {
    "id": 142,
    "pokedexNumber": 142,
    "name": {
      "ja": "プテラ",
      "en": "Aerodactyl",
      "kana": "プテラ",
      "romaji": "Ptera"
    },
    "generation": 1,
    "types": [
      "rock",
      "flying"
    ],
    "category": "かせきポケモン",
    "height": 1.8,
    "weight": 59,
    "abilities": [
      {
        "name": "いしあたま",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "プレッシャー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "きんちょうかん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "specialAttack": 60,
      "specialDefense": 75,
      "speed": 130
    },
    "flavorText": "コハクから とりだした いでんしを さいせいして",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/142.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/142.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 142,
        "name": "プテラ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png"
      }
    ]
  },
  {
    "id": 143,
    "pokedexNumber": 143,
    "name": {
      "ja": "カビゴン",
      "en": "Snorlax",
      "kana": "カビゴン",
      "romaji": "Kabigon"
    },
    "generation": 1,
    "types": [
      "normal"
    ],
    "category": "いねむりポケモン",
    "height": 2.1,
    "weight": 460,
    "abilities": [
      {
        "name": "めんえき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "あついしぼう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "くいしんぼう",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 160,
      "attack": 110,
      "defense": 65,
      "specialAttack": 65,
      "specialDefense": 110,
      "speed": 30
    },
    "flavorText": "たべて ねての くりかえしで １にちが おわる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/143.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/143.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 143,
        "name": "カビゴン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"
      }
    ]
  },
  {
    "id": 144,
    "pokedexNumber": 144,
    "name": {
      "ja": "フリーザー",
      "en": "Articuno",
      "kana": "フリーザー",
      "romaji": "Freezer"
    },
    "generation": 1,
    "types": [
      "ice",
      "flying"
    ],
    "category": "れいとうポケモン",
    "height": 1.7,
    "weight": 55.4,
    "abilities": [
      {
        "name": "プレッシャー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ゆきがくれ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 90,
      "attack": 85,
      "defense": 100,
      "specialAttack": 95,
      "specialDefense": 125,
      "speed": 85
    },
    "flavorText": "こおりを あやつる でんせつの とりポケモン。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/144.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/144.ogg",
    "isLegendary": true,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 144,
        "name": "フリーザー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png"
      }
    ]
  },
  {
    "id": 145,
    "pokedexNumber": 145,
    "name": {
      "ja": "サンダー",
      "en": "Zapdos",
      "kana": "サンダー",
      "romaji": "Thunder"
    },
    "generation": 1,
    "types": [
      "electric",
      "flying"
    ],
    "category": "でんげきポケモン",
    "height": 1.6,
    "weight": 52.6,
    "abilities": [
      {
        "name": "プレッシャー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "せいでんき",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 90,
      "attack": 90,
      "defense": 85,
      "specialAttack": 125,
      "specialDefense": 90,
      "speed": 100
    },
    "flavorText": "でんきを あやつる でんせつの とりポケモン。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/145.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/145.ogg",
    "isLegendary": true,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 145,
        "name": "サンダー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png"
      }
    ]
  },
  {
    "id": 146,
    "pokedexNumber": 146,
    "name": {
      "ja": "ファイヤー",
      "en": "Moltres",
      "kana": "ファイヤー",
      "romaji": "Fire"
    },
    "generation": 1,
    "types": [
      "fire",
      "flying"
    ],
    "category": "かえんポケモン",
    "height": 2,
    "weight": 60,
    "abilities": [
      {
        "name": "プレッシャー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ほのおのからだ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 90,
      "attack": 100,
      "defense": 90,
      "specialAttack": 125,
      "specialDefense": 85,
      "speed": 90
    },
    "flavorText": "ほのおを あやつる でんせつの とりポケモン。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/146.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/146.ogg",
    "isLegendary": true,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 146,
        "name": "ファイヤー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png"
      }
    ]
  },
  {
    "id": 147,
    "pokedexNumber": 147,
    "name": {
      "ja": "ミニリュウ",
      "en": "Dratini",
      "kana": "ミニリュウ",
      "romaji": "Miniryu"
    },
    "generation": 1,
    "types": [
      "dragon"
    ],
    "category": "ドラゴンポケモン",
    "height": 1.8,
    "weight": 3.3,
    "abilities": [
      {
        "name": "だっぴ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ふしぎなうろこ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 41,
      "attack": 64,
      "defense": 45,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 50
    },
    "flavorText": "ミニリュウが だっぴを くりかえして いるのは",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/147.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/147.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 147,
        "name": "ミニリュウ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png"
      },
      {
        "pokemonId": 148,
        "name": "ハクリュー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
        "condition": "Level 30"
      }
    ]
  },
  {
    "id": 148,
    "pokedexNumber": 148,
    "name": {
      "ja": "ハクリュー",
      "en": "Dragonair",
      "kana": "ハクリュー",
      "romaji": "Hakuryu"
    },
    "generation": 1,
    "types": [
      "dragon"
    ],
    "category": "ドラゴンポケモン",
    "height": 4,
    "weight": 16.5,
    "abilities": [
      {
        "name": "だっぴ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ふしぎなうろこ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 61,
      "attack": 84,
      "defense": 65,
      "specialAttack": 70,
      "specialDefense": 70,
      "speed": 70
    },
    "flavorText": "おおきな エネルギーを からだに ためている。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/148.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/148.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 148,
        "name": "ハクリュー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png"
      },
      {
        "pokemonId": 149,
        "name": "カイリュー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
        "condition": "Level 55"
      }
    ]
  },
  {
    "id": 149,
    "pokedexNumber": 149,
    "name": {
      "ja": "カイリュー",
      "en": "Dragonite",
      "kana": "カイリュー",
      "romaji": "Kairyu"
    },
    "generation": 1,
    "types": [
      "dragon",
      "flying"
    ],
    "category": "ドラゴンポケモン",
    "height": 2.2,
    "weight": 210,
    "abilities": [
      {
        "name": "せいしんりょく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "マルチスケイル",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 91,
      "attack": 134,
      "defense": 95,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 80
    },
    "flavorText": "１６じかんで ちきゅうを １しゅうできる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/149.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/149.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 149,
        "name": "カイリュー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png"
      }
    ]
  },
  {
    "id": 150,
    "pokedexNumber": 150,
    "name": {
      "ja": "ミュウツー",
      "en": "Mewtwo",
      "kana": "ミュウツー",
      "romaji": "Mewtwo"
    },
    "generation": 1,
    "types": [
      "psychic"
    ],
    "category": "いでんしポケモン",
    "height": 2,
    "weight": 122,
    "abilities": [
      {
        "name": "プレッシャー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "きんちょうかん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 106,
      "attack": 110,
      "defense": 90,
      "specialAttack": 154,
      "specialDefense": 90,
      "speed": 130
    },
    "flavorText": "いでんしそうさに よって つくられた ポケモン。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/150.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/150.ogg",
    "isLegendary": true,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 150,
        "name": "ミュウツー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
      }
    ]
  },
  {
    "id": 151,
    "pokedexNumber": 151,
    "name": {
      "ja": "ミュウ",
      "en": "Mew",
      "kana": "ミュウ",
      "romaji": "Mew"
    },
    "generation": 1,
    "types": [
      "psychic"
    ],
    "category": "しんしゅポケモン",
    "height": 0.4,
    "weight": 4,
    "abilities": [
      {
        "name": "シンクロ",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 100
    },
    "flavorText": "すべての ポケモンの いでんしを もつと いう。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/151.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/151.ogg",
    "isLegendary": false,
    "isMythical": true,
    "evolutionChain": [
      {
        "pokemonId": 151,
        "name": "ミュウ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
      }
    ]
  },
  {
    "id": 152,
    "pokedexNumber": 152,
    "name": {
      "ja": "チコリータ",
      "en": "Chikorita",
      "kana": "チコリータ",
      "romaji": "Chicorita"
    },
    "generation": 2,
    "types": [
      "grass"
    ],
    "category": "はっぱポケモン",
    "height": 0.9,
    "weight": 6.4,
    "abilities": [
      {
        "name": "しんりょく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "リーフガード",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 45,
      "attack": 49,
      "defense": 65,
      "specialAttack": 49,
      "specialDefense": 65,
      "speed": 45
    },
    "flavorText": "はっぱを ふりまわして あいてを いかくするが",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/152.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/152.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 152,
        "name": "チコリータ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png"
      },
      {
        "pokemonId": 153,
        "name": "ベイリーフ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png",
        "condition": "Level 16"
      }
    ]
  },
  {
    "id": 153,
    "pokedexNumber": 153,
    "name": {
      "ja": "ベイリーフ",
      "en": "Bayleef",
      "kana": "ベイリーフ",
      "romaji": "Bayleaf"
    },
    "generation": 2,
    "types": [
      "grass"
    ],
    "category": "はっぱポケモン",
    "height": 1.2,
    "weight": 15.8,
    "abilities": [
      {
        "name": "しんりょく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "リーフガード",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 62,
      "defense": 80,
      "specialAttack": 63,
      "specialDefense": 80,
      "speed": 60
    },
    "flavorText": "くびの まわりの くるりと まいた はっぱの",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/153.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/153.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/153.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 153,
        "name": "ベイリーフ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png"
      },
      {
        "pokemonId": 154,
        "name": "メガニウム",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png",
        "condition": "Level 32"
      }
    ]
  },
  {
    "id": 154,
    "pokedexNumber": 154,
    "name": {
      "ja": "メガニウム",
      "en": "Meganium",
      "kana": "メガニウム",
      "romaji": "Meganium"
    },
    "generation": 2,
    "types": [
      "grass"
    ],
    "category": "ハーブポケモン",
    "height": 1.8,
    "weight": 100.5,
    "abilities": [
      {
        "name": "しんりょく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "リーフガード",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 80,
      "attack": 82,
      "defense": 100,
      "specialAttack": 83,
      "specialDefense": 100,
      "speed": 80
    },
    "flavorText": "はなの かおりは きもちを おだやかにする。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/154.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/154.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/154.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 154,
        "name": "メガニウム",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png"
      }
    ]
  },
  {
    "id": 155,
    "pokedexNumber": 155,
    "name": {
      "ja": "ヒノアラシ",
      "en": "Cyndaquil",
      "kana": "ヒノアラシ",
      "romaji": "Hinoarashi"
    },
    "generation": 2,
    "types": [
      "fire"
    ],
    "category": "ひねずみポケモン",
    "height": 0.5,
    "weight": 7.9,
    "abilities": [
      {
        "name": "もうか",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "もらいび",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "specialAttack": 60,
      "specialDefense": 50,
      "speed": 65
    },
    "flavorText": "せなかから ほのおを ふきあげて みを まもる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/155.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/155.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 155,
        "name": "ヒノアラシ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png"
      },
      {
        "pokemonId": 156,
        "name": "マグマラシ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png",
        "condition": "Level 14"
      }
    ]
  },
  {
    "id": 156,
    "pokedexNumber": 156,
    "name": {
      "ja": "マグマラシ",
      "en": "Quilava",
      "kana": "マグマラシ",
      "romaji": "Magmarashi"
    },
    "generation": 2,
    "types": [
      "fire"
    ],
    "category": "かざんポケモン",
    "height": 0.9,
    "weight": 19,
    "abilities": [
      {
        "name": "もうか",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "もらいび",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 58,
      "attack": 64,
      "defense": 58,
      "specialAttack": 80,
      "specialDefense": 65,
      "speed": 80
    },
    "flavorText": "ほのおの いきおいと ねっぷうで いかくする。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/156.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/156.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/156.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 156,
        "name": "マグマラシ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png"
      },
      {
        "pokemonId": 157,
        "name": "バクフーン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png",
        "condition": "Level 36"
      }
    ]
  },
  {
    "id": 157,
    "pokedexNumber": 157,
    "name": {
      "ja": "バクフーン",
      "en": "Typhlosion",
      "kana": "バクフーン",
      "romaji": "Bakphoon"
    },
    "generation": 2,
    "types": [
      "fire"
    ],
    "category": "かざんポケモン",
    "height": 1.7,
    "weight": 79.5,
    "abilities": [
      {
        "name": "もうか",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "もらいび",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "specialAttack": 109,
      "specialDefense": 85,
      "speed": 100
    },
    "flavorText": "しゃくねつの ほのおで まわりに かげろうを",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/157.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/157.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/157.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 157,
        "name": "バクフーン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png"
      }
    ]
  },
  {
    "id": 158,
    "pokedexNumber": 158,
    "name": {
      "ja": "ワニノコ",
      "en": "Totodile",
      "kana": "ワニノコ",
      "romaji": "Waninoko"
    },
    "generation": 2,
    "types": [
      "water"
    ],
    "category": "おおあごポケモン",
    "height": 0.6,
    "weight": 9.5,
    "abilities": [
      {
        "name": "げきりゅう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ちからずく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 50,
      "attack": 65,
      "defense": 64,
      "specialAttack": 44,
      "specialDefense": 48,
      "speed": 43
    },
    "flavorText": "ちいさな からだでも アゴの ちからは つよい。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/158.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/158.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/158.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 158,
        "name": "ワニノコ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png"
      },
      {
        "pokemonId": 159,
        "name": "アリゲイツ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png",
        "condition": "Level 18"
      }
    ]
  },
  {
    "id": 159,
    "pokedexNumber": 159,
    "name": {
      "ja": "アリゲイツ",
      "en": "Croconaw",
      "kana": "アリゲイツ",
      "romaji": "Alligates"
    },
    "generation": 2,
    "types": [
      "water"
    ],
    "category": "おおあごポケモン",
    "height": 1.1,
    "weight": 25,
    "abilities": [
      {
        "name": "げきりゅう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ちからずく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 65,
      "attack": 80,
      "defense": 80,
      "specialAttack": 59,
      "specialDefense": 63,
      "speed": 58
    },
    "flavorText": "いちど かみついたら ぜったいに はなさない。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/159.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/159.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/159.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 159,
        "name": "アリゲイツ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png"
      },
      {
        "pokemonId": 160,
        "name": "オーダイル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png",
        "condition": "Level 30"
      }
    ]
  },
  {
    "id": 160,
    "pokedexNumber": 160,
    "name": {
      "ja": "オーダイル",
      "en": "Feraligatr",
      "kana": "オーダイル",
      "romaji": "Ordile"
    },
    "generation": 2,
    "types": [
      "water"
    ],
    "category": "おおあごポケモン",
    "height": 2.3,
    "weight": 88.8,
    "abilities": [
      {
        "name": "げきりゅう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ちからずく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 85,
      "attack": 105,
      "defense": 100,
      "specialAttack": 79,
      "specialDefense": 83,
      "speed": 78
    },
    "flavorText": "おおきな くちを あけて あいてを いかくする。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/160.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/160.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/160.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 160,
        "name": "オーダイル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png"
      }
    ]
  },
  {
    "id": 161,
    "pokedexNumber": 161,
    "name": {
      "ja": "オタチ",
      "en": "Sentret",
      "kana": "オタチ",
      "romaji": "Otachi"
    },
    "generation": 2,
    "types": [
      "normal"
    ],
    "category": "みはりポケモン",
    "height": 0.8,
    "weight": 6,
    "abilities": [
      {
        "name": "にげあし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "するどいめ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "おみとおし",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 35,
      "attack": 46,
      "defense": 34,
      "specialAttack": 35,
      "specialDefense": 45,
      "speed": 20
    },
    "flavorText": "ねむる ときには こうたいで みはりをする。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/161.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/161.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/161.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 161,
        "name": "オタチ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png"
      },
      {
        "pokemonId": 162,
        "name": "オオタチ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png",
        "condition": "Level 15"
      }
    ]
  },
  {
    "id": 162,
    "pokedexNumber": 162,
    "name": {
      "ja": "オオタチ",
      "en": "Furret",
      "kana": "オオタチ",
      "romaji": "Ootachi"
    },
    "generation": 2,
    "types": [
      "normal"
    ],
    "category": "どうながポケモン",
    "height": 1.8,
    "weight": 32.5,
    "abilities": [
      {
        "name": "にげあし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "するどいめ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "おみとおし",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 85,
      "attack": 76,
      "defense": 64,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 90
    },
    "flavorText": "てきに おそわれても ほそい すきまに",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/162.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/162.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/162.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 162,
        "name": "オオタチ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png"
      }
    ]
  },
  {
    "id": 163,
    "pokedexNumber": 163,
    "name": {
      "ja": "ホーホー",
      "en": "Hoothoot",
      "kana": "ホーホー",
      "romaji": "Hoho"
    },
    "generation": 2,
    "types": [
      "normal",
      "flying"
    ],
    "category": "ふくろうポケモン",
    "height": 0.7,
    "weight": 21.2,
    "abilities": [
      {
        "name": "ふみん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "するどいめ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "いろめがね",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 30,
      "defense": 30,
      "specialAttack": 36,
      "specialDefense": 56,
      "speed": 50
    },
    "flavorText": "からだの なかには ちきゅうの じてんを",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/163.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/163.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/163.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 163,
        "name": "ホーホー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png"
      },
      {
        "pokemonId": 164,
        "name": "ヨルノズク",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png",
        "condition": "Level 20"
      }
    ]
  },
  {
    "id": 164,
    "pokedexNumber": 164,
    "name": {
      "ja": "ヨルノズク",
      "en": "Noctowl",
      "kana": "ヨルノズク",
      "romaji": "Yorunozuku"
    },
    "generation": 2,
    "types": [
      "normal",
      "flying"
    ],
    "category": "ふくろうポケモン",
    "height": 1.6,
    "weight": 40.8,
    "abilities": [
      {
        "name": "ふみん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "するどいめ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "いろめがね",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 100,
      "attack": 50,
      "defense": 50,
      "specialAttack": 86,
      "specialDefense": 96,
      "speed": 70
    },
    "flavorText": "わずかな ひかりでも みえる すぐれた めと",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/164.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/164.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/164.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 164,
        "name": "ヨルノズク",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png"
      }
    ]
  },
  {
    "id": 165,
    "pokedexNumber": 165,
    "name": {
      "ja": "レディバ",
      "en": "Ledyba",
      "kana": "レディバ",
      "romaji": "Rediba"
    },
    "generation": 2,
    "types": [
      "bug",
      "flying"
    ],
    "category": "いつつぼしポケモン",
    "height": 1,
    "weight": 10.8,
    "abilities": [
      {
        "name": "むしのしらせ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はやおき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "びびり",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 40,
      "attack": 20,
      "defense": 30,
      "specialAttack": 40,
      "specialDefense": 80,
      "speed": 55
    },
    "flavorText": "あしの つけねから だす えきたいの においで",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/165.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/165.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/165.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 165,
        "name": "レディバ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png"
      },
      {
        "pokemonId": 166,
        "name": "レディアン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png",
        "condition": "Level 18"
      }
    ]
  },
  {
    "id": 166,
    "pokedexNumber": 166,
    "name": {
      "ja": "レディアン",
      "en": "Ledian",
      "kana": "レディアン",
      "romaji": "Redian"
    },
    "generation": 2,
    "types": [
      "bug",
      "flying"
    ],
    "category": "いつつぼしポケモン",
    "height": 1.4,
    "weight": 35.6,
    "abilities": [
      {
        "name": "むしのしらせ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はやおき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "てつのこぶし",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 55,
      "attack": 35,
      "defense": 50,
      "specialAttack": 55,
      "specialDefense": 110,
      "speed": 85
    },
    "flavorText": "ほしが たくさん みえる くうきの きれいな",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/166.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/166.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/166.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 166,
        "name": "レディアン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png"
      }
    ]
  },
  {
    "id": 167,
    "pokedexNumber": 167,
    "name": {
      "ja": "イトマル",
      "en": "Spinarak",
      "kana": "イトマル",
      "romaji": "Itomaru"
    },
    "generation": 2,
    "types": [
      "bug",
      "poison"
    ],
    "category": "いとはきポケモン",
    "height": 0.5,
    "weight": 8.5,
    "abilities": [
      {
        "name": "むしのしらせ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ふみん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "スナイパー",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 40,
      "attack": 60,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 30
    },
    "flavorText": "いとで つくった ワナは だい２の しんけい。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/167.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/167.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/167.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 167,
        "name": "イトマル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png"
      },
      {
        "pokemonId": 168,
        "name": "アリアドス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png",
        "condition": "Level 22"
      }
    ]
  },
  {
    "id": 168,
    "pokedexNumber": 168,
    "name": {
      "ja": "アリアドス",
      "en": "Ariados",
      "kana": "アリアドス",
      "romaji": "Ariados"
    },
    "generation": 2,
    "types": [
      "bug",
      "poison"
    ],
    "category": "あしながポケモン",
    "height": 1.1,
    "weight": 33.5,
    "abilities": [
      {
        "name": "むしのしらせ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ふみん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "スナイパー",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 70,
      "attack": 90,
      "defense": 70,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 40
    },
    "flavorText": "あしの せんたんには ちいさな カギヅメが あり",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/168.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/168.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/168.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 168,
        "name": "アリアドス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png"
      }
    ]
  },
  {
    "id": 169,
    "pokedexNumber": 169,
    "name": {
      "ja": "クロバット",
      "en": "Crobat",
      "kana": "クロバット",
      "romaji": "Crobat"
    },
    "generation": 2,
    "types": [
      "poison",
      "flying"
    ],
    "category": "こうもりポケモン",
    "height": 1.8,
    "weight": 75,
    "abilities": [
      {
        "name": "せいしんりょく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "すりぬけ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 85,
      "attack": 90,
      "defense": 80,
      "specialAttack": 70,
      "specialDefense": 80,
      "speed": 130
    },
    "flavorText": "うでか あしの どちらかだけで はばたいている",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/169.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/169.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/169.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 169,
        "name": "クロバット",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png"
      }
    ]
  },
  {
    "id": 170,
    "pokedexNumber": 170,
    "name": {
      "ja": "チョンチー",
      "en": "Chinchou",
      "kana": "チョンチー",
      "romaji": "Chonchie"
    },
    "generation": 2,
    "types": [
      "water",
      "electric"
    ],
    "category": "あんこうポケモン",
    "height": 0.5,
    "weight": 12,
    "abilities": [
      {
        "name": "ちくでん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はっこう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ちょすい",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 75,
      "attack": 38,
      "defense": 38,
      "specialAttack": 56,
      "specialDefense": 56,
      "speed": 67
    },
    "flavorText": "２ほんの しょくしゅから プラスと マイナスの",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/170.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/170.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/170.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 170,
        "name": "チョンチー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png"
      },
      {
        "pokemonId": 171,
        "name": "ランターン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png",
        "condition": "Level 27"
      }
    ]
  },
  {
    "id": 171,
    "pokedexNumber": 171,
    "name": {
      "ja": "ランターン",
      "en": "Lanturn",
      "kana": "ランターン",
      "romaji": "Lantern"
    },
    "generation": 2,
    "types": [
      "water",
      "electric"
    ],
    "category": "ライトポケモン",
    "height": 1.2,
    "weight": 22.5,
    "abilities": [
      {
        "name": "ちくでん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はっこう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ちょすい",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 125,
      "attack": 58,
      "defense": 58,
      "specialAttack": 76,
      "specialDefense": 76,
      "speed": 67
    },
    "flavorText": "よなかに ふねから くらい うみを のぞきこむと",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/171.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/171.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/171.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 171,
        "name": "ランターン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png"
      }
    ]
  },
  {
    "id": 172,
    "pokedexNumber": 172,
    "name": {
      "ja": "ピチュー",
      "en": "Pichu",
      "kana": "ピチュー",
      "romaji": "Pichu"
    },
    "generation": 2,
    "types": [
      "electric"
    ],
    "category": "こねずみポケモン",
    "height": 0.3,
    "weight": 2,
    "abilities": [
      {
        "name": "せいでんき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ひらいしん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 20,
      "attack": 40,
      "defense": 15,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 60
    },
    "flavorText": "なかまと あそんでいるとき おたがいの でんきが",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/172.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/172.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 172,
        "name": "ピチュー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png"
      },
      {
        "pokemonId": 25,
        "name": "ピカチュウ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        "condition": "high Friendship"
      }
    ]
  },
  {
    "id": 173,
    "pokedexNumber": 173,
    "name": {
      "ja": "ピィ",
      "en": "Cleffa",
      "kana": "ピィ",
      "romaji": "Py"
    },
    "generation": 2,
    "types": [
      "fairy"
    ],
    "category": "ほしがたポケモン",
    "height": 0.3,
    "weight": 3,
    "abilities": [
      {
        "name": "メロメロボディ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "マジックガード",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "フレンドガード",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 50,
      "attack": 25,
      "defense": 28,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 15
    },
    "flavorText": "ながれぼしの おおい よるは わ に なって",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/173.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/173.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/173.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 173,
        "name": "ピィ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png"
      },
      {
        "pokemonId": 35,
        "name": "ピッピ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
        "condition": "high Friendship"
      }
    ]
  },
  {
    "id": 174,
    "pokedexNumber": 174,
    "name": {
      "ja": "ププリン",
      "en": "Igglybuff",
      "kana": "ププリン",
      "romaji": "Pupurin"
    },
    "generation": 2,
    "types": [
      "normal",
      "fairy"
    ],
    "category": "ふうせんポケモン",
    "height": 0.3,
    "weight": 1,
    "abilities": [
      {
        "name": "メロメロボディ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "かちき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "フレンドガード",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 90,
      "attack": 30,
      "defense": 15,
      "specialAttack": 40,
      "specialDefense": 20,
      "speed": 15
    },
    "flavorText": "マシュマロ みたいな さわりごこちの からだから",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/174.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/174.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/174.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 174,
        "name": "ププリン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png"
      },
      {
        "pokemonId": 39,
        "name": "プリン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
        "condition": "high Friendship"
      }
    ]
  },
  {
    "id": 175,
    "pokedexNumber": 175,
    "name": {
      "ja": "トゲピー",
      "en": "Togepi",
      "kana": "トゲピー",
      "romaji": "Togepy"
    },
    "generation": 2,
    "types": [
      "fairy"
    ],
    "category": "はりたまポケモン",
    "height": 0.3,
    "weight": 1.5,
    "abilities": [
      {
        "name": "はりきり",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "てんのめぐみ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "きょううん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 35,
      "attack": 20,
      "defense": 65,
      "specialAttack": 40,
      "specialDefense": 65,
      "speed": 20
    },
    "flavorText": "ひとや ポケモンが はっしている やさしさや",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/175.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/175.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/175.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 175,
        "name": "トゲピー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png"
      },
      {
        "pokemonId": 176,
        "name": "トゲチック",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png",
        "condition": "high Friendship"
      }
    ]
  },
  {
    "id": 176,
    "pokedexNumber": 176,
    "name": {
      "ja": "トゲチック",
      "en": "Togetic",
      "kana": "トゲチック",
      "romaji": "Togechick"
    },
    "generation": 2,
    "types": [
      "fairy",
      "flying"
    ],
    "category": "しあわせポケモン",
    "height": 0.6,
    "weight": 3.2,
    "abilities": [
      {
        "name": "はりきり",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "てんのめぐみ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "きょううん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 55,
      "attack": 40,
      "defense": 85,
      "specialAttack": 80,
      "specialDefense": 105,
      "speed": 40
    },
    "flavorText": "こううんを もたらす ポケモンと いわれている。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/176.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/176.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/176.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 176,
        "name": "トゲチック",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png"
      },
      {
        "pokemonId": 468,
        "name": "トゲキッス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png",
        "condition": "use Shiny Stone"
      }
    ]
  },
  {
    "id": 177,
    "pokedexNumber": 177,
    "name": {
      "ja": "ネイティ",
      "en": "Natu",
      "kana": "ネイティ",
      "romaji": "Naty"
    },
    "generation": 2,
    "types": [
      "psychic",
      "flying"
    ],
    "category": "ことりポケモン",
    "height": 0.2,
    "weight": 2,
    "abilities": [
      {
        "name": "シンクロ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はやおき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "マジックミラー",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 40,
      "attack": 50,
      "defense": 45,
      "specialAttack": 70,
      "specialDefense": 45,
      "speed": 70
    },
    "flavorText": "はねが まだ そだって いないので とべない。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/177.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/177.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/177.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 177,
        "name": "ネイティ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png"
      },
      {
        "pokemonId": 178,
        "name": "ネイティオ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png",
        "condition": "Level 25"
      }
    ]
  },
  {
    "id": 178,
    "pokedexNumber": 178,
    "name": {
      "ja": "ネイティオ",
      "en": "Xatu",
      "kana": "ネイティオ",
      "romaji": "Natio"
    },
    "generation": 2,
    "types": [
      "psychic",
      "flying"
    ],
    "category": "せいれいポケモン",
    "height": 1.5,
    "weight": 15,
    "abilities": [
      {
        "name": "シンクロ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はやおき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "マジックミラー",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 65,
      "attack": 75,
      "defense": 70,
      "specialAttack": 95,
      "specialDefense": 70,
      "speed": 95
    },
    "flavorText": "いちにちじゅう ネイティオが じっとしているのは",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/178.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/178.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/178.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 178,
        "name": "ネイティオ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png"
      }
    ]
  },
  {
    "id": 179,
    "pokedexNumber": 179,
    "name": {
      "ja": "メリープ",
      "en": "Mareep",
      "kana": "メリープ",
      "romaji": "Merriep"
    },
    "generation": 2,
    "types": [
      "electric"
    ],
    "category": "わたげポケモン",
    "height": 0.6,
    "weight": 7.8,
    "abilities": [
      {
        "name": "せいでんき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "プラス",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 55,
      "attack": 40,
      "defense": 40,
      "specialAttack": 65,
      "specialDefense": 45,
      "speed": 35
    },
    "flavorText": "たいもうが こすれて せいでんきが たまる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/179.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/179.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/179.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 179,
        "name": "メリープ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png"
      },
      {
        "pokemonId": 180,
        "name": "モココ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png",
        "condition": "Level 15"
      }
    ]
  },
  {
    "id": 180,
    "pokedexNumber": 180,
    "name": {
      "ja": "モココ",
      "en": "Flaaffy",
      "kana": "モココ",
      "romaji": "Mokoko"
    },
    "generation": 2,
    "types": [
      "electric"
    ],
    "category": "わたげポケモン",
    "height": 0.8,
    "weight": 13.3,
    "abilities": [
      {
        "name": "せいでんき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "プラス",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 70,
      "attack": 55,
      "defense": 55,
      "specialAttack": 80,
      "specialDefense": 60,
      "speed": 45
    },
    "flavorText": "たいもうの せいしつが へんかするので すくない",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/180.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/180.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/180.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 180,
        "name": "モココ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png"
      },
      {
        "pokemonId": 181,
        "name": "デンリュウ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png",
        "condition": "Level 30"
      }
    ]
  },
  {
    "id": 181,
    "pokedexNumber": 181,
    "name": {
      "ja": "デンリュウ",
      "en": "Ampharos",
      "kana": "デンリュウ",
      "romaji": "Denryu"
    },
    "generation": 2,
    "types": [
      "electric"
    ],
    "category": "ライトポケモン",
    "height": 1.4,
    "weight": 61.5,
    "abilities": [
      {
        "name": "せいでんき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "プラス",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 90,
      "attack": 75,
      "defense": 85,
      "specialAttack": 115,
      "specialDefense": 90,
      "speed": 55
    },
    "flavorText": "デンリュウの あかりは うちゅうからも みえる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/181.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/181.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/181.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 181,
        "name": "デンリュウ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png"
      }
    ]
  },
  {
    "id": 182,
    "pokedexNumber": 182,
    "name": {
      "ja": "キレイハナ",
      "en": "Bellossom",
      "kana": "キレイハナ",
      "romaji": "Kireihana"
    },
    "generation": 2,
    "types": [
      "grass"
    ],
    "category": "フラワーポケモン",
    "height": 0.4,
    "weight": 5.8,
    "abilities": [
      {
        "name": "ようりょくそ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "いやしのこころ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 75,
      "attack": 80,
      "defense": 95,
      "specialAttack": 90,
      "specialDefense": 100,
      "speed": 50
    },
    "flavorText": "より くさい クサイハナから しんかした ほうが",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/182.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/182.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/182.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 182,
        "name": "キレイハナ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png"
      }
    ]
  },
  {
    "id": 183,
    "pokedexNumber": 183,
    "name": {
      "ja": "マリル",
      "en": "Marill",
      "kana": "マリル",
      "romaji": "Maril"
    },
    "generation": 2,
    "types": [
      "water",
      "fairy"
    ],
    "category": "みずねずみポケモン",
    "height": 0.4,
    "weight": 8.5,
    "abilities": [
      {
        "name": "あついしぼう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ちからもち",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "そうしょく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 70,
      "attack": 20,
      "defense": 50,
      "specialAttack": 20,
      "specialDefense": 50,
      "speed": 40
    },
    "flavorText": "あぶらの つまった しっぽは うきわの かわり。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/183.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/183.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/183.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 183,
        "name": "マリル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png"
      },
      {
        "pokemonId": 184,
        "name": "マリルリ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png",
        "condition": "Level 18"
      }
    ]
  },
  {
    "id": 184,
    "pokedexNumber": 184,
    "name": {
      "ja": "マリルリ",
      "en": "Azumarill",
      "kana": "マリルリ",
      "romaji": "Marilli"
    },
    "generation": 2,
    "types": [
      "water",
      "fairy"
    ],
    "category": "みずうさぎポケモン",
    "height": 0.8,
    "weight": 28.5,
    "abilities": [
      {
        "name": "あついしぼう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ちからもち",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "そうしょく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 100,
      "attack": 50,
      "defense": 80,
      "specialAttack": 60,
      "specialDefense": 80,
      "speed": 50
    },
    "flavorText": "ながい みみは マリルリの だいじな センサー。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/184.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/184.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/184.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 184,
        "name": "マリルリ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png"
      }
    ]
  },
  {
    "id": 185,
    "pokedexNumber": 185,
    "name": {
      "ja": "ウソッキー",
      "en": "Sudowoodo",
      "kana": "ウソッキー",
      "romaji": "Usokkie"
    },
    "generation": 2,
    "types": [
      "rock"
    ],
    "category": "まねポケモン",
    "height": 1.2,
    "weight": 38,
    "abilities": [
      {
        "name": "がんじょう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "いしあたま",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "びびり",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 70,
      "attack": 100,
      "defense": 115,
      "specialAttack": 30,
      "specialDefense": 65,
      "speed": 30
    },
    "flavorText": "てきに おそわれない ように きの ふりをする。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/185.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/185.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/185.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 185,
        "name": "ウソッキー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png"
      }
    ]
  },
  {
    "id": 186,
    "pokedexNumber": 186,
    "name": {
      "ja": "ニョロトノ",
      "en": "Politoed",
      "kana": "ニョロトノ",
      "romaji": "Nyorotono"
    },
    "generation": 2,
    "types": [
      "water"
    ],
    "category": "かえるポケモン",
    "height": 1.1,
    "weight": 33.9,
    "abilities": [
      {
        "name": "ちょすい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "しめりけ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "あめふらし",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 90,
      "attack": 75,
      "defense": 75,
      "specialAttack": 90,
      "specialDefense": 100,
      "speed": 70
    },
    "flavorText": "あたまの まきげは おうじゃの あかしだ。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/186.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/186.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/186.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 186,
        "name": "ニョロトノ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png"
      }
    ]
  },
  {
    "id": 187,
    "pokedexNumber": 187,
    "name": {
      "ja": "ハネッコ",
      "en": "Hoppip",
      "kana": "ハネッコ",
      "romaji": "Hanecco"
    },
    "generation": 2,
    "types": [
      "grass",
      "flying"
    ],
    "category": "わたくさポケモン",
    "height": 0.4,
    "weight": 0.5,
    "abilities": [
      {
        "name": "ようりょくそ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "リーフガード",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "すりぬけ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 35,
      "attack": 35,
      "defense": 40,
      "specialAttack": 35,
      "specialDefense": 55,
      "speed": 50
    },
    "flavorText": "かぜに のって ふわふわ ただよう ポケモン。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/187.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/187.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/187.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 187,
        "name": "ハネッコ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png"
      },
      {
        "pokemonId": 188,
        "name": "ポポッコ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png",
        "condition": "Level 18"
      }
    ]
  },
  {
    "id": 188,
    "pokedexNumber": 188,
    "name": {
      "ja": "ポポッコ",
      "en": "Skiploom",
      "kana": "ポポッコ",
      "romaji": "Popocco"
    },
    "generation": 2,
    "types": [
      "grass",
      "flying"
    ],
    "category": "わたくさポケモン",
    "height": 0.6,
    "weight": 1,
    "abilities": [
      {
        "name": "ようりょくそ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "リーフガード",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "すりぬけ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 55,
      "attack": 45,
      "defense": 50,
      "specialAttack": 45,
      "specialDefense": 65,
      "speed": 80
    },
    "flavorText": "きおんが １８どを こえると はなが ひらく。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/188.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/188.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/188.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 188,
        "name": "ポポッコ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png"
      },
      {
        "pokemonId": 189,
        "name": "ワタッコ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png",
        "condition": "Level 27"
      }
    ]
  },
  {
    "id": 189,
    "pokedexNumber": 189,
    "name": {
      "ja": "ワタッコ",
      "en": "Jumpluff",
      "kana": "ワタッコ",
      "romaji": "Watacco"
    },
    "generation": 2,
    "types": [
      "grass",
      "flying"
    ],
    "category": "わたくさポケモン",
    "height": 0.8,
    "weight": 3,
    "abilities": [
      {
        "name": "ようりょくそ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "リーフガード",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "すりぬけ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 75,
      "attack": 55,
      "defense": 70,
      "specialAttack": 55,
      "specialDefense": 95,
      "speed": 110
    },
    "flavorText": "あたたかい みなみかぜに のって うみを こえ",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/189.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/189.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/189.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 189,
        "name": "ワタッコ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png"
      }
    ]
  },
  {
    "id": 190,
    "pokedexNumber": 190,
    "name": {
      "ja": "エイパム",
      "en": "Aipom",
      "kana": "エイパム",
      "romaji": "Eipam"
    },
    "generation": 2,
    "types": [
      "normal"
    ],
    "category": "おながポケモン",
    "height": 0.8,
    "weight": 11.5,
    "abilities": [
      {
        "name": "にげあし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ものひろい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "スキルリンク",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 55,
      "attack": 70,
      "defense": 55,
      "specialAttack": 40,
      "specialDefense": 55,
      "speed": 85
    },
    "flavorText": "きように うごく しっぽの さきを てのひらの",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/190.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/190.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/190.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 190,
        "name": "エイパム",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png"
      },
      {
        "pokemonId": 424,
        "name": "エテボース",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png",
        "condition": "after Double Hit learned"
      }
    ]
  },
  {
    "id": 191,
    "pokedexNumber": 191,
    "name": {
      "ja": "ヒマナッツ",
      "en": "Sunkern",
      "kana": "ヒマナッツ",
      "romaji": "Himanuts"
    },
    "generation": 2,
    "types": [
      "grass"
    ],
    "category": "たねポケモン",
    "height": 0.3,
    "weight": 1.8,
    "abilities": [
      {
        "name": "ようりょくそ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "サンパワー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はやおき",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 30,
      "attack": 30,
      "defense": 30,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 30
    },
    "flavorText": "からだに ためた えいようは しんかの ときまで",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/191.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/191.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/191.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 191,
        "name": "ヒマナッツ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png"
      },
      {
        "pokemonId": 192,
        "name": "キマワリ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png",
        "condition": "use Sun Stone"
      }
    ]
  },
  {
    "id": 192,
    "pokedexNumber": 192,
    "name": {
      "ja": "キマワリ",
      "en": "Sunflora",
      "kana": "キマワリ",
      "romaji": "Kimawari"
    },
    "generation": 2,
    "types": [
      "grass"
    ],
    "category": "たいようポケモン",
    "height": 0.8,
    "weight": 8.5,
    "abilities": [
      {
        "name": "ようりょくそ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "サンパワー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はやおき",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 75,
      "attack": 75,
      "defense": 55,
      "specialAttack": 105,
      "specialDefense": 85,
      "speed": 30
    },
    "flavorText": "たいようエネルギーから えいようを つくりだす。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/192.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/192.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/192.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 192,
        "name": "キマワリ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png"
      }
    ]
  },
  {
    "id": 193,
    "pokedexNumber": 193,
    "name": {
      "ja": "ヤンヤンマ",
      "en": "Yanma",
      "kana": "ヤンヤンマ",
      "romaji": "Yanyanma"
    },
    "generation": 2,
    "types": [
      "bug",
      "flying"
    ],
    "category": "うすばねポケモン",
    "height": 1.2,
    "weight": 38,
    "abilities": [
      {
        "name": "かそく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ふくがん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "おみとおし",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 65,
      "attack": 65,
      "defense": 45,
      "specialAttack": 75,
      "specialDefense": 45,
      "speed": 95
    },
    "flavorText": "めだまを うごかさずに ３６０ど みわたせる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/193.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/193.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/193.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 193,
        "name": "ヤンヤンマ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png"
      },
      {
        "pokemonId": 469,
        "name": "メガヤンマ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/469.png",
        "condition": "after Ancient Power learned"
      }
    ]
  },
  {
    "id": 194,
    "pokedexNumber": 194,
    "name": {
      "ja": "ウパー",
      "en": "Wooper",
      "kana": "ウパー",
      "romaji": "Upah"
    },
    "generation": 2,
    "types": [
      "water",
      "ground"
    ],
    "category": "みずうおポケモン",
    "height": 0.4,
    "weight": 8.5,
    "abilities": [
      {
        "name": "しめりけ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ちょすい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "てんねん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 55,
      "attack": 45,
      "defense": 45,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 15
    },
    "flavorText": "ふだんは みずの なかで くらしているが エサを",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/194.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/194.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/194.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 194,
        "name": "ウパー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png"
      },
      {
        "pokemonId": 195,
        "name": "ヌオー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png",
        "condition": "Level 20"
      }
    ]
  },
  {
    "id": 195,
    "pokedexNumber": 195,
    "name": {
      "ja": "ヌオー",
      "en": "Quagsire",
      "kana": "ヌオー",
      "romaji": "Nuoh"
    },
    "generation": 2,
    "types": [
      "water",
      "ground"
    ],
    "category": "みずうおポケモン",
    "height": 1.4,
    "weight": 75,
    "abilities": [
      {
        "name": "しめりけ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ちょすい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "てんねん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 95,
      "attack": 85,
      "defense": 85,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 35
    },
    "flavorText": "みずの なかで くちを あけて エサが ぐうぜん",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/195.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/195.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/195.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 195,
        "name": "ヌオー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png"
      }
    ]
  },
  {
    "id": 196,
    "pokedexNumber": 196,
    "name": {
      "ja": "エーフィ",
      "en": "Espeon",
      "kana": "エーフィ",
      "romaji": "Eifie"
    },
    "generation": 2,
    "types": [
      "psychic"
    ],
    "category": "たいようポケモン",
    "height": 0.9,
    "weight": 26.5,
    "abilities": [
      {
        "name": "シンクロ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "マジックミラー",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 65,
      "attack": 65,
      "defense": 60,
      "specialAttack": 130,
      "specialDefense": 95,
      "speed": 110
    },
    "flavorText": "みとめた トレーナーには きわめて ちゅうじつ。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/196.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/196.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/196.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 196,
        "name": "エーフィ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png"
      }
    ]
  },
  {
    "id": 197,
    "pokedexNumber": 197,
    "name": {
      "ja": "ブラッキー",
      "en": "Umbreon",
      "kana": "ブラッキー",
      "romaji": "Bracky"
    },
    "generation": 2,
    "types": [
      "dark"
    ],
    "category": "げっこうポケモン",
    "height": 1,
    "weight": 27,
    "abilities": [
      {
        "name": "シンクロ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "せいしんりょく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 95,
      "attack": 65,
      "defense": 110,
      "specialAttack": 60,
      "specialDefense": 130,
      "speed": 65
    },
    "flavorText": "つきの はどうを うけて しんかした ポケモン。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/197.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/197.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 197,
        "name": "ブラッキー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png"
      }
    ]
  },
  {
    "id": 198,
    "pokedexNumber": 198,
    "name": {
      "ja": "ヤミカラス",
      "en": "Murkrow",
      "kana": "ヤミカラス",
      "romaji": "Yamikarasu"
    },
    "generation": 2,
    "types": [
      "dark",
      "flying"
    ],
    "category": "くらやみポケモン",
    "height": 0.5,
    "weight": 2.1,
    "abilities": [
      {
        "name": "ふみん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "きょううん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "いたずらごころ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 85,
      "defense": 42,
      "specialAttack": 85,
      "specialDefense": 42,
      "speed": 91
    },
    "flavorText": "ふこうを はこぶと いわれ おそれられていた。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/198.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/198.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/198.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 198,
        "name": "ヤミカラス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png"
      },
      {
        "pokemonId": 430,
        "name": "ドンカラス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/430.png",
        "condition": "use Dusk Stone"
      }
    ]
  },
  {
    "id": 199,
    "pokedexNumber": 199,
    "name": {
      "ja": "ヤドキング",
      "en": "Slowking",
      "kana": "ヤドキング",
      "romaji": "Yadoking"
    },
    "generation": 2,
    "types": [
      "water",
      "psychic"
    ],
    "category": "おうじゃポケモン",
    "height": 2,
    "weight": 79.5,
    "abilities": [
      {
        "name": "どんかん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "マイペース",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "さいせいりょく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 95,
      "attack": 75,
      "defense": 80,
      "specialAttack": 100,
      "specialDefense": 110,
      "speed": 30
    },
    "flavorText": "せかいの ふしぎを かいめい するため まいにち",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/199.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/199.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/199.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 199,
        "name": "ヤドキング",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png"
      }
    ]
  },
  {
    "id": 200,
    "pokedexNumber": 200,
    "name": {
      "ja": "ムウマ",
      "en": "Misdreavus",
      "kana": "ムウマ",
      "romaji": "Muma"
    },
    "generation": 2,
    "types": [
      "ghost"
    ],
    "category": "よなきポケモン",
    "height": 0.7,
    "weight": 1,
    "abilities": [
      {
        "name": "ふゆう",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "specialAttack": 85,
      "specialDefense": 85,
      "speed": 85
    },
    "flavorText": "すすりなく ような なきごえで こわがらせる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/200.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/200.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/200.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 200,
        "name": "ムウマ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png"
      },
      {
        "pokemonId": 429,
        "name": "ムウマージ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png",
        "condition": "use Dusk Stone"
      }
    ]
  },
  {
    "id": 201,
    "pokedexNumber": 201,
    "name": {
      "ja": "アンノーン",
      "en": "Unown",
      "kana": "アンノーン",
      "romaji": "Unknown"
    },
    "generation": 2,
    "types": [
      "psychic"
    ],
    "category": "シンボルポケモン",
    "height": 0.5,
    "weight": 5,
    "abilities": [
      {
        "name": "ふゆう",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 48,
      "attack": 72,
      "defense": 48,
      "specialAttack": 72,
      "specialDefense": 48,
      "speed": 48
    },
    "flavorText": "こだいの もじに にた すがたの ポケモン。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/201.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/201.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/201.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 201,
        "name": "アンノーン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png"
      }
    ]
  },
  {
    "id": 202,
    "pokedexNumber": 202,
    "name": {
      "ja": "ソーナンス",
      "en": "Wobbuffet",
      "kana": "ソーナンス",
      "romaji": "Sonans"
    },
    "generation": 2,
    "types": [
      "psychic"
    ],
    "category": "がまんポケモン",
    "height": 1.3,
    "weight": 28.5,
    "abilities": [
      {
        "name": "かげふみ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "テレパシー",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 190,
      "attack": 33,
      "defense": 58,
      "specialAttack": 33,
      "specialDefense": 58,
      "speed": 33
    },
    "flavorText": "２ひき いじょう あつまると がまん くらべを",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/202.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/202.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/202.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 202,
        "name": "ソーナンス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png"
      }
    ]
  },
  {
    "id": 203,
    "pokedexNumber": 203,
    "name": {
      "ja": "キリンリキ",
      "en": "Girafarig",
      "kana": "キリンリキ",
      "romaji": "Kirinriki"
    },
    "generation": 2,
    "types": [
      "normal",
      "psychic"
    ],
    "category": "くびながポケモン",
    "height": 1.5,
    "weight": 41.5,
    "abilities": [
      {
        "name": "せいしんりょく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はやおき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "そうしょく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 70,
      "attack": 80,
      "defense": 65,
      "specialAttack": 90,
      "specialDefense": 65,
      "speed": 85
    },
    "flavorText": "シッポの あたまにも ちいさな のうが ある。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/203.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/203.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/203.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 203,
        "name": "キリンリキ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png"
      }
    ]
  },
  {
    "id": 204,
    "pokedexNumber": 204,
    "name": {
      "ja": "クヌギダマ",
      "en": "Pineco",
      "kana": "クヌギダマ",
      "romaji": "Kunugidama"
    },
    "generation": 2,
    "types": [
      "bug"
    ],
    "category": "みのむしポケモン",
    "height": 0.6,
    "weight": 7.2,
    "abilities": [
      {
        "name": "がんじょう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ぼうじん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 50,
      "attack": 65,
      "defense": 90,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 15
    },
    "flavorText": "きの えだに ぶらさがり えものを まっている。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/204.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/204.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/204.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 204,
        "name": "クヌギダマ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png"
      },
      {
        "pokemonId": 205,
        "name": "フォレトス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png",
        "condition": "Level 31"
      }
    ]
  },
  {
    "id": 205,
    "pokedexNumber": 205,
    "name": {
      "ja": "フォレトス",
      "en": "Forretress",
      "kana": "フォレトス",
      "romaji": "Foretos"
    },
    "generation": 2,
    "types": [
      "bug",
      "steel"
    ],
    "category": "みのむしポケモン",
    "height": 1.2,
    "weight": 125.8,
    "abilities": [
      {
        "name": "がんじょう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ぼうじん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 75,
      "attack": 90,
      "defense": 140,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 40
    },
    "flavorText": "こうてつの カラの なかに ほんたいが いる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/205.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/205.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/205.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 205,
        "name": "フォレトス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png"
      }
    ]
  },
  {
    "id": 206,
    "pokedexNumber": 206,
    "name": {
      "ja": "ノコッチ",
      "en": "Dunsparce",
      "kana": "ノコッチ",
      "romaji": "Nokocchi"
    },
    "generation": 2,
    "types": [
      "normal"
    ],
    "category": "つちへびポケモン",
    "height": 1.5,
    "weight": 14,
    "abilities": [
      {
        "name": "てんのめぐみ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "にげあし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "びびり",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 100,
      "attack": 70,
      "defense": 70,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 45
    },
    "flavorText": "ドリルの シッポを つかって うしろむきに",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/206.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/206.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/206.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 206,
        "name": "ノコッチ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png"
      }
    ]
  },
  {
    "id": 207,
    "pokedexNumber": 207,
    "name": {
      "ja": "グライガー",
      "en": "Gligar",
      "kana": "グライガー",
      "romaji": "Gliger"
    },
    "generation": 2,
    "types": [
      "ground",
      "flying"
    ],
    "category": "とびさそりポケモン",
    "height": 1.1,
    "weight": 64.8,
    "abilities": [
      {
        "name": "かいりきバサミ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "すながくれ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "めんえき",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 65,
      "attack": 75,
      "defense": 105,
      "specialAttack": 35,
      "specialDefense": 65,
      "speed": 85
    },
    "flavorText": "おとを たてず すべる ように かっくうする。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/207.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/207.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/207.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 207,
        "name": "グライガー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png"
      },
      {
        "pokemonId": 472,
        "name": "グライオン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png",
        "condition": "hold Razor Fang, Nighttime"
      }
    ]
  },
  {
    "id": 208,
    "pokedexNumber": 208,
    "name": {
      "ja": "ハガネール",
      "en": "Steelix",
      "kana": "ハガネール",
      "romaji": "Haganeil"
    },
    "generation": 2,
    "types": [
      "steel",
      "ground"
    ],
    "category": "てつへびポケモン",
    "height": 9.2,
    "weight": 400,
    "abilities": [
      {
        "name": "いしあたま",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "がんじょう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ちからずく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 75,
      "attack": 85,
      "defense": 200,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 30
    },
    "flavorText": "イワークよりも ふかい ちちゅうに すんでいる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/208.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/208.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/208.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 208,
        "name": "ハガネール",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png"
      }
    ]
  },
  {
    "id": 209,
    "pokedexNumber": 209,
    "name": {
      "ja": "ブルー",
      "en": "Snubbull",
      "kana": "ブルー",
      "romaji": "Bulu"
    },
    "generation": 2,
    "types": [
      "fairy"
    ],
    "category": "ようせいポケモン",
    "height": 0.6,
    "weight": 7.8,
    "abilities": [
      {
        "name": "いかく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "にげあし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "びびり",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 80,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 30
    },
    "flavorText": "キバを むきだして こわい かおを すれば",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/209.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/209.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/209.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 209,
        "name": "ブルー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png"
      },
      {
        "pokemonId": 210,
        "name": "グランブル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png",
        "condition": "Level 23"
      }
    ]
  },
  {
    "id": 210,
    "pokedexNumber": 210,
    "name": {
      "ja": "グランブル",
      "en": "Granbull",
      "kana": "グランブル",
      "romaji": "Granbulu"
    },
    "generation": 2,
    "types": [
      "fairy"
    ],
    "category": "ようせいポケモン",
    "height": 1.4,
    "weight": 48.7,
    "abilities": [
      {
        "name": "いかく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はやあし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "びびり",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 90,
      "attack": 120,
      "defense": 75,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 45
    },
    "flavorText": "したアゴが とても はったつした ポケモン。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/210.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/210.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/210.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 210,
        "name": "グランブル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png"
      }
    ]
  },
  {
    "id": 211,
    "pokedexNumber": 211,
    "name": {
      "ja": "ハリーセン",
      "en": "Qwilfish",
      "kana": "ハリーセン",
      "romaji": "Harysen"
    },
    "generation": 2,
    "types": [
      "water",
      "poison"
    ],
    "category": "ふうせんポケモン",
    "height": 0.5,
    "weight": 3.9,
    "abilities": [
      {
        "name": "どくのトゲ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "すいすい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "いかく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 65,
      "attack": 95,
      "defense": 85,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 85
    },
    "flavorText": "のみこんだ みずの ちからを りようして",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/211.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/211.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/211.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 211,
        "name": "ハリーセン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png"
      }
    ]
  },
  {
    "id": 212,
    "pokedexNumber": 212,
    "name": {
      "ja": "ハッサム",
      "en": "Scizor",
      "kana": "ハッサム",
      "romaji": "Hassam"
    },
    "generation": 2,
    "types": [
      "bug",
      "steel"
    ],
    "category": "はさみポケモン",
    "height": 1.8,
    "weight": 118,
    "abilities": [
      {
        "name": "むしのしらせ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "テクニシャン",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ライトメタル",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 70,
      "attack": 130,
      "defense": 100,
      "specialAttack": 55,
      "specialDefense": 80,
      "speed": 65
    },
    "flavorText": "はがねの かたさを もつ からだは ちょっとや",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/212.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/212.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/212.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 212,
        "name": "ハッサム",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png"
      }
    ]
  },
  {
    "id": 213,
    "pokedexNumber": 213,
    "name": {
      "ja": "ツボツボ",
      "en": "Shuckle",
      "kana": "ツボツボ",
      "romaji": "Tsubotsubo"
    },
    "generation": 2,
    "types": [
      "bug",
      "rock"
    ],
    "category": "はっこうポケモン",
    "height": 0.6,
    "weight": 20.5,
    "abilities": [
      {
        "name": "がんじょう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "くいしんぼう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "あまのじゃく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 20,
      "attack": 10,
      "defense": 230,
      "specialAttack": 10,
      "specialDefense": 230,
      "speed": 5
    },
    "flavorText": "いわの したで こうらの なかに たくわえた",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/213.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/213.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/213.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 213,
        "name": "ツボツボ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png"
      }
    ]
  },
  {
    "id": 214,
    "pokedexNumber": 214,
    "name": {
      "ja": "ヘラクロス",
      "en": "Heracross",
      "kana": "ヘラクロス",
      "romaji": "Heracros"
    },
    "generation": 2,
    "types": [
      "bug",
      "fighting"
    ],
    "category": "１ぽんヅノポケモン",
    "height": 1.5,
    "weight": 54,
    "abilities": [
      {
        "name": "むしのしらせ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "こんじょう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "じしんかじょう",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 80,
      "attack": 125,
      "defense": 75,
      "specialAttack": 40,
      "specialDefense": 95,
      "speed": 85
    },
    "flavorText": "いっちょくせんに てきの ふところに もぐりこみ",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/214.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/214.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/214.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 214,
        "name": "ヘラクロス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png"
      }
    ]
  },
  {
    "id": 215,
    "pokedexNumber": 215,
    "name": {
      "ja": "ニューラ",
      "en": "Sneasel",
      "kana": "ニューラ",
      "romaji": "Nyula"
    },
    "generation": 2,
    "types": [
      "dark",
      "ice"
    ],
    "category": "かぎづめポケモン",
    "height": 0.9,
    "weight": 28,
    "abilities": [
      {
        "name": "せいしんりょく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "するどいめ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "わるいてぐせ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 55,
      "attack": 95,
      "defense": 55,
      "specialAttack": 35,
      "specialDefense": 75,
      "speed": 115
    },
    "flavorText": "てあしの カギヅメを つきたてて きを のぼる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/215.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/215.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/215.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 215,
        "name": "ニューラ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png"
      },
      {
        "pokemonId": 461,
        "name": "マニューラ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png",
        "condition": "hold Razor Claw, Nighttime"
      }
    ]
  },
  {
    "id": 216,
    "pokedexNumber": 216,
    "name": {
      "ja": "ヒメグマ",
      "en": "Teddiursa",
      "kana": "ヒメグマ",
      "romaji": "Himeguma"
    },
    "generation": 2,
    "types": [
      "normal"
    ],
    "category": "こぐまポケモン",
    "height": 0.6,
    "weight": 8.8,
    "abilities": [
      {
        "name": "ものひろい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はやあし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "みつあつめ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 80,
      "defense": 50,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 40
    },
    "flavorText": "ハチミツの しみこんだ てのひらを なめている。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/216.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/216.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/216.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 216,
        "name": "ヒメグマ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png"
      },
      {
        "pokemonId": 217,
        "name": "リングマ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png",
        "condition": "Level 30"
      }
    ]
  },
  {
    "id": 217,
    "pokedexNumber": 217,
    "name": {
      "ja": "リングマ",
      "en": "Ursaring",
      "kana": "リングマ",
      "romaji": "Ringuma"
    },
    "generation": 2,
    "types": [
      "normal"
    ],
    "category": "とうみんポケモン",
    "height": 1.8,
    "weight": 125.8,
    "abilities": [
      {
        "name": "こんじょう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はやあし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "きんちょうかん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 90,
      "attack": 130,
      "defense": 75,
      "specialAttack": 75,
      "specialDefense": 75,
      "speed": 55
    },
    "flavorText": "もりの なかには リングマが エサあつめを する",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/217.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/217.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/217.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 217,
        "name": "リングマ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png"
      }
    ]
  },
  {
    "id": 218,
    "pokedexNumber": 218,
    "name": {
      "ja": "マグマッグ",
      "en": "Slugma",
      "kana": "マグマッグ",
      "romaji": "Magmag"
    },
    "generation": 2,
    "types": [
      "fire"
    ],
    "category": "ようがんポケモン",
    "height": 0.7,
    "weight": 35,
    "abilities": [
      {
        "name": "マグマのよろい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ほのおのからだ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "くだけるよろい",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 40,
      "attack": 40,
      "defense": 40,
      "specialAttack": 70,
      "specialDefense": 40,
      "speed": 20
    },
    "flavorText": "からだの なかでは しゃくねつの ようがんが",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/218.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/218.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/218.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 218,
        "name": "マグマッグ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png"
      },
      {
        "pokemonId": 219,
        "name": "マグカルゴ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png",
        "condition": "Level 38"
      }
    ]
  },
  {
    "id": 219,
    "pokedexNumber": 219,
    "name": {
      "ja": "マグカルゴ",
      "en": "Magcargo",
      "kana": "マグカルゴ",
      "romaji": "Magcargot"
    },
    "generation": 2,
    "types": [
      "fire",
      "rock"
    ],
    "category": "ようがんポケモン",
    "height": 0.8,
    "weight": 55,
    "abilities": [
      {
        "name": "マグマのよろい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ほのおのからだ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "くだけるよろい",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 50,
      "defense": 120,
      "specialAttack": 90,
      "specialDefense": 80,
      "speed": 30
    },
    "flavorText": "たいおんが やく１まんども あるので あまつぶに",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/219.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/219.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/219.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 219,
        "name": "マグカルゴ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png"
      }
    ]
  },
  {
    "id": 220,
    "pokedexNumber": 220,
    "name": {
      "ja": "ウリムー",
      "en": "Swinub",
      "kana": "ウリムー",
      "romaji": "Urimoo"
    },
    "generation": 2,
    "types": [
      "ice",
      "ground"
    ],
    "category": "いのぶたポケモン",
    "height": 0.4,
    "weight": 6.5,
    "abilities": [
      {
        "name": "どんかん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ゆきがくれ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "あついしぼう",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 50,
      "attack": 50,
      "defense": 40,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 50
    },
    "flavorText": "じめんに はなを こすりつけて エサを さがす。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/220.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/220.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/220.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 220,
        "name": "ウリムー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png"
      },
      {
        "pokemonId": 221,
        "name": "イノムー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png",
        "condition": "Level 33"
      }
    ]
  },
  {
    "id": 221,
    "pokedexNumber": 221,
    "name": {
      "ja": "イノムー",
      "en": "Piloswine",
      "kana": "イノムー",
      "romaji": "Inomoo"
    },
    "generation": 2,
    "types": [
      "ice",
      "ground"
    ],
    "category": "いのししポケモン",
    "height": 1.1,
    "weight": 55.8,
    "abilities": [
      {
        "name": "どんかん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ゆきがくれ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "あついしぼう",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 100,
      "attack": 100,
      "defense": 80,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 50
    },
    "flavorText": "こごえる さむさにも たえられる ように",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/221.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/221.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/221.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 221,
        "name": "イノムー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png"
      },
      {
        "pokemonId": 473,
        "name": "マンムー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png",
        "condition": "after Ancient Power learned"
      }
    ]
  },
  {
    "id": 222,
    "pokedexNumber": 222,
    "name": {
      "ja": "サニーゴ",
      "en": "Corsola",
      "kana": "サニーゴ",
      "romaji": "Sunnygo"
    },
    "generation": 2,
    "types": [
      "water",
      "rock"
    ],
    "category": "さんごポケモン",
    "height": 0.6,
    "weight": 5,
    "abilities": [
      {
        "name": "はりきり",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "しぜんかいふく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "さいせいりょく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 65,
      "attack": 55,
      "defense": 95,
      "specialAttack": 65,
      "specialDefense": 95,
      "speed": 35
    },
    "flavorText": "サンゴの えだは たいようの ひかりを あびると",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/222.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/222.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/222.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 222,
        "name": "サニーゴ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png"
      }
    ]
  },
  {
    "id": 223,
    "pokedexNumber": 223,
    "name": {
      "ja": "テッポウオ",
      "en": "Remoraid",
      "kana": "テッポウオ",
      "romaji": "Teppouo"
    },
    "generation": 2,
    "types": [
      "water"
    ],
    "category": "ふんしゃポケモン",
    "height": 0.6,
    "weight": 12,
    "abilities": [
      {
        "name": "はりきり",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "スナイパー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ムラっけ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 35,
      "attack": 65,
      "defense": 35,
      "specialAttack": 65,
      "specialDefense": 35,
      "speed": 65
    },
    "flavorText": "のんだ みずを ふっきんを つかい いきおいよく",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/223.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/223.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/223.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 223,
        "name": "テッポウオ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png"
      },
      {
        "pokemonId": 224,
        "name": "オクタン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png",
        "condition": "Level 25"
      }
    ]
  },
  {
    "id": 224,
    "pokedexNumber": 224,
    "name": {
      "ja": "オクタン",
      "en": "Octillery",
      "kana": "オクタン",
      "romaji": "Okutank"
    },
    "generation": 2,
    "types": [
      "water"
    ],
    "category": "ふんしゃポケモン",
    "height": 0.9,
    "weight": 28.5,
    "abilities": [
      {
        "name": "きゅうばん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "スナイパー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ムラっけ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 75,
      "attack": 105,
      "defense": 75,
      "specialAttack": 105,
      "specialDefense": 75,
      "speed": 45
    },
    "flavorText": "きゅうばんの うでで あいてに からみつく。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/224.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/224.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/224.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 224,
        "name": "オクタン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png"
      }
    ]
  },
  {
    "id": 225,
    "pokedexNumber": 225,
    "name": {
      "ja": "デリバード",
      "en": "Delibird",
      "kana": "デリバード",
      "romaji": "Delibird"
    },
    "generation": 2,
    "types": [
      "ice",
      "flying"
    ],
    "category": "はこびやポケモン",
    "height": 0.9,
    "weight": 16,
    "abilities": [
      {
        "name": "やるき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はりきり",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ふみん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 45,
      "attack": 55,
      "defense": 45,
      "specialAttack": 65,
      "specialDefense": 45,
      "speed": 75
    },
    "flavorText": "しっぽで エサを つつみ もちはこぶ ポケモン。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/225.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/225.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/225.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 225,
        "name": "デリバード",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png"
      }
    ]
  },
  {
    "id": 226,
    "pokedexNumber": 226,
    "name": {
      "ja": "マンタイン",
      "en": "Mantine",
      "kana": "マンタイン",
      "romaji": "Mantain"
    },
    "generation": 2,
    "types": [
      "water",
      "flying"
    ],
    "category": "カイトポケモン",
    "height": 2.1,
    "weight": 220,
    "abilities": [
      {
        "name": "すいすい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ちょすい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "みずのベール",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 85,
      "attack": 40,
      "defense": 70,
      "specialAttack": 80,
      "specialDefense": 140,
      "speed": 70
    },
    "flavorText": "はれた ひには うみの うえを ゆうがに はねる",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/226.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/226.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/226.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 226,
        "name": "マンタイン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png"
      }
    ]
  },
  {
    "id": 227,
    "pokedexNumber": 227,
    "name": {
      "ja": "エアームド",
      "en": "Skarmory",
      "kana": "エアームド",
      "romaji": "Airmd"
    },
    "generation": 2,
    "types": [
      "steel",
      "flying"
    ],
    "category": "よろいどりポケモン",
    "height": 1.7,
    "weight": 50.5,
    "abilities": [
      {
        "name": "するどいめ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "がんじょう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "くだけるよろい",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 65,
      "attack": 80,
      "defense": 140,
      "specialAttack": 40,
      "specialDefense": 70,
      "speed": 70
    },
    "flavorText": "ぜんしんが かたい ヨロイに おおわれている。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/227.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/227.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/227.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 227,
        "name": "エアームド",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png"
      }
    ]
  },
  {
    "id": 228,
    "pokedexNumber": 228,
    "name": {
      "ja": "デルビル",
      "en": "Houndour",
      "kana": "デルビル",
      "romaji": "Delvil"
    },
    "generation": 2,
    "types": [
      "dark",
      "fire"
    ],
    "category": "ダークポケモン",
    "height": 0.6,
    "weight": 10.8,
    "abilities": [
      {
        "name": "はやおき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "もらいび",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "きんちょうかん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 45,
      "attack": 60,
      "defense": 30,
      "specialAttack": 80,
      "specialDefense": 50,
      "speed": 65
    },
    "flavorText": "さまざまな なきごえを つかいわけ なかまと",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/228.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/228.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/228.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 228,
        "name": "デルビル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png"
      },
      {
        "pokemonId": 229,
        "name": "ヘルガー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png",
        "condition": "Level 24"
      }
    ]
  },
  {
    "id": 229,
    "pokedexNumber": 229,
    "name": {
      "ja": "ヘルガー",
      "en": "Houndoom",
      "kana": "ヘルガー",
      "romaji": "Hellgar"
    },
    "generation": 2,
    "types": [
      "dark",
      "fire"
    ],
    "category": "ダークポケモン",
    "height": 1.4,
    "weight": 35,
    "abilities": [
      {
        "name": "はやおき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "もらいび",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "きんちょうかん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 75,
      "attack": 90,
      "defense": 50,
      "specialAttack": 110,
      "specialDefense": 80,
      "speed": 95
    },
    "flavorText": "あたまの ツノが おおきく そりかえって いる",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/229.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/229.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/229.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 229,
        "name": "ヘルガー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png"
      }
    ]
  },
  {
    "id": 230,
    "pokedexNumber": 230,
    "name": {
      "ja": "キングドラ",
      "en": "Kingdra",
      "kana": "キングドラ",
      "romaji": "Kingdra"
    },
    "generation": 2,
    "types": [
      "water",
      "dragon"
    ],
    "category": "ドラゴンポケモン",
    "height": 1.8,
    "weight": 152,
    "abilities": [
      {
        "name": "すいすい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "スナイパー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "しめりけ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 75,
      "attack": 95,
      "defense": 95,
      "specialAttack": 95,
      "specialDefense": 95,
      "speed": 85
    },
    "flavorText": "せいぶつの すまない しんかいに せいそくする。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/230.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/230.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/230.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 230,
        "name": "キングドラ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png"
      }
    ]
  },
  {
    "id": 231,
    "pokedexNumber": 231,
    "name": {
      "ja": "ゴマゾウ",
      "en": "Phanpy",
      "kana": "ゴマゾウ",
      "romaji": "Gomazou"
    },
    "generation": 2,
    "types": [
      "ground"
    ],
    "category": "ながはなポケモン",
    "height": 0.5,
    "weight": 33.5,
    "abilities": [
      {
        "name": "ものひろい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "すながくれ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 90,
      "attack": 60,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 40
    },
    "flavorText": "かわの ほとりに たてあなを ほって くらす。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/231.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/231.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/231.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 231,
        "name": "ゴマゾウ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png"
      },
      {
        "pokemonId": 232,
        "name": "ドンファン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png",
        "condition": "Level 25"
      }
    ]
  },
  {
    "id": 232,
    "pokedexNumber": 232,
    "name": {
      "ja": "ドンファン",
      "en": "Donphan",
      "kana": "ドンファン",
      "romaji": "Donfan"
    },
    "generation": 2,
    "types": [
      "ground"
    ],
    "category": "よろいポケモン",
    "height": 1.1,
    "weight": 120,
    "abilities": [
      {
        "name": "がんじょう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "すながくれ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 90,
      "attack": 120,
      "defense": 120,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 50
    },
    "flavorText": "かたい からだで ぶつかれば いえも こわれる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/232.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/232.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/232.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 232,
        "name": "ドンファン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png"
      }
    ]
  },
  {
    "id": 233,
    "pokedexNumber": 233,
    "name": {
      "ja": "ポリゴン２",
      "en": "Porygon2",
      "kana": "ポリゴン２",
      "romaji": "Porygon2"
    },
    "generation": 2,
    "types": [
      "normal"
    ],
    "category": "バーチャルポケモン",
    "height": 0.6,
    "weight": 32.5,
    "abilities": [
      {
        "name": "トレース",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ダウンロード",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "アナライズ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 85,
      "attack": 80,
      "defense": 90,
      "specialAttack": 105,
      "specialDefense": 95,
      "speed": 60
    },
    "flavorText": "にんげんが かがくの ちからで つくりだした。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/233.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/233.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/233.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 233,
        "name": "ポリゴン２",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png"
      },
      {
        "pokemonId": 474,
        "name": "ポリゴンＺ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png",
        "condition": "trade holding Dubious Disc"
      }
    ]
  },
  {
    "id": 234,
    "pokedexNumber": 234,
    "name": {
      "ja": "オドシシ",
      "en": "Stantler",
      "kana": "オドシシ",
      "romaji": "Odoshishi"
    },
    "generation": 2,
    "types": [
      "normal"
    ],
    "category": "おおツノポケモン",
    "height": 1.4,
    "weight": 71.2,
    "abilities": [
      {
        "name": "いかく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "おみとおし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "そうしょく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 73,
      "attack": 95,
      "defense": 62,
      "specialAttack": 85,
      "specialDefense": 65,
      "speed": 85
    },
    "flavorText": "みごとな かたちの ツノは びじゅつひん として",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/234.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/234.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/234.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 234,
        "name": "オドシシ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png"
      }
    ]
  },
  {
    "id": 235,
    "pokedexNumber": 235,
    "name": {
      "ja": "ドーブル",
      "en": "Smeargle",
      "kana": "ドーブル",
      "romaji": "Doble"
    },
    "generation": 2,
    "types": [
      "normal"
    ],
    "category": "えかきポケモン",
    "height": 1.2,
    "weight": 58,
    "abilities": [
      {
        "name": "マイペース",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "テクニシャン",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ムラっけ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 55,
      "attack": 20,
      "defense": 35,
      "specialAttack": 20,
      "specialDefense": 45,
      "speed": 75
    },
    "flavorText": "しっぽの さきから にじみでる たいえきで",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/235.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/235.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/235.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 235,
        "name": "ドーブル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png"
      }
    ]
  },
  {
    "id": 236,
    "pokedexNumber": 236,
    "name": {
      "ja": "バルキー",
      "en": "Tyrogue",
      "kana": "バルキー",
      "romaji": "Balkie"
    },
    "generation": 2,
    "types": [
      "fighting"
    ],
    "category": "けんかポケモン",
    "height": 0.7,
    "weight": 21,
    "abilities": [
      {
        "name": "こんじょう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ふくつのこころ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "やるき",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 35,
      "attack": 35,
      "defense": 35,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 35
    },
    "flavorText": "まいにち トレーニング しないと ストレスが",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/236.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/236.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/236.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 236,
        "name": "バルキー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png"
      },
      {
        "pokemonId": 106,
        "name": "サワムラー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
        "condition": "Level 20, Attack > Defense"
      },
      {
        "pokemonId": 107,
        "name": "エビワラー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
        "condition": "Level 20, Attack < Defense"
      },
      {
        "pokemonId": 237,
        "name": "カポエラー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png",
        "condition": "Level 20, Attack = Defense"
      }
    ]
  },
  {
    "id": 237,
    "pokedexNumber": 237,
    "name": {
      "ja": "カポエラー",
      "en": "Hitmontop",
      "kana": "カポエラー",
      "romaji": "Kapoerer"
    },
    "generation": 2,
    "types": [
      "fighting"
    ],
    "category": "さかだちポケモン",
    "height": 1.4,
    "weight": 48,
    "abilities": [
      {
        "name": "いかく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "テクニシャン",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ふくつのこころ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 50,
      "attack": 95,
      "defense": 95,
      "specialAttack": 35,
      "specialDefense": 110,
      "speed": 70
    },
    "flavorText": "こうそく かいてんしながら はなつ キックは",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/237.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/237.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/237.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 237,
        "name": "カポエラー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png"
      }
    ]
  },
  {
    "id": 238,
    "pokedexNumber": 238,
    "name": {
      "ja": "ムチュール",
      "en": "Smoochum",
      "kana": "ムチュール",
      "romaji": "Muchul"
    },
    "generation": 2,
    "types": [
      "ice",
      "psychic"
    ],
    "category": "くちづけポケモン",
    "height": 0.4,
    "weight": 6,
    "abilities": [
      {
        "name": "どんかん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "よちむ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "うるおいボディ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 45,
      "attack": 30,
      "defense": 15,
      "specialAttack": 85,
      "specialDefense": 65,
      "speed": 65
    },
    "flavorText": "げんき いっぱい うごきまわるが よく ころぶ。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/238.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/238.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/238.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 238,
        "name": "ムチュール",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png"
      },
      {
        "pokemonId": 124,
        "name": "ルージュラ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
        "condition": "Level 30"
      }
    ]
  },
  {
    "id": 239,
    "pokedexNumber": 239,
    "name": {
      "ja": "エレキッド",
      "en": "Elekid",
      "kana": "エレキッド",
      "romaji": "Elekid"
    },
    "generation": 2,
    "types": [
      "electric"
    ],
    "category": "でんきポケモン",
    "height": 0.6,
    "weight": 23.5,
    "abilities": [
      {
        "name": "せいでんき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "やるき",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 45,
      "attack": 63,
      "defense": 37,
      "specialAttack": 65,
      "specialDefense": 55,
      "speed": 95
    },
    "flavorText": "きんぞくに さわって からだに ためた でんきが",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/239.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/239.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/239.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 239,
        "name": "エレキッド",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png"
      },
      {
        "pokemonId": 125,
        "name": "エレブー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
        "condition": "Level 30"
      }
    ]
  },
  {
    "id": 240,
    "pokedexNumber": 240,
    "name": {
      "ja": "ブビィ",
      "en": "Magby",
      "kana": "ブビィ",
      "romaji": "Buby"
    },
    "generation": 2,
    "types": [
      "fire"
    ],
    "category": "ひだねポケモン",
    "height": 0.7,
    "weight": 21.4,
    "abilities": [
      {
        "name": "ほのおのからだ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "やるき",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 45,
      "attack": 75,
      "defense": 37,
      "specialAttack": 70,
      "specialDefense": 55,
      "speed": 83
    },
    "flavorText": "きいろい ほのおを くちから ふいている ときは",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/240.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/240.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/240.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 240,
        "name": "ブビィ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png"
      },
      {
        "pokemonId": 126,
        "name": "ブーバー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
        "condition": "Level 30"
      }
    ]
  },
  {
    "id": 241,
    "pokedexNumber": 241,
    "name": {
      "ja": "ミルタンク",
      "en": "Miltank",
      "kana": "ミルタンク",
      "romaji": "Miltank"
    },
    "generation": 2,
    "types": [
      "normal"
    ],
    "category": "ちちうしポケモン",
    "height": 1.2,
    "weight": 75.5,
    "abilities": [
      {
        "name": "あついしぼう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "きもったま",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "そうしょく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 95,
      "attack": 80,
      "defense": 105,
      "specialAttack": 40,
      "specialDefense": 70,
      "speed": 100
    },
    "flavorText": "まいにち ２０リットルの ミルクを だす。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/241.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/241.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/241.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 241,
        "name": "ミルタンク",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png"
      }
    ]
  },
  {
    "id": 242,
    "pokedexNumber": 242,
    "name": {
      "ja": "ハピナス",
      "en": "Blissey",
      "kana": "ハピナス",
      "romaji": "Happinas"
    },
    "generation": 2,
    "types": [
      "normal"
    ],
    "category": "しあわせポケモン",
    "height": 1.5,
    "weight": 46.8,
    "abilities": [
      {
        "name": "しぜんかいふく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "てんのめぐみ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "いやしのこころ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 255,
      "attack": 10,
      "defense": 10,
      "specialAttack": 75,
      "specialDefense": 135,
      "speed": 55
    },
    "flavorText": "ふわふわの たいもうで かなしんでいる こころを",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/242.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/242.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/242.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 242,
        "name": "ハピナス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png"
      }
    ]
  },
  {
    "id": 243,
    "pokedexNumber": 243,
    "name": {
      "ja": "ライコウ",
      "en": "Raikou",
      "kana": "ライコウ",
      "romaji": "Raikou"
    },
    "generation": 2,
    "types": [
      "electric"
    ],
    "category": "いかずちポケモン",
    "height": 1.9,
    "weight": 178,
    "abilities": [
      {
        "name": "プレッシャー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "せいしんりょく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 90,
      "attack": 85,
      "defense": 75,
      "specialAttack": 115,
      "specialDefense": 100,
      "speed": 115
    },
    "flavorText": "かみなりの スピードを やどした ポケモン。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/243.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/243.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/243.ogg",
    "isLegendary": true,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 243,
        "name": "ライコウ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png"
      }
    ]
  },
  {
    "id": 244,
    "pokedexNumber": 244,
    "name": {
      "ja": "エンテイ",
      "en": "Entei",
      "kana": "エンテイ",
      "romaji": "Entei"
    },
    "generation": 2,
    "types": [
      "fire"
    ],
    "category": "かざんポケモン",
    "height": 2.1,
    "weight": 198,
    "abilities": [
      {
        "name": "プレッシャー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "せいしんりょく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 115,
      "attack": 115,
      "defense": 85,
      "specialAttack": 90,
      "specialDefense": 75,
      "speed": 100
    },
    "flavorText": "マグマの じょうねつを やどした ポケモン。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/244.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/244.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/244.ogg",
    "isLegendary": true,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 244,
        "name": "エンテイ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png"
      }
    ]
  },
  {
    "id": 245,
    "pokedexNumber": 245,
    "name": {
      "ja": "スイクン",
      "en": "Suicune",
      "kana": "スイクン",
      "romaji": "Suicune"
    },
    "generation": 2,
    "types": [
      "water"
    ],
    "category": "オーロラポケモン",
    "height": 2,
    "weight": 187,
    "abilities": [
      {
        "name": "プレッシャー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "せいしんりょく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 100,
      "attack": 75,
      "defense": 115,
      "specialAttack": 90,
      "specialDefense": 115,
      "speed": 85
    },
    "flavorText": "わきみずの やさしさを やどした ポケモン。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/245.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/245.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/245.ogg",
    "isLegendary": true,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 245,
        "name": "スイクン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png"
      }
    ]
  },
  {
    "id": 246,
    "pokedexNumber": 246,
    "name": {
      "ja": "ヨーギラス",
      "en": "Larvitar",
      "kana": "ヨーギラス",
      "romaji": "Yogiras"
    },
    "generation": 2,
    "types": [
      "rock",
      "ground"
    ],
    "category": "いわはだポケモン",
    "height": 0.6,
    "weight": 72,
    "abilities": [
      {
        "name": "こんじょう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "すながくれ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 50,
      "attack": 64,
      "defense": 50,
      "specialAttack": 45,
      "specialDefense": 50,
      "speed": 41
    },
    "flavorText": "ちちゅう ふかくで うまれる ヨーギラスは",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/246.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/246.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/246.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 246,
        "name": "ヨーギラス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png"
      },
      {
        "pokemonId": 247,
        "name": "サナギラス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png",
        "condition": "Level 30"
      }
    ]
  },
  {
    "id": 247,
    "pokedexNumber": 247,
    "name": {
      "ja": "サナギラス",
      "en": "Pupitar",
      "kana": "サナギラス",
      "romaji": "Sanagiras"
    },
    "generation": 2,
    "types": [
      "rock",
      "ground"
    ],
    "category": "だんがんポケモン",
    "height": 1.2,
    "weight": 152,
    "abilities": [
      {
        "name": "だっぴ",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 70,
      "attack": 84,
      "defense": 70,
      "specialAttack": 65,
      "specialDefense": 70,
      "speed": 51
    },
    "flavorText": "たいないで つくりだした ガスを あっしゅくして",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/247.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/247.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/247.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 247,
        "name": "サナギラス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png"
      },
      {
        "pokemonId": 248,
        "name": "バンギラス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png",
        "condition": "Level 55"
      }
    ]
  },
  {
    "id": 248,
    "pokedexNumber": 248,
    "name": {
      "ja": "バンギラス",
      "en": "Tyranitar",
      "kana": "バンギラス",
      "romaji": "Bangiras"
    },
    "generation": 2,
    "types": [
      "rock",
      "dark"
    ],
    "category": "よろいポケモン",
    "height": 2,
    "weight": 202,
    "abilities": [
      {
        "name": "すなおこし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "きんちょうかん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 100,
      "attack": 134,
      "defense": 110,
      "specialAttack": 95,
      "specialDefense": 100,
      "speed": 61
    },
    "flavorText": "じぶんの すみかを つくる ために やま ひとつ",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/248.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/248.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 248,
        "name": "バンギラス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png"
      }
    ]
  },
  {
    "id": 249,
    "pokedexNumber": 249,
    "name": {
      "ja": "ルギア",
      "en": "Lugia",
      "kana": "ルギア",
      "romaji": "Lugia"
    },
    "generation": 2,
    "types": [
      "psychic",
      "flying"
    ],
    "category": "せんすいポケモン",
    "height": 5.2,
    "weight": 216,
    "abilities": [
      {
        "name": "プレッシャー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "マルチスケイル",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 106,
      "attack": 90,
      "defense": 130,
      "specialAttack": 90,
      "specialDefense": 154,
      "speed": 110
    },
    "flavorText": "つばさを かるく はばたかせた だけで みんかを",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/249.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/249.ogg",
    "isLegendary": true,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 249,
        "name": "ルギア",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png"
      }
    ]
  },
  {
    "id": 250,
    "pokedexNumber": 250,
    "name": {
      "ja": "ホウオウ",
      "en": "Ho-Oh",
      "kana": "ホウオウ",
      "romaji": "Houou"
    },
    "generation": 2,
    "types": [
      "fire",
      "flying"
    ],
    "category": "にじいろポケモン",
    "height": 3.8,
    "weight": 199,
    "abilities": [
      {
        "name": "プレッシャー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "さいせいりょく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 106,
      "attack": 130,
      "defense": 90,
      "specialAttack": 110,
      "specialDefense": 154,
      "speed": 90
    },
    "flavorText": "ひかりの あたる かくどに よって なないろに",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/250.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/250.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/250.ogg",
    "isLegendary": true,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 250,
        "name": "ホウオウ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png"
      }
    ]
  },
  {
    "id": 251,
    "pokedexNumber": 251,
    "name": {
      "ja": "セレビィ",
      "en": "Celebi",
      "kana": "セレビィ",
      "romaji": "Celebi"
    },
    "generation": 2,
    "types": [
      "psychic",
      "grass"
    ],
    "category": "ときわたりポケモン",
    "height": 0.6,
    "weight": 5,
    "abilities": [
      {
        "name": "しぜんかいふく",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 100
    },
    "flavorText": "ときを こえ みらいから やってきた ポケモン。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/251.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/251.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/251.ogg",
    "isLegendary": false,
    "isMythical": true,
    "evolutionChain": [
      {
        "pokemonId": 251,
        "name": "セレビィ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png"
      }
    ]
  },
  {
    "id": 252,
    "pokedexNumber": 252,
    "name": {
      "ja": "キモリ",
      "en": "Treecko",
      "kana": "キモリ",
      "romaji": "Kimori"
    },
    "generation": 3,
    "types": [
      "grass"
    ],
    "category": "もりトカゲポケモン",
    "height": 0.5,
    "weight": 5,
    "abilities": [
      {
        "name": "しんりょく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "かるわざ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "specialAttack": 65,
      "specialDefense": 55,
      "speed": 70
    },
    "flavorText": "ちんちゃく れいせい なにごとにも どうじない。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/252.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/252.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/252.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 252,
        "name": "キモリ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png"
      },
      {
        "pokemonId": 253,
        "name": "ジュプトル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png",
        "condition": "Level 16"
      }
    ]
  },
  {
    "id": 253,
    "pokedexNumber": 253,
    "name": {
      "ja": "ジュプトル",
      "en": "Grovyle",
      "kana": "ジュプトル",
      "romaji": "Juptile"
    },
    "generation": 3,
    "types": [
      "grass"
    ],
    "category": "もりトカゲポケモン",
    "height": 0.9,
    "weight": 21.6,
    "abilities": [
      {
        "name": "しんりょく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "かるわざ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 50,
      "attack": 65,
      "defense": 45,
      "specialAttack": 85,
      "specialDefense": 65,
      "speed": 95
    },
    "flavorText": "からだから はえた はっぱは もりの なかで",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/253.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/253.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/253.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 253,
        "name": "ジュプトル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png"
      },
      {
        "pokemonId": 254,
        "name": "ジュカイン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png",
        "condition": "Level 36"
      }
    ]
  },
  {
    "id": 254,
    "pokedexNumber": 254,
    "name": {
      "ja": "ジュカイン",
      "en": "Sceptile",
      "kana": "ジュカイン",
      "romaji": "Jukain"
    },
    "generation": 3,
    "types": [
      "grass"
    ],
    "category": "みつりんポケモン",
    "height": 1.7,
    "weight": 52.2,
    "abilities": [
      {
        "name": "しんりょく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "かるわざ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 70,
      "attack": 85,
      "defense": 65,
      "specialAttack": 105,
      "specialDefense": 85,
      "speed": 120
    },
    "flavorText": "からだに はえた はっぱは するどい きれあじ。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/254.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/254.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/254.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 254,
        "name": "ジュカイン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png"
      }
    ]
  },
  {
    "id": 255,
    "pokedexNumber": 255,
    "name": {
      "ja": "アチャモ",
      "en": "Torchic",
      "kana": "アチャモ",
      "romaji": "Achamo"
    },
    "generation": 3,
    "types": [
      "fire"
    ],
    "category": "ひよこポケモン",
    "height": 0.4,
    "weight": 2.5,
    "abilities": [
      {
        "name": "もうか",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "かそく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 45,
      "attack": 60,
      "defense": 40,
      "specialAttack": 70,
      "specialDefense": 50,
      "speed": 45
    },
    "flavorText": "トレーナーに くっついて ちょこちょこ あるく。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/255.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/255.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/255.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 255,
        "name": "アチャモ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png"
      },
      {
        "pokemonId": 256,
        "name": "ワカシャモ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png",
        "condition": "Level 16"
      }
    ]
  },
  {
    "id": 256,
    "pokedexNumber": 256,
    "name": {
      "ja": "ワカシャモ",
      "en": "Combusken",
      "kana": "ワカシャモ",
      "romaji": "Wakasyamo"
    },
    "generation": 3,
    "types": [
      "fire",
      "fighting"
    ],
    "category": "わかどりポケモン",
    "height": 0.9,
    "weight": 19.5,
    "abilities": [
      {
        "name": "もうか",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "かそく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 85,
      "defense": 60,
      "specialAttack": 85,
      "specialDefense": 60,
      "speed": 55
    },
    "flavorText": "のやまを はしりまわって あしこしを きたえる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/256.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/256.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/256.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 256,
        "name": "ワカシャモ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png"
      },
      {
        "pokemonId": 257,
        "name": "バシャーモ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png",
        "condition": "Level 36"
      }
    ]
  },
  {
    "id": 257,
    "pokedexNumber": 257,
    "name": {
      "ja": "バシャーモ",
      "en": "Blaziken",
      "kana": "バシャーモ",
      "romaji": "Bursyamo"
    },
    "generation": 3,
    "types": [
      "fire",
      "fighting"
    ],
    "category": "もうかポケモン",
    "height": 1.9,
    "weight": 52,
    "abilities": [
      {
        "name": "もうか",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "かそく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 80,
      "attack": 120,
      "defense": 70,
      "specialAttack": 110,
      "specialDefense": 70,
      "speed": 80
    },
    "flavorText": "きょうじんな あしこしを もち ３０かい だての",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/257.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/257.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/257.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 257,
        "name": "バシャーモ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png"
      }
    ]
  },
  {
    "id": 258,
    "pokedexNumber": 258,
    "name": {
      "ja": "ミズゴロウ",
      "en": "Mudkip",
      "kana": "ミズゴロウ",
      "romaji": "Mizugorou"
    },
    "generation": 3,
    "types": [
      "water"
    ],
    "category": "ぬまうおポケモン",
    "height": 0.4,
    "weight": 7.6,
    "abilities": [
      {
        "name": "げきりゅう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "しめりけ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 50,
      "attack": 70,
      "defense": 50,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 40
    },
    "flavorText": "あたまの ひれは とても びんかんな レーダー。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/258.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/258.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/258.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 258,
        "name": "ミズゴロウ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png"
      },
      {
        "pokemonId": 259,
        "name": "ヌマクロー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png",
        "condition": "Level 16"
      }
    ]
  },
  {
    "id": 259,
    "pokedexNumber": 259,
    "name": {
      "ja": "ヌマクロー",
      "en": "Marshtomp",
      "kana": "ヌマクロー",
      "romaji": "Numacraw"
    },
    "generation": 3,
    "types": [
      "water",
      "ground"
    ],
    "category": "ぬまうおポケモン",
    "height": 0.7,
    "weight": 28,
    "abilities": [
      {
        "name": "げきりゅう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "しめりけ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 70,
      "attack": 85,
      "defense": 70,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 50
    },
    "flavorText": "ちじょうでも せいかつできる ように からだの",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/259.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/259.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/259.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 259,
        "name": "ヌマクロー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png"
      },
      {
        "pokemonId": 260,
        "name": "ラグラージ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
        "condition": "Level 36"
      }
    ]
  },
  {
    "id": 260,
    "pokedexNumber": 260,
    "name": {
      "ja": "ラグラージ",
      "en": "Swampert",
      "kana": "ラグラージ",
      "romaji": "Laglarge"
    },
    "generation": 3,
    "types": [
      "water",
      "ground"
    ],
    "category": "ぬまうおポケモン",
    "height": 1.5,
    "weight": 81.9,
    "abilities": [
      {
        "name": "げきりゅう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "しめりけ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 100,
      "attack": 110,
      "defense": 90,
      "specialAttack": 85,
      "specialDefense": 90,
      "speed": 60
    },
    "flavorText": "おもさ １トンいじょう ある いわの かたまりを",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/260.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/260.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/260.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 260,
        "name": "ラグラージ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png"
      }
    ]
  },
  {
    "id": 261,
    "pokedexNumber": 261,
    "name": {
      "ja": "ポチエナ",
      "en": "Poochyena",
      "kana": "ポチエナ",
      "romaji": "Pochiena"
    },
    "generation": 3,
    "types": [
      "dark"
    ],
    "category": "かみつきポケモン",
    "height": 0.5,
    "weight": 13.6,
    "abilities": [
      {
        "name": "にげあし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はやあし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "びびり",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 35,
      "attack": 55,
      "defense": 35,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 35
    },
    "flavorText": "うごく ものを みつけると すぐに かみつく。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/261.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/261.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/261.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/261.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 261,
        "name": "ポチエナ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/261.png"
      },
      {
        "pokemonId": 262,
        "name": "グラエナ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png",
        "condition": "Level 18"
      }
    ]
  },
  {
    "id": 262,
    "pokedexNumber": 262,
    "name": {
      "ja": "グラエナ",
      "en": "Mightyena",
      "kana": "グラエナ",
      "romaji": "Graena"
    },
    "generation": 3,
    "types": [
      "dark"
    ],
    "category": "かみつきポケモン",
    "height": 1,
    "weight": 37,
    "abilities": [
      {
        "name": "いかく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はやあし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "じしんかじょう",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 70,
      "attack": 90,
      "defense": 70,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 70
    },
    "flavorText": "どうもうな うなりごえを あげながら しせいを",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/262.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/262.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/262.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 262,
        "name": "グラエナ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png"
      }
    ]
  },
  {
    "id": 263,
    "pokedexNumber": 263,
    "name": {
      "ja": "ジグザグマ",
      "en": "Zigzagoon",
      "kana": "ジグザグマ",
      "romaji": "Jiguzaguma"
    },
    "generation": 3,
    "types": [
      "normal"
    ],
    "category": "まめだぬきポケモン",
    "height": 0.4,
    "weight": 17.5,
    "abilities": [
      {
        "name": "ものひろい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "くいしんぼう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はやあし",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 38,
      "attack": 30,
      "defense": 41,
      "specialAttack": 30,
      "specialDefense": 41,
      "speed": 60
    },
    "flavorText": "いつも あっち こっちへ ジグザグ あるくのは",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/263.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/263.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/263.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 263,
        "name": "ジグザグマ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png"
      },
      {
        "pokemonId": 264,
        "name": "マッスグマ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png",
        "condition": "Level 20"
      }
    ]
  },
  {
    "id": 264,
    "pokedexNumber": 264,
    "name": {
      "ja": "マッスグマ",
      "en": "Linoone",
      "kana": "マッスグマ",
      "romaji": "Massuguma"
    },
    "generation": 3,
    "types": [
      "normal"
    ],
    "category": "とっしんポケモン",
    "height": 0.5,
    "weight": 32.5,
    "abilities": [
      {
        "name": "ものひろい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "くいしんぼう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はやあし",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 78,
      "attack": 70,
      "defense": 61,
      "specialAttack": 50,
      "specialDefense": 61,
      "speed": 100
    },
    "flavorText": "えもの めがけて いっちょくせんに つっぱしる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/264.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/264.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/264.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 264,
        "name": "マッスグマ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png"
      },
      {
        "pokemonId": 862,
        "name": "タチフサグマ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/862.png",
        "condition": "Level 35, Nighttime"
      }
    ]
  },
  {
    "id": 265,
    "pokedexNumber": 265,
    "name": {
      "ja": "ケムッソ",
      "en": "Wurmple",
      "kana": "ケムッソ",
      "romaji": "Kemusso"
    },
    "generation": 3,
    "types": [
      "bug"
    ],
    "category": "いもむしポケモン",
    "height": 0.3,
    "weight": 3.6,
    "abilities": [
      {
        "name": "りんぷん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "にげあし",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 45,
      "attack": 45,
      "defense": 35,
      "specialAttack": 20,
      "specialDefense": 30,
      "speed": 20
    },
    "flavorText": "エサにしようと つかまえにきた オオスバメに",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/265.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/265.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/265.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/265.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 265,
        "name": "ケムッソ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/265.png"
      },
      {
        "pokemonId": 266,
        "name": "カラサリス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png",
        "condition": "Level 7, random based on personality"
      },
      {
        "pokemonId": 268,
        "name": "マユルド",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/268.png",
        "condition": "Level 7, random based on personality"
      }
    ]
  },
  {
    "id": 266,
    "pokedexNumber": 266,
    "name": {
      "ja": "カラサリス",
      "en": "Silcoon",
      "kana": "カラサリス",
      "romaji": "Karasalis"
    },
    "generation": 3,
    "types": [
      "bug"
    ],
    "category": "さなぎポケモン",
    "height": 0.6,
    "weight": 10,
    "abilities": [
      {
        "name": "だっぴ",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 50,
      "attack": 35,
      "defense": 55,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 15
    },
    "flavorText": "しんかするまで なにも たべずに たえていると",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/266.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/266.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/266.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 266,
        "name": "カラサリス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png"
      },
      {
        "pokemonId": 267,
        "name": "アゲハント",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png",
        "condition": "Level 10"
      }
    ]
  },
  {
    "id": 267,
    "pokedexNumber": 267,
    "name": {
      "ja": "アゲハント",
      "en": "Beautifly",
      "kana": "アゲハント",
      "romaji": "Agehunt"
    },
    "generation": 3,
    "types": [
      "bug",
      "flying"
    ],
    "category": "ちょうちょポケモン",
    "height": 1,
    "weight": 28.4,
    "abilities": [
      {
        "name": "むしのしらせ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "とうそうしん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 70,
      "defense": 50,
      "specialAttack": 100,
      "specialDefense": 50,
      "speed": 65
    },
    "flavorText": "くるりと まいた はりの ような ながい くちは",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/267.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/267.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/267.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 267,
        "name": "アゲハント",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png"
      }
    ]
  },
  {
    "id": 268,
    "pokedexNumber": 268,
    "name": {
      "ja": "マユルド",
      "en": "Cascoon",
      "kana": "マユルド",
      "romaji": "Mayuld"
    },
    "generation": 3,
    "types": [
      "bug"
    ],
    "category": "さなぎポケモン",
    "height": 0.7,
    "weight": 11.5,
    "abilities": [
      {
        "name": "だっぴ",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 50,
      "attack": 35,
      "defense": 55,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 15
    },
    "flavorText": "うごくと つよい からだに しんか できないので",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/268.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/268.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/268.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/268.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 268,
        "name": "マユルド",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/268.png"
      },
      {
        "pokemonId": 269,
        "name": "ドクケイル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/269.png",
        "condition": "Level 10"
      }
    ]
  },
  {
    "id": 269,
    "pokedexNumber": 269,
    "name": {
      "ja": "ドクケイル",
      "en": "Dustox",
      "kana": "ドクケイル",
      "romaji": "Dokucale"
    },
    "generation": 3,
    "types": [
      "bug",
      "poison"
    ],
    "category": "どくがポケモン",
    "height": 1.2,
    "weight": 31.6,
    "abilities": [
      {
        "name": "りんぷん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ふくがん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 50,
      "defense": 70,
      "specialAttack": 50,
      "specialDefense": 90,
      "speed": 65
    },
    "flavorText": "あかりに ひきよせられる しゅうせいを もつ。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/269.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/269.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/269.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/269.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 269,
        "name": "ドクケイル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/269.png"
      }
    ]
  },
  {
    "id": 270,
    "pokedexNumber": 270,
    "name": {
      "ja": "ハスボー",
      "en": "Lotad",
      "kana": "ハスボー",
      "romaji": "Hassboh"
    },
    "generation": 3,
    "types": [
      "water",
      "grass"
    ],
    "category": "うきくさポケモン",
    "height": 0.5,
    "weight": 2.6,
    "abilities": [
      {
        "name": "すいすい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "あめうけざら",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "マイペース",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 40,
      "attack": 30,
      "defense": 30,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 30
    },
    "flavorText": "いけや みずうみの すいめんに ういて くらす。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/270.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/270.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/270.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/270.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 270,
        "name": "ハスボー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/270.png"
      },
      {
        "pokemonId": 271,
        "name": "ハスブレロ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png",
        "condition": "Level 14"
      }
    ]
  },
  {
    "id": 271,
    "pokedexNumber": 271,
    "name": {
      "ja": "ハスブレロ",
      "en": "Lombre",
      "kana": "ハスブレロ",
      "romaji": "Hasubrero"
    },
    "generation": 3,
    "types": [
      "water",
      "grass"
    ],
    "category": "ようきポケモン",
    "height": 1.2,
    "weight": 32.5,
    "abilities": [
      {
        "name": "すいすい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "あめうけざら",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "マイペース",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 50,
      "defense": 50,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 50
    },
    "flavorText": "からだじゅう ヌルヌルした ねんえきで おおわれ",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/271.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/271.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/271.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 271,
        "name": "ハスブレロ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png"
      },
      {
        "pokemonId": 272,
        "name": "ルンパッパ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png",
        "condition": "use Water Stone"
      }
    ]
  },
  {
    "id": 272,
    "pokedexNumber": 272,
    "name": {
      "ja": "ルンパッパ",
      "en": "Ludicolo",
      "kana": "ルンパッパ",
      "romaji": "Runpappa"
    },
    "generation": 3,
    "types": [
      "water",
      "grass"
    ],
    "category": "のうてんきポケモン",
    "height": 1.5,
    "weight": 55,
    "abilities": [
      {
        "name": "すいすい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "あめうけざら",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "マイペース",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 80,
      "attack": 70,
      "defense": 70,
      "specialAttack": 90,
      "specialDefense": 100,
      "speed": 70
    },
    "flavorText": "ようきな おんがくを みみにすると おどりだす。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/272.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/272.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/272.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 272,
        "name": "ルンパッパ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png"
      }
    ]
  },
  {
    "id": 273,
    "pokedexNumber": 273,
    "name": {
      "ja": "タネボー",
      "en": "Seedot",
      "kana": "タネボー",
      "romaji": "Taneboh"
    },
    "generation": 3,
    "types": [
      "grass"
    ],
    "category": "どんぐりポケモン",
    "height": 0.5,
    "weight": 4,
    "abilities": [
      {
        "name": "ようりょくそ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はやおき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "わるいてぐせ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 40,
      "attack": 40,
      "defense": 50,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 30
    },
    "flavorText": "えだに ぶらさがる すがたは きのみ そっくり。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/273.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/273.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/273.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/273.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 273,
        "name": "タネボー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/273.png"
      },
      {
        "pokemonId": 274,
        "name": "コノハナ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/274.png",
        "condition": "Level 14"
      }
    ]
  },
  {
    "id": 274,
    "pokedexNumber": 274,
    "name": {
      "ja": "コノハナ",
      "en": "Nuzleaf",
      "kana": "コノハナ",
      "romaji": "Konohana"
    },
    "generation": 3,
    "types": [
      "grass",
      "dark"
    ],
    "category": "いじわるポケモン",
    "height": 1,
    "weight": 28,
    "abilities": [
      {
        "name": "ようりょくそ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はやおき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "わるいてぐせ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 70,
      "attack": 70,
      "defense": 40,
      "specialAttack": 60,
      "specialDefense": 40,
      "speed": 60
    },
    "flavorText": "あたまの はっぱを ぬいて くさぶえを つくる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/274.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/274.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/274.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/274.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 274,
        "name": "コノハナ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/274.png"
      },
      {
        "pokemonId": 275,
        "name": "ダーテング",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png",
        "condition": "use Leaf Stone"
      }
    ]
  },
  {
    "id": 275,
    "pokedexNumber": 275,
    "name": {
      "ja": "ダーテング",
      "en": "Shiftry",
      "kana": "ダーテング",
      "romaji": "Dirteng"
    },
    "generation": 3,
    "types": [
      "grass",
      "dark"
    ],
    "category": "よこしまポケモン",
    "height": 1.3,
    "weight": 59.6,
    "abilities": [
      {
        "name": "ようりょくそ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はやおき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "わるいてぐせ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 90,
      "attack": 100,
      "defense": 60,
      "specialAttack": 90,
      "specialDefense": 60,
      "speed": 80
    },
    "flavorText": "じゅれい １０００ねんを こえた たいぼくの",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/275.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/275.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/275.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 275,
        "name": "ダーテング",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png"
      }
    ]
  },
  {
    "id": 276,
    "pokedexNumber": 276,
    "name": {
      "ja": "スバメ",
      "en": "Taillow",
      "kana": "スバメ",
      "romaji": "Subame"
    },
    "generation": 3,
    "types": [
      "normal",
      "flying"
    ],
    "category": "こツバメポケモン",
    "height": 0.3,
    "weight": 2.3,
    "abilities": [
      {
        "name": "こんじょう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "きもったま",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 40,
      "attack": 55,
      "defense": 30,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 85
    },
    "flavorText": "どんな つよい あいてでも ゆうかんに いどむ。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/276.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/276.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/276.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 276,
        "name": "スバメ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png"
      },
      {
        "pokemonId": 277,
        "name": "オオスバメ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png",
        "condition": "Level 22"
      }
    ]
  },
  {
    "id": 277,
    "pokedexNumber": 277,
    "name": {
      "ja": "オオスバメ",
      "en": "Swellow",
      "kana": "オオスバメ",
      "romaji": "Ohsubame"
    },
    "generation": 3,
    "types": [
      "normal",
      "flying"
    ],
    "category": "ツバメポケモン",
    "height": 0.7,
    "weight": 19.8,
    "abilities": [
      {
        "name": "こんじょう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "きもったま",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 85,
      "defense": 60,
      "specialAttack": 75,
      "specialDefense": 50,
      "speed": 125
    },
    "flavorText": "ツヤの ある はねの ていれは おこたらない。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/277.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/277.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/277.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 277,
        "name": "オオスバメ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png"
      }
    ]
  },
  {
    "id": 278,
    "pokedexNumber": 278,
    "name": {
      "ja": "キャモメ",
      "en": "Wingull",
      "kana": "キャモメ",
      "romaji": "Camome"
    },
    "generation": 3,
    "types": [
      "water",
      "flying"
    ],
    "category": "うみねこポケモン",
    "height": 0.6,
    "weight": 9.5,
    "abilities": [
      {
        "name": "するどいめ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "うるおいボディ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "あめうけざら",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 40,
      "attack": 30,
      "defense": 30,
      "specialAttack": 55,
      "specialDefense": 30,
      "speed": 85
    },
    "flavorText": "うみから ふく じょうしょう きりゅうに のり",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/278.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/278.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/278.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 278,
        "name": "キャモメ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png"
      },
      {
        "pokemonId": 279,
        "name": "ペリッパー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png",
        "condition": "Level 25"
      }
    ]
  },
  {
    "id": 279,
    "pokedexNumber": 279,
    "name": {
      "ja": "ペリッパー",
      "en": "Pelipper",
      "kana": "ペリッパー",
      "romaji": "Pelipper"
    },
    "generation": 3,
    "types": [
      "water",
      "flying"
    ],
    "category": "みずどりポケモン",
    "height": 1.2,
    "weight": 28,
    "abilities": [
      {
        "name": "するどいめ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "あめふらし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "あめうけざら",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 50,
      "defense": 100,
      "specialAttack": 95,
      "specialDefense": 70,
      "speed": 65
    },
    "flavorText": "かいめん すれすれを とび エサを さがす。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/279.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/279.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/279.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 279,
        "name": "ペリッパー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png"
      }
    ]
  },
  {
    "id": 280,
    "pokedexNumber": 280,
    "name": {
      "ja": "ラルトス",
      "en": "Ralts",
      "kana": "ラルトス",
      "romaji": "Ralts"
    },
    "generation": 3,
    "types": [
      "psychic",
      "fairy"
    ],
    "category": "きもちポケモン",
    "height": 0.4,
    "weight": 6.6,
    "abilities": [
      {
        "name": "シンクロ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "トレース",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "テレパシー",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 28,
      "attack": 25,
      "defense": 25,
      "specialAttack": 45,
      "specialDefense": 35,
      "speed": 40
    },
    "flavorText": "あたまの ツノで ひとの きもちを かんじとる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/280.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/280.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/280.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 280,
        "name": "ラルトス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png"
      },
      {
        "pokemonId": 281,
        "name": "キルリア",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png",
        "condition": "Level 20"
      }
    ]
  },
  {
    "id": 281,
    "pokedexNumber": 281,
    "name": {
      "ja": "キルリア",
      "en": "Kirlia",
      "kana": "キルリア",
      "romaji": "Kirlia"
    },
    "generation": 3,
    "types": [
      "psychic",
      "fairy"
    ],
    "category": "かんじょうポケモン",
    "height": 0.8,
    "weight": 20.2,
    "abilities": [
      {
        "name": "シンクロ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "トレース",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "テレパシー",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 38,
      "attack": 35,
      "defense": 35,
      "specialAttack": 65,
      "specialDefense": 55,
      "speed": 50
    },
    "flavorText": "トレーナーの あかるい かんじょうに ふれている",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/281.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/281.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/281.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 281,
        "name": "キルリア",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png"
      },
      {
        "pokemonId": 282,
        "name": "サーナイト",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",
        "condition": "Level 30"
      }
    ]
  },
  {
    "id": 282,
    "pokedexNumber": 282,
    "name": {
      "ja": "サーナイト",
      "en": "Gardevoir",
      "kana": "サーナイト",
      "romaji": "Sirnight"
    },
    "generation": 3,
    "types": [
      "psychic",
      "fairy"
    ],
    "category": "ほうようポケモン",
    "height": 1.6,
    "weight": 48.4,
    "abilities": [
      {
        "name": "シンクロ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "トレース",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "テレパシー",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 68,
      "attack": 65,
      "defense": 65,
      "specialAttack": 125,
      "specialDefense": 115,
      "speed": 80
    },
    "flavorText": "みらいを よちする のうりょくで トレーナーの",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/282.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/282.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 282,
        "name": "サーナイト",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png"
      }
    ]
  },
  {
    "id": 283,
    "pokedexNumber": 283,
    "name": {
      "ja": "アメタマ",
      "en": "Surskit",
      "kana": "アメタマ",
      "romaji": "Ametama"
    },
    "generation": 3,
    "types": [
      "bug",
      "water"
    ],
    "category": "あめんぼポケモン",
    "height": 0.5,
    "weight": 1.7,
    "abilities": [
      {
        "name": "すいすい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "あめうけざら",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 40,
      "attack": 30,
      "defense": 32,
      "specialAttack": 50,
      "specialDefense": 52,
      "speed": 65
    },
    "flavorText": "つまさきから あぶらが にじみでて いるので",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/283.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/283.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/283.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/283.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 283,
        "name": "アメタマ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/283.png"
      },
      {
        "pokemonId": 284,
        "name": "アメモース",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png",
        "condition": "Level 22"
      }
    ]
  },
  {
    "id": 284,
    "pokedexNumber": 284,
    "name": {
      "ja": "アメモース",
      "en": "Masquerain",
      "kana": "アメモース",
      "romaji": "Amemoth"
    },
    "generation": 3,
    "types": [
      "bug",
      "flying"
    ],
    "category": "めだまポケモン",
    "height": 0.8,
    "weight": 3.6,
    "abilities": [
      {
        "name": "いかく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "きんちょうかん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 70,
      "attack": 60,
      "defense": 62,
      "specialAttack": 100,
      "specialDefense": 82,
      "speed": 80
    },
    "flavorText": "しょっかくの めだま もようで てきを いかく。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/284.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/284.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/284.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 284,
        "name": "アメモース",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png"
      }
    ]
  },
  {
    "id": 285,
    "pokedexNumber": 285,
    "name": {
      "ja": "キノココ",
      "en": "Shroomish",
      "kana": "キノココ",
      "romaji": "Kinococo"
    },
    "generation": 3,
    "types": [
      "grass"
    ],
    "category": "きのこポケモン",
    "height": 0.4,
    "weight": 4.5,
    "abilities": [
      {
        "name": "ほうし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ポイズンヒール",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "はやあし",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 40,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 60,
      "speed": 35
    },
    "flavorText": "ふかい もりの しめった じめんに せいそく。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/285.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/285.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/285.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 285,
        "name": "キノココ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png"
      },
      {
        "pokemonId": 286,
        "name": "キノガッサ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png",
        "condition": "Level 23"
      }
    ]
  },
  {
    "id": 286,
    "pokedexNumber": 286,
    "name": {
      "ja": "キノガッサ",
      "en": "Breloom",
      "kana": "キノガッサ",
      "romaji": "Kinogassa"
    },
    "generation": 3,
    "types": [
      "grass",
      "fighting"
    ],
    "category": "きのこポケモン",
    "height": 1.2,
    "weight": 39.2,
    "abilities": [
      {
        "name": "ほうし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ポイズンヒール",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "テクニシャン",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 130,
      "defense": 80,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 70
    },
    "flavorText": "シッポの タネは どくの ほうしが かたまって",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/286.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/286.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/286.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 286,
        "name": "キノガッサ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png"
      }
    ]
  },
  {
    "id": 287,
    "pokedexNumber": 287,
    "name": {
      "ja": "ナマケロ",
      "en": "Slakoth",
      "kana": "ナマケロ",
      "romaji": "Namakero"
    },
    "generation": 3,
    "types": [
      "normal"
    ],
    "category": "なまけものポケモン",
    "height": 0.8,
    "weight": 24,
    "abilities": [
      {
        "name": "なまけ",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 30
    },
    "flavorText": "１にち ２０じかん いじょう ねそべっている。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/287.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/287.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/287.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 287,
        "name": "ナマケロ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png"
      },
      {
        "pokemonId": 288,
        "name": "ヤルキモノ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png",
        "condition": "Level 18"
      }
    ]
  },
  {
    "id": 288,
    "pokedexNumber": 288,
    "name": {
      "ja": "ヤルキモノ",
      "en": "Vigoroth",
      "kana": "ヤルキモノ",
      "romaji": "Yarukimono"
    },
    "generation": 3,
    "types": [
      "normal"
    ],
    "category": "あばれザルポケモン",
    "height": 1.4,
    "weight": 46.5,
    "abilities": [
      {
        "name": "やるき",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 80,
      "attack": 80,
      "defense": 80,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 90
    },
    "flavorText": "じっとしている ことが できない ポケモンだ。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/288.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/288.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/288.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 288,
        "name": "ヤルキモノ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png"
      },
      {
        "pokemonId": 289,
        "name": "ケッキング",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png",
        "condition": "Level 36"
      }
    ]
  },
  {
    "id": 289,
    "pokedexNumber": 289,
    "name": {
      "ja": "ケッキング",
      "en": "Slaking",
      "kana": "ケッキング",
      "romaji": "Kekking"
    },
    "generation": 3,
    "types": [
      "normal"
    ],
    "category": "ものぐさポケモン",
    "height": 2,
    "weight": 130.5,
    "abilities": [
      {
        "name": "なまけ",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 150,
      "attack": 160,
      "defense": 100,
      "specialAttack": 95,
      "specialDefense": 65,
      "speed": 100
    },
    "flavorText": "１にちじゅう ねそべったまま くらす ポケモン。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/289.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/289.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/289.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 289,
        "name": "ケッキング",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png"
      }
    ]
  },
  {
    "id": 290,
    "pokedexNumber": 290,
    "name": {
      "ja": "ツチニン",
      "en": "Nincada",
      "kana": "ツチニン",
      "romaji": "Tutinin"
    },
    "generation": 3,
    "types": [
      "bug",
      "ground"
    ],
    "category": "したづみポケモン",
    "height": 0.5,
    "weight": 5.5,
    "abilities": [
      {
        "name": "ふくがん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "にげあし",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 31,
      "attack": 45,
      "defense": 90,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 40
    },
    "flavorText": "なんねんも まっくらな つちの なかで くらす。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/290.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/290.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/290.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 290,
        "name": "ツチニン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png"
      },
      {
        "pokemonId": 291,
        "name": "テッカニン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png",
        "condition": "Level 20"
      },
      {
        "pokemonId": 292,
        "name": "ヌケニン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/292.png",
        "condition": "Level 20, empty spot in party, Pokéball in bag"
      }
    ]
  },
  {
    "id": 291,
    "pokedexNumber": 291,
    "name": {
      "ja": "テッカニン",
      "en": "Ninjask",
      "kana": "テッカニン",
      "romaji": "Tekkanin"
    },
    "generation": 3,
    "types": [
      "bug",
      "flying"
    ],
    "category": "しのびポケモン",
    "height": 0.8,
    "weight": 12,
    "abilities": [
      {
        "name": "かそく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "すりぬけ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 61,
      "attack": 90,
      "defense": 45,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 160
    },
    "flavorText": "こうそくで うごきまわり すがたが みえない。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/291.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/291.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/291.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 291,
        "name": "テッカニン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png"
      }
    ]
  },
  {
    "id": 292,
    "pokedexNumber": 292,
    "name": {
      "ja": "ヌケニン",
      "en": "Shedinja",
      "kana": "ヌケニン",
      "romaji": "Nukenin"
    },
    "generation": 3,
    "types": [
      "bug",
      "ghost"
    ],
    "category": "ぬけがらポケモン",
    "height": 0.8,
    "weight": 1.2,
    "abilities": [
      {
        "name": "ふしぎなまもり",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 1,
      "attack": 90,
      "defense": 45,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 40
    },
    "flavorText": "ツチニンが しんかしたとき なぜか かってに",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/292.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/292.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/292.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/292.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 292,
        "name": "ヌケニン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/292.png"
      }
    ]
  },
  {
    "id": 293,
    "pokedexNumber": 293,
    "name": {
      "ja": "ゴニョニョ",
      "en": "Whismur",
      "kana": "ゴニョニョ",
      "romaji": "Gonyonyo"
    },
    "generation": 3,
    "types": [
      "normal"
    ],
    "category": "ささやきポケモン",
    "height": 0.6,
    "weight": 16.3,
    "abilities": [
      {
        "name": "ぼうおん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "びびり",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 64,
      "attack": 51,
      "defense": 23,
      "specialAttack": 51,
      "specialDefense": 23,
      "speed": 28
    },
    "flavorText": "ふだんは ちゅういしないと ききとれない くらい",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/293.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/293.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/293.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/293.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 293,
        "name": "ゴニョニョ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/293.png"
      },
      {
        "pokemonId": 294,
        "name": "ドゴーム",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png",
        "condition": "Level 20"
      }
    ]
  },
  {
    "id": 294,
    "pokedexNumber": 294,
    "name": {
      "ja": "ドゴーム",
      "en": "Loudred",
      "kana": "ドゴーム",
      "romaji": "Dogohmb"
    },
    "generation": 3,
    "types": [
      "normal"
    ],
    "category": "おおごえポケモン",
    "height": 1,
    "weight": 40.5,
    "abilities": [
      {
        "name": "ぼうおん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "きもったま",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 84,
      "attack": 71,
      "defense": 43,
      "specialAttack": 71,
      "specialDefense": 43,
      "speed": 48
    },
    "flavorText": "もくぞうの いえを コナゴナに ふきとばすほどの",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/294.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/294.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/294.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 294,
        "name": "ドゴーム",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png"
      },
      {
        "pokemonId": 295,
        "name": "バクオング",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png",
        "condition": "Level 40"
      }
    ]
  },
  {
    "id": 295,
    "pokedexNumber": 295,
    "name": {
      "ja": "バクオング",
      "en": "Exploud",
      "kana": "バクオング",
      "romaji": "Bakuong"
    },
    "generation": 3,
    "types": [
      "normal"
    ],
    "category": "そうおんポケモン",
    "height": 1.5,
    "weight": 84,
    "abilities": [
      {
        "name": "ぼうおん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "きもったま",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 104,
      "attack": 91,
      "defense": 63,
      "specialAttack": 91,
      "specialDefense": 73,
      "speed": 68
    },
    "flavorText": "おおごえの しんどうで じしんを おこす。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/295.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/295.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/295.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 295,
        "name": "バクオング",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png"
      }
    ]
  },
  {
    "id": 296,
    "pokedexNumber": 296,
    "name": {
      "ja": "マクノシタ",
      "en": "Makuhita",
      "kana": "マクノシタ",
      "romaji": "Makunoshita"
    },
    "generation": 3,
    "types": [
      "fighting"
    ],
    "category": "こんじょうポケモン",
    "height": 1,
    "weight": 86.4,
    "abilities": [
      {
        "name": "あついしぼう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "こんじょう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ちからずく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 72,
      "attack": 60,
      "defense": 30,
      "specialAttack": 20,
      "specialDefense": 30,
      "speed": 25
    },
    "flavorText": "なんかい たおされても あきらめず たちあがる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/296.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/296.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/296.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 296,
        "name": "マクノシタ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png"
      },
      {
        "pokemonId": 297,
        "name": "ハリテヤマ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png",
        "condition": "Level 24"
      }
    ]
  },
  {
    "id": 297,
    "pokedexNumber": 297,
    "name": {
      "ja": "ハリテヤマ",
      "en": "Hariyama",
      "kana": "ハリテヤマ",
      "romaji": "Hariteyama"
    },
    "generation": 3,
    "types": [
      "fighting"
    ],
    "category": "つっぱりポケモン",
    "height": 2.3,
    "weight": 253.8,
    "abilities": [
      {
        "name": "あついしぼう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "こんじょう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ちからずく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 144,
      "attack": 120,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 60,
      "speed": 50
    },
    "flavorText": "いろんな ばしょで はりての けいこに はげむ。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/297.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/297.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/297.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 297,
        "name": "ハリテヤマ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png"
      }
    ]
  },
  {
    "id": 298,
    "pokedexNumber": 298,
    "name": {
      "ja": "ルリリ",
      "en": "Azurill",
      "kana": "ルリリ",
      "romaji": "Ruriri"
    },
    "generation": 3,
    "types": [
      "normal",
      "fairy"
    ],
    "category": "みずたまポケモン",
    "height": 0.2,
    "weight": 2,
    "abilities": [
      {
        "name": "あついしぼう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ちからもち",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "そうしょく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 50,
      "attack": 20,
      "defense": 40,
      "specialAttack": 20,
      "specialDefense": 40,
      "speed": 20
    },
    "flavorText": "なげなわの ようりょうで しっぽを ふりまわし",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/298.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/298.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/298.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/298.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 298,
        "name": "ルリリ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/298.png"
      },
      {
        "pokemonId": 183,
        "name": "マリル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png",
        "condition": "high Friendship"
      }
    ]
  },
  {
    "id": 299,
    "pokedexNumber": 299,
    "name": {
      "ja": "ノズパス",
      "en": "Nosepass",
      "kana": "ノズパス",
      "romaji": "Nosepass"
    },
    "generation": 3,
    "types": [
      "rock"
    ],
    "category": "コンパスポケモン",
    "height": 1,
    "weight": 97,
    "abilities": [
      {
        "name": "がんじょう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "じりょく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "すなのちから",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 30,
      "attack": 45,
      "defense": 135,
      "specialAttack": 45,
      "specialDefense": 90,
      "speed": 30
    },
    "flavorText": "じしゃくの はなは いつも きたを むいている。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/299.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/299.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/299.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/299.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 299,
        "name": "ノズパス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/299.png"
      },
      {
        "pokemonId": 476,
        "name": "ダイノーズ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/476.png",
        "condition": "level up in a Magnetic Field area"
      }
    ]
  },
  {
    "id": 300,
    "pokedexNumber": 300,
    "name": {
      "ja": "エネコ",
      "en": "Skitty",
      "kana": "エネコ",
      "romaji": "Eneco"
    },
    "generation": 3,
    "types": [
      "normal"
    ],
    "category": "こねこポケモン",
    "height": 0.6,
    "weight": 11,
    "abilities": [
      {
        "name": "メロメロボディ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ノーマルスキン",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ミラクルスキン",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 50,
      "attack": 45,
      "defense": 45,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 50
    },
    "flavorText": "うごく ものを みつけると むちゅうに なって",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/300.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/300.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/300.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 300,
        "name": "エネコ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png"
      },
      {
        "pokemonId": 301,
        "name": "エネコロロ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png",
        "condition": "use Moon Stone"
      }
    ]
  },
  {
    "id": 301,
    "pokedexNumber": 301,
    "name": {
      "ja": "エネコロロ",
      "en": "Delcatty",
      "kana": "エネコロロ",
      "romaji": "Enekororo"
    },
    "generation": 3,
    "types": [
      "normal"
    ],
    "category": "おすましポケモン",
    "height": 1.1,
    "weight": 32.6,
    "abilities": [
      {
        "name": "メロメロボディ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ノーマルスキン",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ミラクルスキン",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 70,
      "attack": 65,
      "defense": 65,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 90
    },
    "flavorText": "マイペースで じゆうきままな くらしを このむ。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/301.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/301.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/301.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 301,
        "name": "エネコロロ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png"
      }
    ]
  },
  {
    "id": 302,
    "pokedexNumber": 302,
    "name": {
      "ja": "ヤミラミ",
      "en": "Sableye",
      "kana": "ヤミラミ",
      "romaji": "Yamirami"
    },
    "generation": 3,
    "types": [
      "dark",
      "ghost"
    ],
    "category": "くらやみポケモン",
    "height": 0.5,
    "weight": 11,
    "abilities": [
      {
        "name": "するどいめ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "あとだし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "いたずらごころ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 50,
      "attack": 75,
      "defense": 75,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 50
    },
    "flavorText": "するどい ツメで つちを ほり いしを たべる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/302.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/302.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/302.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 302,
        "name": "ヤミラミ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png"
      }
    ]
  },
  {
    "id": 303,
    "pokedexNumber": 303,
    "name": {
      "ja": "クチート",
      "en": "Mawile",
      "kana": "クチート",
      "romaji": "Kucheat"
    },
    "generation": 3,
    "types": [
      "steel",
      "fairy"
    ],
    "category": "あざむきポケモン",
    "height": 0.6,
    "weight": 11.5,
    "abilities": [
      {
        "name": "かいりきバサミ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "いかく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ちからずく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 50,
      "attack": 85,
      "defense": 85,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 50
    },
    "flavorText": "はがねの ツノが へんけいした おおきな あご。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/303.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/303.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/303.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 303,
        "name": "クチート",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png"
      }
    ]
  },
  {
    "id": 304,
    "pokedexNumber": 304,
    "name": {
      "ja": "ココドラ",
      "en": "Aron",
      "kana": "ココドラ",
      "romaji": "Cokodora"
    },
    "generation": 3,
    "types": [
      "steel",
      "rock"
    ],
    "category": "てつヨロイポケモン",
    "height": 0.4,
    "weight": 60,
    "abilities": [
      {
        "name": "がんじょう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "いしあたま",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ヘヴィメタル",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 50,
      "attack": 70,
      "defense": 100,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 30
    },
    "flavorText": "はがねの からだを つくるため てっこうせきを",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/304.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/304.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/304.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 304,
        "name": "ココドラ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png"
      },
      {
        "pokemonId": 305,
        "name": "コドラ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/305.png",
        "condition": "Level 32"
      }
    ]
  },
  {
    "id": 305,
    "pokedexNumber": 305,
    "name": {
      "ja": "コドラ",
      "en": "Lairon",
      "kana": "コドラ",
      "romaji": "Kodora"
    },
    "generation": 3,
    "types": [
      "steel",
      "rock"
    ],
    "category": "てつヨロイポケモン",
    "height": 0.9,
    "weight": 120,
    "abilities": [
      {
        "name": "がんじょう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "いしあたま",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ヘヴィメタル",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 90,
      "defense": 140,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 40
    },
    "flavorText": "えいよう まんてんの わきみずを おなかいっぱい",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/305.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/305.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/305.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/305.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 305,
        "name": "コドラ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/305.png"
      },
      {
        "pokemonId": 306,
        "name": "ボスゴドラ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png",
        "condition": "Level 42"
      }
    ]
  },
  {
    "id": 306,
    "pokedexNumber": 306,
    "name": {
      "ja": "ボスゴドラ",
      "en": "Aggron",
      "kana": "ボスゴドラ",
      "romaji": "Bossgodora"
    },
    "generation": 3,
    "types": [
      "steel",
      "rock"
    ],
    "category": "てつヨロイポケモン",
    "height": 2.1,
    "weight": 360,
    "abilities": [
      {
        "name": "がんじょう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "いしあたま",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ヘヴィメタル",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 70,
      "attack": 110,
      "defense": 180,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 50
    },
    "flavorText": "やま ひとつを じぶんの なわばりに していて",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/306.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/306.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/306.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 306,
        "name": "ボスゴドラ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png"
      }
    ]
  },
  {
    "id": 307,
    "pokedexNumber": 307,
    "name": {
      "ja": "アサナン",
      "en": "Meditite",
      "kana": "アサナン",
      "romaji": "Asanan"
    },
    "generation": 3,
    "types": [
      "fighting",
      "psychic"
    ],
    "category": "めいそうポケモン",
    "height": 0.6,
    "weight": 11.2,
    "abilities": [
      {
        "name": "ヨガパワー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "テレパシー",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 30,
      "attack": 40,
      "defense": 55,
      "specialAttack": 40,
      "specialDefense": 55,
      "speed": 60
    },
    "flavorText": "めいそうで せいしんエネルギーを たかめている。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/307.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/307.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/307.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/307.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 307,
        "name": "アサナン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/307.png"
      },
      {
        "pokemonId": 308,
        "name": "チャーレム",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png",
        "condition": "Level 37"
      }
    ]
  },
  {
    "id": 308,
    "pokedexNumber": 308,
    "name": {
      "ja": "チャーレム",
      "en": "Medicham",
      "kana": "チャーレム",
      "romaji": "Charem"
    },
    "generation": 3,
    "types": [
      "fighting",
      "psychic"
    ],
    "category": "めいそうポケモン",
    "height": 1.3,
    "weight": 31.5,
    "abilities": [
      {
        "name": "ヨガパワー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "テレパシー",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 75,
      "specialAttack": 60,
      "specialDefense": 75,
      "speed": 80
    },
    "flavorText": "めいそうする ことで からだの エネルギーが",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/308.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/308.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/308.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 308,
        "name": "チャーレム",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png"
      }
    ]
  },
  {
    "id": 309,
    "pokedexNumber": 309,
    "name": {
      "ja": "ラクライ",
      "en": "Electrike",
      "kana": "ラクライ",
      "romaji": "Rakurai"
    },
    "generation": 3,
    "types": [
      "electric"
    ],
    "category": "いなずまポケモン",
    "height": 0.6,
    "weight": 15.2,
    "abilities": [
      {
        "name": "せいでんき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ひらいしん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "マイナス",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "specialAttack": 65,
      "specialDefense": 40,
      "speed": 65
    },
    "flavorText": "めにも とまらぬ スピードで はしる ポケモン。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/309.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/309.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/309.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 309,
        "name": "ラクライ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png"
      },
      {
        "pokemonId": 310,
        "name": "ライボルト",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png",
        "condition": "Level 26"
      }
    ]
  },
  {
    "id": 310,
    "pokedexNumber": 310,
    "name": {
      "ja": "ライボルト",
      "en": "Manectric",
      "kana": "ライボルト",
      "romaji": "Livolt"
    },
    "generation": 3,
    "types": [
      "electric"
    ],
    "category": "ほうでんポケモン",
    "height": 1.5,
    "weight": 40.2,
    "abilities": [
      {
        "name": "せいでんき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ひらいしん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "マイナス",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 70,
      "attack": 75,
      "defense": 60,
      "specialAttack": 105,
      "specialDefense": 60,
      "speed": 105
    },
    "flavorText": "たてがみから つよい でんきを はっしている。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/310.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/310.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/310.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 310,
        "name": "ライボルト",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png"
      }
    ]
  },
  {
    "id": 311,
    "pokedexNumber": 311,
    "name": {
      "ja": "プラスル",
      "en": "Plusle",
      "kana": "プラスル",
      "romaji": "Prasle"
    },
    "generation": 3,
    "types": [
      "electric"
    ],
    "category": "おうえんポケモン",
    "height": 0.4,
    "weight": 4.2,
    "abilities": [
      {
        "name": "プラス",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ひらいしん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 50,
      "defense": 40,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 95
    },
    "flavorText": "いつも なかまを おうえんしている ポケモン。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/311.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/311.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/311.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 311,
        "name": "プラスル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png"
      }
    ]
  },
  {
    "id": 312,
    "pokedexNumber": 312,
    "name": {
      "ja": "マイナン",
      "en": "Minun",
      "kana": "マイナン",
      "romaji": "Minun"
    },
    "generation": 3,
    "types": [
      "electric"
    ],
    "category": "おうえんポケモン",
    "height": 0.4,
    "weight": 4.2,
    "abilities": [
      {
        "name": "マイナス",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ちくでん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 40,
      "defense": 50,
      "specialAttack": 75,
      "specialDefense": 85,
      "speed": 95
    },
    "flavorText": "じぶんよりも なかまの おうえんが だいじ。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/312.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/312.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/312.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 312,
        "name": "マイナン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png"
      }
    ]
  },
  {
    "id": 313,
    "pokedexNumber": 313,
    "name": {
      "ja": "バルビート",
      "en": "Volbeat",
      "kana": "バルビート",
      "romaji": "Barubeat"
    },
    "generation": 3,
    "types": [
      "bug"
    ],
    "category": "ほたるポケモン",
    "height": 0.7,
    "weight": 17.7,
    "abilities": [
      {
        "name": "はっこう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "むしのしらせ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "いたずらごころ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 65,
      "attack": 73,
      "defense": 75,
      "specialAttack": 47,
      "specialDefense": 85,
      "speed": 85
    },
    "flavorText": "ひが くれると しっぽから ひかりを だして",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/313.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/313.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/313.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/313.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 313,
        "name": "バルビート",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/313.png"
      }
    ]
  },
  {
    "id": 314,
    "pokedexNumber": 314,
    "name": {
      "ja": "イルミーゼ",
      "en": "Illumise",
      "kana": "イルミーゼ",
      "romaji": "Illumise"
    },
    "generation": 3,
    "types": [
      "bug"
    ],
    "category": "ほたるポケモン",
    "height": 0.6,
    "weight": 17.7,
    "abilities": [
      {
        "name": "どんかん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "いろめがね",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "いたずらごころ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 65,
      "attack": 47,
      "defense": 75,
      "specialAttack": 73,
      "specialDefense": 85,
      "speed": 85
    },
    "flavorText": "バルビートを ゆうどうして サインを えがく。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/314.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/314.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/314.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/314.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 314,
        "name": "イルミーゼ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/314.png"
      }
    ]
  },
  {
    "id": 315,
    "pokedexNumber": 315,
    "name": {
      "ja": "ロゼリア",
      "en": "Roselia",
      "kana": "ロゼリア",
      "romaji": "Roselia"
    },
    "generation": 3,
    "types": [
      "grass",
      "poison"
    ],
    "category": "いばらポケモン",
    "height": 0.3,
    "weight": 2,
    "abilities": [
      {
        "name": "しぜんかいふく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "どくのトゲ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "リーフガード",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 50,
      "attack": 60,
      "defense": 45,
      "specialAttack": 100,
      "specialDefense": 80,
      "speed": 65
    },
    "flavorText": "ごく まれに めずらしい いろの はなを",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/315.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/315.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/315.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/315.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 315,
        "name": "ロゼリア",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/315.png"
      },
      {
        "pokemonId": 407,
        "name": "ロズレイド",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png",
        "condition": "use Shiny Stone"
      }
    ]
  },
  {
    "id": 316,
    "pokedexNumber": 316,
    "name": {
      "ja": "ゴクリン",
      "en": "Gulpin",
      "kana": "ゴクリン",
      "romaji": "Gokulin"
    },
    "generation": 3,
    "types": [
      "poison"
    ],
    "category": "いぶくろポケモン",
    "height": 0.4,
    "weight": 10.3,
    "abilities": [
      {
        "name": "ヘドロえき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ねんちゃく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "くいしんぼう",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 70,
      "attack": 43,
      "defense": 53,
      "specialAttack": 43,
      "specialDefense": 53,
      "speed": 40
    },
    "flavorText": "からだの ほとんどが いぶくろで できているので",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/316.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/316.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/316.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/316.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 316,
        "name": "ゴクリン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/316.png"
      },
      {
        "pokemonId": 317,
        "name": "マルノーム",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/317.png",
        "condition": "Level 26"
      }
    ]
  },
  {
    "id": 317,
    "pokedexNumber": 317,
    "name": {
      "ja": "マルノーム",
      "en": "Swalot",
      "kana": "マルノーム",
      "romaji": "Marunoom"
    },
    "generation": 3,
    "types": [
      "poison"
    ],
    "category": "どくぶくろポケモン",
    "height": 1.7,
    "weight": 80,
    "abilities": [
      {
        "name": "ヘドロえき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ねんちゃく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "くいしんぼう",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 100,
      "attack": 73,
      "defense": 83,
      "specialAttack": 73,
      "specialDefense": 83,
      "speed": 55
    },
    "flavorText": "はが １ぽんも ないので なんでも まるのみ。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/317.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/317.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/317.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/317.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 317,
        "name": "マルノーム",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/317.png"
      }
    ]
  },
  {
    "id": 318,
    "pokedexNumber": 318,
    "name": {
      "ja": "キバニア",
      "en": "Carvanha",
      "kana": "キバニア",
      "romaji": "Kibanha"
    },
    "generation": 3,
    "types": [
      "water",
      "dark"
    ],
    "category": "どうもうポケモン",
    "height": 0.8,
    "weight": 20.8,
    "abilities": [
      {
        "name": "さめはだ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "かそく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 45,
      "attack": 90,
      "defense": 20,
      "specialAttack": 65,
      "specialDefense": 20,
      "speed": 65
    },
    "flavorText": "はったつした アゴと するどく とがった キバは",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/318.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/318.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/318.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 318,
        "name": "キバニア",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png"
      },
      {
        "pokemonId": 319,
        "name": "サメハダー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png",
        "condition": "Level 30"
      }
    ]
  },
  {
    "id": 319,
    "pokedexNumber": 319,
    "name": {
      "ja": "サメハダー",
      "en": "Sharpedo",
      "kana": "サメハダー",
      "romaji": "Samehader"
    },
    "generation": 3,
    "types": [
      "water",
      "dark"
    ],
    "category": "きょうぼうポケモン",
    "height": 1.8,
    "weight": 88.8,
    "abilities": [
      {
        "name": "さめはだ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "かそく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 70,
      "attack": 120,
      "defense": 40,
      "specialAttack": 95,
      "specialDefense": 40,
      "speed": 95
    },
    "flavorText": "うみのギャングと よばれ おそれられている。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/319.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/319.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/319.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 319,
        "name": "サメハダー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png"
      }
    ]
  },
  {
    "id": 320,
    "pokedexNumber": 320,
    "name": {
      "ja": "ホエルコ",
      "en": "Wailmer",
      "kana": "ホエルコ",
      "romaji": "Hoeruko"
    },
    "generation": 3,
    "types": [
      "water"
    ],
    "category": "たまくじらポケモン",
    "height": 2,
    "weight": 130,
    "abilities": [
      {
        "name": "みずのベール",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "どんかん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "プレッシャー",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 130,
      "attack": 70,
      "defense": 35,
      "specialAttack": 70,
      "specialDefense": 35,
      "speed": 60
    },
    "flavorText": "からだに かいすいを ためると ボールの ように",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/320.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/320.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/320.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 320,
        "name": "ホエルコ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png"
      },
      {
        "pokemonId": 321,
        "name": "ホエルオー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png",
        "condition": "Level 40"
      }
    ]
  },
  {
    "id": 321,
    "pokedexNumber": 321,
    "name": {
      "ja": "ホエルオー",
      "en": "Wailord",
      "kana": "ホエルオー",
      "romaji": "Whaloh"
    },
    "generation": 3,
    "types": [
      "water"
    ],
    "category": "うきくじらポケモン",
    "height": 14.5,
    "weight": 398,
    "abilities": [
      {
        "name": "みずのベール",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "どんかん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "プレッシャー",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 170,
      "attack": 90,
      "defense": 45,
      "specialAttack": 90,
      "specialDefense": 45,
      "speed": 60
    },
    "flavorText": "みつかった なかでは さいだいの ポケモン。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/321.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/321.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/321.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 321,
        "name": "ホエルオー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png"
      }
    ]
  },
  {
    "id": 322,
    "pokedexNumber": 322,
    "name": {
      "ja": "ドンメル",
      "en": "Numel",
      "kana": "ドンメル",
      "romaji": "Donmel"
    },
    "generation": 3,
    "types": [
      "fire",
      "ground"
    ],
    "category": "どんかんポケモン",
    "height": 0.7,
    "weight": 24,
    "abilities": [
      {
        "name": "どんかん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "たんじゅん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "マイペース",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 40,
      "specialAttack": 65,
      "specialDefense": 45,
      "speed": 35
    },
    "flavorText": "１２００どの マグマを からだに ためている。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/322.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/322.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/322.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/322.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 322,
        "name": "ドンメル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/322.png"
      },
      {
        "pokemonId": 323,
        "name": "バクーダ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png",
        "condition": "Level 33"
      }
    ]
  },
  {
    "id": 323,
    "pokedexNumber": 323,
    "name": {
      "ja": "バクーダ",
      "en": "Camerupt",
      "kana": "バクーダ",
      "romaji": "Bakuuda"
    },
    "generation": 3,
    "types": [
      "fire",
      "ground"
    ],
    "category": "ふんかポケモン",
    "height": 1.9,
    "weight": 220,
    "abilities": [
      {
        "name": "マグマのよろい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ハードロック",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "いかりのつぼ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 70,
      "attack": 100,
      "defense": 70,
      "specialAttack": 105,
      "specialDefense": 75,
      "speed": 40
    },
    "flavorText": "せなかの コブは ほねが かたちを かえたもの。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/323.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/323.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/323.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 323,
        "name": "バクーダ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png"
      }
    ]
  },
  {
    "id": 324,
    "pokedexNumber": 324,
    "name": {
      "ja": "コータス",
      "en": "Torkoal",
      "kana": "コータス",
      "romaji": "Cotoise"
    },
    "generation": 3,
    "types": [
      "fire"
    ],
    "category": "せきたんポケモン",
    "height": 0.5,
    "weight": 80.4,
    "abilities": [
      {
        "name": "しろいけむり",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ひでり",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "シェルアーマー",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 70,
      "attack": 85,
      "defense": 140,
      "specialAttack": 85,
      "specialDefense": 70,
      "speed": 20
    },
    "flavorText": "やまを ほって せきたんを みつけては せっせと",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/324.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/324.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/324.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 324,
        "name": "コータス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png"
      }
    ]
  },
  {
    "id": 325,
    "pokedexNumber": 325,
    "name": {
      "ja": "バネブー",
      "en": "Spoink",
      "kana": "バネブー",
      "romaji": "Baneboo"
    },
    "generation": 3,
    "types": [
      "psychic"
    ],
    "category": "とびはねポケモン",
    "height": 0.7,
    "weight": 30.6,
    "abilities": [
      {
        "name": "あついしぼう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "マイペース",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "くいしんぼう",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 25,
      "defense": 35,
      "specialAttack": 70,
      "specialDefense": 80,
      "speed": 60
    },
    "flavorText": "シッポで びょんびょん とびはねる ポケモン。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/325.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/325.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/325.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/325.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 325,
        "name": "バネブー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/325.png"
      },
      {
        "pokemonId": 326,
        "name": "ブーピッグ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png",
        "condition": "Level 32"
      }
    ]
  },
  {
    "id": 326,
    "pokedexNumber": 326,
    "name": {
      "ja": "ブーピッグ",
      "en": "Grumpig",
      "kana": "ブーピッグ",
      "romaji": "Boopig"
    },
    "generation": 3,
    "types": [
      "psychic"
    ],
    "category": "あやつりポケモン",
    "height": 0.9,
    "weight": 71.5,
    "abilities": [
      {
        "name": "あついしぼう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "マイペース",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "くいしんぼう",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 80,
      "attack": 45,
      "defense": 65,
      "specialAttack": 90,
      "specialDefense": 110,
      "speed": 80
    },
    "flavorText": "サイコパワーの はどうを くろしんじゅで つよめ",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/326.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/326.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/326.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 326,
        "name": "ブーピッグ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png"
      }
    ]
  },
  {
    "id": 327,
    "pokedexNumber": 327,
    "name": {
      "ja": "パッチール",
      "en": "Spinda",
      "kana": "パッチール",
      "romaji": "Patcheel"
    },
    "generation": 3,
    "types": [
      "normal"
    ],
    "category": "ぶちパンダポケモン",
    "height": 1.1,
    "weight": 5,
    "abilities": [
      {
        "name": "マイペース",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ちどりあし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "あまのじゃく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 60
    },
    "flavorText": "よのなかに いる パッチールは みんな ちがう",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/327.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/327.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/327.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/327.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 327,
        "name": "パッチール",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/327.png"
      }
    ]
  },
  {
    "id": 328,
    "pokedexNumber": 328,
    "name": {
      "ja": "ナックラー",
      "en": "Trapinch",
      "kana": "ナックラー",
      "romaji": "Nuckrar"
    },
    "generation": 3,
    "types": [
      "ground"
    ],
    "category": "ありじごくポケモン",
    "height": 0.7,
    "weight": 15,
    "abilities": [
      {
        "name": "かいりきバサミ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ありじごく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ちからずく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 45,
      "attack": 100,
      "defense": 45,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 10
    },
    "flavorText": "だっしゅつ ふかのうな あなを さばくに つくり",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/328.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/328.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/328.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/328.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 328,
        "name": "ナックラー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/328.png"
      },
      {
        "pokemonId": 329,
        "name": "ビブラーバ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png",
        "condition": "Level 35"
      }
    ]
  },
  {
    "id": 329,
    "pokedexNumber": 329,
    "name": {
      "ja": "ビブラーバ",
      "en": "Vibrava",
      "kana": "ビブラーバ",
      "romaji": "Vibrava"
    },
    "generation": 3,
    "types": [
      "ground",
      "dragon"
    ],
    "category": "しんどうポケモン",
    "height": 1.1,
    "weight": 15.3,
    "abilities": [
      {
        "name": "ふゆう",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 50,
      "attack": 70,
      "defense": 50,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 70
    },
    "flavorText": "ビブラーバの ハネは まだ せいちょうとちゅう。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/329.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/329.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/329.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 329,
        "name": "ビブラーバ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png"
      },
      {
        "pokemonId": 330,
        "name": "フライゴン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png",
        "condition": "Level 45"
      }
    ]
  },
  {
    "id": 330,
    "pokedexNumber": 330,
    "name": {
      "ja": "フライゴン",
      "en": "Flygon",
      "kana": "フライゴン",
      "romaji": "Flygon"
    },
    "generation": 3,
    "types": [
      "ground",
      "dragon"
    ],
    "category": "せいれいポケモン",
    "height": 2,
    "weight": 82,
    "abilities": [
      {
        "name": "ふゆう",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 80,
      "attack": 100,
      "defense": 80,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 100
    },
    "flavorText": "さばくの せいれいと よばれる ポケモン。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/330.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/330.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/330.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 330,
        "name": "フライゴン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png"
      }
    ]
  },
  {
    "id": 331,
    "pokedexNumber": 331,
    "name": {
      "ja": "サボネア",
      "en": "Cacnea",
      "kana": "サボネア",
      "romaji": "Sabonea"
    },
    "generation": 3,
    "types": [
      "grass"
    ],
    "category": "サボテンポケモン",
    "height": 0.4,
    "weight": 51.3,
    "abilities": [
      {
        "name": "すながくれ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ちょすい",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 50,
      "attack": 85,
      "defense": 40,
      "specialAttack": 85,
      "specialDefense": 40,
      "speed": 35
    },
    "flavorText": "さばく など かんそうした ちいきに せいそく。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/331.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/331.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/331.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/331.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 331,
        "name": "サボネア",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/331.png"
      },
      {
        "pokemonId": 332,
        "name": "ノクタス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png",
        "condition": "Level 32"
      }
    ]
  },
  {
    "id": 332,
    "pokedexNumber": 332,
    "name": {
      "ja": "ノクタス",
      "en": "Cacturne",
      "kana": "ノクタス",
      "romaji": "Noctus"
    },
    "generation": 3,
    "types": [
      "grass",
      "dark"
    ],
    "category": "カカシぐさポケモン",
    "height": 1.3,
    "weight": 77.4,
    "abilities": [
      {
        "name": "すながくれ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ちょすい",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 70,
      "attack": 115,
      "defense": 60,
      "specialAttack": 115,
      "specialDefense": 60,
      "speed": 55
    },
    "flavorText": "まよなか さばくを あるく たびびとの うしろを",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/332.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/332.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/332.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 332,
        "name": "ノクタス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png"
      }
    ]
  },
  {
    "id": 333,
    "pokedexNumber": 333,
    "name": {
      "ja": "チルット",
      "en": "Swablu",
      "kana": "チルット",
      "romaji": "Tyltto"
    },
    "generation": 3,
    "types": [
      "normal",
      "flying"
    ],
    "category": "わたどりポケモン",
    "height": 0.4,
    "weight": 1.2,
    "abilities": [
      {
        "name": "しぜんかいふく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ノーてんき",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 45,
      "attack": 40,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 75,
      "speed": 50
    },
    "flavorText": "わたぐもの ような ふさふさの つばさを もつ。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/333.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/333.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/333.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 333,
        "name": "チルット",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png"
      },
      {
        "pokemonId": 334,
        "name": "チルタリス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png",
        "condition": "Level 35"
      }
    ]
  },
  {
    "id": 334,
    "pokedexNumber": 334,
    "name": {
      "ja": "チルタリス",
      "en": "Altaria",
      "kana": "チルタリス",
      "romaji": "Tyltalis"
    },
    "generation": 3,
    "types": [
      "dragon",
      "flying"
    ],
    "category": "ハミングポケモン",
    "height": 1.1,
    "weight": 20.6,
    "abilities": [
      {
        "name": "しぜんかいふく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ノーてんき",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 75,
      "attack": 70,
      "defense": 90,
      "specialAttack": 70,
      "specialDefense": 105,
      "speed": 80
    },
    "flavorText": "うつくしい ソプラノで うたう ポケモン。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/334.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/334.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/334.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 334,
        "name": "チルタリス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png"
      }
    ]
  },
  {
    "id": 335,
    "pokedexNumber": 335,
    "name": {
      "ja": "ザングース",
      "en": "Zangoose",
      "kana": "ザングース",
      "romaji": "Zangoose"
    },
    "generation": 3,
    "types": [
      "normal"
    ],
    "category": "ネコイタチポケモン",
    "height": 1.3,
    "weight": 40.3,
    "abilities": [
      {
        "name": "めんえき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "どくぼうそう",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 73,
      "attack": 115,
      "defense": 60,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 90
    },
    "flavorText": "しゅくてき ハブネークとの たたかいの きおくが",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/335.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/335.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/335.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/335.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 335,
        "name": "ザングース",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/335.png"
      }
    ]
  },
  {
    "id": 336,
    "pokedexNumber": 336,
    "name": {
      "ja": "ハブネーク",
      "en": "Seviper",
      "kana": "ハブネーク",
      "romaji": "Habunake"
    },
    "generation": 3,
    "types": [
      "poison"
    ],
    "category": "キバへびポケモン",
    "height": 2.7,
    "weight": 52.5,
    "abilities": [
      {
        "name": "だっぴ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "すりぬけ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 73,
      "attack": 100,
      "defense": 60,
      "specialAttack": 100,
      "specialDefense": 60,
      "speed": 65
    },
    "flavorText": "かたなの ような しっぽは てきを きりさくのと",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/336.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/336.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/336.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/336.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 336,
        "name": "ハブネーク",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/336.png"
      }
    ]
  },
  {
    "id": 337,
    "pokedexNumber": 337,
    "name": {
      "ja": "ルナトーン",
      "en": "Lunatone",
      "kana": "ルナトーン",
      "romaji": "Lunatone"
    },
    "generation": 3,
    "types": [
      "rock",
      "psychic"
    ],
    "category": "いんせきポケモン",
    "height": 1,
    "weight": 168,
    "abilities": [
      {
        "name": "ふゆう",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 90,
      "attack": 55,
      "defense": 65,
      "specialAttack": 95,
      "specialDefense": 85,
      "speed": 70
    },
    "flavorText": "いんせきの おちた ばしょから みつかったため",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/337.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/337.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/337.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/337.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 337,
        "name": "ルナトーン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/337.png"
      }
    ]
  },
  {
    "id": 338,
    "pokedexNumber": 338,
    "name": {
      "ja": "ソルロック",
      "en": "Solrock",
      "kana": "ソルロック",
      "romaji": "Solrock"
    },
    "generation": 3,
    "types": [
      "rock",
      "psychic"
    ],
    "category": "いんせきポケモン",
    "height": 1.2,
    "weight": 154,
    "abilities": [
      {
        "name": "ふゆう",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 90,
      "attack": 95,
      "defense": 85,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 70
    },
    "flavorText": "うちゅうから おちてきたと いわれる しんしゅ。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/338.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/338.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/338.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/338.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 338,
        "name": "ソルロック",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/338.png"
      }
    ]
  },
  {
    "id": 339,
    "pokedexNumber": 339,
    "name": {
      "ja": "ドジョッチ",
      "en": "Barboach",
      "kana": "ドジョッチ",
      "romaji": "Dojoach"
    },
    "generation": 3,
    "types": [
      "water",
      "ground"
    ],
    "category": "ひげうおポケモン",
    "height": 0.4,
    "weight": 1.9,
    "abilities": [
      {
        "name": "どんかん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "きけんよち",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "うるおいボディ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 50,
      "attack": 48,
      "defense": 43,
      "specialAttack": 46,
      "specialDefense": 41,
      "speed": 60
    },
    "flavorText": "からだが ヌルヌルの まくで おおわれているので",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/339.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/339.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/339.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 339,
        "name": "ドジョッチ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png"
      },
      {
        "pokemonId": 340,
        "name": "ナマズン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png",
        "condition": "Level 30"
      }
    ]
  },
  {
    "id": 340,
    "pokedexNumber": 340,
    "name": {
      "ja": "ナマズン",
      "en": "Whiscash",
      "kana": "ナマズン",
      "romaji": "Namazun"
    },
    "generation": 3,
    "types": [
      "water",
      "ground"
    ],
    "category": "ひげうおポケモン",
    "height": 0.9,
    "weight": 23.6,
    "abilities": [
      {
        "name": "どんかん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "きけんよち",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "うるおいボディ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 110,
      "attack": 78,
      "defense": 73,
      "specialAttack": 76,
      "specialDefense": 71,
      "speed": 60
    },
    "flavorText": "なわばり いしきが とても つよい ポケモン。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/340.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/340.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/340.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 340,
        "name": "ナマズン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png"
      }
    ]
  },
  {
    "id": 341,
    "pokedexNumber": 341,
    "name": {
      "ja": "ヘイガニ",
      "en": "Corphish",
      "kana": "ヘイガニ",
      "romaji": "Heigani"
    },
    "generation": 3,
    "types": [
      "water"
    ],
    "category": "ごろつきポケモン",
    "height": 0.6,
    "weight": 11.5,
    "abilities": [
      {
        "name": "かいりきバサミ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "シェルアーマー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "てきおうりょく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 43,
      "attack": 80,
      "defense": 65,
      "specialAttack": 50,
      "specialDefense": 35,
      "speed": 35
    },
    "flavorText": "もともと がいこくに すんでいた ポケモンを",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/341.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/341.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/341.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 341,
        "name": "ヘイガニ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png"
      },
      {
        "pokemonId": 342,
        "name": "シザリガー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png",
        "condition": "Level 30"
      }
    ]
  },
  {
    "id": 342,
    "pokedexNumber": 342,
    "name": {
      "ja": "シザリガー",
      "en": "Crawdaunt",
      "kana": "シザリガー",
      "romaji": "Shizariger"
    },
    "generation": 3,
    "types": [
      "water",
      "dark"
    ],
    "category": "ならずものポケモン",
    "height": 1.1,
    "weight": 32.8,
    "abilities": [
      {
        "name": "かいりきバサミ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "シェルアーマー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "てきおうりょく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 63,
      "attack": 120,
      "defense": 85,
      "specialAttack": 90,
      "specialDefense": 55,
      "speed": 55
    },
    "flavorText": "すぐに たたかいを いどむ きしょうの あらさ。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/342.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/342.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/342.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 342,
        "name": "シザリガー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png"
      }
    ]
  },
  {
    "id": 343,
    "pokedexNumber": 343,
    "name": {
      "ja": "ヤジロン",
      "en": "Baltoy",
      "kana": "ヤジロン",
      "romaji": "Yajilon"
    },
    "generation": 3,
    "types": [
      "ground",
      "psychic"
    ],
    "category": "どぐうポケモン",
    "height": 0.5,
    "weight": 21.5,
    "abilities": [
      {
        "name": "ふゆう",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 40,
      "attack": 40,
      "defense": 55,
      "specialAttack": 40,
      "specialDefense": 70,
      "speed": 55
    },
    "flavorText": "いっぽんあしで かいてん しながら いどうする。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/343.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/343.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/343.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 343,
        "name": "ヤジロン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png"
      },
      {
        "pokemonId": 344,
        "name": "ネンドール",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png",
        "condition": "Level 36"
      }
    ]
  },
  {
    "id": 344,
    "pokedexNumber": 344,
    "name": {
      "ja": "ネンドール",
      "en": "Claydol",
      "kana": "ネンドール",
      "romaji": "Nendoll"
    },
    "generation": 3,
    "types": [
      "ground",
      "psychic"
    ],
    "category": "どぐうポケモン",
    "height": 1.5,
    "weight": 108,
    "abilities": [
      {
        "name": "ふゆう",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 70,
      "defense": 105,
      "specialAttack": 70,
      "specialDefense": 120,
      "speed": 75
    },
    "flavorText": "こだいじんの どろにんぎょうが かいこうせんを",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/344.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/344.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/344.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 344,
        "name": "ネンドール",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png"
      }
    ]
  },
  {
    "id": 345,
    "pokedexNumber": 345,
    "name": {
      "ja": "リリーラ",
      "en": "Lileep",
      "kana": "リリーラ",
      "romaji": "Lilyla"
    },
    "generation": 3,
    "types": [
      "rock",
      "grass"
    ],
    "category": "ウミユリポケモン",
    "height": 1,
    "weight": 23.8,
    "abilities": [
      {
        "name": "きゅうばん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "よびみず",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 66,
      "attack": 41,
      "defense": 77,
      "specialAttack": 61,
      "specialDefense": 87,
      "speed": 23
    },
    "flavorText": "やく １おくねんまえに ぜつめつした ポケモン。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/345.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/345.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/345.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/345.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 345,
        "name": "リリーラ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/345.png"
      },
      {
        "pokemonId": 346,
        "name": "ユレイドル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png",
        "condition": "Level 40"
      }
    ]
  },
  {
    "id": 346,
    "pokedexNumber": 346,
    "name": {
      "ja": "ユレイドル",
      "en": "Cradily",
      "kana": "ユレイドル",
      "romaji": "Yuradle"
    },
    "generation": 3,
    "types": [
      "rock",
      "grass"
    ],
    "category": "いわつぼポケモン",
    "height": 1.5,
    "weight": 60.4,
    "abilities": [
      {
        "name": "きゅうばん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "よびみず",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 86,
      "attack": 81,
      "defense": 97,
      "specialAttack": 81,
      "specialDefense": 107,
      "speed": 43
    },
    "flavorText": "うみの そこで エサを さがして あるきまわる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/346.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/346.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/346.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 346,
        "name": "ユレイドル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png"
      }
    ]
  },
  {
    "id": 347,
    "pokedexNumber": 347,
    "name": {
      "ja": "アノプス",
      "en": "Anorith",
      "kana": "アノプス",
      "romaji": "Anopth"
    },
    "generation": 3,
    "types": [
      "rock",
      "bug"
    ],
    "category": "むかしエビポケモン",
    "height": 0.7,
    "weight": 12.5,
    "abilities": [
      {
        "name": "カブトアーマー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "すいすい",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 45,
      "attack": 95,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 75
    },
    "flavorText": "ポケモンの せんぞの いっしゅと いわれている。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/347.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/347.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/347.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 347,
        "name": "アノプス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png"
      },
      {
        "pokemonId": 348,
        "name": "アーマルド",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png",
        "condition": "Level 40"
      }
    ]
  },
  {
    "id": 348,
    "pokedexNumber": 348,
    "name": {
      "ja": "アーマルド",
      "en": "Armaldo",
      "kana": "アーマルド",
      "romaji": "Armaldo"
    },
    "generation": 3,
    "types": [
      "rock",
      "bug"
    ],
    "category": "かっちゅうポケモン",
    "height": 1.5,
    "weight": 68.2,
    "abilities": [
      {
        "name": "カブトアーマー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "すいすい",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 75,
      "attack": 125,
      "defense": 100,
      "specialAttack": 70,
      "specialDefense": 80,
      "speed": 45
    },
    "flavorText": "おおむかし ぜつめつした ポケモンの いっしゅ。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/348.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/348.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/348.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 348,
        "name": "アーマルド",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png"
      }
    ]
  },
  {
    "id": 349,
    "pokedexNumber": 349,
    "name": {
      "ja": "ヒンバス",
      "en": "Feebas",
      "kana": "ヒンバス",
      "romaji": "Hinbass"
    },
    "generation": 3,
    "types": [
      "water"
    ],
    "category": "さかなポケモン",
    "height": 0.6,
    "weight": 7.4,
    "abilities": [
      {
        "name": "すいすい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "どんかん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "てきおうりょく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 20,
      "attack": 15,
      "defense": 20,
      "specialAttack": 10,
      "specialDefense": 55,
      "speed": 80
    },
    "flavorText": "うまれつき ヒレが ボロボロで みっともないため",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/349.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/349.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/349.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/349.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 349,
        "name": "ヒンバス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/349.png"
      },
      {
        "pokemonId": 350,
        "name": "ミロカロス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png",
        "condition": "trade holding Prism Scale, or level up with max Beauty"
      }
    ]
  },
  {
    "id": 350,
    "pokedexNumber": 350,
    "name": {
      "ja": "ミロカロス",
      "en": "Milotic",
      "kana": "ミロカロス",
      "romaji": "Milokaross"
    },
    "generation": 3,
    "types": [
      "water"
    ],
    "category": "いつくしみポケモン",
    "height": 6.2,
    "weight": 162,
    "abilities": [
      {
        "name": "ふしぎなうろこ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "かちき",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "メロメロボディ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 95,
      "attack": 60,
      "defense": 79,
      "specialAttack": 100,
      "specialDefense": 125,
      "speed": 81
    },
    "flavorText": "もっとも うつくしい ポケモンと いわれている。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/350.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/350.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/350.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 350,
        "name": "ミロカロス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png"
      }
    ]
  },
  {
    "id": 351,
    "pokedexNumber": 351,
    "name": {
      "ja": "ポワルン",
      "en": "Castform",
      "kana": "ポワルン",
      "romaji": "Powalen"
    },
    "generation": 3,
    "types": [
      "normal"
    ],
    "category": "てんきポケモン",
    "height": 0.3,
    "weight": 0.8,
    "abilities": [
      {
        "name": "てんきや",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 70,
      "attack": 70,
      "defense": 70,
      "specialAttack": 70,
      "specialDefense": 70,
      "speed": 70
    },
    "flavorText": "てんきに よって すがたが かわる ポケモン。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/351.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/351.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/351.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 351,
        "name": "ポワルン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png"
      }
    ]
  },
  {
    "id": 352,
    "pokedexNumber": 352,
    "name": {
      "ja": "カクレオン",
      "en": "Kecleon",
      "kana": "カクレオン",
      "romaji": "Kakureon"
    },
    "generation": 3,
    "types": [
      "normal"
    ],
    "category": "いろへんげポケモン",
    "height": 1,
    "weight": 22,
    "abilities": [
      {
        "name": "へんしょく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "へんげんじざい",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 90,
      "defense": 70,
      "specialAttack": 60,
      "specialDefense": 120,
      "speed": 40
    },
    "flavorText": "からだの いろを じざいに かえる ことで",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/352.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/352.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/352.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/352.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 352,
        "name": "カクレオン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/352.png"
      }
    ]
  },
  {
    "id": 353,
    "pokedexNumber": 353,
    "name": {
      "ja": "カゲボウズ",
      "en": "Shuppet",
      "kana": "カゲボウズ",
      "romaji": "Kagebouzu"
    },
    "generation": 3,
    "types": [
      "ghost"
    ],
    "category": "にんぎょうポケモン",
    "height": 0.6,
    "weight": 2.3,
    "abilities": [
      {
        "name": "ふみん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "おみとおし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "のろわれボディ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 44,
      "attack": 75,
      "defense": 35,
      "specialAttack": 63,
      "specialDefense": 33,
      "speed": 45
    },
    "flavorText": "ねたみ うらみの かんじょうに ひきよせられる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/353.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/353.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/353.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/353.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 353,
        "name": "カゲボウズ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/353.png"
      },
      {
        "pokemonId": 354,
        "name": "ジュペッタ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png",
        "condition": "Level 37"
      }
    ]
  },
  {
    "id": 354,
    "pokedexNumber": 354,
    "name": {
      "ja": "ジュペッタ",
      "en": "Banette",
      "kana": "ジュペッタ",
      "romaji": "Juppeta"
    },
    "generation": 3,
    "types": [
      "ghost"
    ],
    "category": "ぬいぐるみポケモン",
    "height": 1.1,
    "weight": 12.5,
    "abilities": [
      {
        "name": "ふみん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "おみとおし",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "のろわれボディ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 64,
      "attack": 115,
      "defense": 65,
      "specialAttack": 83,
      "specialDefense": 63,
      "speed": 65
    },
    "flavorText": "じぶんの からだを はりで キズつける とき",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/354.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/354.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/354.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 354,
        "name": "ジュペッタ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png"
      }
    ]
  },
  {
    "id": 355,
    "pokedexNumber": 355,
    "name": {
      "ja": "ヨマワル",
      "en": "Duskull",
      "kana": "ヨマワル",
      "romaji": "Yomawaru"
    },
    "generation": 3,
    "types": [
      "ghost"
    ],
    "category": "おむかえポケモン",
    "height": 0.8,
    "weight": 15,
    "abilities": [
      {
        "name": "ふゆう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "おみとおし",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 20,
      "attack": 40,
      "defense": 90,
      "specialAttack": 30,
      "specialDefense": 90,
      "speed": 25
    },
    "flavorText": "まよなか やみに まぎれて さまよっている。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/355.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/355.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/355.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/355.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 355,
        "name": "ヨマワル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/355.png"
      },
      {
        "pokemonId": 356,
        "name": "サマヨール",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png",
        "condition": "Level 37"
      }
    ]
  },
  {
    "id": 356,
    "pokedexNumber": 356,
    "name": {
      "ja": "サマヨール",
      "en": "Dusclops",
      "kana": "サマヨール",
      "romaji": "Samayouru"
    },
    "generation": 3,
    "types": [
      "ghost"
    ],
    "category": "てまねきポケモン",
    "height": 1.6,
    "weight": 30.6,
    "abilities": [
      {
        "name": "プレッシャー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "おみとおし",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 40,
      "attack": 70,
      "defense": 130,
      "specialAttack": 60,
      "specialDefense": 130,
      "speed": 25
    },
    "flavorText": "どんな おおきさの ものも すいこんで しまう。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/356.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/356.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/356.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 356,
        "name": "サマヨール",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png"
      },
      {
        "pokemonId": 477,
        "name": "ヨノワール",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png",
        "condition": "trade holding Reaper Cloth"
      }
    ]
  },
  {
    "id": 357,
    "pokedexNumber": 357,
    "name": {
      "ja": "トロピウス",
      "en": "Tropius",
      "kana": "トロピウス",
      "romaji": "Tropius"
    },
    "generation": 3,
    "types": [
      "grass",
      "flying"
    ],
    "category": "フルーツポケモン",
    "height": 2,
    "weight": 100,
    "abilities": [
      {
        "name": "ようりょくそ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "サンパワー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "しゅうかく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 99,
      "attack": 68,
      "defense": 83,
      "specialAttack": 72,
      "specialDefense": 87,
      "speed": 51
    },
    "flavorText": "くびの フサは あまくて こどもに だいにんき。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/357.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/357.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/357.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/357.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 357,
        "name": "トロピウス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/357.png"
      }
    ]
  },
  {
    "id": 358,
    "pokedexNumber": 358,
    "name": {
      "ja": "チリーン",
      "en": "Chimecho",
      "kana": "チリーン",
      "romaji": "Chirean"
    },
    "generation": 3,
    "types": [
      "psychic"
    ],
    "category": "ふうりんポケモン",
    "height": 0.6,
    "weight": 1,
    "abilities": [
      {
        "name": "ふゆう",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 75,
      "attack": 50,
      "defense": 80,
      "specialAttack": 95,
      "specialDefense": 90,
      "speed": 65
    },
    "flavorText": "こえを からだの くうどうに はんきょうさせる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/358.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/358.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/358.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 358,
        "name": "チリーン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png"
      }
    ]
  },
  {
    "id": 359,
    "pokedexNumber": 359,
    "name": {
      "ja": "アブソル",
      "en": "Absol",
      "kana": "アブソル",
      "romaji": "Absol"
    },
    "generation": 3,
    "types": [
      "dark"
    ],
    "category": "わざわいポケモン",
    "height": 1.2,
    "weight": 47,
    "abilities": [
      {
        "name": "プレッシャー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "きょううん",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "せいぎのこころ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 65,
      "attack": 130,
      "defense": 60,
      "specialAttack": 75,
      "specialDefense": 60,
      "speed": 75
    },
    "flavorText": "しぜんさいがいを キャッチする ちからを もつ。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/359.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/359.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/359.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 359,
        "name": "アブソル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png"
      }
    ]
  },
  {
    "id": 360,
    "pokedexNumber": 360,
    "name": {
      "ja": "ソーナノ",
      "en": "Wynaut",
      "kana": "ソーナノ",
      "romaji": "Sohnano"
    },
    "generation": 3,
    "types": [
      "psychic"
    ],
    "category": "ほがらかポケモン",
    "height": 0.6,
    "weight": 14,
    "abilities": [
      {
        "name": "かげふみ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "テレパシー",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 95,
      "attack": 23,
      "defense": 48,
      "specialAttack": 23,
      "specialDefense": 48,
      "speed": 23
    },
    "flavorText": "つきのよる なかまたちと おしくらまんじゅう。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/360.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/360.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/360.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/360.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 360,
        "name": "ソーナノ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/360.png"
      },
      {
        "pokemonId": 202,
        "name": "ソーナンス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png",
        "condition": "Level 15"
      }
    ]
  },
  {
    "id": 361,
    "pokedexNumber": 361,
    "name": {
      "ja": "ユキワラシ",
      "en": "Snorunt",
      "kana": "ユキワラシ",
      "romaji": "Yukiwarashi"
    },
    "generation": 3,
    "types": [
      "ice"
    ],
    "category": "ゆきかさポケモン",
    "height": 0.7,
    "weight": 16.8,
    "abilities": [
      {
        "name": "せいしんりょく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "アイスボディ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ムラっけ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 50,
      "attack": 50,
      "defense": 50,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 50
    },
    "flavorText": "ゆきや こおりだけを たべて くらしている。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/361.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/361.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/361.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 361,
        "name": "ユキワラシ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png"
      },
      {
        "pokemonId": 362,
        "name": "オニゴーリ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png",
        "condition": "Level 42"
      },
      {
        "pokemonId": 478,
        "name": "ユキメノコ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png",
        "condition": "use Dawn Stone, Female"
      }
    ]
  },
  {
    "id": 362,
    "pokedexNumber": 362,
    "name": {
      "ja": "オニゴーリ",
      "en": "Glalie",
      "kana": "オニゴーリ",
      "romaji": "Onigohri"
    },
    "generation": 3,
    "types": [
      "ice"
    ],
    "category": "がんめんポケモン",
    "height": 1.5,
    "weight": 256.5,
    "abilities": [
      {
        "name": "せいしんりょく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "アイスボディ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ムラっけ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 80,
      "attack": 80,
      "defense": 80,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 80
    },
    "flavorText": "いわの からだを こおりの よろいで かためた。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/362.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/362.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/362.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 362,
        "name": "オニゴーリ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png"
      }
    ]
  },
  {
    "id": 363,
    "pokedexNumber": 363,
    "name": {
      "ja": "タマザラシ",
      "en": "Spheal",
      "kana": "タマザラシ",
      "romaji": "Tamazarashi"
    },
    "generation": 3,
    "types": [
      "ice",
      "water"
    ],
    "category": "てたたきポケモン",
    "height": 0.8,
    "weight": 39.5,
    "abilities": [
      {
        "name": "あついしぼう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "アイスボディ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "どんかん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 70,
      "attack": 40,
      "defense": 50,
      "specialAttack": 55,
      "specialDefense": 50,
      "speed": 25
    },
    "flavorText": "あるくより ころがる ほうが だんぜん はやい。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/363.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/363.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/363.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 363,
        "name": "タマザラシ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png"
      },
      {
        "pokemonId": 364,
        "name": "トドグラー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png",
        "condition": "Level 32"
      }
    ]
  },
  {
    "id": 364,
    "pokedexNumber": 364,
    "name": {
      "ja": "トドグラー",
      "en": "Sealeo",
      "kana": "トドグラー",
      "romaji": "Todoggler"
    },
    "generation": 3,
    "types": [
      "ice",
      "water"
    ],
    "category": "たままわしポケモン",
    "height": 1.1,
    "weight": 87.6,
    "abilities": [
      {
        "name": "あついしぼう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "アイスボディ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "どんかん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 90,
      "attack": 60,
      "defense": 70,
      "specialAttack": 75,
      "specialDefense": 70,
      "speed": 45
    },
    "flavorText": "しょっちゅう はなで なにかを まわしている。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/364.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/364.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/364.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 364,
        "name": "トドグラー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png"
      },
      {
        "pokemonId": 365,
        "name": "トドゼルガ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png",
        "condition": "Level 44"
      }
    ]
  },
  {
    "id": 365,
    "pokedexNumber": 365,
    "name": {
      "ja": "トドゼルガ",
      "en": "Walrein",
      "kana": "トドゼルガ",
      "romaji": "Todoseruga"
    },
    "generation": 3,
    "types": [
      "ice",
      "water"
    ],
    "category": "こおりわりポケモン",
    "height": 1.4,
    "weight": 150.6,
    "abilities": [
      {
        "name": "あついしぼう",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "アイスボディ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "どんかん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 110,
      "attack": 80,
      "defense": 90,
      "specialAttack": 95,
      "specialDefense": 90,
      "speed": 65
    },
    "flavorText": "はったつした ２ほんの キバは １０トンも ある",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/365.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/365.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/365.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 365,
        "name": "トドゼルガ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png"
      }
    ]
  },
  {
    "id": 366,
    "pokedexNumber": 366,
    "name": {
      "ja": "パールル",
      "en": "Clamperl",
      "kana": "パールル",
      "romaji": "Pearlulu"
    },
    "generation": 3,
    "types": [
      "water"
    ],
    "category": "２まいがいポケモン",
    "height": 0.4,
    "weight": 52.5,
    "abilities": [
      {
        "name": "シェルアーマー",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "びびり",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 35,
      "attack": 64,
      "defense": 85,
      "specialAttack": 74,
      "specialDefense": 55,
      "speed": 32
    },
    "flavorText": "がんじょうな カラは みを まもる だけではなく",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/366.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/366.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/366.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/366.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 366,
        "name": "パールル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/366.png"
      },
      {
        "pokemonId": 367,
        "name": "ハンテール",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png",
        "condition": "trade holding Deep Sea Tooth"
      },
      {
        "pokemonId": 368,
        "name": "サクラビス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/368.png",
        "condition": "trade holding Deep Sea Scale"
      }
    ]
  },
  {
    "id": 367,
    "pokedexNumber": 367,
    "name": {
      "ja": "ハンテール",
      "en": "Huntail",
      "kana": "ハンテール",
      "romaji": "Huntail"
    },
    "generation": 3,
    "types": [
      "water"
    ],
    "category": "しんかいポケモン",
    "height": 1.7,
    "weight": 27,
    "abilities": [
      {
        "name": "すいすい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "みずのベール",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 55,
      "attack": 104,
      "defense": 105,
      "specialAttack": 94,
      "specialDefense": 75,
      "speed": 52
    },
    "flavorText": "とても ふかい うみの そこに すんでいるため",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/367.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/367.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/367.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 367,
        "name": "ハンテール",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png"
      }
    ]
  },
  {
    "id": 368,
    "pokedexNumber": 368,
    "name": {
      "ja": "サクラビス",
      "en": "Gorebyss",
      "kana": "サクラビス",
      "romaji": "Sakurabyss"
    },
    "generation": 3,
    "types": [
      "water"
    ],
    "category": "なんかいポケモン",
    "height": 1.8,
    "weight": 22.6,
    "abilities": [
      {
        "name": "すいすい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "うるおいボディ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 55,
      "attack": 84,
      "defense": 105,
      "specialAttack": 114,
      "specialDefense": 75,
      "speed": 52
    },
    "flavorText": "みなみの しんかいに せいそくする ポケモン。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/368.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/368.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/368.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/368.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 368,
        "name": "サクラビス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/368.png"
      }
    ]
  },
  {
    "id": 369,
    "pokedexNumber": 369,
    "name": {
      "ja": "ジーランス",
      "en": "Relicanth",
      "kana": "ジーランス",
      "romaji": "Glanth"
    },
    "generation": 3,
    "types": [
      "water",
      "rock"
    ],
    "category": "ちょうじゅポケモン",
    "height": 1,
    "weight": 23.4,
    "abilities": [
      {
        "name": "すいすい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "いしあたま",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "がんじょう",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 100,
      "attack": 90,
      "defense": 130,
      "specialAttack": 45,
      "specialDefense": 65,
      "speed": 55
    },
    "flavorText": "１おくねんの ながい あいだ まったく すがたが",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/369.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/369.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/369.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 369,
        "name": "ジーランス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png"
      }
    ]
  },
  {
    "id": 370,
    "pokedexNumber": 370,
    "name": {
      "ja": "ラブカス",
      "en": "Luvdisc",
      "kana": "ラブカス",
      "romaji": "Lovecus"
    },
    "generation": 3,
    "types": [
      "water"
    ],
    "category": "ランデブーポケモン",
    "height": 0.6,
    "weight": 8.7,
    "abilities": [
      {
        "name": "すいすい",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "うるおいボディ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 43,
      "attack": 30,
      "defense": 55,
      "specialAttack": 40,
      "specialDefense": 65,
      "speed": 97
    },
    "flavorText": "ハートがたの からだは あいじょうの シンボル。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/370.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/370.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/370.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/370.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 370,
        "name": "ラブカス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/370.png"
      }
    ]
  },
  {
    "id": 371,
    "pokedexNumber": 371,
    "name": {
      "ja": "タツベイ",
      "en": "Bagon",
      "kana": "タツベイ",
      "romaji": "Tatsubay"
    },
    "generation": 3,
    "types": [
      "dragon"
    ],
    "category": "いしあたまポケモン",
    "height": 0.6,
    "weight": 42.1,
    "abilities": [
      {
        "name": "いしあたま",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ちからずく",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 45,
      "attack": 75,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 30,
      "speed": 50
    },
    "flavorText": "おおぞらを とぶことを ゆめみている ポケモン。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/371.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/371.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/371.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/371.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 371,
        "name": "タツベイ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/371.png"
      },
      {
        "pokemonId": 372,
        "name": "コモルー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/372.png",
        "condition": "Level 30"
      }
    ]
  },
  {
    "id": 372,
    "pokedexNumber": 372,
    "name": {
      "ja": "コモルー",
      "en": "Shelgon",
      "kana": "コモルー",
      "romaji": "Komoruu"
    },
    "generation": 3,
    "types": [
      "dragon"
    ],
    "category": "にんたいポケモン",
    "height": 1.1,
    "weight": 110.5,
    "abilities": [
      {
        "name": "いしあたま",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ぼうじん",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 65,
      "attack": 95,
      "defense": 100,
      "specialAttack": 60,
      "specialDefense": 50,
      "speed": 50
    },
    "flavorText": "かたい カラの ないぶは さいぼうが へんかして",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/372.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/372.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/372.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/372.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 372,
        "name": "コモルー",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/372.png"
      },
      {
        "pokemonId": 373,
        "name": "ボーマンダ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",
        "condition": "Level 50"
      }
    ]
  },
  {
    "id": 373,
    "pokedexNumber": 373,
    "name": {
      "ja": "ボーマンダ",
      "en": "Salamence",
      "kana": "ボーマンダ",
      "romaji": "Bohmander"
    },
    "generation": 3,
    "types": [
      "dragon",
      "flying"
    ],
    "category": "ドラゴンポケモン",
    "height": 1.5,
    "weight": 102.6,
    "abilities": [
      {
        "name": "いかく",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "じしんかじょう",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 95,
      "attack": 135,
      "defense": 80,
      "specialAttack": 110,
      "specialDefense": 80,
      "speed": 100
    },
    "flavorText": "つばさが ほしいと つよく おもい つづけてきた",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/373.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/373.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/373.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 373,
        "name": "ボーマンダ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png"
      }
    ]
  },
  {
    "id": 374,
    "pokedexNumber": 374,
    "name": {
      "ja": "ダンバル",
      "en": "Beldum",
      "kana": "ダンバル",
      "romaji": "Dumbber"
    },
    "generation": 3,
    "types": [
      "steel",
      "psychic"
    ],
    "category": "てっきゅうポケモン",
    "height": 0.6,
    "weight": 95.2,
    "abilities": [
      {
        "name": "クリアボディ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ライトメタル",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 40,
      "attack": 55,
      "defense": 80,
      "specialAttack": 35,
      "specialDefense": 60,
      "speed": 30
    },
    "flavorText": "からだから でている じりょくと ちきゅうの",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/374.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/374.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/374.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/374.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 374,
        "name": "ダンバル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/374.png"
      },
      {
        "pokemonId": 375,
        "name": "メタング",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png",
        "condition": "Level 20"
      }
    ]
  },
  {
    "id": 375,
    "pokedexNumber": 375,
    "name": {
      "ja": "メタング",
      "en": "Metang",
      "kana": "メタング",
      "romaji": "Metang"
    },
    "generation": 3,
    "types": [
      "steel",
      "psychic"
    ],
    "category": "てつツメポケモン",
    "height": 1.2,
    "weight": 202.5,
    "abilities": [
      {
        "name": "クリアボディ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ライトメタル",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 60,
      "attack": 75,
      "defense": 100,
      "specialAttack": 55,
      "specialDefense": 80,
      "speed": 50
    },
    "flavorText": "２ひきの ダンバルが がったいしたとき ２つの",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/375.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/375.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/375.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 375,
        "name": "メタング",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png"
      },
      {
        "pokemonId": 376,
        "name": "メタグロス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png",
        "condition": "Level 45"
      }
    ]
  },
  {
    "id": 376,
    "pokedexNumber": 376,
    "name": {
      "ja": "メタグロス",
      "en": "Metagross",
      "kana": "メタグロス",
      "romaji": "Metagross"
    },
    "generation": 3,
    "types": [
      "steel",
      "psychic"
    ],
    "category": "てつあしポケモン",
    "height": 1.6,
    "weight": 550,
    "abilities": [
      {
        "name": "クリアボディ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ライトメタル",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 80,
      "attack": 135,
      "defense": 130,
      "specialAttack": 95,
      "specialDefense": 90,
      "speed": 70
    },
    "flavorText": "４つの のうみそは スーパーコンピュータよりも",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/376.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/376.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/376.ogg",
    "isLegendary": false,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 376,
        "name": "メタグロス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png"
      }
    ]
  },
  {
    "id": 377,
    "pokedexNumber": 377,
    "name": {
      "ja": "レジロック",
      "en": "Regirock",
      "kana": "レジロック",
      "romaji": "Regirock"
    },
    "generation": 3,
    "types": [
      "rock"
    ],
    "category": "いわやまポケモン",
    "height": 1.7,
    "weight": 230,
    "abilities": [
      {
        "name": "クリアボディ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "がんじょう",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 80,
      "attack": 100,
      "defense": 200,
      "specialAttack": 50,
      "specialDefense": 100,
      "speed": 50
    },
    "flavorText": "むかし ひとに ふういんされた ポケモン。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/377.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/377.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/377.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/377.ogg",
    "isLegendary": true,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 377,
        "name": "レジロック",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/377.png"
      }
    ]
  },
  {
    "id": 378,
    "pokedexNumber": 378,
    "name": {
      "ja": "レジアイス",
      "en": "Regice",
      "kana": "レジアイス",
      "romaji": "Regice"
    },
    "generation": 3,
    "types": [
      "ice"
    ],
    "category": "ひょうざんポケモン",
    "height": 1.8,
    "weight": 175,
    "abilities": [
      {
        "name": "クリアボディ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "アイスボディ",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 80,
      "attack": 50,
      "defense": 100,
      "specialAttack": 100,
      "specialDefense": 200,
      "speed": 50
    },
    "flavorText": "ひょうがじだいに つくられた こおりの からだは",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/378.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/378.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/378.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/378.ogg",
    "isLegendary": true,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 378,
        "name": "レジアイス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/378.png"
      }
    ]
  },
  {
    "id": 379,
    "pokedexNumber": 379,
    "name": {
      "ja": "レジスチル",
      "en": "Registeel",
      "kana": "レジスチル",
      "romaji": "Registeel"
    },
    "generation": 3,
    "types": [
      "steel"
    ],
    "category": "くろがねポケモン",
    "height": 1.9,
    "weight": 205,
    "abilities": [
      {
        "name": "クリアボディ",
        "isHidden": false,
        "description": "通常特性。"
      },
      {
        "name": "ライトメタル",
        "isHidden": true,
        "description": "隠れ特性。バトルで特別な効果を発揮する。"
      }
    ],
    "baseStats": {
      "hp": 80,
      "attack": 75,
      "defense": 150,
      "specialAttack": 75,
      "specialDefense": 150,
      "speed": 50
    },
    "flavorText": "どんな きんぞくよりも かたい からだを もつ。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/379.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/379.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/379.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/379.ogg",
    "isLegendary": true,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 379,
        "name": "レジスチル",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/379.png"
      }
    ]
  },
  {
    "id": 380,
    "pokedexNumber": 380,
    "name": {
      "ja": "ラティアス",
      "en": "Latias",
      "kana": "ラティアス",
      "romaji": "Latias"
    },
    "generation": 3,
    "types": [
      "dragon",
      "psychic"
    ],
    "category": "むげんポケモン",
    "height": 1.4,
    "weight": 40,
    "abilities": [
      {
        "name": "ふゆう",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 80,
      "attack": 80,
      "defense": 90,
      "specialAttack": 110,
      "specialDefense": 130,
      "speed": 110
    },
    "flavorText": "ちのうが たかく ひとの ことばを りかいする。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/380.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/380.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/380.ogg",
    "isLegendary": true,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 380,
        "name": "ラティアス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png"
      }
    ]
  },
  {
    "id": 381,
    "pokedexNumber": 381,
    "name": {
      "ja": "ラティオス",
      "en": "Latios",
      "kana": "ラティオス",
      "romaji": "Latios"
    },
    "generation": 3,
    "types": [
      "dragon",
      "psychic"
    ],
    "category": "むげんポケモン",
    "height": 2,
    "weight": 60,
    "abilities": [
      {
        "name": "ふゆう",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 80,
      "attack": 90,
      "defense": 80,
      "specialAttack": 130,
      "specialDefense": 110,
      "speed": 110
    },
    "flavorText": "やさしい こころの もちぬしにしか なつかない。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/381.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/381.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/381.ogg",
    "isLegendary": true,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 381,
        "name": "ラティオス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png"
      }
    ]
  },
  {
    "id": 382,
    "pokedexNumber": 382,
    "name": {
      "ja": "カイオーガ",
      "en": "Kyogre",
      "kana": "カイオーガ",
      "romaji": "Kyogre"
    },
    "generation": 3,
    "types": [
      "water"
    ],
    "category": "かいていポケモン",
    "height": 4.5,
    "weight": 352,
    "abilities": [
      {
        "name": "あめふらし",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 100,
      "attack": 100,
      "defense": 90,
      "specialAttack": 150,
      "specialDefense": 140,
      "speed": 90
    },
    "flavorText": "しぜんのエネルギーに よって ゲンシカイキし",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/382.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/382.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/382.ogg",
    "isLegendary": true,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 382,
        "name": "カイオーガ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png"
      }
    ]
  },
  {
    "id": 383,
    "pokedexNumber": 383,
    "name": {
      "ja": "グラードン",
      "en": "Groudon",
      "kana": "グラードン",
      "romaji": "Groudon"
    },
    "generation": 3,
    "types": [
      "ground"
    ],
    "category": "たいりくポケモン",
    "height": 3.5,
    "weight": 950,
    "abilities": [
      {
        "name": "ひでり",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 100,
      "attack": 150,
      "defense": 140,
      "specialAttack": 100,
      "specialDefense": 90,
      "speed": 90
    },
    "flavorText": "しぜんのエネルギーに よって ゲンシカイキし",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/383.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/383.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/383.ogg",
    "isLegendary": true,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 383,
        "name": "グラードン",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png"
      }
    ]
  },
  {
    "id": 384,
    "pokedexNumber": 384,
    "name": {
      "ja": "レックウザ",
      "en": "Rayquaza",
      "kana": "レックウザ",
      "romaji": "Rayquaza"
    },
    "generation": 3,
    "types": [
      "dragon",
      "flying"
    ],
    "category": "てんくうポケモン",
    "height": 7,
    "weight": 206.5,
    "abilities": [
      {
        "name": "エアロック",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 105,
      "attack": 150,
      "defense": 90,
      "specialAttack": 150,
      "specialDefense": 90,
      "speed": 95
    },
    "flavorText": "なんおくねんも いきつづけていると いわれる。",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/384.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/384.ogg",
    "isLegendary": true,
    "isMythical": false,
    "evolutionChain": [
      {
        "pokemonId": 384,
        "name": "レックウザ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png"
      }
    ]
  },
  {
    "id": 385,
    "pokedexNumber": 385,
    "name": {
      "ja": "ジラーチ",
      "en": "Jirachi",
      "kana": "ジラーチ",
      "romaji": "Jirachi"
    },
    "generation": 3,
    "types": [
      "steel",
      "psychic"
    ],
    "category": "ねがいごとポケモン",
    "height": 0.3,
    "weight": 1.1,
    "abilities": [
      {
        "name": "てんのめぐみ",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 100
    },
    "flavorText": "めざめた とき あたまの たんざくに かかれた",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/385.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/385.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/385.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/385.ogg",
    "isLegendary": false,
    "isMythical": true,
    "evolutionChain": [
      {
        "pokemonId": 385,
        "name": "ジラーチ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/385.png"
      }
    ]
  },
  {
    "id": 386,
    "pokedexNumber": 386,
    "name": {
      "ja": "デオキシス",
      "en": "Deoxys",
      "kana": "デオキシス",
      "romaji": "Deoxys"
    },
    "generation": 3,
    "types": [
      "psychic"
    ],
    "category": "ＤＮＡポケモン",
    "height": 1.7,
    "weight": 60.8,
    "abilities": [
      {
        "name": "プレッシャー",
        "isHidden": false,
        "description": "通常特性。"
      }
    ],
    "baseStats": {
      "hp": 50,
      "attack": 150,
      "defense": 50,
      "specialAttack": 150,
      "specialDefense": 50,
      "speed": 150
    },
    "flavorText": "レーザーを あびた うちゅうウィルスの ＤＮＡが",
    "sprites": {
      "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/386.png",
      "shinyArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/386.png",
      "pixel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/386.png"
    },
    "cryUrl": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/386.ogg",
    "isLegendary": false,
    "isMythical": true,
    "evolutionChain": [
      {
        "pokemonId": 386,
        "name": "デオキシス",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/386.png"
      }
    ]
  }
];
