const url = "https://raw.githubusercontent.com/pedrohenriquefurquimgouveia/2024-API-3B-PEDRO-07/refs/heads/main/concurso_militar.json"

async function vizualizaInfo(){
    const res = await fetch(url)
    const dados = await res.json()

    const cursos = Object.keys(dados)
    const votos = Object.values(dados)
    const exercicioMaisVotado = cursos[0]
    const quantidadeDeVoto = Object.values(dados)[0]

    const data = [
        {
            x:cursos,
            y:votos,
            type: 'bar',
        }
    ]
}