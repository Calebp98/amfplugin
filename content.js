// function replacePrice(element) {
//   const priceElement = element.querySelector('.a-price-whole');
//   if (priceElement) {
//     const price = parseFloat(priceElement.textContent.replace(/[,.]/g, ''));
//     const bednets = Math.floor(price / 3);
//     console.log(price, bednets)
//     priceElement.textContent = bednets.toString();

//     const fractionElement = element.querySelector('.a-price-fraction');
//     if (fractionElement) {
//       fractionElement.textContent = 'Bednets';
//     } else {
//       const bednetsElement = document.createElement('span');
//       bednetsElement.className = 'a-price-fraction';
//       bednetsElement.textContent = 'Bednets';
//       priceElement.insertAdjacentElement('afterend', bednetsElement);
//     }

//     const decimalElement = element.querySelector('.a-price-decimal');
//     if (decimalElement) {
//       decimalElement.textContent = '';
//     }
//   }
// }

// function replacePrices() {
//   const elements = document.querySelectorAll('[aria-hidden="true"], .a-price');
//   elements.forEach(element => {
//     replacePrice(element);
//   });
// }

// function observeMutations(mutations) {
//   mutations.forEach(mutation => {
//     if (mutation.type === 'childList') {
//       mutation.addedNodes.forEach(node => {
//         if (node.nodeType === Node.ELEMENT_NODE) {
//           if (node.matches('[aria-hidden="true"], .a-price')) {
//             replacePrice(node);
//           }
//           const newElements = node.querySelectorAll('[aria-hidden="true"], .a-price');
//           newElements.forEach(element => {
//             replacePrice(element);
//           });
//         }
//       });
//     }
//   });
// }

// const observer = new MutationObserver(observeMutations);
// observer.observe(document.body, {
//   childList: true,
//   subtree: true
// });


// setTimeout(() => {
//   replacePrices();
// }, 2000);



function replacePrice(element) {
  const priceWholeElement = element.querySelector('.a-price-whole');
  const priceFractionElement = element.querySelector('.a-price-fraction');
  const priceSymbolElement = element.querySelector('.a-price-symbol');

  if (!priceWholeElement || !priceFractionElement || !priceSymbolElement) {
    console.error('Price element structure not found');
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

  const bednets = Math.floor(price / 3);
  console.log(`Price: ${price}, Bednets: ${bednets}`);

  // Update price element with bednets
  priceWholeElement.textContent = bednets.toString();
  priceFractionElement.textContent = ' Bednets';

  const decimalElement = element.querySelector('.a-price-decimal');
  if (decimalElement) {
    decimalElement.textContent = '';
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
