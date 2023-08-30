import { SubmissionDataRequest } from './submissionDataRequest';
export declare class UpdateDataRequestResponse {
    'status': UpdateDataRequestResponse.StatusEnum;
    'errors'?: Array<string>;
    'dataRequest': SubmissionDataRequest;
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
export declare namespace UpdateDataRequestResponse {
    enum StatusEnum {
        Success,
        Error
    }
}
