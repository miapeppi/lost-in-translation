import TranslationListItem from "./TranslationListItem";

const TranslationList = ({ translations }) => {
  return (
    <div>
      {translations.map((translation, index) => {
        return <TranslationListItem key={index} translation={translation} />;
      })}
    </div>
  );
};

export default TranslationList;
