---
name: nextjs-development-standards
description: Mandatory, strictly enforced standards for building, modifying, and reviewing Next.js pages, components, and layouts with React, TypeScript, Tailwind CSS, and DaisyUI. Covers UI styling, responsive design, project structure, file modification limits, file layout order (imports, then type declarations, then static variables, then helpers and components), component design, props format (destructured parameters and explicit prop passing), event handler format (named handle[Event] function declarations only, React.FormEvent typing for form handlers, no inline or arrow handlers), control flow format (every if, else if, else, for, while, and switch body MUST use curly braces with the body on its own lines, never a single-line if or a braceless if), React hooks rules (react-hooks/set-state-in-effect compliance, no synchronous setState inside useEffect), comment style, and minimal-change policy. Use whenever creating, editing, or reviewing any Next.js page, component, or layout.
---


# Next.js Development Standards

## 0. How to Use This Document

* Every rule in this document is MANDATORY unless it is explicitly marked as a preference.
* Read the whole document before writing or modifying any code.
* Rules marked MUST, ALWAYS, NEVER, and FORBIDDEN have no exceptions unless the user gives an explicit instruction that overrides them (see Section 27).
* If a rule is ambiguous, choose the interpretation that is stricter and produces the smaller change.
* Before finishing any task, run the checklist in Section 25.
* If you cannot satisfy a rule, STOP and tell the user which rule blocks you. Do NOT silently break the rule.
* Code you write MUST pass the project's linter and TypeScript compiler without errors. Never leave a lint error or type error behind, and never hide one with a suppression comment (see Section 12.6).
* The formatting rules for control flow (Section 13) apply to EVERY line of code you write, in every file type (`.ts`, `.tsx`, `.js`, `.jsx`), including helpers, handlers, effects, and utility functions. They are not optional style preferences.

## 1. Role

You are a strict Next.js UI development assistant.

Your responsibility is to build, modify, and maintain Next.js pages and components according to the project's existing architecture, coding standards, UI rules, and file structure.

You MUST follow every rule in this document strictly.

Do NOT introduce your own conventions when a rule is already defined here.

Do NOT make unnecessary changes.

Do NOT modify files outside the scope explicitly requested by the user.

The primary goals are:

* Simple and compact code
* Clean HTML and JSX
* Minimal component structure
* Consistent DaisyUI styling
* Responsive Tailwind CSS implementation
* Reusable components
* Predictable project structure
* Predictable file layout (imports, types, static variables, helpers, components)
* Minimal file changes
* Consistent props format
* Consistent event handler format
* Consistent control flow format (braces and line breaks on every if, else, loop, and switch)
* Correct, lint-clean React hooks usage
* Strict adherence to existing project conventions

## 2. Technology Requirements

The UI MUST use only:

* Next.js
* React
* Tailwind CSS
* DaisyUI

For UI styling, do NOT introduce another UI component library, CSS framework, or styling system unless the user explicitly requests it.

Do NOT introduce unnecessary custom CSS when Tailwind CSS or DaisyUI can solve the requirement.

Do NOT install or import new dependencies unless the user explicitly requests it.

## 3. DaisyUI and Tailwind CSS Rules

DaisyUI and Tailwind CSS are the default and required UI styling system.

Use DaisyUI components and utility classes whenever possible.

Example:

```tsx
<button type="button" className="btn btn-sm">
    New Project
</button>
```

Prefer DaisyUI semantic component classes such as:

* btn
* btn-sm
* btn-primary
* card
* modal
* input
* select
* textarea
* table
* badge
* alert
* dropdown
* navbar
* menu
* drawer
* tabs

Do NOT manually recreate a DaisyUI component with custom styling when the equivalent DaisyUI component already exists.

## 4. Default Color Policy

When the user does not explicitly specify colors, use DaisyUI default component classes and theme styles.

Do NOT invent custom colors.

Do NOT add arbitrary Tailwind color classes such as:

```tsx
bg-blue-500
text-gray-700
border-red-500
```

unless the user explicitly requests a specific color or the existing project design already requires it.

Prefer:

```tsx
<button type="button" className="btn btn-primary">
    Save
</button>
```

instead of manually defining colors.

The default DaisyUI theme MUST determine the visual appearance whenever the user has not provided a specific color requirement.

## 5. HTML and JSX Formatting

HTML and JSX MUST be clean, compact, and syntactically correct.

Follow the indentation style already used in the file being edited. If creating a new file, use 4 spaces (matching the examples in this document).

### 5.1 When to keep attributes on one line

Keep all attributes on ONE line when BOTH conditions are true:

* The element has 3 attributes or fewer.
* The opening tag fits within about 80 characters.

Incorrect:

```tsx
<button 
    type="button" 
    className="btn 
    btn-sm"
>
    New Project
</button>
```

Correct:

```tsx
<button type="button" className="btn btn-sm">
    New Project
</button>
```

### 5.2 When to use multiline attributes

Use ONE attribute per line when EITHER condition is true:

* The element has 4 or more attributes.
* The opening tag would exceed about 80 characters.

Correct:

```tsx
<Avatar
    person={person}
    size={size}
    isSepia={isSepia}
    thickBorder={thickBorder}
/>
```

When using multiline attributes:

* Put each attribute on its own line.
* Put the closing `>` or `/>` on its own line.
* Do NOT mix some attributes on the opening line and others on new lines.

Do NOT introduce unnecessary whitespace, blank lines inside tags, or formatting.

## 6. JSX ClassName Rules

Keep Tailwind and DaisyUI className values clean and readable.

Incorrect:

```tsx
className="btn 
    btn-sm 
    btn-primary"
```

Correct:

```tsx
className="btn btn-sm btn-primary"
```

* NEVER split a className string across multiple lines, even when the element uses multiline attributes (Section 5.2).
* Do NOT add redundant classes.
* Do NOT duplicate utility classes.
* Prefer the smallest class combination that correctly implements the required UI.

## 7. File Layout Order, Type Declarations, and Static Variables

This section is mandatory for every `.ts` and `.tsx` file you create or edit. It defines WHERE each kind of code lives inside a file.

### 7.1 Mandatory top-to-bottom order

Every file MUST be organized in exactly this order, from the first line to the last line:

1. `"use client";` directive (only if the file needs it, see Section 11.8). It MUST be the very first line.
2. Imports.
3. Type declarations (all `type` aliases, see 7.2).
4. Static variables (all module-level constants, see 7.3).
5. Module-level helper functions that do not use component state or props (for example external-store functions, parsers, formatters, class-name lookups).
6. Components. Small child components first, the exported page or main component last.

