import React from 'react';
import {
  GroupIcon,
  CalendarIcon,
  ChartIcon,
  TransactionIcon,
  HomeIcon,
} from '../constants/svgs';

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

export const SIDEBAR_LINKS: NavLink[] = [
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