'use strict'
const vscode = require('vscode')
const fse = require('fs-extra')
const fs = require('fs')
const path = require('path')
const glob = require('glob')
const snake = require('change-case').snake

function logger(type, msg = '') {
	switch (type) {
		case 'success': return vscode.window.setStatusBarMessage(`Success: ${msg}`, 5000)
		case 'warning': return vscode.window.showWarningMessage(`Warning: ${msg}`)
		case 'error': return vscode.window.showErrorMessage(`Failed: ${msg}`)
	}
}

module.exports = {
	logger,
	generators: {
		templatesDir: path.join(__dirname, '/templates'),

		createFile: (file, data) =>
		new Promise(resolve => {
			let output = fse.outputFile(file, data)
			resolve(output)
		}),

		resolveWorkspaceRoot: path =>
		path.replace('${workspaceFolder}', vscode.workspace.rootPath),

		createComponentDir: function(uri, componentName) {
			let contextMenuSourcePath

			if (uri && fs.lstatSync(uri.fsPath).isDirectory()) {
				contextMenuSourcePath = uri.fsPath
			} else if (uri) {
				contextMenuSourcePath = path.dirname(uri.fsPath)
			} else {
				contextMenuSourcePath = vscode.workspace.rootPath
			}

			const folders = glob.sync('**/components', {
				cwd: contextMenuSourcePath
			})
			console.log(folders)

			let componentDir

			if (folders.length === 0) componentDir = `${ contextMenuSourcePath }/${snake(componentName)}`

			else componentDir = `${ contextMenuSourcePath }/${ folders[0] }/${snake(componentName)}`

			fse.mkdirsSync(componentDir)

			return componentDir
		},

		createComponent: function(componentDir, componentName) {
			let templateFileName = this.templatesDir + `/njk.template`

			const compName = snake(componentName)

			let componentContent = fs
				.readFileSync(templateFileName)
				.toString()
				.replace(/{componentName}/g, compName)

			let filename = `${componentDir}/${compName}.njk`

			return this.createFile(filename, componentContent)
		},

		createDataJs: function(componentDir, componentName) {
			let templateFileName = this.templatesDir + `/data.template`

			const compName = snake(componentName)

			let componentContent = fs
				.readFileSync(templateFileName)
				.toString()
				.replace(/{componentName}/g, compName)

			let filename = `${componentDir}/${compName}.data.js`

			return this.createFile(filename, componentContent)
		},
		createConfigJs: function(componentDir, componentName) {
			let templateFileName = this.templatesDir + `/config.template`
			const compName = snake(componentName)

			let componentContent = fs
				.readFileSync(templateFileName)
				.toString()
				.replace(/{componentName}/g, compName)

			let filename = `${componentDir}/${compName}.config.js`

			return this.createFile(filename, componentContent)
		}
	}
};
