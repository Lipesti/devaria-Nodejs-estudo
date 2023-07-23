try {
    const listaDeProdutosDisponiveis = [
        "Pão",
        "Leite",
        "Café",
        "Laranja",
        "Coca-Cola",
        "Macarrão",
        "Sabonete",
        "Detergente",
      ];
      
      const listaDeArgumentos = process.argv.slice(2);
      
      const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto => {
        return listaDeArgumentos.find(argumento => argumento === produto);
      });
      
      listaDeProdutosSolicitadosDisponiveis.forEach(produto => {
        console.log(`Este produto está disponível no mercado: ${produto}`);
      });
      
      const listaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento => {
        return !listaDeProdutosDisponiveis.find(produto => produto === argumento);
      });
      
      listaDeProdutosSolicitadosNaoDisponiveis.forEach(argumento => {
        console.log(`Este produto não está disponível no mercado: ${argumento}`);
      });
      
      listaDeProdutosDisponiveis.sort();
      listaDeProdutosDisponiveis.forEach(produto => console.log(`Produtos disponiveis no mercado: ${produto}`));
} catch (e) {
    console.log('Não foi possível executar pedido de compra');
}
