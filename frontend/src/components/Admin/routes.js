import AdminLogin from "./components/AdminLogin";
import Dashboard from "./pages/Dashboard";
import AddProductPage from "./pages/AddProductPage";
import OrdersPage from "./pages/OrdersPage"
import ProductManagePage from "./pages/ProductManagePage"
import UpdateProductPage from "./pages/UpdateProductPage"
import ProfilePage from "./pages/ProfilePage";
import UsersPage from "./pages/UsersPage";
import AddAdminPage from "./pages/AddAdminPage";

const adminRoutes = [
    {
        path: '/admin',
        component: AdminLogin,
        exact: true
    },
    {
        path: '/admin/dashboard',
        component: Dashboard,
        exact: true
    },
    {
        path: '/admin/addproduct',
        component: AddProductPage,
        exact: true
    },
    {
        path: '/admin/orders',
        component: OrdersPage,
        exact: true
    },
    {
        path: '/admin/products',
        component: ProductManagePage,
        exact: true
    },
    {
        path: '/admin/updateproduct/:id',
        component: UpdateProductPage,
        exact: true
    },
    {
        path: '/admin/profile',
        component: ProfilePage,
        exact: true
    },
    {
        path: '/admin/users',
        component: UsersPage,
        exact: true
    },
    {
        path: '/admin/addadmin',
        component: AddAdminPage,
        exact: true
    },
]

export default adminRoutes;