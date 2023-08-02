import { Blocks, EditorBlocks } from './types';
declare const translateBlocks: (blocks: EditorBlocks, outputLanguage?: string, inputLanguage?: string) => Promise<Blocks>;
export default translateBlocks;
