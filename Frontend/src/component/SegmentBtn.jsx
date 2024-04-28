import  React,{useState} from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import { GiArchiveRegister } from "react-icons/gi";
import { LuLogIn } from "react-icons/lu";
import { Link } from 'react-router-dom';
export default function TabsSegmentedControls() {
  const [tab,setTab]= useState(1);
  return (
    <Tabs aria-label="tabs"   value={tab} onChange={(event, newValue) => setTab(newValue)} sx={{ bgcolor: 'transparent' }}>
      <TabList
        disableUnderline
        sx={{
          p: 0.1,
          gap: 0.3,
          borderRadius: 'xl',
          bgcolor: 'background.level1',
          [`& .${tabClasses.root}[aria-selected="true"]`]: {
            boxShadow: 's',
            bgcolor: 'background.surface',
          },
        }}
      >
      <Link to="/Register">  <Tab disableIndicator title='Register'><GiArchiveRegister className='text-xl'></GiArchiveRegister></Tab></Link>
      <Link to="/LogIn"> <Tab disableIndicator title="Log-In"><LuLogIn className='text-xl'></LuLogIn></Tab></Link>
      </TabList>
    </Tabs>
  );
}