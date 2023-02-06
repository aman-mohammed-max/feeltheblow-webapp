export default function copyandvib(link, vib) {
  navigator.clipboard.writeText(link).then(
    function () {
      navigator.vibrate(vib);
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
    }
  );
}

export function openLink(link) {
  window.open(link, "_self");
}
