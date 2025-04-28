const products = [
    { name: "Mini Orchid", price: 18, id: "10343", theme: "Botanical", inStock: false, image: "https://www.lego.com/cdn/cs/set/assets/bltade30768c791af76/10343_Prod.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2" },
    { name: "Lucky Bamboo", price: 18, id: "10344", theme: "Botanical", inStock: false, image: "https://www.lego.com/cdn/cs/set/assets/blt5186ea8ea23f07aa/10344_Prod.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2" },
    { name: "Plum Blossom", price: 18, id: "10369", theme: "Botanical", inStock: false, image: "https://www.lego.com/cdn/cs/set/assets/bltd6f8360aaf62c494/10369_Prod.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2" },
    { name: "Chrysanthemum", price: 18, id: "10368", theme: "Botanical", inStock: false, image: "https://www.lego.com/cdn/cs/set/assets/bltdbc3129b50f61480/10368_Prod.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2" },
    { name: "F1 Pit Stop & Pit Crew with Ferrari Car", price: 16, id: "60443", theme: "City", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/bltb0d99716cda97158/60443_Prod.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Holiday Camper Van", price: 16, id: "60454", theme: "City", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt39909b68e8ab0c11/60454_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Police Car and Muscle Car Chase", price: 12, id: "60415", theme: "City", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt1f2c4bdbf4b62da6/60415_alt1.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Double-Decker Sightseeing Bus", price: 16, id: "60407", theme: "City", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt787b6506c3044573/60407.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Jungle Explorer Off-Road Truck", price: 16, id: "60426", theme: "City", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/bltc71b8ac9196a8d49/60426.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Space Explorer Rover and Alien Life", price: 16, id: "60431", theme: "City", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt4cd6f0193e6589b5/60431_alt1.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Interstellar Spaceship", price: 14, id: "60430", theme: "City", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt18bab539b3fea5c1/60430_alt1.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Burger Truck", price: 13, id: "60404", theme: "City", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blta619ec8f2276fa45/60404_alt1.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Off-Road Mountain Truck", price: 16, id: "60447", theme: "City", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blta955e27409977b00/60447_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Lifeguard Truck", price: 16, id: "60453", theme: "City", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt590a47e6b13450bc/60453_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Donut Truck", price: 16, id: "60452", theme: "City", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/bltbbe0a53e836e4d2e/60452_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Emergency Ambulance", price: 16, id: "60451", theme: "City", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt64c62359edab92f8/60451_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Road Plates", price: 15, id: "60304", theme: "City", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt376e67b2179da366/60304_alt2.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2" },
    { name: "4x4 Fire Truck with Rescue Boat", price: 15, id: "60412", theme: "City", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt94d09dc3316383db/60412_alt1.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Fire Truck", price: 16, id: "60463", theme: "City", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt5664e75c3cdad2a3/60463_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Tractor with Trailer", price: 15, id: "60461", theme: "City", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt8597dc75ff01417a/60461_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Tow Truck", price: 9, id: "60435", theme: "City", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt31c57b6eb66bc6a1/60435.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Race Car and Car Carrier Truck", price: 16, id: "60406", theme: "City", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/bltc649db25b20ebb9e/60406_alt1.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Playful Cat", price: 16, id: "31163", theme: "Creator", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/bltf38f383b625082de/31163_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Race Plane", price: 10, id: "31160", theme: "Creator", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt704072efd4f1211f/31160_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Exotic Parrot", price: 15, id: "31136", theme: "Creator", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt1e80dee5dde5c723/31136.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Retro Camera", price: 12, id: "31147", theme: "Creator", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt5b4148cad80e42ea/31147.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Flatbed Truck with Helicopter", price: 13, id: "31146", theme: "Creator", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/bltd5b2ea7765b95fab/31146.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Surprising Spider", price: 9, id: "31159", theme: "Creator", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt10c0479d6e9fd174/31159_WEB_SEC07_NOBG_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Space Shuttle", price: 8, id: "31134", theme: "Creator", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt35eb893e7b4c6280/31134.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Cute Bunny", price: 15, id: "31162", theme: "Creator", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/bltf2f4e3811b6b352a/31162_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Red Dragon", price: 8, id: "31145", theme: "Creator", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/bltdbd734e02935b68b/31145.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Flowers in Watering Can", price: 17, id: "31149", theme: "Creator", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/bltd2d5f472a43f0580/31149.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Space Robot", price: 16, id: "31164", theme: "Creator", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blte94ce6b780293466/31164_WEB_PRI_NOBG_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Typewriter with Flowers", price: 18, id: "31169", theme: "Creator", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blta6acd9882132e80e/31169_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Retro Roller Skate", price: 18, id: "31148", theme: "Creator", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt2afcd0d2c787e72f/31148.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Record Player with Flower", price: 16, id: "31172", theme: "Creator", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt504267e3d0f05a1a/31172_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Pink Flamingo", price: 15, id: "31170", theme: "Creator", inStock: false, image: "https://www.lego.com/cdn/cs/set/assets/bltaceac3fbbaf53448/31170_Prod.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Cherry Blossoms", price: 9, id: "40725", theme: "Botanical", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/bltf876ca701fbacd4a/40725.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Sunflowers", price: 9, id: "40524", theme: "Botanical", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blteb14e8c6c9e027df/40524.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Roses", price: 9, id: "40460", theme: "Botanical", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt72c6ccfea328f822/40460_Prod.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Adorable Dogs", price: 18, id: "31137", theme: "Creator", inStock: false, image: "https://www.lego.com/cdn/cs/set/assets/blt025d98ca4ecaba6f/31137.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Inside Out 2 Mood Cubes", price: 18, id: "43248", theme: "Disney", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt4b68a0af9be8526f/43248.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Simba the Lion King Cub", price: 15, id: "43243", theme: "Disney", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt6afe2911d1b5a631/43243.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Dobby the House-Elf", price: 16, id: "76421", theme: "Harry Potter", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt60c4eccd637be544/76421.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Hogwarts Castle: Dueling Club", price: 17, id: "76441", theme: "Harry Potter", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blte887e80bb9e23c11/76441_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Hogwarts Castle: Charms Class", price: 15, id: "76442", theme: "Harry Potter", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt271da676b8133ad2/76442_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Hedwig at 4 Privet Drive", price: 12, id: "76425", theme: "Harry Potter", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt315a66b0cda33252/76425.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Aragog in the Forbidden Forest", price: 13, id: "76434", theme: "Harry Potter", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt53d46ba5786e7ae8/76434.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Baby Bumpy: Ankylosaurus", price: 15, id: "76962", theme: "Jurassic World", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt18b43a79b063c1e8/76962.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Little Eatie: T. rex", price: 15, id: "76967", theme: "Jurassic World", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt0abaece6f83b6a64/76967_Prod.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Yoshi Bike", price: 10, id: "72031", theme: "Mario", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt3db159fa2e701001/72031_Prod.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Baby Mario vs. Baby Luigi", price: 17, id: "72034", theme: "Mario", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt70ecd87d479c1c14/72034_Prod.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Standard Kart", price: 13, id: "72032", theme: "Mario", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt93643316f225dd76/72032_Prod.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Bowser's Muscle Car", price: 15, id: "71431", theme: "Mario", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt3665b63da8214334/71431_Prod.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "The Armadillo Mine Expedition", price: 16, id: "21269", theme: "Minecraft", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt846dc3d78dbedc59/21269_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "The Cherry Blossom Garden", price: 13, id: "21260", theme: "Minecraft", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/bltf58c01afd0628a8e/21260.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "The Pirate Ship Voyage", price: 9, id: "21259", theme: "Minecraft", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/bltb8c458890eabf47d/21259.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "The Armory", price: 12, id: "21252", theme: "Minecraft", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt8a1acda830147b4f/21252_alt1.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "The Turtle Beach House", price: 15, id: "21254", theme: "Minecraft", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt49a1a364cf26bb55/21254.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "The Fox Lodge", price: 14, id: "21178", theme: "Minecraft", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt45d6dcf64351623d/21178.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "The Baby Pig House", price: 15, id: "21268", theme: "Minecraft", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt21d7813a08c7ffa8/21268_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "The Nether Portal Ambush", price: 18, id: "21255", theme: "Minecraft", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt73efc5622c75bd57/21255.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Lloyd's Green Forest Dragon", price: 15, id: "71829", theme: "Ninjago", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt97457b5deff61b79/71829_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Lloyd's Pull-Back Race Car", price: 17, id: "71828", theme: "Ninjago", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt9abebce4362751aa/71828_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Young Dragon Riyu", price: 9, id: "71810", theme: "Ninjago", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt657cdb7c29f20545/71810.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Sora's Elemental Tech Mech", price: 14, id: "71807", theme: "Ninjago", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt96671afb1ce7d25b/71807.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Cole's Elemental Earth Mech", price: 13, id: "71806", theme: "Ninjago", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/bltafdb4821248b7778/71806.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Jay's Mech Battle Pack", price: 9, id: "71805", theme: "Ninjago", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt656c8393121db1d6/71805.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Minions and Banana Car", price: 13, id: "75580", theme: "Others", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt8aec5bad8256a690/75580.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Money Tree", price: 15, id: "40648", theme: "Others", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/bltb241e5981be851cb/40648.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Durrr Burger", price: 12, id: "77070", theme: "Others", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt18c4b6cac19ffe03/77070_Prod.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Leif's Caravan & Garden Shop", price: 18, id: "77054", theme: "Others", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt522d8c10d1bd4bb8/77054_Prod.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Sonic's Campfire Clash", price: 14, id: "77001", theme: "Sonic", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blte6c0f9cde3ca1ed2/77001_Prod.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Cyclone vs. Metal Sonic", price: 19, id: "77002", theme: "Sonic", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt91f8156a386adaa5/77002_Prod.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Shadow's Escape", price: 15, id: "76995", theme: "Sonic", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt615dd4a42a86d10f/76995_alt1.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Knuckles' Guardian Mech", price: 15, id: "76996", theme: "Sonic", inStock: false, image: "https://www.lego.com/cdn/cs/set/assets/blt7f259f5e1d09716c/76996.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Knuckles and the Master Emerald Shrine", price: 16, id: "76998", theme: "Sonic", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt5da8cc6a5750bd8e/76998.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Ford Mustang Dark Horse", price: 15, id: "76920", theme: "Speed Champions", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/bltbcc306ec64d4e9f0/76920.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Audi S1 e-tron quattro", price: 15, id: "76921", theme: "Speed Champions", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/bltf69c704e133f3955/76921.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Ferrari F40", price: 15, id: "76934", theme: "Speed Champions", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt08aac0509cd0f13d/76934_Prod.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Lamborghini Lambo V12 Vision Gran Turismo", price: 15, id: "76923", theme: "Speed Champions", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/bltb2542ffa0ef353bb/76923.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "2023 McLaren Formula 1 Car", price: 15, id: "76919", theme: "Speed Champions", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt9895fdfc75b2854d/76919.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "2 Fast 2 Furious Nissan Skyline GT-R (R34)", price: 15, id: "76917", theme: "Speed Champions", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/bltc77f25b5ccb98142/76917.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "NASCAR Next Gen Chevrolet Camaro ZL1", price: 15, id: "76935", theme: "Speed Champions", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blte8a5c2a3ee5aae96/76935_Prod.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Ferrari SF-24", price: 18, id: "77242", theme: "Speed Champions", inStock: false, image: "https://www.lego.com/cdn/cs/set/assets/blt62a0047ef561f2db/77242_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Oracle Red Bull Racing RB20", price: 18, id: "77243", theme: "Speed Champions", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt8dac22afe99a2c70/77243_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Mercedes-AMG PETRONAS F1 Team W15 E Performance", price: 18, id: "77244", theme: "Speed Champions", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt495e05f3e8b60dbf/77244_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Aston Martin Aramco F1 AMR24", price: 18, id: "77245", theme: "Speed Champions", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt3be1462d95d8417d/77245_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Visa Cash App VCARB 01", price: 18, id: "77246", theme: "Speed Champions", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt0a45cbfbac56a36b/77246_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "KICK Sauber F1 Team C44", price: 18, id: "77247", theme: "Speed Champions", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt725ee0062bc6e0c8/77247_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "BWT Alpine F1 Team A524", price: 18, id: "77248", theme: "Speed Champions", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blte9b91d9dbca0f912/77248_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "Williams Racing FW46", price: 18, id: "77249", theme: "Speed Champions", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/bltcd131f583dfa706b/77249_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "MoneyGram Haas F1 Team VF-24", price: 18, id: "77250", theme: "Speed Champions", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/blt4cc05090c8610856/77250_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    { name: "McLaren F1 Team MCL38", price: 18, id: "77251", theme: "Speed Champions", inStock: true, image: "https://www.lego.com/cdn/cs/set/assets/bltad441c9411550c97/77251_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" },
    {
      name: "Paz Vizsla and Moff Gideon Battle",
      price: 20,
      id: "75386",
      theme: "Star Wars",
      inStock: true,
      image: "https://www.lego.com/cdn/cs/set/assets/blt3291f35d1d3603ba/75386.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2"
    },
    {
      name: "Obi-Wan Kenobi's Jedi Starfighter",
      price: 18,
      id: "75333",
      theme: "Star Wars",
      inStock: true,
      image: "https://www.lego.com/cdn/cs/set/assets/blt2e698545667a8111/75333.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2"
    },
    {
      name: "Clone Trooper & Battle Droid Battle Pack",
      price: 14,
      id: "75372",
      theme: "Star Wars",
      inStock: true,
      image: "https://www.lego.com/cdn/cs/set/assets/blt45a3f479c8d95dce/75372.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2"
    },
    {
      name: "Captain Rex Y-wing Microfighter",
      price: 9,
      id: "75391",
      theme: "Star Wars",
      inStock: true,
      image: "https://www.lego.com/cdn/cs/set/assets/blt3bfa965b35043abb/75391.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2"
    },
    {
      name: "BARC Speeder Escape",
      price: 15,
      id: "75378",
      theme: "Star Wars",
      inStock: true,
      image: "https://www.lego.com/cdn/cs/set/assets/blt1018fcf7b60fbc62/75378.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2"
    },
    {
      name: "Mando and Grogu's N-1 Starfighter",
      price: 16,
      id: "75410",
      theme: "Star Wars",
      inStock: true,
      image: "https://www.lego.com/cdn/cs/set/assets/bltfc8f5b203cd252ca/75410_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2"
    },
    {
      name: "501st Clone Troopers Battle Pack",
      price: 12,
      id: "75345",
      theme: "Star Wars",
      inStock: true,
      image: "https://www.lego.com/cdn/cs/set/assets/bltf394757329116141/75345.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2"
    },
    {
      name: "Ambush on Mandalore Battle Pack",
      price: 12,
      id: "75373",
      theme: "Star Wars",
      inStock: true,
      image: "https://www.lego.com/cdn/cs/set/assets/blt1e371bed414e18b3/75373.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2"
    },
  
    {
      name: "Spider-Man vs. Venom Muscle Car",
      price: 18,
      id: "76309",
      theme: "Super Hero",
      inStock: true,
      image: "https://www.lego.com/cdn/cs/set/assets/blte9af60604dfa1359/76309_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2"
    },
    {
      name: "Spider-Man vs. Sandman: Final Battle",
      price: 18,
      id: "76280",
      theme: "Super Hero",
      inStock: true,
      image: "https://www.lego.com/cdn/cs/set/assets/bltf5d5451cc8ac2e80/76280.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2"
    },
    {
      name: "Iron Man & Iron Legion vs. Hydra Soldier",
      price: 12,
      id: "76288",
      theme: "Super Hero",
      inStock: true,
      image: "https://www.lego.com/cdn/cs/set/assets/blt32a1e5254cf2b9e6/76288.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2"
    },
    {
      name: "Superman Mech vs. Lex Luthor",
      price: 12,
      id: "76302",
      theme: "Super Hero",
      inStock: true,
      image: "https://www.lego.com/cdn/cs/set/assets/blte4d466a761fde2d8/76302_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2"
    },
    {
      name: "Batman Mech Armor",
      price: 9,
      id: "76270",
      theme: "Super Hero",
      inStock: true,
      image: "https://www.lego.com/cdn/cs/set/assets/blt5077ffede6c5e131/76270.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2"
    },
    {
      name: "Spider-Man Race Car & Venom Green Goblin",
      price: 14,
      id: "76279",
      theme: "Super Hero",
      inStock: true,
      image: "https://www.lego.com/cdn/cs/set/assets/blt00f7d6ce65ba8a7c/76279.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2"
    },
    {
      name: "Team Spidey Dino Crawler Rescue",
      price: 16,
      id: "11199",
      theme: "Super Hero",
      inStock: true,
      image: "https://www.lego.com/cdn/cs/set/assets/blta0cc0e8052c73b4f/11199_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2"
    },
    {
      name: "Batman & Batmobile vs. Mr. Freeze",
      price: 15,
      id: "76301",
      theme: "Super Hero",
      inStock: true,
      image: "https://www.lego.com/cdn/cs/set/assets/blt1d31de1a2546ff47/76301_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2"
    },
    {
      name: "Spider-Man Mech vs. Anti-Venom",
      price: 11,
      id: "76308",
      theme: "Super Hero",
      inStock: true,
      image: "https://www.lego.com/cdn/cs/set/assets/blt329716dcd71e652a/76308_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2"
    },
    {
      name: "Iron Man Mech vs. Ultron",
      price: 11,
      id: "76307",
      theme: "Super Hero",
      inStock: true,
      image: "https://www.lego.com/cdn/cs/set/assets/blt43b12ae3fe64c2ca/76307_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2"
    },
    {
      name: "New Captain America Construction Figure",
      price: 17,
      id: "76296",
      theme: "Super Hero",
      inStock: true,
      image: "https://www.lego.com/cdn/cs/set/assets/bltb026a22e4f3b8e26/76296_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2"
    },
    {
      name: "Baby Rocket's Ship",
      price: 17,
      id: "76254",
      theme: "Super Hero",
      inStock: true,
      image: "https://www.lego.com/cdn/cs/set/assets/bltda9cc90a1ac72349/76278.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2"
    },
    {
      name: "The Hulk Truck vs. Thanos",
      price: 15,
      id: "76312",
      theme: "Super Hero",
      inStock: true,
      image: "https://www.lego.com/cdn/cs/set/assets/blt226463c61ed69882/76312_Prod.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2"
    },
    {
      name: "Bush Plane",
      price: 15,
      id: "42198",
      theme: "Technic",
      inStock: true,
      image: "https://www.lego.com/cdn/cs/set/assets/blt6daa4e871b262b93/42198_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2"
    },
    {
      name: "Monster Jam ThunderROARus Pull-Back",
      price: 15,
      id: "42200",
      theme: "Technic",
      inStock: false,
      image: "https://www.lego.com/cdn/cs/set/assets/blte34327156f135f4e/42200_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2"
    },
    {
      name: "Monster Jam DIGatron Pull-Back",
      price: 15,
      id: "42199",
      theme: "Technic",
      inStock: true,
      image: "https://www.lego.com/cdn/cs/set/assets/blt499be3baeb0512f3/42199_Prod_en-gb.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2"
    },
    {
      name: "Surface Space Loader LT78",
      price: 16,
      id: "42178",
      theme: "Technic",
      inStock: true,
      image: "https://www.lego.com/cdn/cs/set/assets/bltaefc89906cf29041/42178.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2"
    },
    {
      name: "NEOM McLaren Extreme E Team",
      price: 14,
      id: "42166",
      theme: "Technic",
      inStock: true,
      image: "https://www.lego.com/cdn/cs/set/assets/bltc0fa6fc61ffae178/42166.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2"
    },
    {
      name: "Mercedes-AMG F1 W14 Pull-Back",
      price: 14,
      id: "42165",
      theme: "Technic",
      inStock: true,
      image: "https://www.lego.com/cdn/cs/set/assets/blt6da8f676f619386d/42165.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2"
    }
  ];
  
  
  
  const cart = JSON.parse(localStorage.getItem('cart')) || []; // Load saved cart if available
  let currentThemeFilter = "all";
  let currentSearchTerm = "";
  
  function getUniqueThemes() {
    return [...new Set(products.map(p => p.theme))];
  }
  
  function populateThemeFilter() {
    const select = document.createElement("select");
    select.id = "themeFilter";
    select.className = "mb-4 p-2 border rounded";
    select.innerHTML = `<option value="all">All Themes</option>` +
      getUniqueThemes().map(theme => `<option value="${theme}">${theme}</option>`).join("");
  
    select.addEventListener("change", (e) => {
      currentThemeFilter = e.target.value;
      renderProducts(currentThemeFilter, currentSearchTerm);
    });
  
    const main = document.querySelector("main");
    main.insertBefore(select, document.getElementById("products"));
  }
  
  function renderProducts(filter = "all", searchTerm = "") {
    const container = document.getElementById("products");
    container.innerHTML = "";
  
    const filtered = products.filter(p => {
      const matchesTheme = filter === "all" || p.theme === filter;
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesTheme && matchesSearch;
    });
  
    if (filtered.length === 0) {
      container.innerHTML = `<p class="text-gray-500 col-span-full text-center">No sets found.</p>`;
      return;
    }
  
    filtered.forEach((product, index) => {
      const isOnSale = getDiscountedPrice({ ...product, qty: 10 }) < product.price;
      const card = document.createElement("div");
      card.className = "bg-white rounded-lg shadow hover:shadow-md p-4 flex flex-col";
      card.innerHTML = `
        <div class="relative mb-4">
          ${!product.inStock 
            ? `<span class="absolute top-2 left-2 bg-gray-500 text-white text-xs px-2 py-1 rounded">Out of Stock</span>` 
            : isOnSale 
              ? `<span class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">SALE</span>` 
              : ""
          }
          <div class="relative mb-4 bg-gray-100 w-full h-64 rounded overflow-hidden flex items-center justify-center">
            <img src="${product.image}" alt="${product.name}" class="object-contain w-full h-full" onerror="this.src='images/placeholder.png'; this.classList.add('opacity-50')" />
          </div>
        </div>
        <h3 class="font-medium text-lg mb-1">${product.name}</h3>
        <p class="text-gray-500 text-sm mb-1">Theme: ${product.theme}</p>
        <p class="mb-2 font-semibold">£${product.price.toFixed(2)}</p>
        ${isOnSale 
          ? `<p class="text-green-600 text-sm mb-2">Bulk discount available!</p>` 
          : ""}
        <div class="flex items-center space-x-2 mb-2">
          <button onclick="changeQty(${index}, -1)" class="px-2 py-1 bg-gray-200 rounded"${!product.inStock ? " disabled" : ""}>−</button>
          <input id="qty-${index}" type="number" value="1" min="1" class="w-12 text-center border border-gray-300 rounded" ${!product.inStock ? "disabled" : ""}/>
          <button onclick="changeQty(${index}, 1)" class="px-2 py-1 bg-gray-200 rounded"${!product.inStock ? " disabled" : ""}>+</button>
        </div>
        <button onclick="addToCart(${index})" 
          class="mt-auto ${product.inStock ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'} text-white px-3 py-2 rounded transition"
          ${!product.inStock ? "disabled" : ""}>
          ${product.inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      `;
      container.appendChild(card);
    });
  }
  
  function changeQty(index, delta) {
    const item = products[index];
    if (!item.inStock) {
      alert("Sorry, this item is currently out of stock.");
      return;
    }
    const input = document.getElementById(`qty-${index}`);
    let current = parseInt(input.value, 10) || 1;
    let newQty = current + delta;
    if (newQty < 1) newQty = 1;
    if (newQty > 20) newQty = 20; 
    input.value = newQty;
  }
  
  function addToCart(index) {
    const qtyInput = document.getElementById(`qty-${index}`);
    const quantity = parseInt(qtyInput.value, 10) || 1;
  
    const item = products[index];
    const existing = cart.find(p => p.id === item.id);
  
    if (existing) {
      const newQty = existing.qty + quantity;
      if (newQty > 20) {
        alert("You can only purchase a maximum of 20 units per item.");
        existing.qty = 20; // ✅ Cap to 20 if over
      } else {
        existing.qty = newQty;
      }
    } else {
      cart.push({ ...item, qty: quantity > 20 ? 20 : quantity }); // ✅ Cap new add to 20
    }
  
    updateCart();
    saveCart(); // Save after updating
  }
  
  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  function getDiscountedPrice(item) {
    if (item.price <= 10) return item.price;
    const discountSteps = Math.floor(item.qty / 10);
    const discountPerSet = Math.min(discountSteps, 2);
    return item.price - discountPerSet;
  }
  
  function updateCart() {
    const totalItems = cart.reduce((sum, p) => sum + p.qty, 0);
    document.getElementById("cartCount").textContent = totalItems;
  }
  
  function openCart() {
    const cartModal = document.getElementById("cartModal");
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    const cartSavings = document.getElementById("cartSavings");
  
    cartItems.innerHTML = "";
    if (cartSavings) cartSavings.innerHTML = "";
  
    let total = 0;
    let totalSavings = 0;
  
    if (cart.length === 0) {
      cartItems.innerHTML = `<p class="text-center text-gray-500">Your cart is empty.</p>`;
    } else {
      cart.forEach(item => {
        const originalTotal = item.price * item.qty;
        const discountedPrice = getDiscountedPrice(item);
        const itemTotal = discountedPrice * item.qty;
        const savings = originalTotal - itemTotal;
  
        total += itemTotal;
        totalSavings += savings;
  
        const div = document.createElement("div");
        div.className = "flex justify-between items-center";
        div.innerHTML = `
          <div>
            <p class="font-medium">${item.name}</p>
            <p class="text-sm text-gray-500">
              Qty: ${item.qty}
              ${savings >= 0.01 ? '<span class="ml-2 text-green-600">✓ Discount Applied</span>' : ''}
            </p>
          </div>
          <div>£${itemTotal.toFixed(2)}</div>
        `;
        cartItems.appendChild(div);
      });
  
      if (cartSavings && totalSavings > 0) {
        cartSavings.textContent = `You saved £${totalSavings.toFixed(2)} with bulk discounts!`;
      }
    }
  
    cartTotal.textContent = `£${total.toFixed(2)}`;
    cartModal.classList.remove("hidden");
  }
  
  function closeCart() {
    document.getElementById("cartModal").classList.add("hidden");
  }
  
  function clearCart() {
    if (confirm("Are you sure you want to clear your cart?")) {
      cart.length = 0;
      saveCart();
      updateCart();
      openCart();
    }
  }
  
  function checkout() {
    saveCart(); // Make sure cart is saved before leaving
    window.location.href = "checkout.html"; // ✅ Redirect to checkout page
  }
  
  document.getElementById("cartBtn").addEventListener("click", openCart);
  document.getElementById("closeCart").addEventListener("click", closeCart);
  document.getElementById("checkoutBtn").addEventListener("click", checkout);
  document.addEventListener("click", (e) => {
    if (e.target && e.target.id === "clearCartBtn") {
      clearCart();
    }
  });
  
  document.getElementById("searchInput").addEventListener("input", (e) => {
    currentSearchTerm = e.target.value;
    renderProducts(currentThemeFilter, currentSearchTerm);
  });
  
  populateThemeFilter();
  renderProducts(currentThemeFilter, currentSearchTerm);
  
  const searchIcon = document.getElementById("searchToggle");
  const searchInput = document.getElementById("searchInput");
  
  searchIcon.addEventListener("click", () => {
    searchInput.classList.toggle("hidden");
    searchInput.focus();
  });
  
  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !searchIcon.contains(e.target)) {
      searchInput.classList.add("hidden");
    }
  });
