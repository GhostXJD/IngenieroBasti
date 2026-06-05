# IngenieroBasti

Página web estática para Basti, celebrando su título de Ingeniero Civil en Biotecnología.

## Desarrollo

```bash
npm install     # Instalar dependencias
npm run dev     # Servidor de desarrollo
npm run build   # Build
npm run preview # Vista previa del build local
```

## Deploy

### Opción 1 — Manual (recomendada)

```bash
npm run deploy
```

Build + push automático a la rama `gh-pages` usando el paquete `gh-pages`.

### Opción 2 — Automático (GitHub Actions)

Push a `main` → el workflow despliega `dist/` en `gh-pages` automáticamente.

**Nota**: La primera vez, ve a Settings → Pages y selecciona "Deploy from a branch: gh-pages / / (root)".

## Personalizar contenido

Editar `src/data/content.js` — ahí están todos los textos, dedicatorias y referencias a imágenes.
