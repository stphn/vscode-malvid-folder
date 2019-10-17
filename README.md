# CREATE MALVID COMPONENT

[![Greenkeeper badge](https://badges.greenkeeper.io/stphn/vscode-malvid-folder.svg)](https://greenkeeper.io/)

## The easiest way to create folders for Malvid components within VSCode

This extension allows you to create a component inside an already and unique existing *"components"* folder.

1. The workspace directory will be scanned for a *"components"* folder, ignoring *"node-modules"* and *"dist"* folder

2. If multiples *"components"* folder are found your component will be created at the root of the directory.

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

Activate command (cmd + Shift + p ) or use the context menu (right click)

choose between **"New Malvid Component"** or **"New Malvid Component With Config"**.

![screenshot](https://raw.githubusercontent.com/stphn/vscode-malvid-folder/master/images/screenshot.png)

## Features

### Inside the "components" folder

We are looking for an existing *"components"* folder and components will be created there.
If not, this falls back to the workspace root "vscode.workspace.rootPath"

### Naming convention autocorrection

The name you enter will be converted in snake case.

i.e "loremFolder Ipsum" => "lorem_folder_ipsum"

### Templates have preformated defaults

**.njk** file inherits the component name as class name

```html
<div class="{componentName}">

</div>
```

**.data.js** files already have module.exports
```javascript
module.exports = {

}
```

**.config.js** files already have module.exports
```javascript
module.exports = {
	group: ''
}
```

---
🤙🏾 Thanks to [Tobias Reich](https://github.com/electerious) and [Markus Morley](https://github.com/gasseklopper)