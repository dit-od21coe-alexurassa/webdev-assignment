const searchBtn = document.body.querySelector(".search-btn");
const searchInput = document.body.querySelector(".search-input");
const searchResultsElement = document.querySelector(".search-results");
const availableItemsEl = document.querySelector("#available-cats")
const cats = ["Alex", "Ferguson", "Peterson", "David Livingstone", "David"];


function appendAvailableItems () {
  if(availableItemsEl) {
    cats.forEach(async cat => {
  
      function appendAvailableItem() {
        const element = document.createElement('li')
        element.innerText = cat

        return Promise.resolve(availableItemsEl.appendChild(element))
      }

      await appendAvailableItem()
  
    })
  }
}

appendAvailableItems()

if (searchInput) {
  searchInput.addEventListener("keyup", ($event) => {
    const searchValue = $event.target.value.toLowerCase();

    const filteredCats = cats.filter(
      (catName) => catName.toLowerCase() === searchValue
    );

    const filteredResults = new Set(filteredCats);

    filteredResults.forEach((cat) => {
      addFilteredToDOM(cat);
    });
  }); 
}

function addFilteredToDOM(value) {
  if (searchResultsElement) {
    if (searchResultsElement.childNodes.length > 0) {
      // at least one filter result is seen

      searchResultsElement.childNodes.forEach((childNode) => {
        // remove existing similiar childNode
        if (childNode.innerText === value) {
          searchResultsElement.removeChild(childNode);
        } else {
          appendSearchResultToDOM(value);
        }
      });
    }

    // otherwise when there is no any search result seen
    else {
      appendSearchResultToDOM(value);
    }
  }
  if (searchResultsElement) {
    searchResultsElement.childNodes.forEach((childNode) => {
      if (childNode.innerText !== value) {
      }
    });
  }
}

function appendSearchResultToDOM(value) {
  const liElement = document.createElement("li");
  liElement.innerText = value;
  liElement.classList.add("active-search-value");
  searchResultsElement.appendChild(liElement);
}
