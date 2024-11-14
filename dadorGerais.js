const url = "https://raw.githubusercontent.com/pedrohenriquefurquimgouveia/2024-API-3B-PEDRO-07/refs/heads/main/concurso_militar.json"

async function vizualizaInfo(){
    const res = await fetch(url)
    const dados = await res.json()

    const cursos = Object.keys(dados)
    const votos = Object.values(dados)
    const CursoMaisVotado = cursos[0]
    const quantidadeDeVoto = Object.values(dados)[0]

    
const data = [
    {
        x:concursos_publicos,
        y:votos,
        type: 'bar',
    }
]










    let paragrafo = document.createElement('p')

    paragrafo.classList.add('graficos-container__texto')

    paragrafo.innerHTML = `nessa pesquisa estou procurando saber quais os concursos do exercito brasileiro. O ${CursoMaisVotado} foi o concurso mais votados entre todos os demais, com um total de ${quantidadeDeVoto} votos, em um pesquisa feita com total de pessoas, que teve total de dois milhoes de pessoas`
      
    let caixa = document.getElementById('caixa-gráficos')
    caixa.appendChild(paragrafo)

    const graficos = document.createElement('div')
    grafico.className  = 'grafico'
    dicument.getElementById('caixa-grafico'),
    appendChild(grafico)
    plotly.newPlot(grafico. data)


}

vizualizaInfo()