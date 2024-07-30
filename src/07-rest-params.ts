import { ROLES, User } from "./01-enum"

const currentUser: User = {
  username: 'yesiddn',
  role: ROLES.ADMIN,
}

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }

  return false;
}

console.log('check admin role', checkAdminRole());

export const checkRole = (roleOne: string, roleTwo: string) => {
  if (currentUser.role === roleOne || currentUser.role === roleTwo) {
    return true;
  }

  return false;
}

console.log('check role', checkRole(ROLES.ADMIN, ROLES.CUSTOMER));

export const checkRoleV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }

  return false;
}

console.log('v2', checkRoleV2([ROLES.ADMIN, ROLES.CUSTOMER]));

export const checkRoleV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }

  return false;
}

console.log('v3', checkRoleV3(ROLES.ADMIN, ROLES.CUSTOMER));
