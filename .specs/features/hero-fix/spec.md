# Spec: Ajuste Visual da Seção Hero

## Requisitos
- **REQ-01**: A imagem `/images/bg-predios.jpg` deve ser exibida como fundo da seção Hero.
- **REQ-02**: A imagem deve preencher todo o container (object-cover) e ter opacidade reduzida para não comprometer o contraste do texto.
- **REQ-03**: A foto do profissional (`/images/imagem-fundador.png`) deve ser removida.
- **REQ-04**: O layout do texto deve ser ajustado para ocupar o espaço liberado, mantendo o alinhamento visual.

## Critérios de Aceitação
- [x] O componente `Hero` não contém a tag `img` ou `Image` com a fonte `imagem-fundador.png`.
- [x] O componente `Hero` contém uma tag `Image` com a fonte `bg-predios.jpg`.
- [x] A seção Hero possui o atributo `priority` na imagem de fundo para otimização de LCP.
- [x] O texto permanece legível em resoluções de desktop e mobile.
- [x] Testes automatizados confirmam a presença da imagem de fundo e a ausência da foto do profissional.
