export interface Customer {
  id?: string;
  name: string;
  fname: string;
  mInitial?: string;
  lname: string;
  email: string;
  phone:string;
  dob: string;
  ssn: string;
  accounts: [];
  address?: {
    primary: {
      street: string;
      secondaryStreet: string;
      state: string;
      city: string;
      zipcode: string;
    },
    mailing?: {
      street: string;
      secondaryStreet: string;
      state: string;
      city: string;
      zipcode: string;
    }
  },
  employment: {
    type: string;
    address: {
      street: string;
      secondaryStreet: string;
      state: string;
      city: string;
      zipcode: string;    
    }

  }
}
