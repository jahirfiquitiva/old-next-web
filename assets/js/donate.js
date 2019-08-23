function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function loadSupporters() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '/assets/data/supporters.json', true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      try {
        const supporters = JSON.parse(xhr.responseText);
        if (supporters) {
          const list = document.getElementById('supporters-list');
          if (list) {
            list.innerHTML = '';
            for (const supp of supporters) {
              const suppName = supp.name || '';
              if (suppName.length <= 0) continue;

              const suppLink = supp.link || '#';
              const suppPhoto = supp.photo || '';

              const photoEl = document.createElement('a');
              photoEl.href = suppLink;
              if (suppLink !== '#') photoEl.target = '_blank';
              photoEl.classList.add('button');
              photoEl.classList.add('is-supporter');
              photoEl.setAttribute('style', `background-color: ${getRandomColor()};`);
              if (suppPhoto.length > 0) {
                photoEl.setAttribute('style', `background-image: url('${suppPhoto}') !important;`);
              } else {
                photoEl.classList.add('mdi');
                photoEl.classList.add('mdi-account');
                photoEl.classList.add('mdi-24px');
              }

              list.appendChild(photoEl);
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
