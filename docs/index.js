showmoreBtn = document.getElementById("showmore");
if (showmoreBtn) {
  collapsibleItems = document.getElementsByClassName("img-container collapsible collapsed");
  showmoreBtn.textContent = "SHOW " + collapsibleItems.length + " MORE";
  showmoreBtn.addEventListener('click', function () {
    if (showmoreBtn.textContent.endsWith("MORE")) {
      collapsibleItems = document.getElementsByClassName("img-container collapsible collapsed");
      Array.prototype.forEach.call(collapsibleItems, item => {
        item.classList.remove("collapsed");
        showmoreBtn.textContent = "SHOW LESS";
      });
    } else {
      collapsibleItems = document.getElementsByClassName("img-container collapsible");
      Array.prototype.forEach.call(collapsibleItems, item => {
        item.classList.add("collapsed");
        showmoreBtn.textContent = "SHOW " + collapsibleItems.length + " MORE";
      });
    }
  });
}
