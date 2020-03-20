import React from "react";
import "./App.css";
import { Nav, Navbar } from "react-bootstrap";
import { MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
  Link,
  useParams,
  useLocation,
  useRouteMatch
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">IsmiShop</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
            <Nav.Link ><AuthButton /></Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/product">
            <Product />
          </PrivateRoute>
          <Route exact path="/Login">
            <Login />
          </Route>
        </Switch>

        <MDBFooter
          color="blue"
          className="font-small fixed-bottom pt-4 mt-4"
        >
          <div className="footer-copyright text-center py-1">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright: <a> IsmiShop </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    </Router>
  );
}

function Shop() {
  return (
    <div>
      <h2>Selamat Datang Di IsmiShop!</h2>
      <h3>Selamat Berbelanja!</h3>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h3>Kami Menyediakan Beberapa Macam Gadget Dengan Harga Yang Pas Dikantong Anda!</h3>
    </div>
  );
}

function Product() {
  let {path, url} = useRouteMatch();
  return (
    <div className="Product">
      <div className="row">
        <div className="column">
          <div class="card">
          <img src={"/img/1.jpeg"} className="card-img-top" />
            <h6><b>HANDPHONE</b></h6>
            <p><Link to={`${url}/Oppo F5, Oppo A39`}>Oppo</Link></p>
            <p><Link to={`${url}/Iphone 4, Iphone 5`}>Iphone</Link></p>
            <p><Link to={`${url}/Samsung Galaxy A51, Samsung Galaxy A71`}>Samsung</Link></p>
          </div>
        </div>

        <div class="column">
          <div class="card">
          <img src={"/img/3.jpeg"} className="card-img-top" />
            <h6><b>LAPTOP</b></h6>
            <p><Link to={`${url}/Zenbook 13, Zenbook Pro`}>Asus</Link></p>
            <p><Link to={`${url}/Aspire 3, Swift 3`}>Acer</Link></p>
            <p><Link to={`${url}/ThinkPad, IdeaPad`}>Lenovo</Link></p>
          </div>
        </div>
  
        <div class="column">
          <div class="card">
          <img src={"/img/2.jpeg"} className="card-img-top" />
            <h6><b>TABLET</b></h6>
            <p><Link to={`${url}/Advan X7 Pro, Advan iLite`}>Advan</Link></p>
            <p><Link to={`${url}/MiPad 4, MiPad 4 Plus`}>Xiaomi</Link></p>
            <p><Link to={`${url}/Galaxy Tab S2, Galaxy Tab A`}>Samsung</Link></p>
          </div>
        </div>
        <Switch>
          <Route exact path={path}>
            <h7>&nbsp; &nbsp; Please Select a Product</h7>
          </Route>
          <Route path={`${path}/:productId`}>
            <Produc />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

function Produc(){
  let {productId} = useParams();
  return(
    <div>
      <h7>&nbsp; &nbsp; {productId}</h7>
    </div>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome{" Ismia Dwi Febrianti "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
      <p>You are not logged in.</p>
    );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
            <Redirect to={{ pathname: "/login", state: { from: location } }} />
          )
      }
    />
  );
}

function Login() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>Silahkan login Terlebih dahulu</p>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default App;