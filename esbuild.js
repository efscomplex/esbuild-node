require('esbuild').buildSync({
	entryPoints: ['src/index.ts'],
	bundle: true,
	platform: 'node',
	outfile: 'build/app.js',
	external: ['express'],
	loader: { '.png': 'file' },
	define: {
		'process.env.NODE_ENV': '"production"'
	},
	inject: ['./react-shim.js']
})
