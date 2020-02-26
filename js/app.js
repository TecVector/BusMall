var votesMade = 0;
var showResultsAt = 25;
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
        img.setAttribute('data-product-name', randomImages[i].ProductName);
        img.addEventListener('click', voteWasMade);
        ImageLoaded(randomImages[i].ProductName);
        imageHolder.appendChild(img);
    }
};

function voteWasMade(event) {
    votesMade++;
    document.getElementById('votesRequired').textContent = showResultsAt - votesMade;
    var productName = event.srcElement.dataset['productName'];
    voteResults.push(productName);
    ImageVotedFor(productName);
    if (votesMade >= showResultsAt) {
        renderResults();
    } else {
        updateImages();
    }
}

function renderResults() {
    imageHolder.innerHTML = '<h1>Voting Closed</h1><p>Thank you for your time!  You can review your results to the left</p>';
    var results = groupBy(voteResults, 'length');
    var resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';
    var resultOutput = [];
    for (var x = 0; x < results.length; x++) {
        var product = getProductSelected(results[x][0]);
        var votes = results[x].length;
        var voteItem = document.createElement('li');
        var productDisplay = document.createElement('p');
        productDisplay.textContent = product.ProductName;
        var votesDisplay = document.createElement('span');
        votesDisplay.textContent = votes + ' (Seen ' + product.timesSeen + ' times)';
        votesDisplay.classList.add('vote-count');
        productDisplay.appendChild(votesDisplay);
        voteItem.appendChild(productDisplay);
        resultOutput.push([votes, voteItem]);
    }
    resultOutput.sort(function(a, b) {
        return b[0] - a[0];
    });
    for (var r = 0; r < resultOutput.length; r++) {
        var voteItem = resultOutput[r][1];
        resultsList.appendChild(voteItem);
    }
}