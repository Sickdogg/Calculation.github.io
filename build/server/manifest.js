const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","image/icon-128x128.png","image/icon-144x144.png","image/icon-152x152.png","image/icon-192x192.png","image/icon-384x384.png","image/icon-512x512.png","image/icon-72x72.png","image/icon-96x96.png","manifest.json"]),
	mimeTypes: {".png":"image/png",".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.DJB-z1-Z.js","app":"_app/immutable/entry/app.CdL-P2wG.js","imports":["_app/immutable/entry/start.DJB-z1-Z.js","_app/immutable/chunks/entry.xJz_xbHp.js","_app/immutable/chunks/scheduler.D0bTj_Jr.js","_app/immutable/chunks/index.CFU3BeF4.js","_app/immutable/entry/app.CdL-P2wG.js","_app/immutable/chunks/scheduler.D0bTj_Jr.js","_app/immutable/chunks/index.BCgFsq5-.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-CBGbQveS.js')),
			__memo(() => import('./chunks/1-B62Fru1w.js')),
			__memo(() => import('./chunks/2-C2EgA3bs.js')),
			__memo(() => import('./chunks/3-DVwlpQjX.js')),
			__memo(() => import('./chunks/4-CvSU3GRR.js')),
			__memo(() => import('./chunks/5-CqTKUNiC.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/privacy",
				pattern: /^\/privacy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/serviceRight",
				pattern: /^\/serviceRight\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
