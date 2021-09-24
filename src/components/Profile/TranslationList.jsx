import TranslationListItem from "./TranslationListItem";

const TranslationList = ({ translations }) => {
  return (
    <div>
      {translations.map((translation) => {
        return <TranslationListItem translation={translation} />;
      })}
    </div>
  );
};

export default TranslationList;
