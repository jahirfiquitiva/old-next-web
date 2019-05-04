const regex = /^(9[1-9])([0-9]{3})([0-9]{10})$/g;
const maxRecordsCount = 10000000000;

function alertError() {
  alert('Error inesperado. Por favor, intente de nuevo!');
}

function setError(msg, inpId, helpId) {
  if (typeof msg === 'undefined' || msg === null || msg.length <= 0) return;
  const countInput = document.getElementById(inpId);
  const countHelp = document.getElementById(helpId);
  if (countInput) countInput.classList.add('is-danger');
  if (countHelp) {
    countHelp.classList.add('is-danger');
    countHelp.innerHTML = msg;
    countHelp.classList.remove('is-hidden');
  }
}

function setCountError(msg) {
  setError(msg, 'count', 'count-help');
}

function setValueError(msg) {
  setError(msg, 'value', 'value-help');
}

function generateVerificationCode(fromValue) {
  const digits = fromValue.toString().split('');
  let result = '';
  digits.forEach((value, index) => {
    result += (index % 2 !== 0 ? parseInt(value) : (parseInt(value) * 2)).toString();
  });
  result = result.replace(/0/g, '');
  const finalDigits = result.toString().split('');
  let sum = 0;
  finalDigits.forEach((value) => {
    sum += parseInt(value, 10);
  });
  const rest = sum % 10;
  return rest !== 0 ? (10 - rest) : rest;
}

function generateCodeHTML(wholeCode) {
  const extraTag = shouldColorOutput() ? '' : ' code-no-color';
  const out = [
    {
      tag: 'code-first',
      value: wholeCode.substring(0, 2),
    },
    {
      tag: 'code-second',
      value: wholeCode.substring(2, 5),
    },
    {
      tag: 'code-third',
      value: wholeCode.substring(5, 15),
    },
    {
      tag: 'code-fourth',
      value: wholeCode.substring(15),
    },
  ];
  let outputHTML = '';
  for (let i = 0; i < out.length; i += 1) {
    outputHTML += `<span class="code-portion ${out[i].tag}${extraTag}">${out[i].value}</span>`;
  }
  return outputHTML;
}

function internalGenerateCodes(fromValue, count) {
  const table = document.getElementById('codes-table');
  if (!table) return;
  const tableBody = document.getElementById('codes-table-body');
  if (!tableBody) return;
  tableBody.innerHTML = '';
  let id = 1;
  for (let num = fromValue; num < fromValue + count; num += 1) {
    const row = document.createElement('tr');
    const idTd = document.createElement('td');
    idTd.innerText = id.toString();
    const codeTd = document.createElement('td');
    codeTd.innerHTML = generateCodeHTML(`${num}${generateVerificationCode(num)}`);
    row.appendChild(idTd);
    row.appendChild(codeTd);
    tableBody.appendChild(row);
    id += 1;
  }
  table.classList.remove('is-hidden');
}

function generateCodes() {
  cleanCountError();
  cleanValueError();

  const input = document.getElementById('value');
  if (input) {
    const valueNumber = input.value;
    const rep = new RegExp(regex);
    const groups = rep.exec(valueNumber);
    const validNumber = typeof groups !== 'undefined' && groups !== null && groups.length > 0;
    if (!validNumber) {
      if (valueNumber.length !== 15) {
        const missing = 15 - valueNumber.length;
        const extraMessage = missing < 0 ? ` Sobran ${Math.abs(missing)} dígito(s).`
          : ` Faltan ${Math.abs(missing)} dígito(s).`;
        setValueError(`El valor debe tener exáctamente 15 dígitos.${extraMessage}`);
      } else {
        setValueError('Los primeros 2 dígitos deben estar en el rango 91-99');
      }
      return;
    }

    if (groups) {
      groups.shift();
      const lastTen = groups[2];

      const countInput = document.getElementById('count');
      if (countInput) {
        const count = countInput.value;
        if (count <= 0) {
          setCountError('El número debe ser mayor que 0');
        } else {
          const actualCount = parseInt(count, 10);
          const expected = parseInt(lastTen, 10) + actualCount;
          if (expected <= maxRecordsCount) {
            internalGenerateCodes(parseInt(valueNumber, 10), actualCount);
          } else {
            const firstErrorMsg = `No es posible generar ${count} código(s).`;
            const secondErrorMsg = 'Por favor, ingrese un valor menor.';
            setCountError(`${firstErrorMsg}<br>${secondErrorMsg}`);
          }
        }
      } else {
        alertError();
      }
    } else {
      alertError();
    }
  } else {
    alertError();
  }
}
