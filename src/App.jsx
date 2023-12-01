
// import './App.css'

// const App = () =>{

//   let alumno = "Rodrigo"
//   return (
//     <div className="contenedor">
//       <h1>Hola {alumno}</h1>
//     </div>
//   )
// }

// export default App


// JSX: Es una mezcla de JS  + HTML. me permite hacer funciones que retornan HTML
//El html que retorna tiene todas las funcionalidades de JS




import './App.css'
import Footer from './pages/Footer'
import Main from './pages/Main'
import Nav from './pages/Nav'

const App = () =>{

  return (
    <div>
      <Nav />
      <Main />
      <Footer />
    </div>
  )
}

export default App