# ACE.SVG
View the main README page in [src/README.md](./src/README.md) which is shown on the [Grafana Plugin Marketplace](https://grafana.com/grafana/plugins/aceiot-svg-panel/).

## Developer Instructions
### Software Requirements
- [`Node`](https://nodejs.org/en) (version 20+)
- [`npm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (version 10+)
- [`git`](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [`Docker`](https://www.docker.com/)

### Getting Started
1. Clone the repository
    ```BASH
    git clone https://github.com/ACE-IoT-Solutions/ace-svg-react.git
    ```
1. Install dependencies
    ```BASH
    npm i
    ```
1. Build plugin in development (watch) mode
    ```BASH
    npm run dev
    ```
1. Build plugin in production mode
    ```BASH
    npm run build
    ```
1. Spin up a Grafana image in Docker
    ```BASH
    npm run server
    ```