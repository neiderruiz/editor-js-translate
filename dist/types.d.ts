type BlockType = 'paragraph' | 'header' | 'list' | 'image' | 'warning' | 'quote' | 'checklist' | 'table';
type BlockData<T> = {
    type: BlockType;
    data: T;
};
type TextData = {
    text: string;
    level?: number;
};
type ListData = {
    items: string[];
};
type ImageData = {
    file: {
        url: string;
    };
    caption: string;
};
type WarningData = {
    title: string;
    message: string;
};
type QuoteData = {
    text: string;
    caption: string;
};
type ChecklistData = {
    items: {
        text: string;
    }[];
};
type TableData = {
    content: string[][];
};
export type TypeParagraph = BlockData<TextData>;
export type TypeHeader = BlockData<TextData>;
export type TypeList = BlockData<ListData>;
export type TypeImage = BlockData<ImageData>;
export type TypeWarning = BlockData<WarningData>;
export type TypeQuote = BlockData<QuoteData>;
export type TypeChecklist = BlockData<ChecklistData>;
export type TypeTable = BlockData<TableData>;
type Block<T> = {
    id?: string;
    type: BlockType;
    data: T;
};
export type EditorBlock = Block<TextData> | Block<ListData> | Block<ImageData> | Block<WarningData> | Block<QuoteData> | Block<ChecklistData> | Block<TableData>;
export type EditorBlocks = {
    blocks: EditorBlock[];
    [key: string]: any;
};
export type Blocks = {
    [key: string]: EditorBlock[] | string;
};
export {};
