// import logo from './logo.svg';
// import './App.css';
import Sidebar from './Sidebar';
import Header from './Header';
import Content from './Content';


function Student() {
  return (
    <> 
    <div className="container-fluid pt-4 px-4">
    <Sidebar/>
    <div class="content">
    <Header/> 
    <Content/>
    </div>
    </div>
    </>
    
  );
}

export default Student;
