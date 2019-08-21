let projects = [];

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function titleCase(str) {
  return str.toLowerCase().split(' ').map(function (word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

function filterProjects() {
  const filters = document.getElementsByName('filter');
  if (!filters || filters.length <= 0) return;
  let selectedFilter = '';
  for (const filter of filters) {
    if (filter.checked) {
      selectedFilter = filter.value;
      break;
    }
  }

  const projectsColumns = document.getElementById('projects-cols');
  if (projectsColumns) {
    projectsColumns.innerHTML = '';

    const filteredProjects = (projects || []).filter(it => {
      return it.tag === selectedFilter || it.tag === 'other';
    });

    for (const project of filteredProjects) {
      const projectName = project.title || '';
      if (!projectName || projectName.length <= 0) continue;

      const column = document.createElement('div');
      column.classList.add('column');
      column.classList.add('is-6-mobile');
      column.classList.add('is-3-tablet');
      column.classList.add('is-3-desktop');
      column.classList.add('is-2-fullhd');

      const link = document.createElement('a');
      link.href = project.link;
      link.target = '_blank';

      const card = document.createElement('div');
      card.classList.add('card');
      card.classList.add('has-same-height');

      const colorRgb = hexToRgb(project.color);
      card.setAttribute('style',
        `
                 --bord-hover-col: rgba(${colorRgb.r}, ${colorRgb.g}, ${colorRgb.b}, .1);
                 --shadow-hover-col: rgba(${colorRgb.r}, ${colorRgb.g}, ${colorRgb.b}, .25);
                  --link-col: ${project.color};
                `);

      const cardContent = document.createElement('div');
      cardContent.classList.add('card-content');

      const figure = document.createElement('figure');
      figure.classList.add('image');
      figure.classList.add('icon');
      figure.classList.add('is-128x128');
      figure.classList.add('is-centered');

      const img = document.createElement('img');
      img.src = project.icon;
      img.alt = project.title;
      figure.appendChild(img);
      cardContent.appendChild(figure);

      const footer = document.createElement('div');
      footer.classList.add('card-footer');

      const title = document.createElement('h4');
      title.classList.add('title');
      title.classList.add('use-manrope');
      title.innerText = project.title;
      cardContent.appendChild(title);

      const subtitle = document.createElement('p');
      subtitle.classList.add('is-small');
      subtitle.innerText = project.description;
      cardContent.appendChild(subtitle);

      /*
      const projectTag = project.tag || '';
      if (projectTag && projectTag.length > 0) {
        const tag = document.createElement('span');
        tag.classList.add('tag');
        tag.classList.add('is-rounded');
        tag.classList.add(projectTag);
        tag.innerText = projectTag;
        footer.appendChild(tag);
      }
      */

      card.appendChild(cardContent);
      // card.appendChild(footer);
      link.appendChild(card);
      column.appendChild(link);
      projectsColumns.appendChild(column);
    }
  }
}

function setupProjectsUI() {
  const projectsSelect = document.getElementById('projects-filters');
  if (!projectsSelect) return;

  const uniqueTags = [...new Set((projects || []).map(it => {
    return it.tag !== 'other' ? it.tag : null;
  }))]
    .filter(it => typeof it !== 'undefined' && it !== null && it.length > 0);

  projectsSelect.innerHTML = '';
  const list = document.createElement('ul');
  uniqueTags.forEach((tag, index) => {
    const filter = document.createElement('li');

    const input = document.createElement('input');
    input.id = `filter-${tag.toLowerCase()}`;
    input.type = 'radio';
    input.value = tag.toLowerCase();
    input.name = 'filter';
    input.checked = index <= 0;
    filter.appendChild(input);

    const label = document.createElement('label');
    label.setAttribute('for', `filter-${tag.toLowerCase()}`);
    label.innerText = titleCase(tag);
    filter.appendChild(label);

    filter.onchange = () => filterProjects();

    list.appendChild(filter);
  });
  projectsSelect.appendChild(list);

  filterProjects();
}

function loadProjects() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', './assets/data/projects.json', true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      try {
        projects = JSON.parse(xhr.responseText) || [];
      } catch (e) {
        projects = [];
      }
      setupProjectsUI();
    }
  };
  xhr.send(null);
}

loadProjects();
