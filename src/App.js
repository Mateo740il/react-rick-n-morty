import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom";

/*Pages*/
import Home, { episodeLoader } from "./pages/Home";

import NotFound from './pages/NotFound'
import Characters,{charactersLoader} from "./pages/characters/Characters";
import CharacterDetails, { characterDetailsLoader } from "./pages/characters/CharacterDetails";
import CharacterError from "./pages/characters/CharacterError"
import Contact,{contactAction} from "./pages/Contact";
import AboutDetails from "./components/AboutDetails";

/*Layouts*/
import RootLayout from "./layouts/RootLayout";
import CharactersLayout from "./layouts/CharactersLayout";
import AboutLayout from "./layouts/AboutLayout";

function App() {

  const router =createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>} loader={episodeLoader}/>
        <Route path="about" element={<AboutLayout/>}>
            <Route path="details" element={<AboutDetails/>} />
        </Route>
        <Route path='characters' element={<CharactersLayout/>} errorElement={<CharacterError/>}>
          <Route index element={<Characters/>} loader={charactersLoader}/>
          <Route path=":id" element={<CharacterDetails/>} loader={characterDetailsLoader}/>
        </Route>
        <Route path="contact" element={<Contact/>} action={contactAction}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
