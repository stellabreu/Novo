# OnCall Solution — site

Site institucional da OnCall Solution: página inicial, página do Chatbot WhatsApp e política de privacidade. É um site estático (HTML, CSS e um pouco de JavaScript), sem servidor e sem banco de dados, pronto para publicar na Vercel.

## Antes de publicar: o que preencher

| O quê | Onde |
| --- | --- |
| Número do WhatsApp | `assets/js/main.js`, linha `whatsapp: "55DDDNUMERO"` (ex.: `5532999998888`) |
| Mensagem padrão do WhatsApp | `assets/js/main.js`, linha `mensagemPadrao` |
| Sua foto | Salve como `assets/img/stella.jpg` e siga o comentário na seção "Sobre" do `index.html` |
| Link do Instagram | Rodapé de `index.html` e `chatbot-whatsapp.html` (`https://instagram.com/`) |
| Razão social, CNPJ, e-mail e data | `privacidade.html`, nos campos entre colchetes |
| Nome do cliente no exemplo | `chatbot-whatsapp.html`, "Clínica [NOME]" |
| Preços dos pacotes | `chatbot-whatsapp.html`, seção Pacotes (valores do plano de negócio) |

Todo botão com `data-whatsapp` vira um link do WhatsApp com mensagem pronta. Para mudar a mensagem de um botão específico, use `data-msg="Sua mensagem"`.

## Estrutura

```
index.html               Página inicial
chatbot-whatsapp.html    Página do serviço de chatbot (/chatbot-whatsapp)
privacidade.html         Política de privacidade (/privacidade) — revisar com advogado
404.html                 Página de erro
assets/css/style.css     Estilos (cores e medidas do sistema de design da OnCall)
assets/js/main.js        Número do WhatsApp, menu do celular e ano do rodapé
assets/fonts/            Sora e DM Sans, hospedadas no próprio site (licença OFL)
assets/img/logo.svg      Logo (O preto com ponto verde)
favicon.svg, apple-touch-icon.png, og-image.png   Ícones e imagem de compartilhamento
vercel.json              URLs sem .html, cache e cabeçalhos de segurança
```

## Identidade visual

- Fundo branco `#ffffff`, texto preto `#0a0a0a`, cinza de apoio `#f5f5f4`.
- Verde `#16a34a` só no ponto de "online" (logo, etiquetas, botão do WhatsApp).
- Títulos em Sora, textos em DM Sans.

## Publicar na Vercel

1. Entre em [vercel.com](https://vercel.com) com a sua conta do GitHub.
2. Clique em **Add New… › Project** e importe o repositório `oncall-site`.
3. Em *Framework Preset*, deixe **Other**. Não precisa de comando de build.
4. Clique em **Deploy**. Em cerca de 1 minuto o site fica no ar em um endereço `*.vercel.app`.
5. Domínio próprio: em **Settings › Domains**, adicione o domínio (ex.: `oncallsolution.com.br`) e siga as instruções de DNS que a Vercel mostrar no seu registrador (Registro.br, por exemplo).

Depois disso, toda alteração enviada ao GitHub é publicada sozinha.

## Opcional

- **Estatísticas de visitas:** no painel da Vercel, ative *Analytics* no projeto (não usa cookies).
- **Google:** depois de ter o domínio, cadastre o site no Google Search Console e no Perfil da Empresa no Google com o endereço de Juiz de Fora.

## Ver o site no computador

Abra um terminal nesta pasta e rode `npx serve .` — o site abre em `http://localhost:3000`.
