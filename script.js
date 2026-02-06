const listItems = document.querySelectorAll('li button');

listItems.forEach(item => {
    item.addEventListener("click", () => {
      if (item.classList.contains('favorite-icon')) {
        item.classList.remove('favorite-icon');
         item.classList.add('filled');
          item.innerHTML = "&#10084;";
    } else if(item.classList.contains('filled')) {
        item.classList.remove('filled');
         item.classList.add('favorite-icon');
         item.innerHTML = "&#9825;";
    }
    });
});
