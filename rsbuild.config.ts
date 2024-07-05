import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginTypedCSSModules } from "@rsbuild/plugin-typed-css-modules";

export default defineConfig({
	plugins: [pluginReact(), pluginSass(), pluginTypedCSSModules()],
	output: {
		cssModules: {
			auto: (resource) => {
				return resource.includes(".module.") || resource.includes("shared/");
			},
		},
	},
});
