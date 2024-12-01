import path from 'path';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import CaseSensitivePathsWebpackPlugin from 'case-sensitive-paths-webpack-plugin';

export default {
  mode: 'production',
  entry: './src/main.jsx', // Chemin vers le fichier d'entrée principal
  output: {
    path: path.resolve('dist'),
    filename: 'main.js', // Nom du fichier JavaScript de sortie
    assetModuleFilename: 'assets/[hash][ext][query]', // Organisation des fichiers d'assets
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Extensions supportées
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // Supprime les console.log
          },
          format: {
            comments: false, // Supprime les commentaires
          },
        },
        extractComments: false,
      }),
      new CssMinimizerPlugin(),
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Pour les fichiers JS et JSX
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/, // Pour les fichiers CSS
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/, // Pour les fichiers SCSS
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/i, // Pour les fichiers images
        type: 'asset/resource', // Place automatiquement les fichiers dans le dossier de sortie
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // Pour les fichiers de polices
        type: 'asset/resource', // Place les fichiers de polices dans le dossier de sortie
      },
    ],
  },
  plugins: [
    new CaseSensitivePathsWebpackPlugin(), // Plugin pour gérer les chemins sensibles à la casse
  ],
};
