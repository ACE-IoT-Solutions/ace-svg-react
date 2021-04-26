![ACE.SVG LOGO](https://github.com/ACE-IoT-Solutions/ace-svg-react/raw/main/img/logo-type.svg)
# React powered SVG Panel Plugin for Grafana

![Latest version](https://img.shields.io/badge/dynamic/json?logo=grafana&color=F47A20&label=marketplace&prefix=v&query=%24.items%5B%3F%28%40.slug%20%3D%3D%20%22aceiot-svg-panel%22%29%5D.version&url=https%3A%2F%2Fgrafana.com%2Fapi%2Fplugins)

![Downloads](https://img.shields.io/badge/dynamic/json?logo=grafana&color=F47A20&label=downloads&query=%24.items%5B%3F%28%40.slug%20%3D%3D%20%22aceiot-svg-panel%22%29%5D.downloads&url=https%3A%2F%2Fgrafana.com%2Fapi%2Fplugins)

![Screenshot of plugin](https://media.giphy.com/media/YRE4DxPYqy3XCR6rL4/giphy.gif)

This is an SVG panel plugin for Grafana 7.x+

## Why yet another SVG panel plugin?
Yes, I definitely considered naming it YASPP...
The existing SVG panel plugins all use the pre-7.0, angular panel API. I wanted to be able to use all of the features included in the new data API, as well as potential performance improvements from migrating to React.
I have also taken a slightly different direction/philosophy from some of the other SVG plugins.

## How does it work?
- Users of this plugin are expected to have ready to animate SVG graphics created in an vector design package (See inkscape, Adobe Illustrator, or a web tool like draw.io).
- Users upload their existing SVG layouts into the plugin, then enable the "Click to Map" functionality, allowing you to easily map arbitrary group, path or text span IDs to named tokens.
- Users then perform additional setup tasks in an init function that gets called each time the SVG panel is loaded.
- Finally, users can access the elements of the SVG using the named tokens from within the render function, called whenever the panel receieves new data.
- User code in either the render or init functions have access to all of the mapped elements, the root SVG document, a ephemeral state store and the DataFrames for the panel.

## What are the goals for this project?
1. Be the most performant way to visualize arbitrary SVG graphics and animations within Grafana
2. Stay out of the way - This plugin will focus on providing simple, obvious tools to reduce the friction of converting your static SVG graphics into data driven visualizations, without limiting your options.
3. Stay focused - This plugin will not attempt to be an online graphics editor.

## Getting started
1. Create a new panel and select ACE.SVG as the visualization
2. Paste your SVG source file into the SVG Document tab editor.
3. Use the 'Click to Map' functionality in the SVG Mapping tab to map SVG Elements to variables.
4. Write code that you want to run once on dashboard load in the User JS Init tab editor.
5. Write code that you want to run on when data is received in the User JS Render tab editor.
6. Make generous use of the browser JS console and console.log() to explore the features of the plugin and SVG.js

## Execution Environment Interfaces
The plugin makes available several interfaces to the SVG document and Grafana in the execution context of the Init and Render functions.
Below are details for each one, remember you can always use the browser JS console and console.log() for more detail.

 - `svgmap` svgmap is a JS object where each mapped SVG.js Element is available as a property. Example: If you have an svgid 'rect4524' and you've provided the mapped name bigSquare, you would access the SVG.js methods on that element under svgmap.bigSquare
 - `data` data is the raw object passed in to the panel for rendering by Grafana, it contains the DataFrames with all timeseries data selected by the active queries and time range. This interface is a bit complex and verbose, so we'll be adding helper methods to make common use cases simpler. [Grafana DataFrame Docs](https://grafana.com/docs/grafana/latest/packages_api/data/dataframe/)
 - `options` options is the raw panel options object manaeged by the dashboard to store panel state. It includes the source code for the svg and functions as well as any mappings or other config data. While you can manually access everything about the panel with this interface, the most common use case is to add properties to it from the Init function for the render function to use later. For instance, if you have a common animation in a panel, you might create a function for setting it up in Init, and attach it to the options object as a property, so that you can use it in the Render function and keep the logic flow clear.



## Getting started (development)
1. Install dependencies
```BASH
yarn install
```
2. Build plugin in development mode or run in watch mode
```BASH
yarn dev
```
or
```BASH
yarn watch
```
3. Build plugin in production mode
```BASH
yarn build
```

## Learn more
- [SVG.js](https://svgjs.com) The Core SVG library made available for SVG DOM manipulations.
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) The editor used for user code.
- [Grafana documentation](https://grafana.com/docs/)
