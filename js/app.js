var votesMade = 0;
var showResultsAt = 10;
var voteResults = [];
var imageHolder = document.getElementById('imageHolder');


(function() {
    document.getElementById('votesRequired').textContent = showResultsAt;
    var currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
    updateImages();
})();

function updateImages() {
    var randomImages = getProductsToDisplay();
    while (randomImages.includes(undefined)) {
        randomImages = getProductsToDisplay();
    }
    imageHolder.innerHTML = '';
    for (var i = 0; i < randomImages.length; i++) {
        var img = document.createElement('img');
        img.src = randomImages[i].Image;
        img.classList.add('vote-img');
        img.id = 'vote_' + i;
        img.setAttribute('data-product-name', randomImages[i].ProductName)
        img.addEventListener('click', voteWasMade);
        imageHolder.appendChild(img);
    }
};

function voteWasMade(event) {
    votesMade++;
    var productName = event.srcElement.dataset['productName'];
    voteResults.push(productName);
    if (votesMade >= showResultsAt) {
        renderResults();
    }
    updateImages();
}

function renderResults() {
    var results = groupBy(voteResults, 'length');
    var resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';
    for (var x = 0; x < results.length; x++) {
        var product = results[x][0];
        var votes = results[x].length;
        var voteItem = document.createElement('li');
        var productDisplay = document.createElement('p');
        productDisplay.textContent = product;
        var votesDisplay = document.createElement('span');
        votesDisplay.textContent = votes;
        votesDisplay.classList.add('vote-count');
        productDisplay.appendChild(votesDisplay);
        voteItem.appendChild(productDisplay);
        resultsList.appendChild(voteItem);
    }
}