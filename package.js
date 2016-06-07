Package.describe({
  name: 'longxuanho:katana',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Katana package - unstable - for testing - Q2.2016',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/username/repo.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  // api.use('ecmascript');
  
  api.use('jquery');

  // JS
  api.mainModule('katana.core/src/js/kendo.all.js', 'client');

  // CSS
  api.addFiles('katana.core/styles/kendo.common.min.css', 'client');
  api.addFiles('katana.core/styles/kendo.default.min.css', 'client');
  api.addFiles('katana.core/styles/kendo.common-material.min.css', 'client');
  api.addFiles('katana.core/styles/kendo.material.min.css', 'client');

  // GLOBAL CSS FONT
  api.addAssets('katana.core/styles/images/kendoui.ttf', 'client');
  api.addAssets('katana.core/styles/images/kendoui.woff', 'client');

  // GLOBAL CSS IMAGES
  api.addAssets('katana.core/styles/images/back.png', 'client');
  api.addAssets('katana.core/styles/images/kendoui.svg', 'client');
  api.addAssets('katana.core/styles/images/wp8_icons.png', 'client');
  api.addAssets('katana.core/styles/images/wp8_inverseicons.png', 'client');

  // GLOBAL CSS TEXTURES
  api.addAssets('katana.core/styles/textures/brushed-metal.png', 'client');
  api.addAssets('katana.core/styles/textures/dots1.png', 'client');
  api.addAssets('katana.core/styles/textures/dots2.png', 'client');
  api.addAssets('katana.core/styles/textures/dots3.png', 'client');
  api.addAssets('katana.core/styles/textures/dots4.png', 'client');
  api.addAssets('katana.core/styles/textures/dots5.png', 'client');
  api.addAssets('katana.core/styles/textures/dots6.png', 'client');
  api.addAssets('katana.core/styles/textures/dots7.png', 'client');
  api.addAssets('katana.core/styles/textures/dots8.png', 'client');
  api.addAssets('katana.core/styles/textures/dots9.png', 'client');
  api.addAssets('katana.core/styles/textures/dots10.png', 'client');
  api.addAssets('katana.core/styles/textures/dots11.png', 'client');
  api.addAssets('katana.core/styles/textures/dots12.png', 'client');
  api.addAssets('katana.core/styles/textures/dots13.png', 'client');

  api.addAssets('katana.core/styles/textures/glass-lighter.png', 'client');
  api.addAssets('katana.core/styles/textures/glass.png', 'client');
  api.addAssets('katana.core/styles/textures/highlight.png', 'client');
  api.addAssets('katana.core/styles/textures/hsv-gradient.png', 'client');
  api.addAssets('katana.core/styles/textures/hue.png', 'client');
  api.addAssets('katana.core/styles/textures/leather1.png', 'client');
  api.addAssets('katana.core/styles/textures/leather2.png', 'client');
  api.addAssets('katana.core/styles/textures/noise.png', 'client');
  api.addAssets('katana.core/styles/textures/stripe1.png', 'client');
  api.addAssets('katana.core/styles/textures/stripe2.png', 'client');
  api.addAssets('katana.core/styles/textures/stripe3.png', 'client');
  api.addAssets('katana.core/styles/textures/stripe4.png', 'client');
  api.addAssets('katana.core/styles/textures/stripe5.png', 'client');
  api.addAssets('katana.core/styles/textures/stripe6.png', 'client');
  api.addAssets('katana.core/styles/textures/transparency.png', 'client');
  api.addAssets('katana.core/styles/textures/transtexture.png', 'client');

  // THEME
  api.addAssets('katana.core/styles/Material/editor.png', 'client');
  api.addAssets('katana.core/styles/Material/imagebrowser.png', 'client');
  api.addAssets('katana.core/styles/Material/indeterminate.gif', 'client');
  api.addAssets('katana.core/styles/Material/loading-image.gif', 'client');
  api.addAssets('katana.core/styles/Material/loading.gif', 'client');
  api.addAssets('katana.core/styles/Material/loading_2x.gif', 'client');
  api.addAssets('katana.core/styles/Material/slider-h.gif', 'client');
  api.addAssets('katana.core/styles/Material/slider-v.gif', 'client');
  api.addAssets('katana.core/styles/Material/sprite.png', 'client');
  api.addAssets('katana.core/styles/Material/sprite_2x.png', 'client');
  api.addAssets('katana.core/styles/Material/sprite_kpi.png', 'client');
  api.addAssets('katana.core/styles/Material/sprite_kpi_2x.png', 'client');

});

// Package.onTest(function(api) {
//   api.use('ecmascript');
//   api.use('tinytest');
//   api.use('katana');
//   api.mainModule('katana-tests.js');
// });
