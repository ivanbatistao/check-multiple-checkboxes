const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let lastChecked = null;

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', (event) => {
    let inBetween = false;
    if (event.shiftKey && event.target.checked) {
      checkboxes.forEach((checkbox) => {
        if (checkbox === event.target || checkbox === lastChecked) {
          inBetween = !inBetween;
        }

        if (inBetween) {
          checkbox.checked = true;
        }
      });
    }

    lastChecked = event.target;
  });
});