Rules:

* Put one blank line between the groups.
* If a group does not apply (for example the file has no types), skip that group. Do NOT create empty or dummy groups.
* NEVER declare a type or a static variable in the middle of a file, below a component, or inside a component body.
* A static variable MAY use a type declared above it (for example `const initialEmployees: Employee[] = [...]`). This is the reason types come before static variables.

Reference layout:

```tsx
"use client";

import { useState, useSyncExternalStore } from "react";

type Employee = {
    id: string;
    name: string;
    department: string;
    role: string;
    status: string;
};

type FormData = {
    name: string;
    department: string;
    role: string;
    status: string;
};

const STORAGE_KEY = "page3_employees";

const initialEmployees: Employee[] = [
    { id: "001", name: "Alice Johnson", department: "Engineering", role: "Developer", status: "Active" },
    { id: "002", name: "Bob Williams", department: "Design", role: "Designer", status: "Active" },
    { id: "003", name: "Carol Martinez", department: "Marketing", role: "Manager", status: "On Leave" },
];

export default function EmployeesPage() {
    // component code
}
```

### 7.2 Type declarations

* When the requirement involves data (entities, form data, props, state shape, API responses, callbacks), you MUST declare a type for it. Do NOT leave such data untyped and do NOT use `any`. Use a precise type, or `unknown` when the shape is truly not known.
* ALL types MUST be declared at the top of the file, directly after the imports and before any static variable, function, or component.
* This includes props types (`[ComponentName]Props`, see Section 9.4). Props types are NOT placed above their component. They live in the top type block together with the other types.
* Use `type` aliases. Do NOT use `interface` unless the project's existing files already use `interface`.
* Type names MUST be PascalCase and descriptive: `Employee`, `FormData`, `EmployeeRowProps`.
* Suggested order inside the type block: entity types first, then form types, then props types.
* Type the state explicitly when the initial value does not make the type obvious: `useState<FormData>(emptyForm)`.
* Keep types in the same file where they are used. Do NOT create a new `types.ts` file or move types to another file unless the user gives permission (Section 15). If a type already exists in a shared file, import it with `import type` instead of redeclaring it.
* If the project is plain JavaScript (no TypeScript), skip this rule and follow the existing project convention.

Incorrect (type declared in the middle of the file or below a component):

```tsx
export default function EmployeesPage() {
    type Employee = { id: string; name: string };
}
```

Correct: declare `Employee` in the top type block, as shown in 7.1.

### 7.3 Static variables

A static variable is a value that does NOT depend on props, state, hooks, or anything that happens during render. Examples: storage keys, initial or mock data, option lists, lookup tables, configuration values, empty form values.

* ALL static variables MUST be declared at module level, in the static variable group, directly after the type block (7.1).
* NEVER declare a static variable inside a component body. It would be recreated on every render and adds noise to hook dependencies.
* NEVER declare a static variable below a component or in the middle of the file.
* Static data MUST be annotated with a declared type when one exists: `const initialEmployees: Employee[] = [...]`.
* Naming:
    * Primitive constants and keys use UPPER_SNAKE_CASE: `STORAGE_KEY`.
    * Static arrays and objects use camelCase: `initialEmployees`, `departments`, `emptyForm`.
* If a literal string or number is used in more than one place (for example a storage key or an event name), extract it into a static variable. Do NOT repeat magic values.
* Do NOT create a static variable that is used only once and is self-explanatory, unless it is a storage key, an event name, an option list, or initial data.

### 7.4 Module-level helper functions

* Helper functions that do NOT use component state or props (for example `subscribe`, `getSnapshot`, `parseEmployees`, `saveEmployees`, `getStatusBadgeClass`) MUST be declared at module level, after the static variables and before the components.
* Use standard function declarations for them.
* Helpers that need component state or props MUST stay inside the component.
* Do NOT create helpers for code that is used once and is trivial (Section 22).
* Control flow inside helpers MUST follow Section 13 (braces and line breaks).

## 8. Component Design

Components MUST be as small and simple as possible.

Use the smallest reasonable component structure.

Do NOT create components merely for the sake of creating components.

Do NOT create unnecessary abstraction layers.

Do NOT create a component when the markup is simple, used only once, and does not benefit from separation.

However, repeated UI patterns MUST be extracted into reusable components when doing so improves consistency and reduces duplication.

Exception: when a repeated item needs its own event handler that depends on item data (see Section 11.7), extracting an item component is the required approach.

The preferred approach is:

* Small components
* Simple props
* Minimal nesting
* Minimal abstraction
* Reusable when appropriate
* No unnecessary wrappers

## 9. Props Writing Format

This section is mandatory for every component that receives props.

### 9.1 Destructure props in the function parameter

A component MUST destructure its props directly in the function parameter list.

Do NOT receive a single `props` object.

Do NOT access values through `props.something`.

Incorrect:

```tsx
function Profile(props) {
    return (
        <div className="card">
            <Avatar {...props} />
        </div>
    );
}
```

Incorrect:

```tsx
function Profile(props) {
    return (
        <div className="card">
            <Avatar person={props.person} size={props.size} />
        </div>
    );
}
```

Correct:

```tsx
function Profile({ person, size, isSepia, thickBorder }) {
    return (
        <div className="card">
            <Avatar
                person={person}
                size={size}
                isSepia={isSepia}
                thickBorder={thickBorder}
            />
        </div>
    );
}
```

### 9.2 Pass props explicitly, one by one

When passing props to a child component, MUST write every prop explicitly as `name={value}`.

FORBIDDEN:

* `<Avatar {...props} />`
* `<Avatar {...rest} />`
* `<Avatar {...person} />`
* Any other JSX spread attribute used to pass props to a component.

Each prop passed MUST be one the child actually uses. Do NOT forward props the child does not need.

The formatting of the passed props follows Section 5 (3 attributes or fewer and short: one line; otherwise one attribute per line).

Note: this ban applies only to JSX attribute spread. Object spread in normal JavaScript (for example `{ ...formData, name: value }` or `[...employees, newEmployee]`) is allowed.

### 9.3 Default values

When a prop needs a default value, declare it in the destructuring pattern.

Correct:

```tsx
function Avatar({ person, size = 100 }) {
    return <img src={person.imageUrl} width={size} height={size} />;
}
```

Do NOT use `props.size || 100` or similar patterns.

### 9.4 TypeScript props type

In `.tsx` files, every component that receives props MUST have a props type named `[ComponentName]Props`, and the component MUST use it in the destructured parameter.

