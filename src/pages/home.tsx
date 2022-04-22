import type { NextPage } from 'next';
import axios from 'axios';
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import Layout from '@/components/layouts/UserLayout';
const handleSocialLoginRequest = async () => {
  const cookies = parseCookies();

  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/userInfo`, {
    headers: {
      Authorization: 'Bearer ' + cookies['api_token'],
    },
  });
  console.log('data:', data);
  return data;
};

const home: NextPage = () => {
  const data = handleSocialLoginRequest();
  return <Layout titlePrefix='トップ'></Layout>;
};

export default home;
