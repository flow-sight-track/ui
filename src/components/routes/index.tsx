import {
  AreaChartIcon,
  ContainerIcon,
  LayoutDashboardIcon,
  NotebookTextIcon,
  PackageOpenIcon,
  ShieldIcon,
  UsersIcon,
  WalletIcon,
  WorkflowIcon
} from 'lucide-react'

export const routesConfig = [
  { icon: <LayoutDashboardIcon />, label: 'Dashboard', href: '/dashboard' },
  { icon: <UsersIcon />, label: 'Clientes', href: '/clients' },
  { icon: <WalletIcon />, label: 'Financeiro', href: '/finance' },
  { icon: <PackageOpenIcon />, label: 'Estoque', href: '/stock' },
  { icon: <ContainerIcon />, label: 'Fornecedores', href: '/suppliers' },
  { icon: <NotebookTextIcon />, label: 'Faturamento', href: '/invoicing' },
  { icon: <WorkflowIcon />, label: 'Integrações', href: '/integration' },
  { icon: <AreaChartIcon />, label: 'Relatórios', href: '/reports' },
  { icon: <ShieldIcon />, label: 'Permissões', href: '/permissions' }
]
