import TranslationListItem from "./TranslationListItem";

const TranslationList = ({ translations, onClickHandleDelete }) => {
  return (
    <div>
      {/** Sending the mapped translation and onClickHandleDelete as a props to the TranslationListItem */}
      {translations.map((translation, index) => {
        return (
          <TranslationListItem
            key={index}
            idx={index}
            translation={translation}
            onClickHandleDelete={onClickHandleDelete}
          />
        );
      })}
    </div>
  );
};

export default TranslationList;
