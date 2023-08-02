"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const translate_js_1 = require("@neiderruiz/translate-js");
const translateBlocks = async (blocks, outputLanguage = 'en', inputLanguage = 'es') => {
    const newBlocks = {};
    const transformations = {
        'paragraph': async (item) => {
            item.data.text = await (0, translate_js_1.translate)(item.data.text, inputLanguage, outputLanguage);
            return item;
        },
        'header': async (item) => {
            item.data.text = await (0, translate_js_1.translate)(item.data.text, inputLanguage, outputLanguage);
            return item;
        },
        'list': async (item) => {
            item.data.items = await Promise.all(item.data.items.map(async (text) => await (0, translate_js_1.translate)(text, inputLanguage, outputLanguage)));
            return item;
        },
        'image': async (item) => {
            item.data.caption = await (0, translate_js_1.translate)(item.data.caption, inputLanguage, outputLanguage);
            return item;
        },
        'warning': async (item) => {
            item.data.title = await (0, translate_js_1.translate)(item.data.title, inputLanguage, outputLanguage);
            item.data.message = await (0, translate_js_1.translate)(item.data.message, inputLanguage, outputLanguage);
            return item;
        },
        'quote': async (item) => {
            item.data.text = await (0, translate_js_1.translate)(item.data.text, inputLanguage, outputLanguage);
            item.data.caption = await (0, translate_js_1.translate)(item.data.caption, inputLanguage, outputLanguage);
            return item;
        },
        'checklist': async (item) => {
            item.data.items = await Promise.all(item.data.items.map(async (itemCheck) => {
                itemCheck.text = await (0, translate_js_1.translate)(itemCheck.text, inputLanguage, outputLanguage);
                return itemCheck;
            }));
            return item;
        },
        'table': async (item) => {
            item.data.content = await Promise.all(item.data.content.map(async (itemTable) => await Promise.all(itemTable.map(async (text) => await (0, translate_js_1.translate)(text, inputLanguage, outputLanguage)))));
            return item;
        },
        'default': (item) => {
            return item;
        }
    };
    for (let key of Object.keys(blocks)) {
        if (key === 'blocks') {
            newBlocks[key] = await Promise.all(blocks[key].map(async (item) => {
                let data = { ...item };
                const transform = transformations[data.type] || transformations['default'];
                data = await transform(data);
                return data;
            }));
        }
        else {
            newBlocks[key] = blocks[key];
        }
    }
    return newBlocks;
};
exports.default = translateBlocks;