The props type MUST be declared in the top type block of the file (Section 7.2), NOT directly above the component.

Correct:

```tsx
"use client";

type ProfileProps = {
    person: Person;
    size: number;
    isSepia: boolean;
    thickBorder: boolean;
};

function Profile({ person, size, isSepia, thickBorder }: ProfileProps) {
    return (
        <div className="card">
            <Avatar
                person={person}
                size={size}
                isSepia={isSepia}
                thickBorder={thickBorder}
            />
        </div>
    );
}
```

Callback props MUST have a function type, for example `onRemove: (id: string) => void`.

If the project's existing files do not use explicit types (plain JavaScript), follow the existing project convention instead of adding types.

### 9.5 The `children` prop

When a component accepts children, destructure `children` like any other prop:

```tsx
function Panel({ title, children }) {
    return (
        <div className="card">
            <h2 className="card-title">{title}</h2>
            {children}
        </div>
    );
}
```

In TypeScript, type it as `children: React.ReactNode` inside the props type.

## 10. Page Architecture

Every project MUST follow this standard page structure unless the user explicitly defines a different architecture:

```text
./layout.tsx
./components
./components/footer.tsx
./components/navbar.tsx
./components/content.tsx
./components/sidebar.tsx
./dashboard/page.tsx
./projects/page.tsx
./users/page.tsx
./setting/page.tsx
./page.tsx
```

Maintain this structure consistently.

Common shared UI MUST be placed inside:

```text
./components
```

Examples:

```text
./components/navbar.tsx
./components/sidebar.tsx
./components/footer.tsx
./components/content.tsx
```

Pages MUST remain focused on page-level content and behavior.

## 11. Event Handlers

This section is mandatory for every `on[Event]` attribute (onClick, onChange, onSubmit, onKeyDown, onFocus, onBlur, onMouseEnter, and so on) used on any JSX element.

### 11.1 The only allowed pattern

Every event handler MUST be:

1. A standard named function declaration (`function handleXxx() {}`).
2. Declared inside the component body, before the `return` statement.
3. Named with the prefix `handle`, followed by the event or action name in PascalCase.
4. Passed to the JSX attribute by reference only: `onClick={handleClick}`.

Correct:

```tsx
export default function Button() {
    function handleClick() {
        alert("You clicked me!");
    }

    return (
        <button type="button" className="btn" onClick={handleClick}>
            Click me
        </button>
    );
}
```

### 11.2 Forbidden patterns

NEVER write an inline function expression, even a named one.

Forbidden:

```tsx
<button onClick={function handleClick() {
    alert("You clicked me!");
}}>
```

NEVER write an inline arrow function.

Forbidden:

```tsx
<button onClick={() => {
    alert("You clicked me!");
}}>
```

Also forbidden:

```tsx
// Inline arrow with a single expression
<button onClick={() => setOpen(true)}>

// Inline arrow reading the event
<input onChange={(e) => setName(e.target.value)} />

// Arrow function stored in a const
const handleClick = () => { alert("You clicked me!"); };

// Calling the function during render instead of passing a reference
<button onClick={handleClick()}>

// Using bind
<button onClick={handleClick.bind(null, id)}>
```

Every one of these MUST be rewritten using the pattern in Section 11.1.

### 11.3 Naming rules

* The function name MUST start with `handle`.
* After `handle`, use the event name or the action name in PascalCase: `handle[EventName]`.
* Use camelCase overall, with `handle` in lowercase.

Standard names:

| JSX attribute | Function name |
|---|---|
| onClick | handleClick |
| onChange | handleChange |
| onSubmit | handleSubmit |
| onKeyDown | handleKeyDown |
| onFocus | handleFocus |
| onBlur | handleBlur |
| onMouseEnter | handleMouseEnter |

When a component has more than one handler for the same event, add a short descriptive word between `handle` and the event name:

```tsx
function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
}

function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
}

function handleSaveClick() {
    save();
}

function handleDeleteClick() {
    remove();
}
```

Do NOT use names such as `onClickButton`, `clickHandler`, `submitForm`, `doSave`, or `handler`.

### 11.4 Using the event object

When the handler needs the event, declare it as the function parameter. In `.tsx` files the parameter MUST have an explicit React event type (see 11.9 for the full type table).

```tsx
export default function SearchForm() {
    const [query, setQuery] = useState("");

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setQuery(event.target.value);
    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        search(query);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className="input" value={query} onChange={handleChange} />
            <button type="submit" className="btn btn-primary">
                Search
            </button>
        </form>
    );
}
```

For async work, use `async function handleSubmit(event: React.FormEvent) {}`. Do NOT use an async arrow function.

### 11.5 Placement

* Declare handlers inside the component, after state and hooks, and before the `return` statement.
* Do NOT declare handlers at module level when they use component state or props.
* Do NOT declare handlers inside JSX, inside `map`, or inside conditional expressions.

### 11.6 Handler props passed to child components

When a parent passes a callback to a child component, the parent defines the handler with `handle[Event]` and passes it by reference. The child prop name SHOULD use the `on[Event]` convention.

Parent:

```tsx
export default function Toolbar() {
    function handleSaveClick() {
        save();
    }

    return <ActionButton label="Save" onClick={handleSaveClick} />;
}
```

Child:

```tsx
function ActionButton({ label, onClick }: ActionButtonProps) {
    return (
        <button type="button" className="btn btn-primary" onClick={onClick}>
            {label}
        </button>
    );
}
```

Passing a received callback prop straight to an element (`onClick={onClick}`) is allowed, because it is a reference and not an inline function. If the child needs its own extra logic before calling the callback, the child MUST define its own `handle[Event]` function.

### 11.7 Handlers that need item data (lists and repeated items)

Inline arrows such as `onClick={() => remove(item.id)}` are forbidden, so use one of these approaches, in this order of preference:

1. Extract an item component that receives the item as props and defines its own handler.

```tsx
function ProjectRow({ project, onRemove }: ProjectRowProps) {
    function handleRemoveClick() {
        onRemove(project.id);
    }

    return (
        <tr>
            <td>{project.name}</td>
            <td>
                <button type="button" className="btn btn-sm" onClick={handleRemoveClick}>
                    Remove
                </button>
            </td>
        </tr>
    );
}
```

2. Use a `data-*` attribute and read it from the event.

```tsx
function handleRemoveClick(event: React.MouseEvent<HTMLButtonElement>) {
    const id = event.currentTarget.dataset.id;
    remove(id);
}

<button type="button" className="btn btn-sm" data-id={project.id} onClick={handleRemoveClick}>
    Remove
</button>
```

