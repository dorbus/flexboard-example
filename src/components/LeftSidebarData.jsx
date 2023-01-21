import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Email';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import ContrastIcon from '@mui/icons-material/Contrast';
import ListIcon from '@mui/icons-material/List';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

export const LeftSidebarData = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    link: '/home'
  },
  {
    title: 'Mailbox',
    icon: <MailIcon />,
    link: '/mailbox'
  },
  {
    title: 'Analytics',
    icon: <AnalyticsIcon />,
    link: '/analytics'
  },
  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
    link: '/home'
  },
  {
    title: 'Friends',
    icon: <PeopleIcon />,
    link: '/home'
  },
  {
    title: 'Images',
    icon: <PermMediaIcon />,
    link: '/home'
  },
  {
    title: 'Contrast',
    icon: <ContrastIcon />,
    link: '/home'
  },
  {
    title: 'List',
    icon: <ListIcon />,
    link: '/home'
  },
  {
    title: 'Register',
    icon: <AppRegistrationIcon />,
    link: '/home'
  }
];