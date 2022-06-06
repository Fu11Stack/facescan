import  './faceDetect.css' ;

const FaceDetect = ({imgUrl , box}) => {
    return (
        <div className="center">
            <img id="InputImage" className="row" alt ="faces" src={imgUrl} />
            <div className="bound_box " style={{top: box.topRow, right: box.rightCol , left: box.leftCol , bottom: box.bottomRow}}>
            </div>
        
        </div>
    )
}

export default FaceDetect;