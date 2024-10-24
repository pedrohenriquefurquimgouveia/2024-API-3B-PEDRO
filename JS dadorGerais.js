const url = "https://raw.githubusercontent.com/pedrohenriquefurquimgouveia/2024-API-3B-PEDRO-07/refs/heads/main/concurso-monitor.json"

async function vizualizaInfo(){
    const res = await fetch(url)
    const dados =await res.json()

    const cursos = Object.keys(dados)
    const CursoMaisVotado = cursos[0]
    const quantidadedeVoto = Object.values(dados)[0]

    console.log(CursoMaisVotado)
    console.log(quantidadedeVoto)
}

vizualizaInfo()