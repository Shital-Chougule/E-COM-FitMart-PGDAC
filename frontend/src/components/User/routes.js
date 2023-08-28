import LoginPage from "./pages/LoginPage";
import AllProductPage from "./pages/AllProducts";
import CartPage from "./pages/CartPage";
import Dashboard from "./pages/Dashboard";
import AboutPage from "./pages/AboutPage";
import UserProductPage from "./pages/UserProductPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import CheckoutPage from "./pages/CheckoutPage";
import UpdateProfilePage from "./pages/UpdateProfilePage";

const userRoutes = [
    {
        path: '/login',
        component: LoginPage,
        exact: true
    },
    {
        path: '/register',
        component: RegisterPage,
        exact: true
    },

    {
        path: '/',
        component: Dashboard,
        exact: true
    },
    
    {
        path: '/user/product',
        component: AllProductPage,
        exact: true
    },
    {
        path: '/user/about',
        component: AboutPage,
        exact: true
    },
    {
        path: '/user/productpage/:id',
        component: UserProductPage,
        exact: true
    },
    {
        path: '/cart/:id',
        component: CartPage,
        exact: true
    },
    {
        path: '/*',
        component: NotFoundPage,
        exact: true
    },
    {
        path: '/checkout',
        component: CheckoutPage,
        exact: true
    },
    {
        path: '/user/profile/:id',
        component: UpdateProfilePage,
        exact: true
    },

]

export default userRoutes;