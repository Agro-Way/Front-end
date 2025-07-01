// Importações necessárias do React
import { createContext, useContext, useState, useEffect } from "react";

// Criamos o contexto que permitirá compartilhar dados do carrinho com toda a aplicação
const CarrinhoContext = createContext();

// Este componente irá prover os dados do carrinho para os componentes filhos
export function CarrinhoProvider({ children }) {
  // Estado que armazena os itens do carrinho
  // Ao iniciar, tenta buscar o carrinho salvo no localStorage (para manter os dados entre sessões)
  const [itensCarrinho, setItensCarrinho] = useState(() => {
    const carrinhoSalvo = localStorage.getItem("carrinho");
    return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : []; // Se tiver carrinho salvo, retorna ele, senão, retorna um array vazio
  });

  // useEffect para atualizar o localStorage sempre que o carrinho mudar
  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(itensCarrinho)); // Salva o carrinho como string
  }, [itensCarrinho]); // Executa toda vez que "itensCarrinho" for alterado

  // Função para adicionar um produto ao carrinho
  function adicionarAoCarrinho(produto) {
    setItensCarrinho((prev) =>
      prev.find((item) => item.id === produto.id) // Verifica se o produto já está no carrinho
        ? prev.map((item) =>
            item.id === produto.id
              ? { ...item, quantidade: item.quantidade + 1 } // Se já existe, aumenta a quantidade
              : item
          )
        : [...prev, { ...produto, quantidade: 1 }] // Se não existe, adiciona com quantidade 1
    );
  }

  // Função para remover um item do carrinho pelo seu ID
  function removerDoCarrinho(id) {
    setItensCarrinho((prev) => prev.filter((item) => item.id !== id));
  }

  // Função para atualizar a quantidade de um item específico
  function atualizarQuantidade(id, quantidade) {
    // Muda apenas a quantidade do item com aquele ID
    setItensCarrinho((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantidade: Number(quantidade) } : item
      )
    );
  }

  // Função para limpar todo o carrinho
  function limparCarrinho() {
    setItensCarrinho([]); //Esvazia o carrinho
  }

  // Aqui fornecemos os dados e funções do carrinho para os componentes que estiverem dentro do CarrinhoProvider
  return (
    <CarrinhoContext.Provider
      value={{
        itensCarrinho,           // Array de produtos no carrinho
        adicionarAoCarrinho,     // Função para adicionar
        removerDoCarrinho,       // Função para remover
        atualizarQuantidade,     // Função para alterar quantidade
        limparCarrinho           // Função para limpar tudo
      }}
    >
      {children} {/* Renderiza todos os componentes filhos com acesso ao contexto */}
    </CarrinhoContext.Provider>
  );
}

// Hook personalizado para acessar o contexto do carrinho em qualquer componente
export function useCarrinho() {
  return useContext(CarrinhoContext); // Retorna o valor atual do CarrinhoContext
}
