import TranslationListItem from "./TranslationListItem";

const TranslationList = ({ translations, onClickHandle }) => {
  return (
    <div>
      {translations.map((translation, index) => {
        return <TranslationListItem key={index} idx={index} translation={translation} onClickHandle={onClickHandle} />;
      })}
    </div>
  );
};

export default TranslationList;
