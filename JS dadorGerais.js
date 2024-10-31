const url = "https://raw.githubusercontent.com/pedrohenriquefurquimgouveia/2024-API-3B-PEDRO-07/refs/heads/main/concurso-monitor.json"

async function vizualizaInfo(){
    const res = await fetch(url)
    const dados =await res.json()

    const cursos = Object.keys(dados)
    const CursoMaisVotado = cursos[0]
    const quantidadedeVoto = Object.values(dados)[0]

    let paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = 'entrevistamos <span>${totalEntrvistados} Milhão</span> de brasileiros para descobrir quais os concursos publicos mais querido por todos!'

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizaInfo()