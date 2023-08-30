export declare class SubmissionDataRequest {
    'id': string;
    'submissionId'?: string;
    'name': string | null;
    'email': string | null;
    'order': number;
    'sortOrder': number;
    'fields': Array<string> | null;
    'metadata': object;
    'state': SubmissionDataRequest.StateEnum;
    'viewedAt'?: string | null;
    'completedAt'?: string | null;
    'authType'?: SubmissionDataRequest.AuthTypeEnum;
    'authSecondFactorType'?: SubmissionDataRequest.AuthSecondFactorTypeEnum;
    'authProvider'?: string | null;
    'authSessionStartedAt'?: string | null;
    'authSessionIdHash'?: string | null;
    'authUserIdHash'?: string | null;
    'authUsernameHash'?: string | null;
    'authPhoneNumberHash'?: string | null;
    'ipAddress'?: string | null;
    'userAgent'?: string | null;
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
export declare namespace SubmissionDataRequest {
    enum StateEnum {
        Pending,
        Completed
    }
    enum AuthTypeEnum {
        None,
        Password,
        Oauth,
        EmailLink,
        PhoneNumber,
        Ldap,
        Saml
    }
    enum AuthSecondFactorTypeEnum {
        None,
        PhoneNumber,
        Totp,
        MobilePush,
        SecurityKey,
        Fingerprint
    }
}
