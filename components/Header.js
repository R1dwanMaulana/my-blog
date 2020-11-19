import Link from 'next/link'

export default function Header() {
  return (
    <>
      <nav>
        <h1>Bacaan</h1>
        <div>
          <Link href='/'>
            <a>Blog</a>
          </Link>
          <Link href='/'>
            <a>About Me</a>
          </Link>
        </div>
      </nav>
      <style jsx>{`
        nav {
          background: #f5f5f5;
          color: black;
          width: auto;
          padding: 0 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1rem;
        }
        nav a {
          margin-right: 1rem;
          text-decoration: none;
          color: black;
        }
        nav a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  )
}