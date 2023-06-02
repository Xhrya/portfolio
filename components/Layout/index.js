import Sidebar from '../Sidebar';
import './index.scss';
import {Outlet} from 'react-router-dom';
import SidebarMenu from '../SidebarMenu';
const Layout = () => {
   return (
     <div className="App">
       {/* <Sidebar /> */}
       <SidebarMenu/>
       {/* <div className='page'>
        <span className='tags top-tags'> &lt; body &gt; </span>
        <span className='tags bottom-tags'> 
        &lt;body&gt;

        <br/>

        <span className='bottom-tag-html'> &lt;/html&gt;</span>
        </span> */}
        <Outlet/>

        {/* <span className='tags bottom-tags'> 
          &lt;body&gt;

        <br/>

        <span className='bottom-tag-html'> &lt;/html&gt;</span>
        </span> */}

       {/* </div> */}


       
     </div>
   )
 }

export default Layout