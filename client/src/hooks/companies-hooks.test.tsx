import { renderHook } from '@testing-library/react-hooks';
import nock from 'nock';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { useCompanies, useSpecialities } from './companies-hooks';

test('useCompanies Hook', async () => {
  const queryClient = new QueryClient();

  const wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  const expectation = nock('http://localhost:4000')
    .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
    .get('/api/companies')
    .reply(200, {
      companies: [
        {
          companyName: 'test',
          logo: 'https://logo-url.com',
          specialities: ['test1', 'test2'],
          city: 'Test city',
        },
      ],
    });

  const { result, waitFor } = renderHook(() => useCompanies(), { wrapper });

  await waitFor(() => {
    return result.current.isSuccess;
  });

  expect(result.current.data).toBeDefined();
  expect(result.current.data).toEqual({
    companies: [
      {
        companyName: 'test',
        logo: 'https://logo-url.com',
        specialities: ['test1', 'test2'],
        city: 'Test city',
      },
    ],
  });
  expectation.done();
});

test('useSpecialities Hook', async () => {
  const queryClient = new QueryClient();

  const wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  const expectation = nock('http://localhost:4000')
    .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
    .get('/api/specialities')
    .reply(200, {
      specialities: ['Electrical', 'Excavation', 'Plumbing'],
    });

  const { result, waitFor } = renderHook(() => useSpecialities(), { wrapper });

  await waitFor(() => {
    return result.current.isSuccess;
  });

  expect(result.current.data).toBeDefined();
  expect(result.current.data).toEqual({
    specialities: ['Electrical', 'Excavation', 'Plumbing'],
  });
  expectation.done();
});
