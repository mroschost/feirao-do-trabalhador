# Feirão do Trabalhador - 2ª Edição

Landing page do **Feirão do Trabalhador**, evento promovido pelo **ICDI** com apoio do **GDF**.  
15 a 19 de junho de 2026, das 8h às 19h, em frente ao Museu Nacional - Brasília.

## Tecnologias

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (animações)
- **Lucide React** (ícones)
- **React Helmet Async** (meta tags)

## Branches

| Branch | Conteúdo |
|--------|----------|
| `source` | Código fonte completo do projeto (React + Vite) |
| `main` | Build de produção (HTML, JS, CSS, assets) - pronto para deploy |

## Desenvolvimento local

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173`.

## Build de produção

```bash
npm run build
```

A saída vai para a pasta `dist/`.

## Deploy na Hostinger

Na pasta `public_html` do servidor:

```bash
git init
git remote add origin https://github.com/mroschost/feirao-do-trabalhador.git
git pull origin main
```

## Fluxo de trabalho

1. Desenvolva na branch `source`
2. Commit + push para `source`
3. Execute `npm run build`
4. Atualize a branch `main` com o conteúdo de `dist/`
5. Na Hostinger, execute `git pull origin main` dentro da `public_html`
