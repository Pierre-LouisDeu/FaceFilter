# Instagram-like face filter 


## Presentation

This project is an Instagram-like face filter tool based on [Three Fiber](https://github.com/pmndrs/react-three-fiber), [NPM facefilter package](https://www.npmjs.com/package/facefilter) and React + Webpack. It's based on this [boilerplate](https://github.com/jeeliz/jeelizFaceFilter/tree/master/reactThreeFiberDemo) wich handles simple mesh display, screen resizing, and orientation change. I added some features like GLTF and OBJ import and HDRI integration (environment map). I will probably add some new feature like a screenshot button and a social media sharing feature plus a big refactoring to create an easy-to-use web AR tool wich could be tried locally or deployed to production.

## To try it 

To try it locally, install node, clone this repos and execute the following commands.

```bash
npm install
npm run start
```

You can view the development server at `localhost:3000`.

## To create a production build

```bash
npm run build
```

> Note: Install [http-server](https://www.npmjs.com/package/http-server) globally to deploy a simple server.

```bash
npm i -g http-server
```

You can view the deploy by creating a server in `dist`.

```bash
cd dist && http-server
```
