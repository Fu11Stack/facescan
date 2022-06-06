const Rank = ({name, entries}) => {
    return (
        <div className=" bgText" >
            <div >
                <p className="f3 ma3 Black">{` ${name}, your entry count is ...`}</p>
             </div>
             <div>
                <p className="bgText f2 ma0 pa2 Black">{`#${entries}`}</p>
             </div>
             <div  >
             </div>
        </div>
    )
}
export default Rank;