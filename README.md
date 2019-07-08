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

Project uses **Hygen** for scaffolding. To get started install **hygen** globally using either npm or yarn (**hygen should be installed after using setup.sh!**). Then run **hygen** in terminal which will list all available generators. When running any generator you'll be provided with generation options.

## Generators

- Component
  - [x] FC
  - [ ] Class
- Slice (inject + normal)
- [x] Routing (components/views)

# Getting started

Run setup.sh bash script, which will install commit convention, codegen tooling, then install dependencies by running **yarn**

# Worthwhile libraries

- Graphql
  - Apollo
  - Urql
  - Graphql code generator
- Websocket
  - Sockette
  - Redux-websocket (https://github.com/giantmachines/redux-websocket) - thought it is pretty easy to write own wrapper using sockette which might give more control
  - If using redux-observable or just rxjs there's websocket handling implemented https://rxjs.dev/api/webSocket/webSocket
- Hotkeys/shortcuts - https://github.com/greena13/react-hotkeys
- Select
  - (No text filter) https://github.com/benbowes/react-responsive-select#readme
  - (customizable) https://github.com/JedWatson/react-select
  - (not very customizable) https://github.com/react-component/select
- Modal
  - https://github.com/reactjs/react-modal
- Hight quality customizable components (can pick specific ones)
  - https://atlaskit.atlassian.com/packages
    - https://atlaskit.atlassian.com/packages/core/select
    - https://atlaskit.atlassian.com/packages/core/modal-dialog
    - https://atlaskit.atlassian.com/packages/core/drawer

# Useful links

- Typesafe reducer/actions https://github.com/piotrwitek/typesafe-actions
- Typesafe react/redux https://github.com/piotrwitek/react-redux-typescript-guide, contains standard typed react patterns compatible with latest typescript versions
- React/Typescript cheatsheet https://github.com/sw-yx/react-typescript-cheatsheet
- Component testing with react-tesing-library https://react-testing-examples.com/
- Good example of redux persisted error handling inside container/view (https://github.com/devhubapp/devhub/blob/master/packages/components/src/screens/LoginScreen.tsx)
- Modern ui inspiration
  - Stripe
  - Fullstory
  - https://medium.muz.li/30-handpicked-excellent-dashboards-347e2407a057

# TODO

- Finish codegen
- Project structure documentation
- Typing redux (global + module scoped slices + codegen)
- Authentication (create Private/Protected route component and introduce it to codegen options for view). To make it usable with multiple apis it should take function as param which checks for access permissions
