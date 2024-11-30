import { pluginReact } from "@rsbuild/plugin-react";
import { defineConfig } from "@rslib/core";

export default defineConfig({
    lib: [{
        format: "esm",
        syntax: "esnext",
        bundle: false,
        dts: true
        // bundle: true,
        // dts: {
        //     bundle: true
        // }
    }],
    source: {
        entry: {
            index: "./src/index.ts"
        },
        tsconfigPath: "./tsconfig.build.json"
    },
    output: {
        target: "web",
        distPath: {
            root: "./dist"
        },
        cleanDistPath: true,
        minify: false
    },
    plugins: [pluginReact()]
});