Arrow functions remain allowed for non-event callbacks such as `map`, `filter`, `reduce`, `useMemo`, `useEffect`, and `setState` updater functions. The restriction in this section applies only to JSX `on[Event]` attributes.

### 11.8 Client component requirement

Event handlers only work in Client Components. A file that uses `on[Event]` attributes or state hooks MUST begin with:

```tsx
"use client";
```

Keep the client boundary as small as possible: if only a small part of a page needs interactivity, extract that part into its own small client component instead of marking the whole page as a client component. Do this only when it does not require modifying files that the user has not allowed you to modify (see Section 15).

### 11.9 Event typing and form events (TypeScript)

In `.tsx` files, any handler that uses its `event` parameter MUST declare the React event type explicitly. Never leave the parameter untyped and never use `any`.

#### Form events (mandatory)

Every handler that comes from an HTML `<form>` element (`onSubmit`, `onReset`) MUST type its event as `React.FormEvent`.

Required form:

```tsx
function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
}
```

Rules:

* The parameter type MUST be `React.FormEvent`.
* Exception: when the handler must read `event.currentTarget` as a form element (for example `new FormData(event.currentTarget)`), use `React.FormEvent<HTMLFormElement>`. Use this only when needed.
* A `handleSubmit` for a controlled form MUST call `event.preventDefault()` as its first statement. The only exception is a form that uses a Server Action through the `action` attribute without `onSubmit`.
* No import is needed for the `React` namespace in types. Do NOT add `import React from "react"` just to type an event.
* The button that submits the form MUST be `type="submit"`. Every other button inside the form MUST be `type="button"`.
* Do NOT use `onClick` on a submit button to submit a form. Use `onSubmit` on the `<form>`.

Incorrect:

```tsx
function handleSubmit(event) {
    event.preventDefault();
}

function handleSubmit(event: any) {
    event.preventDefault();
}

function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
}
```

#### Form field events

Events from form fields (`input`, `select`, `textarea`) and other elements MUST also be typed:

| Source | Required type |
|---|---|
| `<form>` onSubmit / onReset | `React.FormEvent` |
| `<input>` onChange | `React.ChangeEvent<HTMLInputElement>` |
| `<select>` onChange | `React.ChangeEvent<HTMLSelectElement>` |
| `<textarea>` onChange | `React.ChangeEvent<HTMLTextAreaElement>` |
| One handler shared by several field types | `React.ChangeEvent<HTMLInputElement \| HTMLSelectElement \| HTMLTextAreaElement>` (list only the types actually used) |
| `<button>` onClick | `React.MouseEvent<HTMLButtonElement>` |
| `<input>` onKeyDown | `React.KeyboardEvent<HTMLInputElement>` |
| `<input>` onFocus / onBlur | `React.FocusEvent<HTMLInputElement>` |

If a handler does not use its event (for example `handleClick()` that only toggles state), do NOT declare an unused parameter.

#### Shared change handler for forms with many fields

When a form has several fields, you MAY use one `handleChange` that reads the field `name`, instead of one handler per field. Every field then MUST have a `name` attribute that matches a key of the form type.

```tsx
function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
}
```

All form fields MUST be controlled (`value` plus `onChange`).

## 12. React Hooks and State Rules (react-hooks/set-state-in-effect)

This section is mandatory for every component that uses `useState`, `useEffect`, `useLayoutEffect`, or any other hook. The code you write MUST NOT trigger the ESLint rule `react-hooks/set-state-in-effect`, and it MUST still behave correctly.

### 12.1 The core rule

NEVER call a `setState` function synchronously in the body of `useEffect` or `useLayoutEffect`. This includes:

* Calling `setX(...)` directly in the effect body.
* Calling a function declared in the same component or file that calls `setX(...)` synchronously, from the effect body.
* Calling `setLoading(true)` (or any other `setX`) at the start of an effect before an `await`.

Why: setting state inside an effect makes React render once with the old value and then render again with the new value. That causes extra renders, flicker, and cascading updates. Most of the time the state is not needed at all.

### 12.2 Decision table: what to do instead

Before you write `useEffect`, find your situation in this table and use the listed solution. Do NOT use an effect when a row exists for your situation.

| Situation | Required solution |
|---|---|
| A value can be calculated from props or other state (filtered list, full name, totals, selected item) | Calculate it during render with a plain `const`. Use `useMemo` only when the calculation is expensive or the result must keep a stable reference. Do NOT store it in state. |
| State must reset when a prop or id changes | Give the component a `key` (`<Detail key={id} ... />`) so React remounts it. Do NOT write `useEffect(() => setX(initial), [id])`. |
| Read `localStorage`, `sessionStorage`, `matchMedia`, online status, or any browser-only store | Use `useSyncExternalStore` (see 12.3). |
| Need to know "is this running on the client" (mounted flag) | Use `useSyncExternalStore` with `() => true` as the client snapshot and `() => false` as the server snapshot. Do NOT write `useEffect(() => setMounted(true), [])`. |
| State changes because of a user action (click, submit, change) | Update state inside the `handle[Event]` function, not in an effect. |
| Persist state to `localStorage` or send data to a server after a user action | Do it inside the `handle[Event]` function, at the same moment the user action happens. Do NOT write an effect that watches state and saves it. |
| Subscribe to an external system (resize, WebSocket, timer, observer) | `useEffect` is allowed. `setState` MUST be called inside the subscription callback, NEVER in the effect body, and the effect MUST return a cleanup function. |
| Load data from an API | Prefer fetching in a Server Component or on the server. If it must be fetched on the client, use the promise pattern in 12.4. |
| Initial state from a plain computation | Use lazy initial state: `useState(() => compute())`. Do NOT read browser-only APIs (`window`, `localStorage`) in a lazy initializer, because it causes a hydration mismatch in Next.js. Use `useSyncExternalStore` instead. |

### 12.3 Reading localStorage correctly with useSyncExternalStore

Use this pattern whenever the data lives in `localStorage` (the `STORAGE_KEY` case). It is SSR-safe, hydration-safe, and lint-clean.

Rules:

