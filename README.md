# NodeJS, TypeScript y Express

En esta carpeta encontrarás un starter del proyecto para la prueba técnica del curso `Ingeniería en el Software: SOLID & DESIGN PATTERNS`.

El objetivo de este README es dar contexto e instrucciones relativas al stack y configuración de este starter. Si quieres conocer más sobre las instrucciones, entrega y formato de la prueba puedes dirigirte al [`README principal del repositorio`](../README.md).

## Stack tecnológico

El stack tecnológico y versiones utilizadas para este proyecto es:

-   **NodeJS**: LTS
-   **ExpressJS**: 4.18.2
-   **TypeScript**: 5.3.3
-   **Jest**: 29.7.0

Además se encuentran configuradas las siguientes librerías de calidad y validación de código:

-   **Git Hooks**: Utilidad para realizar acciones en diferentes comandos de GIT. La librería utilizada para la creación de estos hooks es **Husky**
-   **Linter**: Librería para validar calidad de código en función de unas reglas. La librería utilizada es **ESLint**
-   **Formatter**: Librería para el formateo del código siguiendo unas reglas comunes. En el proyecto se ha configurado **Prettier**
-   **CI/CD**: Proceso de validación del código y acciones para disponibilizar y entregar funcionalidad al usuario. Se ha configurado **Github actions** con dos workflows que realizan el test y una auditoría del código.

## Configuración del entorno

Para poder empezar con el proyecto, necesitamos una configuración previa:

1. Instalar NodeJS >= 18.X.Y. Puedes descargar la versión LTS desde [Página oficial NodeJS](https://nodejs.org/es/). Después de la instalación puedes verificar la versión con el comando de consola:

    > node -v

2. Si tu versión de NPM es menor que 7 (puedes verificarlo con el comando `npm -v` ), actualízalo usando el siguiente comando de consola:

    > npm i -g npm@latest

3. Instala un IDE. Recomandamos usar VSCode si no tienes uno. Puedes instalarlo desde su [Página oficial](https://code.visualstudio.com/).

Para poder empezar a desarrollar en la prueba técnica, una vez que tengas terminada la configuración, puedes:

> [!WARNING]
> Asegurate haber creado el repositorio y realizado tu primer commit antes de seguir con los siguientes pasos.

1. Instalar las dependencias del proyecto, dentro de la carpeta raíz de tu repositorio:

    > npm i

    Al finalizar la instalación de las dependencias, se ejecutará un script de `Husky` que instalará los Git Hooks.

> [!WARNING]
> Si **utilizamos MacOS o Linux**, el sistema de permisos es diferente a un Windows y Husky necesita ciertos permisos para ejecutar su script a la hora de lanzar un comando de git. Si esto ocurriese tendríamos el siguiente mensaje:

```console
    hint: The '.husky/pre-commit' hook was ignored because it's not set as executable.
    hint: You can disable this warning with git config advice.ignoredHook false.
```

Para darle permisos de ejecución a los Git Hooks, tendremos que ejecutar en la terminal este comando:

> chmod u+x .husky/\*

2. Levantar el servidor de express

    > npm start

    Este comando levanta por defecto el servidor HTTP en el puerto `3000`. Puedes configurar una variable de entorno `PORT` para cambiar el puerto.

    Si quieres levantar el servidor en modo `watch` puedes utilizar el siguiente comando:

    > npm run start:watch

3. Ejecutar los test en modo watch

    > npm test

4. Develop your code and happy coding

## Estructura del starter

Dentro de la carpeta `src` encontrarás un servidor de Express con una ruta ya creada `GET al path /api/products` que devolverá el listado de productos.

En el controlador de la ruta encontrarás el método sobre el cual tendrás que empezar a desarrollar tu prueba técnica. Puedes crear tantos archivos y código como necesites para completar la prueba, **no es necesario que todo el código esté en este Handler**.

El proyecto está configurado utilizando los ESM Modules y el tipo de proyecto en el package.json es `module`. Esto significa que puedes utilizar las últimas características de JavaScript y TypeScript sin necesidad de configurar Babel.

## ¿Tienes problemas?

Si durante la configuración, instalación o desarrollo de la prueba te encontrases con algún problema puedes consultarnos por alguno de los medios definidos en la sección `Troubleshooting` del [README principal](../README.md).

Igualmente tenemos alguna serie de posibles problemas que pueden venir con la configuración de este proyecto:

### ERR_MODULE_NOT_FOUND

Si al ejecutar el comando `npm start` te encuentras con el siguiente error:

```console
node:internal/errors:484
    ErrorCaptureStackTrace(err);
    ^

Error [ERR_MODULE_NOT_FOUND]: Cannot find module '<path>\node-express\dist\api\<file>' imported from <path>\node-express\dist\<otherFile>.js
    at new NodeError (node:internal/errors:393:5)
    at finalizeResolution (node:internal/modules/esm/resolve:323:11)
    at moduleResolve (node:internal/modules/esm/resolve:916:10)
    at defaultResolve (node:internal/modules/esm/resolve:1124:11)
    at nextResolve (node:internal/modules/esm/loader:163:28)
    at ESMLoader.resolve (node:internal/modules/esm/loader:841:30)
    at ESMLoader.getModuleJob (node:internal/modules/esm/loader:424:18)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:76:40)
    at link (node:internal/modules/esm/module_job:75:36) {
  code: 'ERR_MODULE_NOT_FOUND'
}
```

Esto se debe a que el proyecto está configurado para utilizar ESM Modules y NodeJS por defecto utiliza CommonJS. Por eso es importante que todas las importaciones de otros archivos sean con la extensión `.js`. Si tienes este problema, revisa que todas las importaciones de archivos sean con la extensión `.js`.

Los archivos de test no necesitan esta extensión ya que Jest está configurado para no necesitarla.
