import { CreateSubmissionDataRequestTokenResponseToken } from './createSubmissionDataRequestTokenResponseToken';
export declare class CreateSubmissionDataRequestTokenResponse {
    'status': CreateSubmissionDataRequestTokenResponse.StatusEnum;
    'errors'?: Array<string>;
    'token': CreateSubmissionDataRequestTokenResponseToken;
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
export declare namespace CreateSubmissionDataRequestTokenResponse {
    enum StatusEnum {
        Success,
        Error
    }
}
