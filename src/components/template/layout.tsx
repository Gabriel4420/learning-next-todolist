import {FC} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
type LayoutProps = {
    children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({children}: LayoutProps) => {
  return <>{children}</>;
}

export default Layout;