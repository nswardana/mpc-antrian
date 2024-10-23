import { RaRecord, Identifier } from 'react-admin';

export interface Reban extends RaRecord {
    id: Identifier;
    id_alp: integer;
    id_zon: integer;
    name: String;
    area: String;
    wide: string;
    capacity: string;
    address: string;
    state: string;
}

export interface Periode extends RaRecord {
    id: Integer;
    reban_id: Integer;
    periode: String;
    checkin_datte: Date;
    doc: String;
    doc_weight: String;
    doc_price: string;
    description: string;
}