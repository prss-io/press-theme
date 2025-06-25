"use strict";

const fs = require("fs-extra");
const path = require("path");
const webpack = require("webpack");
const config = require("../webpack.config");
const clientScriptConfig = require("../clientScript.webpack.config");
const manifest = require("../public/manifest.json");
const getPackageJson = require("../scripts/getPackageJson");

const publicFolder = path.resolve(__dirname, "../public");
const buildFolder = path.resolve(__dirname, "../build");
const manifestFile = path.resolve(__dirname, "../build/manifest.json");

const {
  version,
  name,
  license,
  homepage,
  description,
  author = "",
} = getPackageJson();

const { title, type, parser, siteVars, isSSR, combinedCSS, clientScript } = manifest;

config.plugins.push(function () {
  this.hooks.done.tapAsync("done", function (stats, callback) {
    if (stats.compilation.errors.length > 0) {
      throw new Error(
        stats.compilation.errors.map(err => err.message || err)
      );
    }
    callback();
  });
});

const start = async () => {
  /**
     * Empty dir
     */
  fs.emptyDirSync(buildFolder);

  /**
   * Run webpack
   */
  webpack(config).run(() => {
    /**
     * Run client script webpack
     */
    webpack(clientScriptConfig).run(() => {
      console.log("Client script build completed.");
    });


    /**
     * Copy public folder
     */
    copyPublicFolder();
        
    /**
     * Write manifest file
     */
    const templates = fs.readdirSync(buildFolder)
      .filter(file => file.includes(".js") && !file.includes(".js.LICENSE") && !file.includes(".js.map"))
      .map(file => file.split(".")[0]);

    const newManifest = {
      name,
      title,
      version,
      author: author.replace(/ *\<[^)]*(\)|\>) */g, ""),
      homepage,
      description,
      license,
      type,
      parser,
      siteVars,
      templates,
      isSSR,
      combinedCSS,
      clientScript
    }

    fs.writeFileSync(manifestFile, JSON.stringify(newManifest, null, 2));
  });
}

function copyPublicFolder() {
  fs.copySync(publicFolder, buildFolder, {
    dereference: true,
    filter: file => !file.includes("manifest"),
  });
}

start();