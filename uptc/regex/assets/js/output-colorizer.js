function shouldColorOutput() {
  const checkbox = document.getElementById('color-output');
  if (checkbox) {
    try {
      return checkbox.checked;
    } catch (e) {
      return false;
    }
  }
  return false;
}

function updateOutputColors() {
  const colorOutput = shouldColorOutput();
  const allColoredElements = document.getElementsByClassName('code-portion');
  if (allColoredElements && allColoredElements.length > 0) {
    for (const el of allColoredElements) {
      colorOutput ? el.classList.remove('code-no-color') : el.classList.add('code-no-color');
    }
  }
  const colorRef = document.getElementById('color-ref');
  if (colorRef) {
    colorOutput ? colorRef.classList.remove('is-hidden')
      : colorRef.classList.add('is-hidden');
  }
}
