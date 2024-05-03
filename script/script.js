function calcularContribuicao() {
    // Obter os valores dos campos do formulário
    const nomeDeUsuario = document.getElementById('nomeDeUsuario').value;
    const filhosMenores = parseInt(document.getElementById('filhosMenores').value);
    const salarioContribuicao = parseFloat(document.getElementById('salarioContribuicao').value);

    // Verificar a faixa de salário para determinar a cota do Salário Família
    let cotaSalarioFamilia = 0;

    if (salarioContribuicao <= 806.80) {
        cotaSalarioFamilia = 41.37 * filhosMenores;
    } else if (salarioContribuicao > 806.80 && salarioContribuicao <= 1212.64) {
        cotaSalarioFamilia = 29.16 * filhosMenores;
    } else {
        cotaSalarioFamilia = 0; // Para salários acima de R$ 1212.64, não há cota
    }

    // Exibir o resultado na página
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Empregado: ${nomeDeUsuario}\nCota do Salário Família: R$ ${cotaSalarioFamilia.toFixed(2)}`;
}
