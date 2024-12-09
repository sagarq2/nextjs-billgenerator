import ReactDOM from "react-dom";
import style from "./FormSucess.module.scss"


const FormSucess = (props) => {
 

  const modalContent = (
        <section className={`modal  ${style.Modal} `}>
            <div className={`${style.Content} modal_content fadeInUpTop `}>
                <div className={`${style.ModalBody} modal_body`}>
                    Congratulations! Your form submission was successful. You can find your receipt in your downloads folder.
                </div>
            </div>
        
        </section> 
  )
  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")
    )
}


   


export default FormSucess;