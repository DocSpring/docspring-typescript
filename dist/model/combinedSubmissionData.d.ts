export declare class CombinedSubmissionData {
    'expiresIn'?: number;
    'metadata'?: object;
    'password'?: string;
    'submissionIds': Array<string>;
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
