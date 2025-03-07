// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useState } from 'react';
import { Box } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import ProductList from 'src/components/home/ecommerce/productGrid/ProductList';
import ProductSidebar from 'src/components/home/ecommerce/productGrid/ProductSidebar';
import AppCard from 'src/components/shared/AppCard';
import { ProductProvider } from 'src/context/EcommerceContext';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Shop',
  },
];
const Ecommerce = () => {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <ProductProvider>
      <PageContainer title="Shop List" description="this is Shop List page">
        {/* breadcrumb */}
        <Breadcrumb title="" items={BCrumb} />
        <AppCard>
          {/* ------------------------------------------- */}
          {/* Left part */}
          {/* ------------------------------------------- */}
          <ProductSidebar
            isMobileSidebarOpen={isMobileSidebarOpen}
            onSidebarClose={() => setMobileSidebarOpen(false)}
          />
          {/* ------------------------------------------- */}
          {/* Right part */}
          {/* ------------------------------------------- */}
          <Box p={3} flexGrow={1}>
            <ProductList onClick={() => setMobileSidebarOpen(!isMobileSidebarOpen)} />
          </Box>
        </AppCard>
      </PageContainer>
    </ProductProvider>
  );
};

export default Ecommerce;
