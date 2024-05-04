/* eslint-disable react/prop-types */
const Layout = ({ header, footer, children, aside }) => {
  return (
    <div>
      <header>{header}</header>
      <main className='flex flex-row bg-teal-400'>
        <div>{children}</div>
        <aside className='bg-slate-600'>{aside}</aside>
      </main>
      <footer>{footer}</footer>
    </div>
  );
};

export default Layout;