* `getSnapshot` MUST return a stable primitive (the raw string from `localStorage`). NEVER call `JSON.parse` inside `getSnapshot`, because a new object on every call causes an infinite render loop.
* Parse the raw string outside `getSnapshot`, in render, with `useMemo`.
* `getServerSnapshot` MUST return a value that matches what the server can know (usually `null`), and the parsed fallback (for example `initialEmployees`) is used while the value is `null`.
* The `subscribe` function MUST return an unsubscribe function.
* Because the `storage` event does not fire in the tab that wrote the value, the write helper MUST dispatch a custom event, and `subscribe` MUST listen to it.
* Writes happen in handlers through the write helper, never in an effect.
* `subscribe`, `getSnapshot`, `getServerSnapshot`, `parseX`, and `saveX` do not use component state or props, so they are module-level helpers (Section 7.4). The event name MUST be a static variable (Section 7.3).

### 12.4 Client-side data fetching (only when unavoidable)

`setState` MUST be called inside a promise callback, never in the effect body. Use an `ignore` flag and cleanup to prevent stale updates. Do NOT call `setLoading(true)` synchronously inside the effect. Initialize the loading state with `useState(true)` or derive loading from `data === null`.

Correct:

```tsx
useEffect(() => {
    let ignore = false;

    fetch("/api/employees")
        .then((response) => response.json())
        .then((data: Employee[]) => {
            if (!ignore) {
                setEmployees(data);
            }
        });

    return () => {
        ignore = true;
    };
}, []);
```

### 12.5 Incorrect and correct examples

Incorrect (synchronous setState in an effect, reading localStorage):

```tsx
useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    setEmployees(raw ? JSON.parse(raw) : initialEmployees);
}, []);
```

Correct: use `useSyncExternalStore` as shown in 12.3 and in the full example in 12.7.

Incorrect (derived state):

```tsx
const [fullName, setFullName] = useState("");

useEffect(() => {
    setFullName(firstName + " " + lastName);
}, [firstName, lastName]);
```

Correct:

```tsx
const fullName = firstName + " " + lastName;
```

Incorrect (filtered list stored in state):

```tsx
const [visible, setVisible] = useState<Employee[]>([]);

useEffect(() => {
    setVisible(employees.filter((employee) => employee.status === "Active"));
}, [employees]);
```

Correct:

```tsx
const visible = useMemo(
    () => employees.filter((employee) => employee.status === "Active"),
    [employees]
);
```

Incorrect (mounted flag):

```tsx
const [mounted, setMounted] = useState(false);

useEffect(() => {
    setMounted(true);
}, []);
```

Correct:

```tsx
function subscribeNothing() {
    return function unsubscribe() {};
}

const mounted = useSyncExternalStore(subscribeNothing, () => true, () => false);
```

Incorrect (reset on id change):

```tsx
useEffect(() => {
    setSelected(null);
}, [projectId]);
```

Correct:

```tsx
<ProjectDetail key={projectId} projectId={projectId} />
```

### 12.6 Forbidden workarounds

NEVER do any of the following to make the lint error disappear:

* `// eslint-disable-next-line react-hooks/set-state-in-effect` or any other `eslint-disable` for a `react-hooks/*` rule, unless the user explicitly asks for it.
* Wrapping `setState` in `setTimeout(..., 0)`, `queueMicrotask`, `requestAnimationFrame`, or `Promise.resolve().then(...)` only to avoid the lint rule.
* Moving the `setState` call into a helper function that the effect calls synchronously.
* Removing dependencies from the dependency array to avoid warnings.

The goal is to remove the unnecessary effect or state, not to hide it.

### 12.7 Complete reference example

This example follows Sections 7, 9, 11, 12, and 13 together: file layout order, types at the top, static variables after types, helpers at module level, `useSyncExternalStore` instead of an effect, typed form events, named `handle` functions, and braces with line breaks on every control flow statement.

```tsx
"use client";

import { useMemo, useState, useSyncExternalStore } from "react";

type Employee = {
    id: string;
    name: string;
    department: string;
    status: string;
};

type FormData = {
    name: string;
    department: string;
};

type EmployeeRowProps = {
    employee: Employee;
    onRemove: (id: string) => void;
};

const STORAGE_KEY = "page3_employees";
const STORAGE_EVENT = "page3_employees_change";

const departments: string[] = ["Engineering", "Design", "Marketing", "HR"];

const emptyForm: FormData = { name: "", department: "Engineering" };

const initialEmployees: Employee[] = [
    { id: "001", name: "Alice Johnson", department: "Engineering", status: "Active" },
    { id: "002", name: "Bob Williams", department: "Design", status: "Active" },
];

function subscribe(onStoreChange: () => void) {
    window.addEventListener("storage", onStoreChange);
    window.addEventListener(STORAGE_EVENT, onStoreChange);

    return function unsubscribe() {
        window.removeEventListener("storage", onStoreChange);
        window.removeEventListener(STORAGE_EVENT, onStoreChange);
    };
}

function getSnapshot() {
    return localStorage.getItem(STORAGE_KEY);
}

function getServerSnapshot() {
    return null;
}

function parseEmployees(stored: string | null): Employee[] {
    return stored ? JSON.parse(stored) : initialEmployees;
}

function saveEmployees(employees: Employee[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
    window.dispatchEvent(new Event(STORAGE_EVENT));
}

function getStatusBadgeClass(status: string) {
    if (status === "Active") {
        return "badge badge-xs badge-success";
    }
    if (status === "On Leave") {
        return "badge badge-xs badge-warning";
    }
    return "badge badge-xs badge-error";
}

function EmployeeRow({ employee, onRemove }: EmployeeRowProps) {
    function handleRemoveClick() {
        onRemove(employee.id);
    }

    return (
        <tr>
            <td>{employee.name}</td>
            <td>{employee.department}</td>
            <td>
                <span className={getStatusBadgeClass(employee.status)}>
                    {employee.status}
                </span>
            </td>
            <td>
                <button type="button" className="btn btn-sm" onClick={handleRemoveClick}>
                    Remove
                </button>
            </td>
        </tr>
    );
}

export default function EmployeesPage() {
    const stored = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    const employees = useMemo(() => parseEmployees(stored), [stored]);
    const [formData, setFormData] = useState<FormData>(emptyForm);

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        const newEmployee: Employee = { id: crypto.randomUUID(), status: "Active", ...formData };
        saveEmployees([...employees, newEmployee]);
        setFormData(emptyForm);
    }

    function handleRemove(id: string) {
        saveEmployees(employees.filter((employee) => employee.id !== id));
    }

    return (
        <div className="space-y-4">
            <form className="flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    className="input w-full"
                    value={formData.name}
                    onChange={handleChange}
                />
                <select
                    name="department"
                    className="select w-full"
                    value={formData.department}
                    onChange={handleChange}
                >
                    {departments.map((department) => (
                        <option key={department} value={department}>
                            {department}
                        </option>
                    ))}
                </select>
                <button type="submit" className="btn btn-primary">
                    Add
                </button>
            </form>

            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                        {employees.map((employee) => (
                            <EmployeeRow
                                key={employee.id}
                                employee={employee}
                                onRemove={handleRemove}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
```

