export interface UserModel {
  userId: string;
  name: string | null;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}