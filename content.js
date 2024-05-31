function replacePrice(element) {
  const priceWholeElement = element.querySelector('.a-price-whole');
  const priceFractionElement = element.querySelector('.a-price-fraction');
  const priceSymbolElement = element.querySelector('.a-price-symbol');

  if (!priceWholeElement || !priceFractionElement || !priceSymbolElement) {
    // Price elements not found, return early
    return;
  }

  const priceWholeText = priceWholeElement.textContent.trim().replace(/,/g, '');
  const priceFractionText = priceFractionElement.textContent.trim();
  const fullPriceText = `${priceWholeText}.${priceFractionText}`;
  const price = parseFloat(fullPriceText);

  if (isNaN(price)) {
    console.error(`Failed to parse price: ${fullPriceText}`);
    return;
  }

  const bednets = Math.floor(price / 2);
  console.log(`Price: ${price}, Bednets: ${bednets}`);


// Check if the bednets element already exists
const existingBednetsElement = element.querySelector('.bednets-element');
if (!existingBednetsElement) {
  // Create and append the bednets element if it doesn't exist
  const newSpan = document.createElement('span');
  newSpan.textContent = `${bednets} Bednets `;
  newSpan.classList.add('bednets-element');

  const newLink = document.createElement('a');
  newLink.textContent = '(source)';
  newLink.href = 'https://www.againstmalaria.com/';
  newLink.target = '_blank';
  newLink.classList.add('bednets-source');

  // Add a <br> element before the newSpan element
  priceSymbolElement.parentElement.appendChild(document.createElement('br'));
  priceSymbolElement.parentElement.appendChild(newSpan);
  newSpan.appendChild(newLink);
}

  const decimalElement = element.querySelector('.a-price-decimal');
  if (decimalElement) {
    decimalElement.textContent = '';
  }

  // Remove the "$0" text if the price is zero
  if (price === 0) {
    priceWholeElement.textContent = '';
    priceFractionElement.textContent = '';
  }
}

function replacePrices() {
  const elements = document.querySelectorAll('.s-price-instructions-style, .a-price');
  elements.forEach(element => {
    replacePrice(element);
  });
}

function observeMutations(mutations) {
  mutations.forEach(mutation => {
    if (mutation.type === 'childList') {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.matches('.s-price-instructions-style, .a-price')) {
            replacePrice(node);
          }
          const newElements = node.querySelectorAll('.s-price-instructions-style, .a-price');
          newElements.forEach(element => {
            replacePrice(element);
          });
        }
      });
    }
  });
}

const observer = new MutationObserver(observeMutations);
observer.observe(document.body, {
  childList: true,
  subtree: true
});

document.addEventListener('DOMContentLoaded', () => {
  replacePrices();
});

setTimeout(() => {
  replacePrices();
}, 2000);