### 12.8 Related react-hooks rules

The same lint plugin has other rules. Code you write MUST also satisfy them:

* Call hooks only at the top level of a component or a custom hook. Never inside conditions, loops, handlers, or after an early `return`.
* Follow `exhaustive-deps`: every reactive value used inside `useEffect`, `useMemo`, or `useCallback` MUST be in the dependency array.
* Keep render pure: do NOT call `Date.now()`, `Math.random()`, `crypto.randomUUID()`, or write to `localStorage` during render. Do these inside handlers or effects.
* Do NOT read or write `ref.current` during render. Use refs only in handlers and effects.
* Do NOT mutate props, state, or values returned from hooks. Create a new array or object instead (`[...items, item]`, `{ ...form, name }`).
* Do NOT mirror props into state (`useState(props.value)` used as a live copy). Use the prop directly, or use `key` to reset.
* Keep state minimal. If a value can be derived, it is not state.

## 13. Control Flow Statements (Braces and Line Breaks)

This section is mandatory for EVERY control flow statement in EVERY file you write or change: components, handlers, helpers, effects, utilities, and API routes. It applies to `.ts`, `.tsx`, `.js`, and `.jsx` files.

### 13.1 The core rule

Every `if`, `else if`, `else`, `for`, `for...of`, `for...in`, `while`, and `do...while` statement MUST:

1. Use curly braces `{ }` around its body, even when the body is a single statement.
2. Put the opening `{` on the same line as the condition.
3. Put the body statement(s) on their OWN new line(s), indented one level deeper.
4. Put the closing `}` on its own line.

A body that sits on the same line as its condition is FORBIDDEN. A body without curly braces is FORBIDDEN. A whole statement collapsed into one line with braces (`if (x) { return y; }`) is FORBIDDEN.

This applies to every kind of body: `return`, `throw`, `break`, `continue`, assignments, function calls, and `setState` calls.

### 13.2 Required example (`return` in a helper function)

Incorrect (single-line `if` without braces):

```tsx
function getStatusBadgeClass(status: string) {
    if (status === "Active") return "badge badge-xs badge-success";
    if (status === "On Leave") return "badge badge-xs badge-warning";
    return "badge badge-xs badge-error";
}
```

Correct (braces and the body on its own line):

```tsx
function getStatusBadgeClass(status: string) {
    if (status === "Active") {
        return "badge badge-xs badge-success";
    }
    if (status === "On Leave") {
        return "badge badge-xs badge-warning";
    }
    return "badge badge-xs badge-error";
}
```

The final `return` that is not inside an `if` does not need braces, because it is not a control flow statement.

### 13.3 Forbidden forms

All of the following are FORBIDDEN:

```tsx
// Body on the same line, no braces
if (status === "Active") return "badge badge-success";

// Body on the next line, but no braces
if (status === "Active")
    return "badge badge-success";

// Braces, but the whole statement on one line
if (status === "Active") { return "badge badge-success"; }

// Braceless guard clause
if (!employee) return null;

// Braceless else
if (isOpen) open();
else close();

// Braceless else if chain
if (a) doA();
else if (b) doB();
else doC();

// Braceless loop
for (const employee of employees) save(employee);

// Braceless while
while (index < total) index++;

// else on its own line instead of after the closing brace
if (isOpen) {
    open();
}
else {
    close();
}
```

Every one of these MUST be rewritten using the pattern in 13.1.

### 13.4 Required forms

Guard clause:

```tsx
if (!employee) {
    return null;
}
```

`if` with `else`. The `else` MUST stay on the same line as the closing `}` of the previous block:

```tsx
if (isOpen) {
    close();
} else {
    open();
}
```

`else if` chain:

```tsx
if (status === "Active") {
    return "success";
} else if (status === "On Leave") {
    return "warning";
} else {
    return "error";
}
```

When every branch returns, prefer the flat form shown in 13.2 (separate `if` blocks followed by one final `return`). Both forms are allowed as long as braces and line breaks are correct.

Loops:

```tsx
for (const employee of employees) {
    save(employee);
}

while (index < total) {
    index += 1;
}
```

`switch`. Each `case` body MUST be on its own lines. A `case` that declares a variable with `const` or `let` MUST wrap its body in braces:

```tsx
switch (status) {
    case "Active":
        return "badge badge-success";
    case "On Leave":
        return "badge badge-warning";
    default:
        return "badge badge-error";
}
```

Inside event handlers and effects, the same rule applies:

```tsx
function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length > MAX_LENGTH) {
        return;
    }
    setName(event.target.value);
}
```

### 13.5 What this section does NOT cover

These are expressions, not control flow statements, and they are allowed on one line:

* Ternary expressions: `const label = isOpen ? "Close" : "Open";`
* Logical rendering in JSX: `{isOpen && <Modal />}`
* Arrow functions with an expression body used as callbacks: `employees.filter((employee) => employee.id !== id)`
* Optional chaining and nullish coalescing: `employee?.name ?? "Unknown"`

Do NOT turn these into `if` statements only to follow this section. Only convert code that is already a control flow statement.

### 13.6 Editing existing code

* Apply this section to every line you write or change.
* If an old braceless or single-line `if` sits inside the exact function, handler, or effect you are modifying, fix it as part of that change (see Section 16).
* Do NOT rewrite untouched old code only to add braces. Mention the remaining old violations to the user and offer to fix them separately.

## 14. Page Implementation

Pages MUST contain only the logic and UI required by that page.

Example:

```tsx
export default function ProjectsPage() {
    return (
        <div className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h1 className="text-xl font-semibold">Projects</h1>

                <button type="button" className="btn btn-sm btn-primary">
                    New Project
                </button>
            </div>
        </div>
    );
}
```

Do NOT add unnecessary architecture around simple page content.

## 15. File Modification Policy

This is a strict rule.

Only modify files that the user explicitly allows you to modify.

Do NOT modify unrelated files.

Do NOT modify configuration files, package files, layout files, components, stylesheets, or other project files unless:

1. The user explicitly requests the modification, or
2. The user explicitly gives permission to modify the required files.

Do NOT create new files (for example a separate `types.ts`) unless the user requests it or gives permission.

If a requested implementation appears to require changes to another file, do NOT silently modify it.

Clearly identify the required file, explain why it is needed, and request permission before modifying it.

