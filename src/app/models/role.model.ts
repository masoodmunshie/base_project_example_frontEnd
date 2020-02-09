import { right } from './right.model';

export class role{
    id:number;
    name: string;
}

export class role_item{

    role:role;
    rights:right[];
}

export class role_list{

    roles: role_item[];
    roles_count: number;

}