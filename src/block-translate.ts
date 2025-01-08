import { translate } from '@neiderruiz/translate-js';
import { Blocks, EditorBlock, EditorBlocks, TypeChecklist, TypeHeader, TypeImage, TypeLinkTool, TypeList, TypeParagraph, TypeQuote, TypeTable, TypeWarning } from './types';

const translateBlocks = async (blocks: EditorBlocks, outputLanguage = 'en', inputLanguage = 'es') => {
    const newBlocks: Blocks = {};

    const transformations = {
        'paragraph': async (item: TypeParagraph) => {
            item.data.text = await translate(item.data.text, inputLanguage, outputLanguage);
            return item;
        },
        'header': async (item: TypeHeader) => {
            item.data.text = await translate(item.data.text,inputLanguage,outputLanguage);
            return item;
        },
        'list': async (item: TypeList) => {
            item.data.items = await Promise.all(item.data.items.map(async text =>
                await translate(text, inputLanguage,outputLanguage)
            ));
            return item;
        },
        'image': async (item: TypeImage) => {
            item.data.caption = await translate(item.data.caption,inputLanguage,outputLanguage
        );
            return item;
        },
        'warning': async (item: TypeWarning) => {
            item.data.title = await translate(item.data.title,inputLanguage,outputLanguage);
            item.data.message = await translate(item.data.message,inputLanguage,outputLanguage);
            return item;
        },
        'quote': async (item: TypeQuote) => {
            item.data.text = await translate(item.data.text,inputLanguage,outputLanguage);
            item.data.caption = await translate(item.data.caption, inputLanguage, outputLanguage);
            return item;
        },
        'checklist': async (item: TypeChecklist) => {
            item.data.items = await Promise.all(item.data.items.map(async (itemCheck) => {
                itemCheck.text = await translate(itemCheck.text,inputLanguage,outputLanguage);
                return itemCheck;
            }));
            return item;
        },
        'table': async (item: TypeTable) => {
            item.data.content = await Promise.all(item.data.content.map(async itemTable =>
                await Promise.all(itemTable.map(async text =>
                    await translate(text,inputLanguage,outputLanguage))
                )
            ));
            return item;
        },
        'linkTool': async (item: TypeLinkTool) => {
            item.data.meta.description = await translate(item.data.meta.description,inputLanguage,outputLanguage);
            return item;
        },
        'default': (item: any) => {
            return item;
        }
    };

    for (let key of Object.keys(blocks)) {
        if (key === 'blocks') {
            newBlocks[key] = await Promise.all((blocks[key] as EditorBlock[]).map(async item => {
                let data = { ...item };
                const transform = transformations[data.type] || transformations['default'];
                data = await transform(data as any);
                return data;
            }));
        } else {
            newBlocks[key] = blocks[key];
        }
    }

    return newBlocks;
}

export default translateBlocks;