/* eslint-disable react/prop-types */
import { useState } from 'react';
import Data from '../Data/Data'
import List from '../List/List'
import Search from '../Search/Search'
import './Display.css'

function Display({data}) {
  const [search, setSearch] = useState("sameer");
  console.log(search);
  console.log('search');

  return (
    <div className='display'>
      <Search search={search} setSearch={setSearch}/>
      <div className='wrapper'>
      <List data={data} user={search}/>
      <Data user={data[0]}/>
      </div>
      
    </div>
  )
}

export default Display
