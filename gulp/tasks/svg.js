module.exports = () => {
  $.gulp.task('svg', function() {
    return $.gulp
      .src($.config.sourcePath + '/' + $.config.svgPath + '/**/*.svg')
      .pipe($.gulpPlugin.svgmin())
      .pipe(
        $.gulpPlugin.svgSprite({
          mode: {
            css: {
              spacing: {
                padding: 5,
              },
              layout: 'diagonal',
              dest: './',
              sprite: $.config.tmpPath + '/' + $.config.staticPath + '/images/svg/sprite.svg',
              bust: false,
              render: {
                scss: {
                  dest: $.config.sourcePath + '/' + $.config.stylesPath + '/svg/_sprite.scss',
                  template: './config/sprite-template.scss',
                },
              },
            },
          },
        }),
      )
      .pipe($.gulp.dest('./'))
  })

  $.gulp.task('svgInline', function() {
    return $.gulp
      .src($.config.sourcePath + '/' + $.config.svgInlinePath + '/**/*.svg')
      .pipe(
        $.gulpPlugin.svgmin({
          js2svg: {
            pretty: true,
          },
        }),
      )
      .pipe(
        $.gulpPlugin.cheerio({
          run: function($) {},
          parserOptions: { xmlMode: true },
        }),
      )
      .pipe($.gulpPlugin.replace('&gt;', '>'))
      .pipe(
        $.gulpPlugin.svgSprite({
          mode: {
            symbol: {
              dest: './',
              example: false,
              bust: false,
              sprite: $.config.tmpPath + '/' + $.config.staticPath + '/images/svg/spriteInline.svg',
              inline: false,
              render: {
                scss: {
                  dest: $.config.sourcePath + '/' + $.config.stylesPath + '/svg/_spriteInline.scss',
                  template: './config/sprite-template-inline.scss',
                },
              },
            },
          },
        }),
      )
      .pipe($.gulp.dest('./'))
  })
}
