
import Navbar from '../components/Navbar';

import Sidebar from '../components/Sidebar';
import Page2list from '../components/Page2list';
import Calendar from '../components/Calendar';
const Appointmentpage=() =>(
    <>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <div id='componentcontainer'><Page2list></Page2list>
    <Calendar></Calendar></div>
    
    </>
);

export default Appointmentpage;