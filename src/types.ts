type BlockType = 'paragraph' | 'header' | 'list' | 'image' | 'warning' | 'quote' | 'checklist' | 'table' | 'linkTool';

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
    items: { text: string }[];
};

type TableData = {
    content: string[][];
};

type LinkToolData = {
    link: string;
    meta: {
        title: string;
        description: string;
        image: {
            url: string;
        };
    };
};

export type TypeParagraph = BlockData<TextData>;
export type TypeHeader = BlockData<TextData>;
export type TypeList = BlockData<ListData>;
export type TypeImage = BlockData<ImageData>;
export type TypeWarning = BlockData<WarningData>;
export type TypeQuote = BlockData<QuoteData>;
export type TypeChecklist = BlockData<ChecklistData>;
export type TypeTable = BlockData<TableData>;
export type TypeLinkTool = BlockData<LinkToolData>;

type Block<T> = {
    id?: string;
    type: BlockType;
    data: T;
};

export type EditorBlock = 
    | Block<TextData> 
    | Block<ListData> 
    | Block<ImageData> 
    | Block<WarningData> 
    | Block<QuoteData> 
    | Block<ChecklistData> 
    | Block<TableData>
    | Block<LinkToolData>;

export type EditorBlocks = {
    blocks: EditorBlock[];
    [key: string]: any; // for other properties
}
export type Blocks = {
    [key: string]: EditorBlock[] | string;
  };