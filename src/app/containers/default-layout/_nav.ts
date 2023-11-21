import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Quản lý hệ thống'
  },
  {
    name: 'Tài khoản',
    url: '/manage-api/account',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Chính sách',
    url: '/manage-api/policy',
    iconComponent: { name: 'cil-notes' },
  },
  {
    name: 'APIs',
    url: '/manage-api/apis',
    iconComponent: { name: 'cil-pencil' }
  },
  {
    name: 'Database',
    url: '/manage-api/database',
    iconComponent: { name: 'cil-puzzle' },
    badge: {
      color: 'success',
      text: 'UPDATE-LATER'
    }
  },
];
