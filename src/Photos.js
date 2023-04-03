import React, {useContext} from "react"
import {Context} from "./Context"
import Image from "./Image"

function Photos () {
    const {allPhotos} = useContext(Context);
    
    function getClass(i) {
        if (i % 5 === 0) {
            return 'big';
        }
        else if (i % 6 === 0) {
            return 'wide'
        }
    }
    
    const photoElements = allPhotos.map((photo, index) => <Image key={photo.id} img={photo} className={getClass(index)}/>)
    return (
        <main className="photos">
            {photoElements}
        </main>
    )
}
export default Photos