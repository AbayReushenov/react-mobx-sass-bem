# React + TypeScript + MobX + SASS (БЭМ) Boilerplate

Современный бойлерплейт для быстрого старта проектов с использованием React, TypeScript, MobX и методологии БЭМ для стилизации.

## 🎯 Цель

Быстрое создание новых проектов по методологии:
- **React** — компонентный подход
- **MobX** — управление состоянием
- **БЭМ** — методология именования CSS классов
- **SASS** — препроцессор стилей

## 🚀 Быстрый старт

```bash
# Клонирование
git clone <repository-url>
cd react-mobx-sass-bem

# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## 📁 Структура проекта

```
src/
├── components/          # Переиспользуемые компоненты
│   ├── Button/         # Пример компонента с БЭМ
│   └── Card/           # Сгенерированный блок
├── pages/              # Страницы приложения
│   ├── Home/           # Главная страница
│   └── NotFound/       # 404 страница
├── store/              # MobX сторы
│   └── AppStore.ts     # Основной стор приложения
├── styles/             # Глобальные стили
│   ├── _variables.scss # SCSS переменные
│   └── global.scss     # Глобальные стили
└── test/               # Настройки тестов
```

## 🎨 БЭМ методология

### Структура компонента
```
ComponentName/
├── ComponentName.tsx   # React компонент
└── ComponentName.scss  # Стили по БЭМ
```

### Именование классов
- **Блок**: `.component-name`
- **Элемент**: `.component-name__element`
- **Модификатор**: `.component-name--modifier`

### Пример
```scss
.card {
  &__content { }        // Элемент
  &--outlined { }       // Модификатор
}
```

## 🛠 Генератор компонентов

Создание нового БЭМ-блока:
```bash
npm run gen:block -- ComponentName
```

Генерирует:
- `src/components/ComponentName/ComponentName.tsx`
- `src/components/ComponentName/ComponentName.scss`

## 📦 MobX стор

```typescript
// src/store/AppStore.ts
class AppStore {
  title: string;
  clickCount: number;

  setTitle(newTitle: string) { }
  increment() { }
  reset() { }
}
```

## 🎯 Доступные скрипты

| Команда | Описание |
|---------|----------|
| `npm run dev` | Запуск dev-сервера (порт 3000) |
| `npm run build` | Production сборка |
| `npm run preview` | Предпросмотр билда |
| `npm run lint` | Проверка кода |
| `npm run lint:fix` | Автоисправление кода |
| `npm run format` | Форматирование Prettier |
| `npm run typecheck` | Проверка типов TypeScript |
| `npm run test` | Запуск тестов |
| `npm run test:watch` | Тесты в режиме watch |
| `npm run analyze` | Анализ размера бандла |
| `npm run gen:block` | Генератор БЭМ-блоков |

## 🧪 Тестирование

- **Vitest** — быстрый тест-раннер
- **@testing-library/react** — тестирование React компонентов
- **@testing-library/jest-dom** — дополнительные матчеры

```typescript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component />);
    expect(screen.getByText('text')).toBeInTheDocument();
  });
});
```

## 🎨 Стилизация

### SCSS переменные
```scss
// src/styles/_variables.scss
$primary-color: #007bff;
$text-color: #333;
$text-title: #222;
```

### Глобальные стили
```scss
// src/styles/global.scss
@use "modern-css-reset";
@use "./variables" as *;
```

### Автопрефиксер
PostCSS с Autoprefixer для автоматического добавления вендорных префиксов.

## 🔧 Конфигурация

### Алиасы импортов
```typescript
// @/ → src/
import { Component } from '@/components/Component';
```

### TypeScript
Строгая типизация с `strict: true` и современными настройками.

### ESLint + Prettier
Автоматическое форматирование и проверка кода.

### Husky + lint-staged
Git-хуки для автоматической проверки кода перед коммитом.

## 🌍 Переменные окружения

```bash
# .env
VITE_APP_TITLE=🚀 React + TS + MobX + SASS (БЭМ) Boilerplate
```

## 📊 Анализ бандла

```bash
npm run analyze
```

Генерирует `dist/stats.html` с визуализацией размера модулей.

## 🚀 CI/CD

GitHub Actions workflow:
- Линтинг кода
- Проверка типов
- Запуск тестов
- Сборка проекта
- Автоматический деплой на GitHub Pages

## 📚 Дополнительные возможности

- **React Router** — маршрутизация
- **Error Boundary** — обработка ошибок
- **Code Splitting** — ленивая загрузка компонентов
- **Bundle Analyzer** — анализ размера бандла
- **Modern CSS Reset** — сброс стилей браузера

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте ветку для фичи (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add amazing feature'`)
4. Отправьте в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

MIT License - см. файл [LICENSE](LICENSE) для деталей.

---

**Создано для быстрого старта проектов с React, MobX и БЭМ методологией** 🚀

**Live Demo**: [https://AbayReushenov.github.io/react-mobx-sass-bem/](https://AbayReushenov.github.io/react-mobx-sass-bem/)
