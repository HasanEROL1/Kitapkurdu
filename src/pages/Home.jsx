import { NavLink } from "react-router-dom";


const Home = () => {
  return (
    <div className="container my-5 d-flex flex-column align-items-center gap-5"><h1 className="mt-3 display-3
    ">Hoş Geldiniz</h1>
    <img src="/welcome.webp" className="img-fluid rounded image mt-n4"
     style={{ marginTop: '-5rem' }}/>
<NavLink to ="/ürünler" className="text-decoration-none">
    <p className= "p-3 bg-dark rounded text-primary shadow-sm"
     style={{ marginTop: '-8rem' }}>Ürünler Sayfasında Yeni Çıkan Bütün Kitaplara Ulaşabilirsiniz</p>
    </NavLink>
    </div>
  )
}

export default Home