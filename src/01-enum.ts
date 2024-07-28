enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
} // generalmente se usa en mayusculas

type User = {
  username: string;
  role: ROLES;
}

const yesidUser: User = {
  username: 'admin',
  // role: 'admin', // no se puede asignar
  role: ROLES.ADMIN
}
