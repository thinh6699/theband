var header = document.getElementById("header");
var mobileMenu = document.getElementById("mobile-menu");
var headerHeight = header.clientHeight;
console.log(headerHeight);

// Đóng/mở moblie-menu
mobileMenu.onclick = function () {
  console.log(header.clientHeight);
  var isClosed = header.clientHeight === headerHeight;
  if (isClosed) {
    header.style.height = "auto";
  } else header.style.height = null;
};

// Tự động đóng menu khi chọn bên trong
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
//    console.log(menuItems);
for (i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];
  //    console.log(menuItem);
  menuItem.onclick = function (event) {
    // console.log(this);
    var isParentMenu =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("subnav");
    if (isParentMenu) {
      event.preventDefault();
    } else header.style.height = null;
  };
}
