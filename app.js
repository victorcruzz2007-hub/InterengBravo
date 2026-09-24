fetch('catalogo.csv')
  .then(response => response.text())
  .then(text => {

    const linhas = text.split('\n');
    let html = '<table>';

    linhas.forEach((linha,index)=>{
      const cols = linha.split(',');

      html += '<tr>';

      cols.forEach(col=>{
        html += index === 0
          ? `<th>${col}</th>`
          : `<td>${col}</td>`;
      });

      html += '</tr>';
    });

    html += '</table>';

    document.getElementById('tabela').innerHTML = html;

  })
  .catch(err=>{
    document.getElementById('tabela').innerHTML =
      'Erro ao carregar catálogo: ' + err;
  });
