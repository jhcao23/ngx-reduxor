import { Action } from '@ngrx/store';

export interface PayloadableAction<T> extends Action {
    payload: T;
}

export interface PayloadableWithCode<T> {
    code: string; // code is usually parent Code
    content: T;
}
export interface ArrayPayloadableWithCode<T> {
    code: string;
    content: T[];
}
export class PayloadWithCode<T> implements PayloadableWithCode<T> {
    code: string;
    content: T;

    constructor(code: string, content: T) {
        this.code = code;
        this.content = content;
    }
}