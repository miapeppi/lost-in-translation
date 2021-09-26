import TranslationListItem from "./TranslationListItem";

const TranslationList = ({ translations, onClickHandle }) => {
  return (
    <div>
      {/** Sending the mapped translation and onClickHandle as a props to the TranslationListItem */}
      {translations.map((translation, index) => {
        return (
          <TranslationListItem
            key={index}
            idx={index}
            translation={translation}
            onClickHandle={onClickHandle}
          />
        );
      })}
    </div>
  );
};

export default TranslationList;
