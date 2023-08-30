import { Submission } from './submission';
export declare class CreateSubmissionResponse {
    'status': CreateSubmissionResponse.StatusEnum;
    'errors'?: Array<string>;
    'submission': Submission;
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
export declare namespace CreateSubmissionResponse {
    enum StatusEnum {
        Success,
        Error
    }
}
