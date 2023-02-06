const path = require("path") //путь каталога в системе .resolve - разрешение пути, для нормализации слешей в разных системах
const HtmlWebpackPlugin = require("html-webpack-plugin") // плагин для работы с HTML
const fs = require("fs") //файловая система
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const isDEV = process.env.NODE_ENV !== "production"
const pagesUrl = "./src/pages"
const pagesList = fs.readdirSync(path.resolve(__dirname, pagesUrl))

const multipleHtmlPlugins = pagesList.map((name) => {
  // создаем плагин под каждую страницу
  const params = {
    template: `${pagesUrl}/${name}/index.hbs`, // relative path to the HTML files
    filename: `${name}/index.html` // output HTML files,
  }

  try {
    params.templateParameters = require(`${pagesUrl}/${name}/data.json`)
  } catch (e) {
    console.log("no data at " + name)
  }

  return new HtmlWebpackPlugin(params)
})

module.exports = {
  //экспортируемый обьект конфигурации
  mode: process.env.NODE_ENV, // режим разработки development или production
  entry: path.resolve(__dirname, "index.js"), //точка входа

  output: {
    //точка выхода
    path: path.resolve(__dirname, "dist"), //путь куда складывать все результаты
    filename: "bundle.js" //имя конечного файла
  },

  module: {
    rules: [
      //правила для обработки разных типо файлов
      {
        test: /\.html$/i,
        loader: "html-loader"
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true // webpack@2.x and newer
            }
          }
        ]
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
        options: {
          inlineRequires: "/images/"
        }
      },
      {
        test: /\.s[ac]ss$/i, // какой тип файла
        use: [
          isDEV ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },

  resolve: {
    alias: {
      "@data": path.resolve(__dirname, "src/data/"),
      "@src": path.resolve(__dirname, "src"),
      "@img": path.resolve(__dirname, "src/img/")
    },
    extensions: [ '', '.js', '.jpg', '.png', '.svg', '.webp' ]
  },

  devServer: {
    port: 8080,
    open: true,
    static: {
      directory: path.resolve(__dirname, "./dist"),
      watch: true
    },

    watchFiles: {
      paths: ["src/**/*.html", "src/**/*.hbs", "src/**/*.json", "dist/**/*"],
      options: {
        usePolling: false
      }
    }
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      //Плагин который выполняет отдельную задачу по генерации хтмл документа из шаблона './src/index.html'
      //и подключает в этот шаблон файлы стилей и JS
      template: path.resolve(__dirname, "./src/index.hbs"),
      templateParameters: { pages: pagesList }
    })
  ].concat(multipleHtmlPlugins)
}
