import { BuildOptions } from "./types/config";
import { Configuration } from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): Configuration {
    return {
        open: true,
        port: options.port,
        historyApiFallback: true,
    }
}