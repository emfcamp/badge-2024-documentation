const VISIBLE_HEXPANSION_COUNT = 9;

function shuffleHexpansionGallery() {
  document.querySelectorAll(".scroll-container").forEach((container) => {
    const items = [...container.querySelectorAll(":scope > .img-container")];
    const buttonContainer = container.querySelector(":scope > .button-container");

    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }

    items.forEach((item, index) => {
      container.insertBefore(item, buttonContainer);
      if (index < VISIBLE_HEXPANSION_COUNT) {
        item.classList.remove("collapsible", "collapsed");
      } else {
        item.classList.add("collapsible", "collapsed");
      }
    });
  });
}

shuffleHexpansionGallery();

const showmoreBtn = document.getElementById("showmore");
if (showmoreBtn) {
  let collapsibleItems = document.getElementsByClassName("img-container collapsible");
  showmoreBtn.textContent = "SHOW " + collapsibleItems.length + " MORE";
  showmoreBtn.addEventListener("click", function () {
    if (showmoreBtn.textContent.endsWith("MORE")) {
      collapsibleItems = document.getElementsByClassName("img-container collapsible");
      for (const item of collapsibleItems) {
        item.classList.remove("collapsed");
      }
      showmoreBtn.textContent = "SHOW LESS";
    } else {
      collapsibleItems = document.getElementsByClassName("img-container collapsible");
      for (const item of collapsibleItems) {
        item.classList.add("collapsed");
      }
      showmoreBtn.textContent = "SHOW " + collapsibleItems.length + " MORE";
    }
  });
}
