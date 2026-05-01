import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'

export default function Login(){
  const router = useRouter()
  const [user,setUser] = useState('')
  const [pass,setPass] = useState('')
  const [error,setError] = useState('')

  useEffect(()=>{
    if(typeof window !== 'undefined'){
      if(localStorage.getItem('bluecube_auth')==='1') router.push('/dashboard')
    }
  },[])

  function handleSubmit(e){
    e.preventDefault()
    if(user==='admin' && pass==='bluecube'){
      localStorage.setItem('bluecube_auth','1')
      router.push('/dashboard')
    } else {
      setError('Invalid ID or password')
    }
  }

  return (
    <div className="auth-shell">
      <div className="login-card auth-card">
        <div className="eyebrow">Blue Cube Access</div>
        <h2>Admin Login</h2>
        <p className="small-muted">Enter ID and password to manage orders, billing, and live transaction flow.</p>
        <form onSubmit={handleSubmit}>
          <label className="small-muted">ID</label>
          <input className="input" value={user} onChange={e=>setUser(e.target.value)} />
          <label className="small-muted">Password</label>
          <input className="input" type="password" value={pass} onChange={e=>setPass(e.target.value)} />
          <div style={{height:12}} />
          <button className="btn btn-primary full" type="submit">Sign in</button>
        </form>
        {error && <p className="error-text">{error}</p>}
        <div style={{marginTop:12}} className="small-muted">Default: <strong>admin</strong> / <strong>bluecube</strong></div>
      </div>
    </div>
  )
}
