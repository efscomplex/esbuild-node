require('esbuild').buildSync({
	entryPoints: ['src/index.ts'],
	bundle: true,
	platform: 'node',
	outfile: 'build/app.js',
	define: {
		'process.env.NODE_ENV': '"production"'
	}
})
