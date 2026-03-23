let mangas = [];

function adicionarManga() {
  let titulo = document.getElementById("titulo").value;
  let volume = document.getElementById("volume").value;

  let manga = {
    titulo: titulo,
    volume: volume
  };

  mangas.push(manga);
  mostrarMangas();
}

function mostrarMangas() {
  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  mangas.forEach((manga, index) => {
    lista.innerHTML += `
      <li>
        ${manga.titulo} - Volume ${manga.volume}
        <button onclick="removerManga(${index})">Excluir</button>
      </li>
    `;
  });
}

function removerManga(index) {
  mangas.splice(index, 1);
  mostrarMangas();
}