# Vento Clima — demonstração de landing page

Modelo **fictício**, compacto e responsivo, com nova identidade em verde-petróleo, lima e tons claros. Desenvolvido com HTML, CSS e JavaScript puro, sem dependências de build.

## Conteúdo

- `index.html` — estrutura, marca em SVG, apresentação, serviços, avaliações ilustrativas e chamada para orçamento.
- `styles.css` — estilo responsivo, ilustração CSS e animação contínua dos cartões de depoimentos.
- `script.js` — configura links de WhatsApp e do Perfil da Empresa no Google.

## Configurar antes de usar para uma empresa real

1. Abra `script.js` e informe `whatsappNumber` no formato **55 + DDD + número**, somente dígitos. Ex.: use o número real fornecido e autorizado pelo cliente. Deixando vazio, o botão exibe uma mensagem de configuração em vez de abrir um contato incorreto.
2. Informe `googleBusinessUrl` com o link **real** do Perfil da Empresa no Google.
3. Altere no `index.html` a marca, descrição, serviços e demais informações para corresponderem ao negócio.
4. **Importante:** a nota `4,9`, as estrelas e TODOS os depoimentos são **conteúdo ilustrativo/fictício**. Não publique esses dados como se fossem avaliações de clientes reais. Troque apenas por avaliações autênticas, verificadas e cujo uso seja permitido; atualize número, textos e fontes. Se não houver avaliações, remova a nota e os depoimentos.
5. Ajuste a declaração de privacidade e eventuais ferramentas de rastreamento se forem instaladas depois.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie `index.html`, `styles.css` e `script.js` para a **raiz** do repositório.
2. Acesse **Settings > Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**, branch `main`, pasta `/(root)`, e salve.
4. Aguarde a publicação e abra a URL fornecida em Pages.
5. Se o cliente tiver domínio próprio, configure-o em **Settings > Pages > Custom domain** e crie os registros DNS apropriados no provedor do domínio.

## Detalhes técnicos

- Estilo e ícones vetoriais em CSS/SVG: não depende de fotografias externas.
- Fontes opcionais hospedadas pelo Google Fonts, com fallbacks do sistema.
- Animação dos depoimentos pausa ao passar o mouse e respeita `prefers-reduced-motion`.
- Layout foi projetado para ocupar menos espaço vertical que um site institucional longo.

**Este site demonstra layout e funcionamento; não representa empresa, reputação ou avaliações existentes.**
