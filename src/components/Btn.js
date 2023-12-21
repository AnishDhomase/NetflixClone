import "./Btn.css"


function Btn({content,icnClass}){
    return (
        <button ><i class={icnClass}></i>{content}</button>
    );
}

export default Btn;