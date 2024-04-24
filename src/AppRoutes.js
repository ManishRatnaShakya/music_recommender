import Home from "./views/Home/Home";
import Search from "./views/Search/Search";
import AlbumDetail from "./views/AlbumDetail/AlbumDetail";
import Login from "./views/Login/Login";
import Artists from "./views/Artists/Artists";
import ArtistDetails from "./views/ArtistDetails/ArtistDetails";
import Register from "./views/Register/Register";
import Youtube from "./views/Youtube/components/Youtube";
import RadioView from "./views/Radio/RadioView";
// import Layout from "./hoc/Layout/Layout";
// import App from "./App";
import Favourite from "./views/Favourite/Favourite";

export default [
    {path:'/search/:keyword',component:Search,exact:true},
    {path:'/details/:id',component:AlbumDetail,exact:true},
    {path:'/register',component:Register,exact:true},
    {path:'/radio',component:RadioView,exact:true},
    {path:'/login',component:Login,exact:true},
    {path:'/artists',component:Artists,exact:true},
    {path:'/youtube',component:Youtube,exact:true},
    {path:'/favourite',component:Favourite,exact:true},
    {path:'/detailsartist/:id',component:ArtistDetails,exact:true},
    {path:'/',component:Home,exact:true},
];