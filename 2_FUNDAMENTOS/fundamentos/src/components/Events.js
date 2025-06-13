const Events = () => {

    const handleClick = () => {
        console.log('Button clicked!');
    }

    return (
        <div>
            <h2>Eventos en React</h2>
            <button onClick={handleClick}>
                Click me
            </button>
        </div>
    );
}

export default Events;
