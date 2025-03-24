import React from 'react';

/**
 * Props do componente Layout
 */
interface LayoutProps {
  /** Conteúdo filho a ser renderizado dentro do layout */
  children: React.ReactNode;
}

/**
 * Componente de Layout
 * 
 * Wrapper principal que define a estrutura básica das páginas.
 * Garante altura mínima para ocupar toda a viewport.
 * 
 * @component
 * @example
 * return (
 *   <Layout>
 *     <Content />
 *   </Layout>
 * )
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
};

export default Layout;