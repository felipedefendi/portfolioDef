const pageTitle = document.querySelector('title');
pageTitle.textContent = 'Meu Portfolio';

const routes = {
  '/': 'index.html',
  '/contatos': 'contatos.html',
  '/projetos': 'projetos.html',
  '/curriculo': 'curriculo.html',
  '/sobre': 'sobre.html',
  '/tecnologias': 'tecnologias.html',
};

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
};

const getMimeType = (filePath) => {
  const extname = path.extname(filePath);
  return mimeTypes[extname] || 'application/octet-stream';
};
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(navLink => navLink.classList.remove('active'));
    link.classList.add('active');
  });
});