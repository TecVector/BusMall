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
    var currentImageFiles = imageHolder.getElementsByTagName('img');
    var currentDisplayedProducts = [];
    for (var i = 0; i < currentImageFiles.length; i++) {
        var productName = currentImageFiles[i].dataset["productName"];
        currentDisplayedProducts.push(productName);
    }
    var randomImages = getProductsToDisplay(currentDisplayedProducts);
    while (randomImages.includes(undefined)) {
        randomImages = getProductsToDisplay(currentDisplayedProducts);
    }
    imageHolder.innerHTML = '';
    for (var i = 0; i < randomImages.length; i++) {
        var voteItemContainer = document.createElement('div');
        voteItemContainer.classList.add('vote-image-holder');
        var img = document.createElement('img');
        img.alt = randomImages[i].ProductName;
        img.src = randomImages[i].Image;
        img.classList.add('vote-img');
        img.id = 'vote_' + i;
        img.setAttribute('data-product-name', randomImages[i].ProductName);
        img.addEventListener('click', voteWasMade);
        ImageLoaded(randomImages[i].ProductName);
        voteItemContainer.appendChild(img);
        imageHolder.appendChild(voteItemContainer);
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
    var resultsList = document.getElementById('resultsMessage');
    resultsList.remove(); // = '<section class="vote-count-chart-holder"><canvas id="busMallChart" height="450" width="100%" class="vote-section-chart"></section>';
    addToLocalStorage('ProductHistory', JSON.stringify(ActiveProducts));
    renderChart();
    // var resultOutput = [];
    // for (var p = 0; p < ActiveProducts.length; p++) {
    //     var product = ActiveProducts[p];
    //     var votes = product.votes;
    //     var voteItem = document.createElement('li');
    //     var productDisplay = document.createElement('p');
    //     productDisplay.textContent = product.ProductName;
    //     var votesDisplay = document.createElement('span');
    //     votesDisplay.textContent = votes + ' (Seen ' + product.timesSeen + ' times)';
    //     votesDisplay.classList.add('vote-count');
    //     productDisplay.appendChild(votesDisplay);
    //     voteItem.appendChild(productDisplay);
    //     resultOutput.push([votes, voteItem]);
    // }
    // resultOutput.sort(function(a, b) {
    //     return b[0] - a[0];
    // });
    // for (var r = 0; r < resultOutput.length; r++) {
    //     var voteItem = resultOutput[r][1];
    //     resultsList.appendChild(voteItem);
    // }
    // renderChart();
}