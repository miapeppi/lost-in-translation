import { Card } from "react-bootstrap";

const TranslationListItem = ({ idx, translation, onClickHandleDelete }) => {
  // Formatting the translation, so it doesn't have characters that can't be translated
  const PrintSigns = ({ word }) => {
    const splitWord = word
      .toLowerCase()
      .replace(/[^\w\s]/gi, "") // Removes punctuation from the string
      .replace(/\s/g, "") // Removes whitespace from the string
      .replace(/[0-9]/g, "") // Removes numbers from the string
      .split("");

    // Mapping the formatted chars, and searching the correct images for every character
    return splitWord.map((a, index) => (
      <img
        key={index}
        height="100"
        src={`/images/individual_signs/${a}.png`}
        alt={`${a}-sign`}
      />
    ));
  };

  return (
    <Card className="profileCard mb-5">
      <Card.Header className="cardHeader">
        Translation for: {translation}
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <PrintSigns word={translation} />
        </Card.Text>
        <button
          className="btn btn-sm"
          onClick={(event) => onClickHandleDelete(event, idx)}
        >
          DELETE TRANSLATION
        </button>
      </Card.Body>
    </Card>
  );
};

export default TranslationListItem;
