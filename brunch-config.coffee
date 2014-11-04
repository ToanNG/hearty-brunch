exports.config =

  files:
    javascripts:
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^(bower_components|vendor)/
      order:
        before: []

    stylesheets:
      joinTo:
        'stylesheets/app.css': /^app/
        'stylesheets/vendor.css': /^(bower_components|vendor)/
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
