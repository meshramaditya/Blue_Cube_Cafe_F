import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Sidebar(){
  const router = useRouter()

  function navClass(path){
    return `side-link${router.asPath === path ? ' active' : ''}`
  }

  return (
    <div>
      <nav className="side-nav">
        <Link href="/dashboard" className={navClass('/dashboard')}>POS</Link>
        <Link href="/dashboard?tab=orders" className={navClass('/dashboard?tab=orders')}>Orders</Link>
        <Link href="/dashboard?tab=transactions" className={navClass('/dashboard?tab=transactions')}>Transactions</Link>
        <Link href="/dashboard?tab=analytics" className={navClass('/dashboard?tab=analytics')}>Analytics</Link>
        <a className="side-link side-link-logout" href="#" onClick={(e)=>{e.preventDefault(); localStorage.removeItem('bluecube_auth'); location.href='/'}}>Sign out</a>
      </nav>
      <div className="sidebar-note small-muted">Daily operations • Billing • Insights</div>
    </div>
  )
}
