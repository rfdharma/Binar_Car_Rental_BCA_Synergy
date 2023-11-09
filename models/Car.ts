import { Model, Pojo } from 'objection';
import { knexConfig } from '../knexfile';

const knexInstance = require('knex')(knexConfig.development);
Model.knex(knexInstance);

class Car extends Model {
    static get tableName() {
        return 'cars';
    }

    id!: number;
    name!: string;
    price!: number;
    size!: string;
    image!: string;
    created_at?: string;
    updated_at?: string;

    // $formatJson(json: Pojo) {
    //     json = super.$formatJson(json);
    //     return json;
    // }
}

export default Car;
