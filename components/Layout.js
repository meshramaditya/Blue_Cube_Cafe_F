import Sidebar from './Sidebar'
export default function Layout({children}){
  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-mark">BC</div>
          <div>
            <h3>Blue Cube</h3>
            <p className="small-muted">Cafe operations suite</p>
          </div>
        </div>
        <Sidebar />
      </aside>
      <main className="main">{children}</main>
    </div>
  )
}
