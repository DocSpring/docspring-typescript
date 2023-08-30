import { CreateFolderDataFolder } from './createFolderDataFolder';
export declare class CreateFolderData {
    'folder': CreateFolderDataFolder;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
