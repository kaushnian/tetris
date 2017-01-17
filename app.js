requirejs.config({
    baseUrl: 'app',
    shim: {
      underscore: {
        exports: '_'
      }
    }
});

requirejs(['main']);