import Foo from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return (
        <div className="content">
          <Navbar></Navbar>
           {children}
          <Foo></Foo>
        </div>
    );
}

export default Layout;