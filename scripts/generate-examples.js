const { searchInDir } = require("./utils")
const path = require('path');
const fs = require('fs');
const slugify = require('slugify')
const Mustache = require('mustache');
const bsiData = require("../bootstrap-italia/package.json")


const SEARCH_DIR = path.join("src", "data", "components_json")
const EXAMPLES_DIR = path.join("static", "examples")
const HTML_TEMPLATE = fs.readFileSync(path.join(EXAMPLES_DIR, "templates", "base.html"), 'utf-8')

function generateExamples() {
    const jsonFiles = searchInDir(SEARCH_DIR, ".json")
    for (const jsonFile of jsonFiles) {
        const parsedJson = JSON.parse(fs.readFileSync(path.join(SEARCH_DIR, jsonFile), 'utf-8'))
        for (const example of parsedJson) {
            const filePath = `${path.join(EXAMPLES_DIR, slugify(example.name).toLowerCase())}.html`
            fs.writeFileSync(
                filePath,
                Mustache.render(HTML_TEMPLATE, { 
                    code: example.content,
                    name: example.name,
                    bsiversion: bsiData.version
                }),
                'utf-8'
            )
        }
    }
}

module.exports = {
    generateExamples
}