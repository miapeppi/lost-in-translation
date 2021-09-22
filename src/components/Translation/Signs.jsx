const Signs = ({ userInput }) => {
    
    const PrintSigns = ({word}) => {
        const splitWord = word.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s/g, '').split('')
        return splitWord.map((a, index) => <img key={index} src={`/images/individual_signs/${a}.png`} alt={`${a}-sign`}/>)
    }

    return(
        <>
            <p>{userInput}</p>
            <PrintSigns word={userInput} />
        </>
    )
}

export default Signs