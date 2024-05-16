/**
 * External dependencies
 */
const { join } = require( 'path' );

/**
 * WordPress dependencies
 */
const DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );

const sharedConfig = {
	mode: 'development',
	target: 'browserslist',
	output: {
		filename: '[name]/index.min.js',
		path: join( __dirname, '..', '..', 'build' ),
	},
};

// See https://github.com/pmmmwh/react-refresh-webpack-plugin/blob/main/docs/TROUBLESHOOTING.md#externalising-react.
module.exports = [
	{
		...sharedConfig,
		name: 'react-refresh-entry',
		entry: {
			'react-refresh-entry':
				'@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js',
		},
		plugins: [ new DependencyExtractionWebpackPlugin() ],
	},
	{
		...sharedConfig,
		name: 'react-refresh-runtime',
		entry: {
			'react-refresh-runtime': {
				import: 'react-refresh/runtime',
				library: {
					name: 'ReactRefreshRuntime',
					type: 'window',
				},
			},
		},
		plugins: [
			new DependencyExtractionWebpackPlugin( {
				useDefaults: false,
			} ),
		],
	},
	{
		...sharedConfig,
		mode:
			process.env.NODE_ENV === 'production'
				? 'production'
				: 'development',
		name: 'react-jsx-runtime',
		entry: {
			'react-jsx-runtime': {
				import: 'react/jsx-runtime',
				library: {
					name: 'ReactJSXRuntime',
					type: 'window',
				},
			},
		},
		plugins: [
			new DependencyExtractionWebpackPlugin( {
				injectPolyfill: false,
				useDefaults: false,
				requestToExternal: ( request ) => {
					if ( request === 'react' ) {
						return 'React';
					}
				},
				requestToHandle: ( request ) => {
					if ( request === 'react' ) {
						return 'react';
					}
				},
			} ),
		],
	},
];
