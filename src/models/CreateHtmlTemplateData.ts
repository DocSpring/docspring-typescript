/* tslint:disable */
/* eslint-disable */
/**
 * API v1
 * DocSpring is a service that helps you fill out and sign PDF templates.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { HtmlTemplateData } from './HtmlTemplateData';
import {
    HtmlTemplateDataFromJSON,
    HtmlTemplateDataFromJSONTyped,
    HtmlTemplateDataToJSON,
} from './HtmlTemplateData';

/**
 * 
 * @export
 * @interface CreateHtmlTemplateData
 */
export interface CreateHtmlTemplateData {
    /**
     * 
     * @type {HtmlTemplateData}
     * @memberof CreateHtmlTemplateData
     */
    template: HtmlTemplateData;
}

/**
 * Check if a given object implements the CreateHtmlTemplateData interface.
 */
export function instanceOfCreateHtmlTemplateData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "template" in value;

    return isInstance;
}

export function CreateHtmlTemplateDataFromJSON(json: any): CreateHtmlTemplateData {
    return CreateHtmlTemplateDataFromJSONTyped(json, false);
}

export function CreateHtmlTemplateDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateHtmlTemplateData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'template': HtmlTemplateDataFromJSON(json['template']),
    };
}

export function CreateHtmlTemplateDataToJSON(value?: CreateHtmlTemplateData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'template': HtmlTemplateDataToJSON(value.template),
    };
}

