// Data source: https://www.huffpost.com/entry/50-best-dessert-recipes_n_561e61d5e4b028dd7ea5ddc0

const desserts = [
    {
        title: "Buttery Raspberry Crumble Bars",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/5bd874112200000f03dda33b.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "The base of these bars are made with a few simple ingredients: oats, flour, brown sugar, butter, and a pinch of cinnamon. It’s very much like shortbread on the bottom, but much more like a cinnamon streusel on the top. The bottom crust gets pre-baked before adding the filling and then the remaining dough is sprinkled over the raspberries for an extra crumb.",
    }, {
        title: "Mint Oreo Cake",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e62ff1400002200c79e48.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "Two layers of devil's food cake sandwiched together with minty cream cheese frosting and crushed mint Oreos, smothered in more mint frosting and covered in cake balls and mint Oreos. HELLO.",
    }, {
        title: "Ultimate Gooey Brownies",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/5bd8712f240000a602579aec.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "Oh my god, you guys. This recipe is ridiculous. Like straight up insanity. This is what happened when I denied a craving for brownies for a week straight. I suddenly found myself in the kitchen pulling together all the ingredients to make my Ultimate Brownie recipe (which took 6 batches to perfect) when I decided I wanted to switch things up a bit, kick the recipe up a notch if even possible.",
    }, {
        title: "Old Fashioned Sour Cream Doughnuts",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/5bd8712c2200000c03dda336.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "These Old-Fashioned Sour Cream Doughnuts are just like the old-fashioned cake doughnuts from the bakery. They’re kind of crunchy and cracked on the outside, making those nooks just purrrrrfect for soaking up the thick, shiny, crackled glaze. We completely dunk the doughnuts in that glaze in the recipe, and it’s amazing. The inside is soft and cakey with a more firm bite than yeast doughnuts. Plus you can’t beat sour cream, it’s good with just about everything.",
    }, {
        title: "Coconut Cream Crepe Cake",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/5bd86cfa2200000f03dda330.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "Similar to my plight, this cake takes time, patience, and many layers. Eventually, after many layers of thin, delicate French crepes, coconut jam and coconut cream, the stack forms a beautiful, snow-white cake. The resulting cake is a slightly spongey, pillowy texture from the stacked crepes, with a lightness from the coconut cream. Every bite is a creamy dream and a reminder that with time and patience, I will eventually have the beautiful home that I want.",
    }, {
        title: "Butterfinger Cookie Dough Cheesecake Bars",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e62fc1200002e007e5140.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Meyer Lemon Bars",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e62fb1400002b003c832e.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Pomegranate Mousse Cake",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e63001400006f003c8339.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Chocolate Chip Cookies With Nutella, Brown Butter And Sea Salt",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e62fd1400002200c79e45.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Pavlova With Blueberry Jam",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e62fe1400002a00c79e46.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Roasted Pears With Espresso Mascarpone Cream",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e62fb1400002b003c8330.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Salted Caramel Chocolate Tart",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e62fd1400006f003c8332.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Banana Pudding Parfaits",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e62fe1400006f003c8335.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Browned Butter Toffee Chocolate Chip Cookies",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/5bd871302200001203dda337.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Nutella Mascarpone Chocolate Tarts",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e62ff1400002200c79e47.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Nutella Brownies",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/5bd8712a210000d403c98da2.jpeg?cache=a5f1HyZn18&ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Cream Cheese Swirled Coconut Tres Leches Cake",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/5bd873912400003000991e20.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Tiramisu",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e63001400002b003c8337.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Blueberry-Streusel Bars With Lemon Cream Filling",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e63001400002200c79e49.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Chocolate Cake with Lavender Ruffle Frosting",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/5bd86d341d00008b00309729.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Brown Butter Rum Cannoli",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e63001400006f003c8338.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Mint-White Chocolate Mousse Cake",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e63011200002e007e5144.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Aunt Sonja's Cherry Squares",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e63011400002200c79e4a.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Snickers Cake",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e63011400006f003c833a.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Strawberry, Currant And Mint Tart With Mascarpone",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e63021400002200c79e4b.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Passionfruit Bars",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e630212000026007e5146.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Mini Pineapple Upside Down Cakes",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e63031400002a00c79e4c.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Peach Pie",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e63031400006f003c833c.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Velvety Dark Chocolate Pudding With Candied Orange Peel",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e63031400002a00c79e4d.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Lemon Sandwich Cookies",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e630312000026007e5147.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Strawberry Rhubarb Meringue Tartlets",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e63041400002200c79e4e.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Bursting Blueberry Cardamom Buckle",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/5bd873c62100005204c98da7.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Butterscotch Pie",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/5bd871292400004902991e1d.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "S’mores Cupcakes",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e63041200002e007e5149.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Dark Chocolate Frosted Yellow Cake",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e630512000026007e514a.jpeg?cache=PGguFX32Re&ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Pumpkin Cream Cheese Swirl Bars",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e63051400002200c79e4f.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Alfajores",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e63051400006f003c833e.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Mixed Berry Slab Pie With Chocolate",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e63051400002200c79e50.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Rhubarb and Pistachio Pavlova",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e63041400002b003c833d.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Cannoli Tart",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e63061400006f003c8340.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Caramel Pecan Blondies",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/5bd8712f1f0000a203259d24.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Butterscotch Blondies",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/5bd86d3a260000490283e355.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Toasted Coconut Toffee Chocolate Chip Cookies",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e63061400002200c79e51.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Whole Wheat Chocolate Chip Skillet Cookie",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/5bd873c72400004c02991e21.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Brownie Cookies With Salted Caramel Creme Filling",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e63061400006f003c833f.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Passion Fruit Cheesecake",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e63071200002e007e514c.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Peanut Butter Banana Cream Pie With Hot Fudge Sauce",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/561e630712000026007e514d.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "4-Ingredient Dark Chocolate Covered Peanut Butter Stuffed Dates",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/56951e012a00002d00030486.jpeg?ops=scalefit_960_noupscale&format=webp",
        shortDescription: "",
    }, {
        title: "Chocolate Peanut Butter Caramel Mousse Pie",
        ingredients: false,
        imgSrc: "https://img.huffingtonpost.com/asset/5bd8712b240000aa02579aeb.jpeg?ops=scalefit_960_noupscale&format=webp"
    },
];

