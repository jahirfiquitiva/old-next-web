function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function loadSupporters() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', './assets/data/supporters.json', true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      try {
        const supporters = JSON.parse(xhr.responseText);
        if (supporters) {
          const list = document.getElementById('supporters-list');
          if (list) {
            list.innerHTML = '';
            let ind = 0;

            for (const supp of supporters) {
              const suppName = supp.name || '';
              if (suppName.length <= 0) continue;

              const suppLink = supp.link || '#';
              const suppPhoto = supp.photo || '';

              const aa = document.createElement('a');
              aa.href = suppLink;
              if (suppLink !== '#') aa.target = '_blank';
              aa.classList.add('supporter');

              const photoEl = document.createElement('span');
              photoEl.classList.add('supporter-img');
              photoEl.setAttribute('style', `background-color: ${getRandomColor()};`);
              if (suppPhoto.length > 0) {
                photoEl.setAttribute('style', `background-image: url('${suppPhoto}') !important;`);
              } else {
                photoEl.classList.add('mdi');
                photoEl.classList.add('mdi-account');
                photoEl.classList.add('mdi-24px');
              }
              aa.appendChild(photoEl);

              const namep = document.createElement('p');
              namep.innerHTML = `<b>${suppName}</b>`;
              aa.appendChild(namep);

              list.appendChild(aa);
            }
          }
        }
      } catch (e) {
      }
    }
  };
  xhr.send(null);
}

loadSupporters();
