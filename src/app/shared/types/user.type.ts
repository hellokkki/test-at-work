
export type TUserResponse = {
    id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export type TUserCard = {
  username: TUserResponse['username'];
  city: TUserResponse['address']['city'];
  companyName: TUserResponse['company']['name'];
  id: TUserResponse['id'];
  activeView: 'card-active' | 'card-archived';
  avatarProp?: string;
}

export type TUserProfile = {
    name: TUserResponse['name'];
    username: TUserResponse['username'];
    email: TUserResponse['email'];
    city: TUserResponse['address']['city'];
    phone: TUserResponse['phone'];
    company: TUserResponse['company']['name'];
    avatar?: string;
    status: 'active' | 'archived' | 'hidden';
    id: number;
}

export type TUserFormData = {
  name: TUserProfile['name'],
  username: TUserProfile['username'],
  email: TUserProfile['email'],
  city: TUserProfile['city'],
  company: TUserProfile['company'],
  phone: TUserProfile['phone'],
}