// Importações necessárias do React
import { createContext, useContext, useState, useEffect } from "react";
// Importação do toast do react-toastify para exibir mensagens visuais
import { toast } from "react-toastify";

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
    setItensCarrinho((prev) => {
      const novoCarrinho = prev.find((item) => item.id === produto.id)
        ? prev.map((item) =>
            item.id === produto.id
              ? { ...item, quantidade: item.quantidade + 1 } // Se já existe, aumenta a quantidade
              : item
          )
        : [...prev, { ...produto, quantidade: 1 }]; // Se não existe, adiciona com quantidade 1

      // Exibe toast de sucesso ao adicionar produto
      toast.success(`"${produto.nome}" adicionado ao carrinho!`);
      return novoCarrinho;
    });
  }

  // Função para remover um item do carrinho pelo seu ID
  function removerDoCarrinho(id) {
    setItensCarrinho((prev) => {
      const itemRemovido = prev.find((item) => item.id === id); // Verifica se o item existe
      const novoCarrinho = prev.filter((item) => item.id !== id); // Remove o item se existir

      if (itemRemovido) {
        // Exibe toast informando que o item foi removido
        toast.info(`"${itemRemovido.nome}" removido do carrinho.`);
      } else {
        // Caso tente remover um item que não está no carrinho
        toast.warning("Item não encontrado no carrinho.");
      }

      return novoCarrinho;
    });
  }

  // Função para atualizar a quantidade de um item específico
  function atualizarQuantidade(id, quantidade) {
    setItensCarrinho((prev) => {
      const itemAtualizado = prev.find((item) => item.id === id); // Verifica se o item existe
      const novoCarrinho = prev.map((item) =>
        item.id === id ? { ...item, quantidade: Number(quantidade) } : item
      );

      // Exibe toast informando que a quantidade foi atualizada
      if (itemAtualizado) {
        toast.info(
          `Quantidade de "${itemAtualizado.nome}" atualizada para ${quantidade}.`
        );
      }

      return novoCarrinho;
    });
  }

  // Função para limpar todo o carrinho
  function limparCarrinho() {
    setItensCarrinho([]); // Esvazia o carrinho

    // Exibe toast informando que o carrinho foi limpo
    toast.warn("Carrinho esvaziado.");
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
