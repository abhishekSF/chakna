window.CHAKNA = {
  types: [
    { id: "whisky", name: "Whisky", line: "India’s default pour" },
    { id: "rum", name: "Rum", line: "Old Monk and friends" },
    { id: "vodka", name: "Vodka", line: "Clean. Mixes with anything" },
    { id: "gin", name: "Gin", line: "Botanicals and tonic" },
    { id: "brandy", name: "Brandy", line: "Winter glass, south favourite" },
    { id: "tequila", name: "Tequila", line: "Lime, salt, a little fire" },
    { id: "beer", name: "Beer", line: "Pakora weather" },
    { id: "wine", name: "Wine", line: "Sula to Jacob’s Creek" }
  ],

  brands: [
    { id: "mcdowells", name: "McDowell’s No.1", type: "whisky", origin: "imfl", line: "The volume king" },
    { id: "royalstag", name: "Royal Stag", type: "whisky", origin: "imfl", line: "Celebration pour" },
    { id: "officers", name: "Officer’s Choice", type: "whisky", origin: "imfl", line: "Everywhere whisky" },
    { id: "imperial", name: "Imperial Blue", type: "whisky", origin: "imfl", line: "Easy blended" },
    { id: "blenders", name: "Blenders Pride", type: "whisky", origin: "imfl", line: "The mid-shelf host" },
    { id: "amrut", name: "Amrut", type: "whisky", origin: "indian", line: "Indian malt, global name" },
    { id: "indri", name: "Indri", type: "whisky", origin: "indian", line: "Newer malt star" },
    { id: "pauljohn", name: "Paul John", type: "whisky", origin: "indian", line: "Goa malt" },
    { id: "jw", name: "Johnnie Walker", type: "whisky", origin: "imported", line: "Red to Black" },
    { id: "chivas", name: "Chivas Regal", type: "whisky", origin: "imported", line: "Gift-box Scotch" },
    { id: "jd", name: "Jack Daniel’s", type: "whisky", origin: "imported", line: "Tennessee whiskey" },
    { id: "glenfiddich", name: "Glenfiddich", type: "whisky", origin: "imported", line: "Entry single malt" },
    { id: "oldmonk", name: "Old Monk", type: "rum", origin: "imfl", line: "The dark classic" },
    { id: "mcdum", name: "McDowell’s Celebration", type: "rum", origin: "imfl", line: "Party rum" },
    { id: "contessa", name: "Contessa", type: "rum", origin: "imfl", line: "Spiced dark rum" },
    { id: "bacardi", name: "Bacardi", type: "rum", origin: "imported", line: "White rum default" },
    { id: "captain", name: "Captain Morgan", type: "rum", origin: "imported", line: "Spiced mixer rum" },
    { id: "magic", name: "Magic Moments", type: "vodka", origin: "imfl", line: "India’s vodka" },
    { id: "mischief", name: "White Mischief", type: "vodka", origin: "imfl", line: "Cheap and cheerful" },
    { id: "smirnoff", name: "Smirnoff", type: "vodka", origin: "imported", line: "Cocktail workhorse" },
    { id: "absolut", name: "Absolut", type: "vodka", origin: "imported", line: "Clean imported" },
    { id: "greygoose", name: "Grey Goose", type: "vodka", origin: "imported", line: "Premium bar pour" },
    { id: "greater", name: "Greater Than", type: "gin", origin: "indian", line: "Indian London dry" },
    { id: "hapusa", name: "Hapusa", type: "gin", origin: "indian", line: "Himalayan juniper" },
    { id: "stranger", name: "Stranger & Sons", type: "gin", origin: "indian", line: "Goa craft gin" },
    { id: "jaisalmer", name: "Jaisalmer", type: "gin", origin: "indian", line: "Tea and desert botanicals" },
    { id: "sapphire", name: "Bombay Sapphire", type: "gin", origin: "imported", line: "Bar G&T" },
    { id: "tanqueray", name: "Tanqueray", type: "gin", origin: "imported", line: "Juniper-forward" },
    { id: "mansion", name: "Mansion House", type: "brandy", origin: "imfl", line: "India’s brandy" },
    { id: "morpheus", name: "Morpheus", type: "brandy", origin: "imfl", line: "A step up" },
    { id: "hennessy", name: "Hennessy", type: "brandy", origin: "imported", line: "The cognac people know" },
    { id: "cuervo", name: "Jose Cuervo", type: "tequila", origin: "imported", line: "Starter tequila" },
    { id: "donjulio", name: "Don Julio", type: "tequila", origin: "imported", line: "Bar favourite" },
    { id: "kingfisher", name: "Kingfisher", type: "beer", origin: "indian", line: "The Indian pint" },
    { id: "tuborg", name: "Tuborg", type: "beer", origin: "indian", line: "Strong lager crowd" },
    { id: "bira", name: "Bira 91", type: "beer", origin: "indian", line: "Craft-leaning lager" },
    { id: "corona", name: "Corona", type: "beer", origin: "imported", line: "Lime bottle" },
    { id: "sula", name: "Sula", type: "wine", origin: "indian", line: "Nashik default" },
    { id: "jacobs", name: "Jacob’s Creek", type: "wine", origin: "imported", line: "Imported everyday" }
  ],

  serves: {
    whisky: [
      { id: "neat", name: "Neat or rocks" },
      { id: "soda", name: "With soda or water" },
      { id: "oldfashioned", name: "Old Fashioned" },
      { id: "sour", name: "Whisky sour" }
    ],
    rum: [
      { id: "neat", name: "Neat or warm mixer" },
      { id: "coke", name: "Rum and coke" },
      { id: "mojito", name: "Mojito" }
    ],
    vodka: [
      { id: "chilled", name: "Chilled / soda" },
      { id: "mule", name: "Moscow Mule" },
      { id: "mary", name: "Bloody Mary" }
    ],
    gin: [
      { id: "gt", name: "Gin and tonic" },
      { id: "negroni", name: "Negroni" },
      { id: "collins", name: "Collins / Fizz" }
    ],
    brandy: [{ id: "neat", name: "Neat or warm" }],
    tequila: [
      { id: "shot", name: "Salt and lime" },
      { id: "margarita", name: "Margarita" },
      { id: "paloma", name: "Paloma" }
    ],
    beer: [{ id: "straight", name: "Straight from the bottle" }],
    wine: [
      { id: "white", name: "White / sparkling" },
      { id: "red", name: "Red" }
    ]
  },

  snacks: [
    { id: "peanuts", name: "Masala peanuts", cat: "light", mode: "classic", tags: ["salt", "crunch"], effort: "5 min", why: "Salt, fat, crunch. The original bowl.", drinks: ["*"] },
    { id: "makhana", name: "Roasted makhana", cat: "light", mode: "lighter", tags: ["crunch", "light"], effort: "5 min", why: "Same crunch job, far less oil.", drinks: ["*"] },
    { id: "papad", name: "Masala papad", cat: "light", mode: "classic", tags: ["tang", "crunch"], effort: "5 min", why: "First thing on every Indian table.", drinks: ["*"] },
    { id: "khakhra", name: "Khakhra", cat: "light", mode: "lighter", tags: ["crunch"], effort: "packet", why: "Roasted crunch without the fryer.", drinks: ["whisky:soda", "gin", "beer", "vodka"] },
    { id: "chips", name: "Salted chips", cat: "light", mode: "classic", tags: ["salt", "crunch"], effort: "packet", why: "Does the job when the shop is closed.", drinks: ["beer", "vodka", "rum:coke", "whisky:soda"] },
    { id: "chana", name: "Roasted chana chaat", cat: "light", mode: "lighter", tags: ["protein", "tang"], effort: "10 min", why: "Protein and tang without a deep fry.", drinks: ["beer", "gin", "vodka", "whisky:soda"] },
    { id: "eggs", name: "Boiled eggs, chaat masala", cat: "light", mode: "lighter", tags: ["protein"], effort: "10 min", why: "Old theka protein. Still works.", drinks: ["whisky", "beer", "rum"] },
    { id: "kachumber", name: "Kachumber salad", cat: "veg", mode: "lighter", tags: ["hydrate", "tang"], effort: "10 min", why: "Water and lime against a sharp drink.", drinks: ["gin", "vodka", "wine:white", "tequila", "rum:mojito"] },
    { id: "bhel", name: "Bhel puri", cat: "veg", mode: "classic", tags: ["tang", "crunch"], effort: "10 min", why: "Herbs and tamarind love gin.", drinks: ["gin", "vodka", "rum:mojito", "beer"] },
    { id: "pakora", name: "Onion pakora", cat: "veg", mode: "classic", tags: ["fry", "spice"], effort: "cook", why: "Crunch and heat for mixed drinks and beer.", drinks: ["beer", "whisky:soda", "gin:gt", "rum:coke"] },
    { id: "samosa", name: "Samosa", cat: "veg", mode: "classic", tags: ["fry", "spice"], effort: "order", why: "Fat and spice cut a cold lager.", drinks: ["beer", "vodka", "whisky:soda"] },
    { id: "paneertikka", name: "Paneer tikka", cat: "veg", mode: "classic", tags: ["smoke", "fat"], effort: "cook", why: "Char matches oak in whisky.", drinks: ["whisky", "rum:neat", "beer", "wine:red"] },
    { id: "paneergrill", name: "Grilled paneer, no cream", cat: "veg", mode: "lighter", tags: ["smoke", "protein"], effort: "cook", why: "Same smoke, less gravy.", drinks: ["whisky", "rum", "wine", "beer"] },
    { id: "mushroom", name: "Mushroom tikka", cat: "veg", mode: "lighter", tags: ["smoke"], effort: "cook", why: "Earth and char for sipped brown spirit.", drinks: ["whisky:neat", "wine:red", "brandy"] },
    { id: "harabhara", name: "Hara bhara kebab", cat: "veg", mode: "lighter", tags: ["herb", "crunch"], effort: "cook", why: "Green and crisp next to a highball.", drinks: ["whisky:soda", "gin", "beer"] },
    { id: "corn", name: "Bhutta with lime", cat: "veg", mode: "lighter", tags: ["smoke", "tang"], effort: "10 min", why: "Salt, lime, fire. Tequila’s cousin.", drinks: ["tequila", "beer", "rum"] },
    { id: "seekh", name: "Seekh kebab", cat: "nonveg", mode: "classic", tags: ["smoke", "fat"], effort: "order", why: "Punjab’s whisky plate.", drinks: ["whisky", "rum:neat", "brandy", "beer"] },
    { id: "chickentikka", name: "Chicken tikka", cat: "nonveg", mode: "classic", tags: ["smoke"], effort: "order", why: "Tandoor smoke sits with malt.", drinks: ["whisky", "beer", "rum"] },
    { id: "wings", name: "Chilli chicken / wings", cat: "nonveg", mode: "classic", tags: ["spice", "fry"], effort: "order", why: "Metro bar default with beer and rum.", drinks: ["beer", "rum", "vodka"] },
    { id: "fishfry", name: "Fish fry", cat: "nonveg", mode: "classic", tags: ["fry", "coast"], effort: "cook", why: "Coastal crunch for rum and gin.", drinks: ["rum", "gin", "beer", "wine:white"] },
    { id: "eggsbhurji", name: "Egg bhurji", cat: "nonveg", mode: "classic", tags: ["fat"], effort: "10 min", why: "Bombay bar classic.", drinks: ["beer", "whisky:soda", "rum"] },
    { id: "olives", name: "Olives", cat: "light", mode: "lighter", tags: ["salt"], effort: "packet", why: "Botanical friend for gin and wine.", drinks: ["gin", "wine", "vodka"] }
  ]
};

window.CHAKNA.matchSnack = function (snack, type, serve) {
  const keys = snack.drinks;
  if (keys.includes("*")) return true;
  if (keys.includes(type)) return true;
  if (keys.includes(type + ":" + serve)) return true;
  return false;
};
