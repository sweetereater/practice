import path from 'path';
import webpack from 'webpack';
import { buildConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/types/config';

export default (env: BuildEnv) => {

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }
    const PORT = env.port || 3000;
    const mode = env.mode || 'development';
    const isDev = mode === 'development';

    const config: webpack.Configuration = buildConfig(
        {
            paths,
            mode,
            isDev,
            port: PORT,
        }
    )
    return config;
};