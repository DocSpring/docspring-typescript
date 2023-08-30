export declare class CreateSubmissionDataRequestData {
    'authPhoneNumberHash'?: string | null;
    'authProvider'?: string | null;
    'authSecondFactorType'?: CreateSubmissionDataRequestData.AuthSecondFactorTypeEnum;
    'authSessionIdHash'?: string | null;
    'authSessionStartedAt'?: string | null;
    'authType': CreateSubmissionDataRequestData.AuthTypeEnum;
    'authUserIdHash'?: string | null;
    'authUsernameHash'?: string | null;
    'email': string | null;
    'fields'?: Array<string> | null;
    'metadata'?: object;
    'name'?: string | null;
    'order'?: number;
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
export declare namespace CreateSubmissionDataRequestData {
    enum AuthSecondFactorTypeEnum {
        None,
        PhoneNumber,
        Totp,
        MobilePush,
        SecurityKey,
        Fingerprint
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
}
