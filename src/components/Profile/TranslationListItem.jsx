import { Card } from "react-bootstrap";

const TranslationListItem = ({ idx, translation, onClickHandle }) => {
  const PrintSigns = ({ word }) => {
    // Voi ehkä ottaa pois jos sanat tallennetaan oikean muotoisin
    const splitWord = word
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s/g, "")
      .replace(/[0-9]/g, "")
      .split("");

    return splitWord.map((a, index) => (
      <img
        key={index}
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
        <button className="btn btn-sm" onClick={(event) => onClickHandle(event, idx)} >
          DELETE TRANSLATION
          </button>
      </Card.Body>
    </Card>
  );
};

export default TranslationListItem;
