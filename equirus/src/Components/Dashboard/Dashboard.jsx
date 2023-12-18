/* eslint-disable react/prop-types */
import Display from "../Display/Display";
import Navbar from "../Navbar/Navbar";

function Dashboard({data}) {
  return (
    <>
    <Navbar/>
    <Display data={data}/>
    </>
  );
}

export default Dashboard;
