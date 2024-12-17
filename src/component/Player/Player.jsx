export function Player() {
    const score = 10; 
    let message = '';

    const handleChange = (event) => {
        const value = event.target.value; 
        if (value > score) {
            message = `Vainqueur , score = ${value}`;
        } else {
            message = `Perdant , score = ${value}`;
        }
       
        console.log(message);
    };

    return (
        <div>
          <input type="text" onChange={handleChange} />
      
        </div>
    );
}