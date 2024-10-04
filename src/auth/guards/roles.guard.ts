import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles as ROLES_KEY } from '../decorators/roles.decorator'; // Aquí cambia a 'roles'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>(ROLES_KEY, context.getHandler()); // Cambié 'Roles' a 'ROLES_KEY'
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return this.matchRoles(roles, user.userRoles);
  }

  matchRoles(roles: string[], userRoles: string[]){
    let acces = false;
    userRoles.forEach((userRole) => {
        if (roles.includes(userRole)) acces = true
    })
    return acces;
  }
}
