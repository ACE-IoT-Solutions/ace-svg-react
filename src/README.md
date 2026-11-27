![ACE.SVG LOGO](https://github.com/ACE-IoT-Solutions/ace-svg-react/raw/main/src/img/logo-type.svg)
# React-Powered SVG Panel Plugin for Grafana

![Dynamic JSON Badge (Version)](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgrafana.com%2Fapi%2Fplugins%2Faceiot-svg-panel&query=version&prefix=v&logo=grafana&label=Version&color=orange)
![Dynamic JSON Badge (Downloads)](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgrafana.com%2Fapi%2Fplugins%2Faceiot-svg-panel&query=downloads&logo=grafana&label=Downloads&color=orange)
[![CI](https://github.com/ACE-IoT-Solutions/ace-svg-react/actions/workflows/ci.yml/badge.svg)](https://github.com/ACE-IoT-Solutions/ace-svg-react/actions/workflows/ci.yml)

![Screenshot of plugin](https://media.giphy.com/media/YRE4DxPYqy3XCR6rL4/giphy.gif)

This is an SVG panel plugin for Grafana 13.x and later.

## Why yet another SVG panel plugin?
Yes, I definitely considered naming it YASPP...
The existing SVG panel plugins all use the pre-7.0, Angular panel API. I wanted to be able to use all of the features included in the new data API, as well as potential performance improvements from migrating to React.
I have also taken a slightly different direction/philosophy from some of the other SVG plugins.

## How does it work?
- Users of this plugin are expected to have ready-to-animate SVG graphics created in a vector design package (see [Inkscape](https://inkscape.org/), [Adobe Illustrator](https://www.adobe.com/products/illustrator.html), or a web tool like [draw.io](https://app.diagrams.net/)).
- Users upload their existing SVG layouts into the plugin, then enable the "Click to Map" functionality, allowing them to easily map arbitrary group, path, or text span IDs to named tokens.
- Users then perform additional setup tasks in an init function that gets called each time the SVG panel is loaded.
- Finally, users can access the elements of the SVG using the named tokens from within the render function, which is called whenever the panel receives new data.
- User code in either the render or init functions has access to all of the mapped elements, the root SVG document, an ephemeral state store, and the DataFrames for the panel.

## What are the goals for this project?
1. Be the most performant way to visualize arbitrary SVG graphics and animations within Grafana.
2. Stay out of the way: this plugin will focus on providing simple, obvious tools to reduce the friction of converting static SVG graphics into data-driven visualizations without limiting your options.
3. Stay focused: this plugin will not attempt to be an online graphics editor.

## Getting started
1. Create a new panel and select ACE.SVG as the visualization.
2. Paste your SVG source file into the SVG Document tab editor.
3. Use the "Click to Map" functionality in the SVG Mapping tab to map SVG elements to variables.
4. Write code that you want to run once on dashboard load in the User JS Init tab editor.
5. Write code that you want to run when data is received in the User JS Render tab editor.
6. Make generous use of the browser JS console and console.log() to explore the features of the plugin and SVG.js.

## Execution Environment Interfaces
The plugin makes available several interfaces to the SVG document and Grafana in the execution context of the Init and Render functions.
Below are details for each one. Remember that you can always use the browser JS console and console.log() for more detail.

- `svgmap` is a JavaScript object where each mapped SVG.js element is available as a property. For example, if you have an SVG ID such as `rect4524` and you provide the mapped name `bigSquare`, you would access the SVG.js methods on that element under `svgmap.bigSquare`. The svgmap is also available as `options.svgMappings`.
- `data` is the raw object passed to the panel for rendering by Grafana. It contains the DataFrames with all time-series data selected by the active queries and time range. This interface is a bit complex and verbose, so we will add helper methods to simplify common use cases. [Grafana DataFrame Docs](https://grafana.com/developers/plugin-tools/introduction/data-frames)
    - The `data` object contains both the query definition and the query results. In the case of the user initialization function, there likely will not be any results yet, but the query definition should be present. This _may_ be useful for some initial rendering purposes, but caution is advised because the query may be updated (for example, while the user is updating the query) so anything done here should likely be done in the update function as well.
- `options` is the raw panel options object managed by the dashboard to store panel state. It includes the SVG source code and functions, as well as mappings and other configuration data. While you can manually access everything about the panel through this interface, the most common use case is to add properties from the Init function for the Render function to use later. For instance, if you have a common animation in a panel, you might create a function that sets it up in Init and attach it to the options object as a property, allowing you to use it in Render and keep the logic flow clear.
- `svgnode` is a reference to the SVG.js object.
- `theme` is a reference to the currently-selected Grafana dashboard theme.
- `props` contains all other panel properties that may not be explicitly stated in the rest of these parameters (such as width, height, title...)
- `context` is an initially empty object passed into the Init function. The Init function may store any context or state that you want to preserve between Init and render invocations. This is not required, but for some advanced use cases—for example, SVG generators in the Init function—being able to pass data from Init to Render (and between Render invocations) can be useful.

### Important Notes
- An object's `style` property takes precedence over [`fill()`](https://svgjs.dev/docs/3.2/manipulating/#fill). This could be an issue when creating graphics in Inkscape, which uses the `style` property to assign the fill color. To fix this, you must remove the `fill:#FFFFFF;` part under that element's `style`.

## Learn more
- [SVG.js](https://svgjs.dev): the core SVG library for SVG DOM manipulation.
- [Grafana Docs](https://grafana.com/docs/): documentation for users and developers.
- [Mozilla Developer](https://developer.mozilla.org/en-US/docs/Web/SVG): documentation on the SVG standard itself.
- [ACE IoT Solutions](https://aceiotsolutions.com/): about the developers.

## Plugin metadata

| Version     | Published | Plugin ID     |
| ----------- | --------- | ------------- |
| `%VERSION%` | `%TODAY%` | `%PLUGIN_ID%` |
