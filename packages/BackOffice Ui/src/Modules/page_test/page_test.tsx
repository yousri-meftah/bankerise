import React from 'react';
import LanguageSelector from '@components/LanguageSelector'
import { useTranslation } from "react-i18next";
import { useGetConfigApplicationQuery} from "../../store/admin-API/applications-controller/applications_controller_endpoints";
const AllProducts = () => {
  const { t } = useTranslation();
  const { data, error, isLoading } = useGetConfigApplicationQuery({ key: 'value' });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      <p>{ data }</p>
      <LanguageSelector />
      <h1>{ t("title")}</h1>
    </div>
  );
};

export default AllProducts;