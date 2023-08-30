import { Submission } from './submission';
export declare class SubmissionBatch {
    'id': string;
    'totalCount': number;
    'pendingCount': number;
    'errorCount': number;
    'completionPercentage': number;
    'state': SubmissionBatch.StateEnum;
    'processedAt': string | null;
    'metadata': object;
    'submissions'?: Array<Submission>;
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
export declare namespace SubmissionBatch {
    enum StateEnum {
        Pending,
        Processed,
        Error
    }
}
