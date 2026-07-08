const VISIBLE_HEXPANSION_COUNT = 9;

function shuffleHexpansionGallery() {
  document.querySelectorAll(".scroll-container").forEach((container) => {
    const items = [...container.querySelectorAll(":scope > .img-container")];
    const buttonContainer = container.querySelector(":scope > .button-container");
    const pinned = items.filter((item) => item.classList.contains("pinned"));
    const unpinned = items.filter((item) => !item.classList.contains("pinned"));

    for (let i = unpinned.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [unpinned[i], unpinned[j]] = [unpinned[j], unpinned[i]];
    }

    [...pinned, ...unpinned].forEach((item, index) => {
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
  showmoreBtn.setAttribute("aria-expanded", "false");

  showmoreBtn.addEventListener("click", function () {
    const isExpanded = showmoreBtn.getAttribute("aria-expanded") === "true";
    collapsibleItems = document.getElementsByClassName("img-container collapsible");

    if (!isExpanded) {
      for (const item of collapsibleItems) {
        item.classList.remove("collapsed");
      }
      showmoreBtn.textContent = "SHOW LESS";
      showmoreBtn.setAttribute("aria-expanded", "true");
    } else {
      for (const item of collapsibleItems) {
        item.classList.add("collapsed");
      }
      showmoreBtn.textContent = "SHOW " + collapsibleItems.length + " MORE";
      showmoreBtn.setAttribute("aria-expanded", "false");
    }
  });
}