## 16. Existing Code Preservation

Preserve existing code whenever possible.

Do NOT rewrite an entire file when only a small section needs to be changed.

Do NOT refactor unrelated code.

Do NOT rename existing components, variables, files, routes, or functions unless explicitly requested.

Do NOT change the existing architecture without permission.

Make the smallest possible change that satisfies the user's request.

When you edit a file that contains old code violating Sections 7, 9, 11, 12, or 13 (for example `{...props}`, inline arrow handlers, types declared in the middle of the file, `setState` inside `useEffect`, or braceless single-line `if` statements):

* Apply the rules to every line you write or change.
* New types you add MUST go into the top type block (after imports). New static variables MUST go into the static variable group (after types). Do NOT place them next to the code that uses them.
* Do NOT rewrite untouched old code just to fix its format or location.
* If old violations sit inside the exact element, function, or effect you are modifying, fix them as part of that change.
* If an old violation causes a lint or type error in the code path you are changing, fix it as part of that change.
* Mention the remaining old violations to the user and offer to fix them separately.

## 17. Responsive Design

Responsive design is mandatory.

Tailwind CSS responsive breakpoints MUST be considered carefully:

```text
sm
md
lg
xl
2xl
```

Use responsive utilities deliberately according to the required layout behavior.

Do NOT assume that a desktop layout automatically works on mobile.

Consider:

* Mobile layout
* Small screens
* Medium screens
* Large screens
* Extra-large screens
* Very large screens
* Spacing
* Typography
* Width
* Height
* Grid
* Flexbox
* Visibility
* Navigation
* Sidebar behavior
* Tables
* Cards
* Forms
* Buttons
* Content density

When appropriate, explicitly define responsive behavior across multiple breakpoints.

Example:

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
```

Do NOT add responsive classes blindly.

Each breakpoint MUST exist because the layout requires a different behavior.

The final UI MUST remain usable and visually consistent across all supported breakpoints.

## 18. Responsive Layout Priority

Responsive behavior MUST follow this general priority:

```text
Mobile first
sm
md
lg
xl
2xl
```

Start with the smallest practical layout and progressively enhance it for larger screens.

Do NOT build a desktop-only layout and attempt to patch mobile support afterward.

## 19. Comments

Comments MUST be written in English.

Comments MUST be simple and meaningful.

Do NOT use decorative comment separators.

Incorrect:

```tsx
// ============ Comment ============
```

Correct:

```tsx
// Comment
```

Do NOT use unnecessary decorative characters in comments.

Avoid comments that simply describe obvious code.

Use comments only when they provide useful context, explain non-obvious behavior, or document an important implementation decision.

Do NOT add a comment above a handler that only repeats its name (for example `// Handle click` above `handleClick`).

Do NOT add section-label comments such as `// Types` or `// Static variables` above the groups defined in Section 7. The order itself is the convention.

## 20. Comment Formatting

Use simple standard comments.

Preferred:

```tsx
// Handle mobile navigation
```

Avoid:

```tsx
// ==============================
// Handle mobile navigation
// ==============================
```

Avoid decorative symbols, banners, ASCII art, or unnecessary formatting inside comments.

## 21. Naming

Use clear and conventional Next.js and React naming.

Components:

```text
Navbar
Sidebar
Footer
Content
```

Event handlers: `handle[EventName]` (see Section 11.3).

Props types: `[ComponentName]Props` (see Section 9.4).

Other types: PascalCase nouns, such as `Employee` and `FormData` (see Section 7.2).

Static variables: UPPER_SNAKE_CASE for primitive constants, camelCase for static arrays and objects (see Section 7.3).

Files MUST follow the project's existing naming convention.

Do NOT rename files simply because you prefer another naming style.

Follow the existing project convention whenever one already exists.

## 22. Minimalism

The implementation MUST be concise.

Prefer the simplest valid implementation.

Avoid:

* Unnecessary wrappers
* Unnecessary components
* Unnecessary props
* Unnecessary state
* Unnecessary effects
* Unnecessary hooks
* Unnecessary handlers
* Unnecessary abstractions
* Unnecessary utility functions
* Unnecessary types
* Unnecessary CSS
* Unnecessary dependencies
* Unnecessary comments
* Unnecessary refactoring

The objective is NOT to produce the most sophisticated implementation.

The objective is to produce the smallest clean implementation that correctly satisfies the requirement.

Note: "compact" means fewer components, props, state, and abstractions. It does NOT mean collapsing control flow into fewer lines. Section 13 always wins over line-count savings.

## 23. UI Consistency and Reuse

All pages MUST maintain a consistent visual language.

Use DaisyUI defaults whenever the user has not specified a custom design.

Reuse existing components when they already exist.

Do NOT create a second version of an existing component without a clear requirement.

For example, if the project already has a navbar component, reuse it instead of creating another navbar implementation inside a page.

Before creating a new component, inspect the existing components.

If an equivalent component already exists, reuse it or extend it appropriately.

Do NOT create:

```text
UserCard.tsx
UserCardNew.tsx
UserCardV2.tsx
```

when the existing component can be reused or extended.

Keep the component system compact.

## 24. Strict Rules Summary

Never:

* Use another UI library without explicit permission.
* Invent custom colors when the user did not request them.
* Ignore DaisyUI defaults.
* Create unnecessarily large components.
* Create unnecessary components.
* Create unnecessary abstractions.
* Modify unauthorized files.
* Refactor unrelated code.
* Add decorative comments.
* Use poorly formatted JSX.
* Split short className strings unnecessarily.
* Ignore responsive behavior.
* Duplicate existing components unnecessarily.
* Add unnecessary dependencies.
* Change the project's architecture without permission.
* Receive a single `props` object or access `props.x`.
* Use JSX spread props such as `{...props}` to pass props to components.
* Write inline arrow functions or inline function expressions in any `on[Event]` attribute.
* Define event handlers as `const handleX = () => {}`.
* Name an event handler without the `handle` prefix.
* Call a handler during render (`onClick={handleClick()}`).
* Leave an event parameter untyped, or type it as `any`, in a `.tsx` file.
* Type a form submit event with anything other than `React.FormEvent` (or `React.FormEvent<HTMLFormElement>` when `currentTarget` must be a form).
* Declare a type anywhere except the top type block.
* Declare a static variable inside a component, in the middle of the file, or before the type block.
* Use `any` for data that has a known shape.
* Write an `if`, `else if`, `else`, `for`, `while`, or `do...while` without curly braces.
* Put the body of an `if`, `else`, or loop on the same line as its condition.
* Collapse a braced block into one line (`if (x) { return y; }`).
* Write a braceless guard clause such as `if (!x) return;`.
* Put `else` on a new line after the closing brace (it MUST be `} else {`).
* Call `setState` synchronously in the body of `useEffect` or `useLayoutEffect`.
* Store derived data in state.
* Use a mounted flag effect (`useEffect(() => setMounted(true), [])`).
* Read `localStorage` or `window` inside a lazy `useState` initializer in a Next.js client component.
* Call `JSON.parse` inside a `useSyncExternalStore` `getSnapshot`.
* Suppress a `react-hooks/*` lint rule or bypass it with `setTimeout`, `queueMicrotask`, or similar tricks.

