# Landing Page Argila Branca Adlux

Esta é uma landing page responsiva e de página única, focada na conversão, para o produto Argila Branca da Adlux. A página foi desenvolvida com HTML, CSS e JavaScript puros, sem dependência de frameworks externos.

## Características

- **Design Responsivo**: Adaptação perfeita para desktop, tablet e dispositivos móveis
- **Foco em Conversão**: Elementos estrategicamente posicionados para maximizar conversões
- **Performance Otimizada**: Código limpo e otimizado para carregamento rápido
- **Integração com WhatsApp**: Botões que direcionam para o WhatsApp com mensagens pré-definidas
- **Simulação de Pagamento**: Modal interativo com opções de pagamento por cartão e Pix

## Estrutura do Projeto

```
.
├── index.html          # Estrutura principal da página
├── styles.css          # Estilos e responsividade
├── script.js           # Funcionalidades interativas
├── images/             # Diretório de imagens
│   ├── logo-adlux.svg          # Logo principal
│   └── logo-adlux-white.svg    # Logo para o rodapé
└── README.md           # Documentação do projeto
```

## Seções da Página

1. **Cabeçalho (Header)**: Logo, menu de navegação e botão CTA
2. **Seção Principal (Hero)**: Título, subtítulo, imagem do produto e botões de ação
3. **Benefícios**: Lista dos principais benefícios do produto com ícones
4. **Diferenciais**: O que torna o produto especial
5. **Como Usar**: Instruções passo a passo para aplicação do produto
6. **Testemunhos**: Depoimentos de clientes satisfeitos
7. **Call-to-Action Final**: Resumo dos benefícios e opções de compra
8. **Rodapé (Footer)**: Informações de contato, links úteis e direitos autorais

## Funcionalidades Implementadas

- Menu responsivo com toggle para dispositivos móveis
- Carrossel de testemunhos com navegação manual
- Animações de entrada para elementos quando visíveis no viewport
- Scroll suave para links de ancoragem
- Modal de pagamento com opções de cartão e Pix
- Integração com WhatsApp para comunicação e vendas

## Como Personalizar

### Alterando Cores

As cores principais podem ser facilmente alteradas modificando as variáveis CSS no início do arquivo `styles.css`:

```css
:root {
    --primary-color: #7a9e9f; /* Verde azulado suave */
    --secondary-color: #f8f4e9; /* Bege claro */
    --accent-color: #e8a87c; /* Pêssego */
    /* ... outras variáveis ... */
}
```

### Alterando o Número de WhatsApp

Para alterar o número de WhatsApp, localize as ocorrências de `https://wa.me/5511999999999` no arquivo `index.html` e substitua pelo número desejado no formato internacional (sem espaços ou caracteres especiais).

### Alterando Informações de Pagamento

As informações de pagamento podem ser modificadas no modal de pagamento no arquivo `index.html`. Para integrar com um gateway de pagamento real, será necessário implementar a lógica de processamento no arquivo `script.js`.

## Otimizações Futuras

- Adicionar mais imagens do produto e resultados
- Implementar galeria de antes/depois
- Integrar com um sistema real de pagamento
- Adicionar seção de perguntas frequentes
- Implementar sistema de cupons de desconto

## Licença

Este projeto é propriedade da Adlux Cosméticos. Todos os direitos reservados.