const invalidKeys = [69, 187, 188, 189, 190, 229];

function getEventKey(event) {
  if (typeof event === 'undefined' || event === null) return null;
  try {
    let code;
    if (event.which !== undefined) {
      code = event.which;
    } else if (event.keyCode !== undefined) {
      code = event.keyCode;
    } else if (event.key !== undefined) {
      code = event.key;
    } else if (event.keyIdentifier !== undefined) {
      code = event.keyIdentifier;
    }
    return code || null;
  } catch (e) {
    return null;
  }
}

function checkInput(event) {
  try {
    const code = getEventKey(event);
    if (!code) return false;
    return !invalidKeys.includes(code);
  } catch (e) {
    return false;
  }
}

function cleanValueError() {
  const input = document.getElementById('value');
  if (input) input.classList.remove('is-danger');
  const inputHelp = document.getElementById('value-help');
  if (inputHelp) {
    inputHelp.innerHTML = '';
    inputHelp.classList.remove('is-danger');
    inputHelp.classList.add('is-hidden');
  }
}

function cleanCountError() {
  const input = document.getElementById('count');
  if (input) input.classList.remove('is-danger');
  const inputHelp = document.getElementById('count-help');
  if (inputHelp) {
    inputHelp.innerHTML = '';
    inputHelp.classList.remove('is-danger');
    inputHelp.classList.add('is-hidden');
  }
}

function cleanErrors() {
  cleanValueError();
  cleanCountError();
}
