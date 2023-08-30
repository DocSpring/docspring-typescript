import { Submission } from './submission';
export declare class CreateSubmissionBatchSubmissionsResponse {
    'status': CreateSubmissionBatchSubmissionsResponse.StatusEnum;
    'errors'?: Array<string>;
    'submission'?: Submission;
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
export declare namespace CreateSubmissionBatchSubmissionsResponse {
    enum StatusEnum {
        Success,
        Error,
        ValidButNotSaved
    }
}
