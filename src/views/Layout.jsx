import React from 'react';

export default function Layout(props) {
  const {pageName, menu, children} = props
  
  return (
    <main className={`${pageName} layout`}>
      <nav>
        { menu }
      </nav>

      <section>
        { children }
      </section>
    </main>
  );
};
