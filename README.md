# Портфолио

[Открыть сайт](https://fermer123.github.io/portfolio/)

## Стек

- React TypeScript
- Vite и Sass Modules
- i18next для переключения языков
- Playwright для браузерных smoke-тестов
- GitHub Pages для публикации

## Проверки перед публикацией

```sh
npm run typecheck
npm run lint
npm run spellcheck
npm run format:check
npm run test:e2e
npm run build
```

```sh
npm run optimize:images
```

## Публикация

При каждом push в `main` GitHub Actions запускает проверки. Если они проходят, сайт автоматически публикуется.

Для ручной публикации:

```sh
npm run deploy
```
