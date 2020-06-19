Package.describe({
  name: 'milligram:milligram-stylus',
  version: '1.4.0',
  summary: 'A minimalist CSS framework on Stylus version.',
  git: 'https://github.com/milligram/milligram-stylus.git',
  documentation: 'readme.md',
})

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0')
  api.addFiles(['dist/milligram.styl'], 'client')
})
