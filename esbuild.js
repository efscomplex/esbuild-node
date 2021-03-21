require('esbuild').buildSync({
	entryPoints: ['src/index.ts'],
	bundle: true,
	platform: 'node',
	outfile: 'build/app.js',
	external: ['express'],
	define: {
		'process.env.NODE_ENV': '"production"'
	}
})
