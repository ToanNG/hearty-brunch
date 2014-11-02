exports.config =

  files:
    javascripts:
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^vendor\/(?!node)/
      order:
        before: [
          'vendor/scripts/console-helper.js',
          'vendor/scripts/jquery.js',
          'vendor/scripts/modernizr.js',
          'vendor/scripts/bootstrap.js',
        ]

    stylesheets:
      joinTo:
        'stylesheets/app.css': /^app/
        'stylesheets/vendor.css': /^vendor/
      order:
        before: [
          'app/styles/main.styl'
        ]

    templates:
      joinTo: 'javascripts/template.js': /^app/

  modules:
    wrapper: false
    definition: false

  plugins:
    jade:
      pretty: yes
    static_jade:
      extension: ".static.jade"
