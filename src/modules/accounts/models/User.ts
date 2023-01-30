export interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
  role?: string;
  avatar?: string;
  companyId?: string;
  unitId?: string;
}
