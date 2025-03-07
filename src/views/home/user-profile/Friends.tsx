// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import Grid from '@mui/material/Grid2';
import PageContainer from 'src/components/container/PageContainer';
import ProfileBanner from 'src/components/home/userprofile/profile/ProfileBanner';
import FriendsCard from 'src/components/home/userprofile/friends/FriendsCard';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import { UserDataProvider } from "src/context/UserDataContext/index";

const Friends = () => {
  const BCrumb = [
    {
      to: '/',
      title: 'Home',
    },
    {
      title: 'Friends',
    },
  ]
  return (
    <UserDataProvider>
      <PageContainer title="User Profile" description="this is User Profile page">
        <Breadcrumb title="User App" items={BCrumb} />
        <Grid container spacing={3}>
          <Grid
            size={{
              sm: 12
            }}>
            <ProfileBanner />
          </Grid>
          <Grid
            size={{
              sm: 12
            }}>
            <FriendsCard />
          </Grid>
        </Grid>
      </PageContainer>
    </UserDataProvider>
  );
};

export default Friends;