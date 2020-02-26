var ActiveProducts = [];

function Product(name, imgPath) {
    this.ProductName = name;
    this.Image = imgPath;
    this.votes = 0;
    this.timesSeen = 0;
    ActiveProducts.push(this);
}

Product.prototype.AddVote = function() {
    this.votes++;
};

Product.prototype.AddSeen = function() {
    this.timesSeen++;
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

function getProductSelected(name) {
    return ActiveProducts.find(obj => {
        return obj.ProductName == name;
    });
}

function ImageLoaded(name) {
    var selected = getProductSelected(name);
    selected.AddSeen();
}

function ImageVotedFor(name) {
    var selected = getProductSelected(name);
    selected.AddVote();
}

function getProductsToDisplay(currentImages) {
    var arr = [];
    var selectedIndexes = [];
    for (var i = 0; i < 3; i++) {
        var selectIndex = (Math.floor(Math.random() * (products.length - i)) + 1);
        var product = ActiveProducts[selectIndex];
        while (product != undefined && (currentImages.includes(product.ProductName) || selectedIndexes.includes(selectIndex))) {
            selectIndex = (Math.floor(Math.random() * (products.length - i)) + 1);
            product = ActiveProducts[selectIndex];
        };
        selectedIndexes.push(selectIndex);
        arr.push(product);
    };
    return arr;
};