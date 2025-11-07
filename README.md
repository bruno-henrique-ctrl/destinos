# 🧭 Plataforma de Destinos Turísticos

Este projeto é uma aplicação web desenvolvida com **Next.js**, criada para apresentar destinos turísticos, suas descrições, imagens, preços e promoções especiais.  
O objetivo é oferecer uma experiência de navegação rápida, acessível e visualmente atraente, com foco em **desempenho** e **boas práticas de desenvolvimento front-end**.

---

## ✈️ Funcionalidades

✅ Página inicial com destaques da semana  
✅ Página de ofertas e promoções  
✅ Lista completa de destinos  
✅ Página individual de cada viagem  
✅ Área de depoimentos de clientes  
✅ Componentes reutilizáveis e estilização modular com **CSS Modules**  
✅ Alta pontuação no **Lighthouse** (Desempenho, Acessibilidade, SEO e Boas Práticas)

---

## 🚀 Tecnologias Utilizadas

- **Next.js 14 (App Router)**
- **React**
- **TypeScript**
- **Next/Image** para otimização automática de imagens
- **CSS Modules** para isolamento de estilos
- **Lighthouse** para medição de performance e acessibilidade

---

## 📸 Comparação das Versões (Antes e Depois das Melhorias)

Abaixo, uma comparação entre a primeira versão (**print1 – desempenho menor**) e a versão otimizada (**print2 – desempenho máximo**).

### ⚠️ Antes (print1 – Desempenho 70)

**Pontuações:**
- Desempenho: 70  
- Acessibilidade: 96  
- Boas práticas: 78  
- SEO: 100  

**Problemas principais:**
- Imagens grandes e externas (carregadas via URLs do Bing) sem otimização.  
- Falta de uso completo do componente `<Image />` do Next.js para compressão e *lazy loading*.  
- Leve desequilíbrio visual entre os cards (espaçamento e proporções).  
- Carregamento mais lento e consumo maior de rede.  

🖼️ *Exemplo:*  

<img width="1920" height="1010" alt="print1" src="https://github.com/user-attachments/assets/4e208f16-9566-45d9-9cb0-fa87b674af0e" />

---

### ✅ Depois (print2 – Desempenho 100)

**Pontuações:**
- Desempenho: 100  
- Acessibilidade: 100  
- Boas práticas: 100  
- SEO: 100  

**Melhorias implementadas:**
- Conversão das imagens para formato `.webp`, hospedadas localmente em `/public/imgs`.  
- Uso de `<Image />` do Next.js com otimização automática e prioridade inteligente.  
- Aplicação de *lazy loading* em imagens secundárias.  
- CSS aprimorado com espaçamento uniforme e layout responsivo fluido.  
- Redução de scripts e recursos desnecessários no carregamento inicial.  

🖼️ *Exemplo:*  

<img width="1920" height="1038" alt="print2" src="https://github.com/user-attachments/assets/2e77beaa-7263-47b0-bfe4-5e86a4bdcd87" />

---

## 🎯 Resultado

A aplicação ficou **mais leve, rápida e responsiva**, alcançando **100% em todas as métricas do Lighthouse** e proporcionando uma **experiência de uso muito mais fluida e agradável**.

---

### 💡 Autor
Desenvolvido por [Seu Nome]  
📧 Contato: [seuemail@exemplo.com]  
🌐 Projeto educacional com foco em performance e boas práticas no Next.js.
