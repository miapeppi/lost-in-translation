import { Card } from "react-bootstrap";

const Signs = ({ userInput }) => {
  const PrintSigns = ({ word }) => {
    const splitWord = word
      .toLowerCase()
      .replace(/[^\w\s]/gi, "") // Removes punctuation from the string
      .replace(/\s/g, "") // Removes whitespace from the string
      .replace(/[0-9]/g, "") // Removes numbers from the string
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
    <Card className="signsCard text-center">
      <Card.Body>
        <PrintSigns word={userInput} />
      </Card.Body>
      <Card.Footer className="cardFooter">
        <p>Translation for: {userInput}</p>
      </Card.Footer>
    </Card>
  );
};

export default Signs;
