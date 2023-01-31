import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "../types/config";

export function buildLoaders(options: BuildOptions) {

    const { isDev } = options;

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    };

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (path: string) => Boolean(path.includes('.module.')),
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
                    }
                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    return [
        typescriptLoader,
        scssLoader,
    ]
}
