export default function outterClick(element, events, callback) {
    const html = document.documentElement;

    function handleOutterClick(event) {
      if (!element.contains(event.target)) {
        events.forEach((userEvent) => {
          html.removeEventListener(userEvent, handleOutterClick);
          element.removeAttribute("data-outside");
        });
        callback();
      }
    }
    if (!element.hasAttribute("data-outside")) {
      events.forEach((userEvent) => {
          setTimeout(() => {
            html.addEventListener(userEvent, handleOutterClick);
          })
        element.setAttribute("data-outside", "");
      });
    }

  }