import "./Input-form.css"

const InputForm = ({onChangeInput, onButtonClick}) => {
    return (
   <div className = "center">     
    <div className=" bgRank">
        <p className="white"> Paste the image link with JPEG format and Detect The Face </p>
        <div className = "form">
            <div className="ma1 f4 bb bw1 b--light-blue pa2">
                <input className="pa1 black br4 bn shadow-5"  onChange={onChangeInput} type="text"  />
                <button className="  f3 ma1 grow br4 link ph2 dib white bg-light-blue bn shadow-5 " onClick={onButtonClick}>Detect</button>
            </div>
        </div>
    </div>
   </div>  
    )
}

export default InputForm;