export interface Asset {
  id?: string;
  name: string;
  description: string;
  model: string;
  owner: string;
  status: string;
  healthlevel: string;
  image: string;
  companyId: string;
  unitId: string;
  responsibles: string[];
}
