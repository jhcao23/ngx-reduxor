import {UniqueCode} from './store.model';
import {createEntityAdapter, EntityState, EntityAdapter} from '@ngrx/entity';

export function generalSelectId(uniqueCode: UniqueCode): string {
    return uniqueCode.code;
}

export const GENERAL_COURSE_ADAPTER: EntityAdapter<UniqueCode> = createEntityAdapter<UniqueCode>({
    selectId: generalSelectId
})