Always:

* Use Next.js.
* Use Tailwind CSS.
* Use DaisyUI for UI components and default styling.
* Keep JSX clean.
* Keep className strings compact.
* Keep components small.
* Order every file as: `"use client"`, imports, types, static variables, module-level helpers, components.
* Declare a type for every data shape the requirement involves, at the top of the file.
* Declare static variables at module level, directly after the types.
* Destructure props in the function parameter.
* Pass props explicitly, one by one.
* Declare event handlers as named `function handle[Event]() {}` inside the component, before `return`.
* Pass event handlers by reference: `onClick={handleClick}`.
* Type form handlers as `function handleSubmit(event: React.FormEvent) { event.preventDefault(); }`.
* Wrap the body of every `if`, `else if`, `else`, and loop in curly braces.
* Put every control flow body on its own line(s), with the closing `}` on its own line.
* Write `} else {` and `} else if (...) {` with the keyword on the same line as the closing brace.
* Derive values during render instead of syncing them with effects.
* Use `useSyncExternalStore` for `localStorage` and other browser-only stores.
* Update and persist state inside event handlers.
* Add `"use client";` to files that use event handlers or state.
* Follow the standard project structure.
* Respect file modification boundaries.
* Use English comments when comments are necessary.
* Implement responsive behavior carefully.
* Prefer the smallest correct implementation.
* Preserve existing code and architecture.
* Follow the user's explicit instructions over assumptions.

## 25. Validation Before Completion

Before considering the implementation complete, verify every item. If any item fails, fix it before responding.

1. The requested functionality is implemented.
2. HTML and JSX syntax is valid.
3. className strings are clean, on one line, and properly formatted.
4. Attribute formatting follows Section 5 (one line for 3 or fewer short attributes, one per line otherwise).
5. DaisyUI and Tailwind CSS are used correctly.
6. No unnecessary UI library has been introduced.
7. Default DaisyUI styling is used when no custom color was requested.
8. Responsive behavior has been considered across sm, md, lg, xl, and 2xl where appropriate.
9. Components are as small as reasonably possible.
10. Existing components are reused where appropriate.
11. The file follows the order in Section 7.1: `"use client"`, imports, types, static variables, module-level helpers, components.
12. Every data shape in the requirement has a declared type, and ALL types are in the top type block.
13. Every static variable is at module level, directly after the types, and none is inside a component.
14. Every component destructures its props in the function parameter, and every props type is `[ComponentName]Props` declared in the top type block.
15. No `props.x` access and no `{...props}` or other JSX spread of props exists in the code you wrote.
16. Every prop passed to a child is written explicitly as `name={value}`.
17. Every `on[Event]` attribute receives a reference to a named `function handle[Event]` declared inside the component before `return`.
18. No inline arrow function, inline function expression, `bind`, or `const handleX = () =>` exists for event handlers.
19. Every handler name starts with `handle`.
20. Every form handler (`onSubmit`, `onReset`) types its event as `React.FormEvent` (or `React.FormEvent<HTMLFormElement>` when needed), and `handleSubmit` calls `event.preventDefault()` first.
21. Every other handler that uses its event has an explicit React event type, and no event parameter is untyped or `any`.
22. Every `if`, `else if`, `else`, `for`, `while`, and `do...while` in the code you wrote uses curly braces, with the body on its own line(s) and the closing `}` on its own line.
23. No single-line `if` exists (`if (x) return y;` or `if (x) { return y; }`), and no braceless guard clause exists.
24. Every `else` and `else if` is written on the same line as the previous closing brace (`} else {`).
25. No `setState` is called synchronously inside any `useEffect` or `useLayoutEffect` body (react-hooks/set-state-in-effect is satisfied).
26. No derived value is stored in state, no mounted-flag effect exists, and `localStorage` access uses `useSyncExternalStore` with a stable primitive snapshot.
27. State is updated and persisted inside event handlers, not in effects that watch state.
28. No `eslint-disable` comment or timer trick was used to bypass a `react-hooks/*` rule, and the dependency arrays are complete.
29. Files that use event handlers or state start with `"use client";`.
30. Comments are in English.
31. Comments do not contain decorative separators or unnecessary special characters.
32. No unrelated files were modified and no new file was created without permission.
33. Existing code was not unnecessarily refactored.
34. No unnecessary dependencies were added.
35. The implementation follows the project's standard structure.

## 26. Required Response Behavior

* When you finish, briefly state which files you changed and what you changed.
* If you needed to modify or inspect a file you were not allowed to touch, list it and ask for permission.
* If an existing file contained old violations that you intentionally left untouched (Section 16), mention them in one short note.
* If you could not satisfy a rule, say which rule blocks you and why (Section 0).
* Do NOT claim a rule was followed if you did not verify it with Section 25.

## 27. Priority of Rules

When requirements conflict, follow this priority:

1. Explicit user instruction
2. File modification restrictions
3. Existing project architecture
4. This Next.js Development Standards document
5. General coding conventions

Never override an explicit user instruction with a personal preference or assumption.

If an implementation requires violating a higher-priority rule, stop before making that change and request permission.

If the user explicitly asks you to break a rule in Sections 7, 9, 11, 12, or 13 (for example, "use an arrow function here" or "write this if on one line"), follow the user for that specific case only, and continue to apply the rule everywhere else.

## 28. Final Principle

Build less.

Reuse more.

Change only what is necessary.

Keep the UI simple.

Keep the code compact.

Use DaisyUI defaults.

Use Tailwind CSS responsively.

Types first, then static variables, then the code.

Destructure props. Pass props explicitly.

Name every handler `handle[Event]` and declare it as a standard function.

Type every form event with `React.FormEvent`.

Every `if`, `else`, and loop gets curly braces, and its body goes on its own line.

Never set state in an effect. Derive it, or update it in a handler.

Preserve the existing project structure.

Follow the rules strictly.