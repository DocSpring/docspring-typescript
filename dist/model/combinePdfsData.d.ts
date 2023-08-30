export declare class CombinePdfsData {
    'deleteCustomFiles'?: boolean;
    'expiresIn'?: number;
    'metadata'?: object;
    'password'?: string;
    'sourcePdfs': Array<object>;
    'test'?: boolean;
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
