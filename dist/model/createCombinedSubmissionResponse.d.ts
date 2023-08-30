import { CombinedSubmission } from './combinedSubmission';
export declare class CreateCombinedSubmissionResponse {
    'status': CreateCombinedSubmissionResponse.StatusEnum;
    'errors'?: Array<string>;
    'combinedSubmission': CombinedSubmission;
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
export declare namespace CreateCombinedSubmissionResponse {
    enum StatusEnum {
        Success,
        Error
    }
}