function getRandomInt(from, to) {
    return from + Math.ceil(Math.random() * (to - from));
}

export const gridData = [];
const allIngredients = [{
    title: "old fashion oats",
    amount: 2,
    amountUnit: "cups"
}, {
    title: "all purpose flour",
    amount: "1/2",
    amountUnit: "cups"
}, {
    title: "brown sugar",
    amount: Math.random().toFixed(2),
    amountUnit: "cups"
}, {
    title: "baking powder",
    amount: getRandomInt(1,3),
    amountUnit: "teaspoon"
}, {
    title: "cinnamon",
    amount: getRandomInt(1,4),
    amountUnit: "teespoon"
}, {
    title: "cold salted butter, cubed",
    amount: getRandomInt(1,3),
    amountUnit: "stick(s)"
}, {
    title: "fresh raspberries",
    amount: getRandomInt(1,4),
    amountUnit: "cups"
}, {
    title: "brown sugar",
    amount: getRandomInt(1,2) + '-' + getRandomInt(3,5),
    amountUnit: "tablespoons"
}, ];

function getRandomIngredients() {
    const numberOfIngredients = getRandomInt(3, allIngredients.length);
    return allIngredients.sort(() => Math.random() - Math.random()).slice(0, numberOfIngredients);
}

desserts.forEach((dessert) => {
    gridData.push({
        title: dessert.title,
        imgSrc: dessert.imgSrc,
        shortDescription: dessert.shortDescription,
        ratings: [
            getRandomInt(0, 100),
            getRandomInt(0, 100),
            getRandomInt(0, 100),
            getRandomInt(0, 100),
            getRandomInt(0, 100)
        ],
        ingredients: dessert.ingredients || getRandomIngredients(),
        calories: getRandomInt(10, 110),
        fat: Math.random().toFixed(2),
        carbs: getRandomInt(1, 100),
        protein: Math.random().toFixed(2)
    })
});
