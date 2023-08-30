import { CreateSubmissionBatchSubmissionsResponse } from './createSubmissionBatchSubmissionsResponse';
import { SubmissionBatch } from './submissionBatch';
export declare class CreateSubmissionBatchResponse {
    'status': CreateSubmissionBatchResponse.StatusEnum;
    'error'?: string;
    'errors'?: Array<string>;
    'submissionBatch': SubmissionBatch;
    'submissions': Array<CreateSubmissionBatchSubmissionsResponse>;
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
export declare namespace CreateSubmissionBatchResponse {
    enum StatusEnum {
        Success,
        Error
    }
}
