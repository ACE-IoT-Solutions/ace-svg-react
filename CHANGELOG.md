# Change Log

All notable changes to this project will be documented in this file.

## 0.1.5

- Fix dependabot issues with dependencies
    - `ws`, `braces`, `fast-loops`, `webpack`, `path-to-regexp`
- Update node version to 22
- Update dependency versions and workflows
    - Adds new workflows to bundle stats and update plugin creation
- Update broken badges on main README page
- Add important note about CSS precedence
- Add additional developer instructions
- Move `console.log` into **User JS Init Code**
- Split README into two files: "Grafana marketplace" and "for developers"
- Remove deprecated `<HorizontalGroup>` and `<VerticalGroup>` classes, use `<Stack>` instead
- Remove unused media files

## 0.1.4

- Resolve `SvgMappings` event error (thanks, [@hyunki85](https://github.com/hyunki85)!)
- Update dependencies and workflows

## 0.1.3

- Add some additional useful links to the readme
- Improve code quality by adding `readonly`/`const` modifiers, access modifiers, and function return types
- Replace Monaco code editor with builtin Grafana `CodeEditor`
- Simplify and add comments in the init source in the example

## 0.1.2

- Fix the builtin example
- Update dependency versions
- Update commands in reamde from `yarn` to `npm`
- Remove provisioning folder
- Remove devDependency on `emotion`

## 0.1.1

- Fix bad link in readme
- Update dependency versions
- Clean out some old config files

## 0.1.0

- Update framework for Grafana v10 compatibility