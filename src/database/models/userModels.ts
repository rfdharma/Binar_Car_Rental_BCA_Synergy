
import { Model } from 'objection';

class User extends Model {
  id!: number;
  email!: string;
  password!: string;
  role!: string;
  created_at?: string;
  updated_at?: string;

  static tableName = 'users';
}

export default User;
