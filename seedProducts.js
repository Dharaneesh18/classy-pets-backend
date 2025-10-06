const mongoose = require("mongoose");
const Product = require("./models/Product");

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/classy_pets", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const products = [
  { name: "Gold Small pair", price: [30], image: "/images/gold-small.jpg" },
  { name: "Gold Big pair", price: [60], image: "/images/gold-big.jpg" },
  { name: "Sk Gold pair", price: [35], image: "/images/sk-gold.jpg" },
  { name: "Moorse pair", price: [40], image: "/images/moorse.jpg" },
  { name: "Moorse Big pair", price: [60], image: "/images/moorse-big.jpg" },
  { name: "Koi pair", price: [40], image: "/images/koi.jpg" },
  { name: "Koi Big pair", price: [60], image: "/images/koi-big.jpg" },
  { name: "Molly pair", price: [30], image: "/images/molly.jpg" },
  { name: "Ballon Molly pair", price: [35], image: "/images/ballon-molly.jpg" },
  { name: "Sunrise Platty pair", price: [40], image: "/images/sunrise-platty.jpg" },
  { name: "Widow Tetra", price: [40], image: "/images/widow-tetra.jpg" },
  { name: "Shark pair", price: [45], image: "/images/shark.jpg" },
  { name: "Flowerhorn fries", price: [70,120,200], image: "/images/flowerhorn-fries.jpg" },
  { name: "Flowerhorn headpop", price: [1200,1800], image: "/images/flowerhorn-headpop.jpg" },
  { name: "Polar parrot parent size", price: [250,300], image: "/images/polar-parrot.jpg" },
  { name: "Ghost 1 piece", price: [200], image: "/images/ghost.jpg" },
  { name: "Dwarf Gourami pair", price: [40], image: "/images/dwarf-gourami.jpg" },
  { name: "Half Moon Betta 1 piece", price: [60,70,80], image: "/images/half-betta.jpg" },
  { name: "Full Moon Betta 1 piece", price: [120,150], image: "/images/full-betta.jpg" },
  { name: "Crown tail Betta 1 piece", price: [150], image: "/images/crown-betta.jpg" },
  { name: "Female betta 1 piece", price: [40,60], image: "/images/female-betta.jpg" },
  { name: "Placard Female 1 piece", price: [60], image: "/images/placard-female.jpg" },
  { name: "German Red Guppy pair", price: [60], image: "/images/german-guppy.jpg" },
  { name: "Platinum Ear Guppy pair", price: [60], image: "/images/platinum-guppy.jpg" },
  { name: "Red tail Guppy pair", price: [60], image: "/images/redtail-guppy.jpg" }
];

// First remove existing products to avoid duplicates
Product.deleteMany({})
  .then(() => Product.insertMany(products))
  .then(() => {
    console.log("✅ Products reset successfully!");
    mongoose.connection.close();
  })
  .catch(err => console.error(err));
