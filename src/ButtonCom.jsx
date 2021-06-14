import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import StopIcon from '@material-ui/icons/Stop';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
const ButtonCom=(props)=>{
    let ar=[...props.arr];
    return (
        <>
            <div className="Notbutton">
           <button onClick={()=>{
                props.settingTimer(false);
            }}><StopIcon/></button>
             <button onClick={()=>{
                 props.settingTimer(true);
            }}><PlayCircleFilledWhiteIcon/></button>
            <button onClick={()=>{
                props.generatingArr(ar.length);
            }}><RotateLeftIcon/></button>
           </div>
        </>
    );
}
export default ButtonCom;