import { useTranslation } from "react-i18next";



const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="ml-2">
      <select
        className="w-fit bg-transparent border-0"
        value={i18n.language}
        onChange={handleChangeLanguage}
        defaultValue="en"// Use the event from the select field
      >
        <option value="en">🇺🇸 English</option>
        <option value="fr">🇫🇷 Français</option>
        <option value="ar">🇦🇷 Arabic</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
