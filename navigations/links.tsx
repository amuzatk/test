import React from 'react';
import {
  GroupIcon,
  CalendarIcon,
  ChartIcon,
  TransactionIcon,
  HomeIcon,
} from '../constants/svgs';
import { StaticImageData } from 'next/image';
import Emily from '../public/assets/images/icons/Emily.png';
import Ryan from '../public/assets/images/icons/Ryan.png';
import Brandon from '../public/assets/images/icons/Brandon.png';
import Jessica from '../public/assets/images/icons/Jessica.png';
import Samantha from '../public/assets/images/icons/Samantha.png';
import Ashley from '../public/assets/images/icons/Ashley.png';
import Olivia from '../public/assets/images/icons/Olivia.png';
import Tyler from '../public/assets/images/icons/Tyler.png';
import Kevin from '../public/assets/images/icons/Kevin.png';
import Dylan from '../public/assets/images/icons/Dylan.png';
import Nathan from '../public/assets/images/icons/Nathan.png';
import Mike from '../public/assets/images/icons/Mike.png';

interface NavLink {
  TITLE: string;
  LINK: string;
  SLUG: string;
  ICON: (isActive: boolean) => JSX.Element;
}

export const NAV_LINKS: NavLink[] = [
  {
    TITLE: 'Overview',
    LINK: '/overview',
    SLUG: 'overview',
    ICON: (isActive: boolean) => <HomeIcon isActive={isActive} />,
  },
  {
    TITLE: 'Patients',
    LINK: '/patients',
    SLUG: 'patients',
    ICON: (isActive: boolean) => <GroupIcon isActive={isActive} />,
  },
  {
    TITLE: 'Schedule',
    LINK: '/schedule',
    SLUG: 'schedule',
    ICON: (isActive: boolean) => <CalendarIcon isActive={isActive} />,
  },
  {
    TITLE: 'Message',
    LINK: '/message',
    SLUG: 'message',
    ICON: (isActive: boolean) => <ChartIcon isActive={isActive} />,
  },
  {
    TITLE: 'Transaction',
    LINK: '/transaction',
    SLUG: 'transaction',
    ICON: (isActive: boolean) => <TransactionIcon isActive={isActive} />,
  }
];

export type SidebarLink = {
  name: string;
  gender: string;
  age: number;
  avatar: StaticImageData;
};

export const SIDEBAR_LINKS: SidebarLink[] = [
  { name: 'Emily Williams', gender: 'Female', age: 18, avatar: Emily },
  { name: 'Ryan Johson', gender: 'Male', age: 45, avatar: Ryan },
  { name: 'Brandon Mitchel', gender: 'Male', age: 36, avatar: Brandon },
  { name: 'Jessica Taylor', gender: 'Female', age: 28, avatar: Jessica },
  { name: 'Samantha Johnson', gender: 'Female', age: 56, avatar: Samantha },
  { name: 'Ashley Martinez', gender: 'Female', age: 54, avatar: Ashley },
  { name: 'Olivia Brown', gender: 'Female', age: 32, avatar: Olivia },
  { name: 'Tyler Davis', gender: 'Male', age: 19, avatar: Tyler },
  { name: 'Kevin Anderson', gender: 'Male', age: 30, avatar: Kevin },
  { name: 'Dylan Thompson', gender: 'Male', age: 36, avatar: Dylan },
  { name: 'Nathan Evans', gender: 'Male', age: 58, avatar: Nathan },
  { name: 'Mike Norlan', gender: 'Male', age: 31, avatar: Mike },

];





// export const DASHBOARD_LINKS = [
//   {
//     TITLE: 'My Orders',
//     LINK: '/shopper/my-order',
//     SLUG: 'my-order',
//     PROTECTED: false,
//     ISVENDOR: false,
//     // ICON: (isActive: boolean) => <ShoppingCartIcon isActive={isActive} />,
//   },
//   {
//     TITLE: 'Account',
//     LINK: '/shopper/account',
//     SLUG: 'account',
//     PROTECTED: true,
//     ISVENDOR: false,
//     // ICON: (isActive: boolean) => <NavProfileIcon isActive={isActive} />,
//   },
//   {
//     TITLE: 'Notifications',
//     LINK: '/shopper/notifications',
//     SLUG: 'account',
//     PROTECTED: true,
//     ISVENDOR: false,
//     // ICON: (isActive: boolean) => <AdsIcon isActive={isActive} />,
//   },
//   {
//     TITLE: 'Get Badge',
//     LINK: '/shopper/badge',
//     SLUG: 'badge',
//     PROTECTED: true,
//     ISVENDOR: false,
//     // ICON: (isActive: boolean) => <VerifiedIcon isActive={isActive} />,
//   },
//   {
//     TITLE: 'Affiliate Dashboard',
//     LINK: '/shopper/affiliate',
//     SLUG: 'dashboard',
//     PROTECTED: false,
//     ISVENDOR: false,
//     // ICON: (isActive: boolean) => <NavMenuIcon isActive={isActive} />,
//   },

//   {
//     TITLE: 'Run Ads',
//     LINK: '/shopper/run-ads',
//     SLUG: 'run-ads',
//     PROTECTED: true,
//     ISVENDOR: false,
//     // ICON: (isActive: boolean) => <ContentsCreationIcon isActive={isActive} />,
//   },
//   {
//     TITLE: 'Content Creation',
//     LINK: '/shopper/contents',
//     SLUG: 'content',
//     PROTECTED: true,
//     ISVENDOR: false,
//     // ICON: (isActive: boolean) => <ContentsCreationIcon isActive={isActive} />,
//   },

//   {
//     TITLE: 'Rewards',
//     LINK: '/shopper/rewards',
//     SLUG: 'rewards',
//     PROTECTED: true,
//     ISVENDOR: false,
//     // ICON: (isActive: boolean) => <RewardIcon isActive={isActive} />,
//   },

//   {
//     TITLE: 'Add Business',
//     LINK: '#',
//     SLUG: 'add-business',
//     IS_BTN: true,
//     PROTECTED: true,
//     ISVENDOR: false,
//     // ICON: () => <NavAddIcon />,
//   },

//   {
//     TITLE: 'Support',
//     LINK: '/shopper/support',
//     SLUG: 'support',
//     ISVENDOR: false,
//     PROTECTED: false,
//     // ICON: (isActive: boolean) => <NavSupportIcon isActive={isActive} />,
//   },

//   {
//     TITLE: 'Vouchers',
//     LINK: '/shopper/user-vouchers',
//     SLUG: 'vouchers',
//     PROTECTED: true,
//     ISVENDOR: false,
//     // ICON: (isActive: boolean) => <RewardIcon isActive={isActive} />,
//   }
// ];