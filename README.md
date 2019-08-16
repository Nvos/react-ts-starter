## Structure

### Component

#### Overview

Each **React** element which is can be considered purely presentational and is used in multiple places should be placed in `/src/component` in own folder with component name(should be capitalized).

**Example of standard component structure:**

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
- Should not be dependent on any contexts other than routing or theme (unless it's scoped context for feature such as forms)
- When styling always prefer values present in styled system over hard coding
- **In some specific cases when we want to have component dependent on state coming from provider/store it's best practice to provide relevant data as props and create wrapping component and provide it inside container directory**

### Slice

#### Overview

Whole application state is stored globally, which is then split into smaller slices (slices can be on module level as well).

**Example of standard slice directory structure:**

```
.
├── slice
|  ├── admin
|  |  ├── admin.reducer.ts
|  |  ├── admin.action.ts
|  |  ├── admin.constant.ts
|  |  ├── admin.epic.ts
|  |  └── index.ts
|  ├── user
|  └── selector
└── index.ts
```

- **constant** - contains action type constants
- **action** - contains action definitions
- **reducer** - contains state definitions and action handling
- **epic** - contains logic for handling side effects (e.g. websocket/api communication)
- **selector(directory)** - specific directory which doesn't contain state slice but selectors from all slices from scope

#### Guidelines:

- Always rexport relevant elements by index files
- Always if possible use slice codegen for initial scaffolding
- If slice is inside module provide list of epics and object of reducers as params so it can be injected
- Update global state and action definitions by typescript augmentation
- When using outside of module (global views) use RootState state definition but when inside module use {module}State definitions and don't use slices from other modules

### Module

#### Overview

Views are grouped by feature into named modules (eg. user, admin, statistic, ...). Each module represents some sort of isolated feature scope (modules don't depend on each other and can use only global scope). Using modules provides possibility of app(lazy loading) and build(faster compilation as each module can be split into own app in future) optimization, better structure and easier code ownership.

**Example of standard module directory structure:**

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
|  ├── view
|  ├── RootRouter.tsx
|  └── index.tsx
```

- **component** - components used only in scope of this module. Directory is structured same way as global components
- **view** - everything which represents single page and is navigable is considered view. View is structured same way as **component**. All views are single used elements scoped to module in which they are placed
- **slice** - state management module representing small slice of global state
- **Router.tsx** - present under every module, contains navigation under this specific module (switching between views under module)
- **RootRouter.tsx** - main router(starting point of application) which can contain own navigation and navigation to specific module routers

#### Guidelines:

- Always re-xport relevant elements by index files
- All views have to be connected to module router which then is connected to RootRouter. It makes it easy to create module authorization, code splitting and routing codegen

### Directories

- **src/store** - root of state managament, responsible for global slices, setup of state management and state management utils
- **src/shared** - shared reusable functions such as api calls, services and utilities
- **src/test** - test utilities
- **src/theme** - theme definitions
- **src/components** - global components
- **src/container** - global containers(container is component which can be dependent on state coming from provider or store, it's good practice to make components not dependent on state to make testing easier but provide wrappers(containers) which provide state)
- **src/routes** - modules and routing
- **types** - global typescript definitions and augumentations
- **public** - standard files server after build, e.g. index.html which is starting point of application
- **cypress** - e2e test location
- **\_templates** - hygen codegen templates
- **\_storybook** - component documentation configuration

### Files

- **.eslintrc.js** - linter configuration
- **.eslintignore** - linter file/directory ignore
- **.hygen.js** - codegen configuration
- **.prettierrc** - formatter configuration
- **jest.config.js** - test configuration
- **i18n.ts** - translation configuration

### Overall

#### Global guideliness

- When exporting anything which can be used in other places always use bundle export(index file)
- Prefer scaffold using codegen
- When importing prefer to import using @/{name}, do not nest path using this type of import all relevant things should be re-exported using root directories
- When importing **styled-components** default export always import from `styled-components/macro`

# TODO

- [ ] (codegen) Navigation files
- [ ] (codegen) Slice initialization
- [ ] (e2e) Cypress + accessibility test using axe
- [ ] (example) Refactor example
