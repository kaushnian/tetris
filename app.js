requirejs.config({
    baseUrl: 'bower_components',
    paths: {
      app: '../app',
      underscore: 'underscore/underscore-min'
    },
    shim: {
      underscore: {
        exports: '_'
      }
    }
});

requirejs(['app/main', 'underscore']);