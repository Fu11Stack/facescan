import  './faceDetect.css' ;

const FaceDetect = ({imgUrl , box}) => {
    return (
        <div className="pa1 ma1 center">
            <img id="InputImage" className="white bw2 br2 " alt =" faces" src={imgUrl} width="500px" height="auto" />
            <div className="bound_box" style={{top: box.topRow, right: box.rightCol , left: box.leftCol , bottom: box.bottomRow}}>

            </div>

        </div>
    )
}

export default FaceDetect;