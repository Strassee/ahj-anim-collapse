document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".btn");
  const blockCollapsed = document.querySelector(".block-collapsed");

  const onHandlerClick = () => {
    blockCollapsed.classList.toggle("block-collapsed-show");
    // blockCollapsed.classList.toggle("clicked-show");
  };

  button.addEventListener("click", onHandlerClick);
});
