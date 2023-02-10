import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildDevServer } from './buildDevServer';

import { buildLoaders } from "./buildLoaders"
import { buildPlugins } from "./buildPlugins"
import { buildResolvers } from './buildResolvers';

export function buildConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths, isDev } = options;
    return {
        entry: paths.entry,
        mode: mode,
        module: {
            rules: buildLoaders(options),
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        resolve: buildResolvers(options),
        plugins: buildPlugins(paths),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        devServer: isDev ? buildDevServer(options) : undefined
    }
}