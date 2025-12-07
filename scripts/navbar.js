function openSubmenu(className, context) {
  const submenu = document.getElementById(className);
  const menuIcons = document.getElementsByClassName(`${context}-dropdown-icon`);

  if (submenu.classList.contains("hidden")) {
    submenu.classList.remove("hidden");
  } else {
    submenu.classList.add("hidden");
  }

  for (let icon of menuIcons) {
    icon.classList.toggle("hidden");
  }
}
