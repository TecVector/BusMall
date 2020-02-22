var ActiveProducts = [];
var Product = function(name, imgPath) {
    this.ProductName = name;
    this.Image = imgPath;
    ActiveProducts.push(this);
}

var products = [
    ['Star Wars Bag', 'bag.jpg'],
    ['Banana Cutter', 'banana.jpg'],
    ['Bathroom Buddy', 'bathroom.jpg'],
    ['Toeless Muckers', 'boots.jpg'],
    ['Retro Home Cafe', 'breakfast.jpg'],
    ['Meatball Bubble Gum', 'bubblegum.jpg'],
    ['Risen Chair', 'chair.jpg'],
    ['Cthulhu Figure', 'cthulhu.jpg'],
    ['Puppy Duck Bill', 'dog-duck.jpg'],
    ['Dragon Meat', 'dragon.jpg'],
    ['Kitchen Pens', 'pen.jpg'],
    ['Pet Sweep', 'pet-sweep.jpg'],
    ['Pizza Scissors', 'scissors.jpg'],
    ['Shark Sleep Sack', 'shark.jpg'],
    ['Baby Sweepers', 'sweep.png'],
    ['Luke Warm Sleeping Bag', 'tauntaun.jpg'],
    ['Unicorn Meat', 'unicorn.jpg'],
    ['Living USB', 'usb.gif'],
    ['Self Watering Can', 'water-can.jpg'],
    ['Bouquet Keeping Wine Glass', 'wine-glass.jpg']
];

for (var x = 0; x < products.length; x++) {
    var imageLocation = 'images/products/' + products[x][1];
    var newProduct = new Product(products[x][0], imageLocation);
};

function getProductsToDisplay() {
    var arr = [];
    var selectedIndexes = [];
    for (var i = 0; i < 3; i++) {
        var selectIndex = (Math.floor(Math.random() * (products.length - i)) + 1);
        while (selectedIndexes.includes(selectIndex)) {
            selectIndex = (Math.floor(Math.random() * (products.length - i)) + 1);
        };
        selectedIndexes.push(selectIndex);
        var product = ActiveProducts[selectIndex];
        arr.push(product);
    }
    return arr;
}