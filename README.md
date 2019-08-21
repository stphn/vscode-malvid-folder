# CREATE MALVID COMPONENT

### The easiest way to create folders for Malvid components with VSCode

Your component will be created inside an already existing "components" folder.

1. The workspace directory will be scanned for a "components" folder, ignoring "node-modules" and "dist" folder

2. If multiples "components" folder are found your component will be created at the root of the directory.

At the end you get a directory that looks like this:

```
-component_folder/
--component_folder.njk
--component_folder.config.js
--component_folder.data.js
```

## Getting Started

1. Install this extension.

2. Restart VSCode

## Usage

Activate command (cmd + Shift + p )

choose between **"Create Malvid Component"** or **"Create Malvid Component With Config"**.

![screenshot](https://raw.githubusercontent.com/stphn/create-malvid-component/master/screenshot.png)

## Features

### Inside the "components" folder

We are looking for an existing "components" folder and components will be created there.
If not, this falls back to the workspace root "vscode.workspace.rootPath"

### Naming convention autocorrection

The name you enter will be converted in snake case.

i.e "loremFolder Ipsum" => "lorem_folder_ipsum"

### Templates have preformated defaults

**.njk** file inherits the component name as class name

```
<div class="{componentName}">

</div>
```

**.data.js** files already have module.exports
```
module.exports = {

}
```

**.config.js** files already have module.exports
```
module.exports = {
	group: ''
}
```

## Bonus

### Nunjucks snippets
try **row**, **inject**, **bdt**, **tar**

### Javascript snippets
try **require**

### SCSS snippets
try **cc**, **media**, **trans**