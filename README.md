# WIP

# Project Guidelines

## Structure

### Components

Each **React** element which is purelly presentational and is used in multiple places should be placed in `/src/components` in own folder with component name(should be capitlized).

**Example of standard component directory structure:**

```
.
├── components
|  ├── Button
|  |  ├── Button.tsx
|  |  ├── Button.stories.tsx
|  |  ├── Button.test.tsx
|  |  ├── Button.styles.tsx
|  |  └── index.tsx
|  └── index.tsx
```

#### Guidelines:

- Should be documented using storybook
- Should export public elements by `index.tsx` from own directory
- Should re-export everything from component directory by `components/index.tsx`
- It's best practice to use hygen component generator for scaffolding
- If component gets big it might be worth to split `{name}.tsx` into multiple files and place them together in same component directory
- Should not be dependant on any contexts other than routing or theme (unless it's scoped context for feature such as forms)
- When styling always prefer values present in styled system over hardcoding

### Routes/Views

Views are grouped by feature into named modules (eg. user, admin, statistic, ...). Each module represents some sort of isolated feature scope (modules don't depend on each other).

**Example of standard routes directory structure:**

```
.
├── routes
|  ├── admin
|  |  ├── view
|  |  |  ├── View1
|  |  |  ├── View1
|  |  |  └── index.tsx
|  |  ├── slice
|  |  |  ├── user-selection
|  |  |  ├── sidebar
|  |  |  └── index.ts
|  |  ├── component
|  |  ├── Router.tsx
|  |  └── index.tsx
|  ├── user
|  |  ├── view
|  |  |  ├── View1
|  |  |  └── index.tsx
|  |  ├── slice
|  |  ├── component
|  |  ├── Router.tsx
|  |  └── index.tsx
|  ├── RootRouter.tsx
|  └── index.tsx
```

- **slice** - (TODO: Better description)redux module containing actions, reducers, and exporting them by `index.ts`. Slices on module level should be combined under module namespace
- **view** - everything which represents single page and is navigable is considered view. View is structured same way as **component**. All views are single used elements scoped to module in which they are placed
- **component** - components used only in specific module structured same way as global components

#### Guidelines:

- Always rexport relevant elements by index files
- All views have to be connected to module router which then is connected to RootRouter. It makes it easy to create module authorization, do code splitting
  and routing codegen

### Imports/Exports

- When importing from root directories always use absolute import `@/{name}`
- When importing styled-components default export always import from `styled-components/macro`
- When importing lingui always import from `@lingui/macro`
- When exporting anything which can be used in other places always use bundle export(index file)

# Codegen

Project uses **Hygen** for scaffolding. To get started install **hygen** globally using either npm or yarn. Then run **hygen** in terminal which will list all available generators. When running any generator you'll be provided with few generation options.

## Generators

- Component
  - [x] FC
  - [ ] Class
- Slice
- [x] Routing (components/views)

# Useful links

- Typesafe reducer/actions https://github.com/piotrwitek/typesafe-actions
- Typesafe react/redux https://github.com/piotrwitek/react-redux-typescript-guide, contains standard typed react patterns compatible with latest typescript versions
- React/Typescript cheatsheet https://github.com/sw-yx/react-typescript-cheatsheet
- Component testing with react-tesing-library https://react-testing-examples.com/

# TODO

- Finish codegen
- Project structure documentation
- Apollo
- Typing redux (global + module scoped slices)
