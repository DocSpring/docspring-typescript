export * from './PDFApi';
import { PDFApi } from './PDFApi';
//import { Client } from './Client';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

//export const APIS = [Client, PDFApi];
export const APIS = [PDFApi];
