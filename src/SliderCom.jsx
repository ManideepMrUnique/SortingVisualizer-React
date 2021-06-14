import {Slider} from '@material-ui/core';
const SliderCom=(props)=>{
    return (
        <>
        <div className="slider">
            <div className="arSlider">
                <span style={{
                    color:'white'
                }}>
                    Size of Array
                </span>
                <Slider 
                    max={30}
                    defaultValue={10}
                    marks={props.markAr}
                    valueLabelDisplay="auto"
                    onChange={(e,val)=>{
                        console.log(val);
                        props.generatingArr(val);
                    }}
                />
            </div>
            <div className="spSlider">
                <span style={{
                    color:'white'
                }}>
                   Operation speed
                </span>
                <Slider
                color="secondary"
                max={1000}
                defaultValue={200}
                marks={props.markSp}
                valueLabelDisplay="auto"
                onChange={(e,val)=>{
                    console.log(val);
                    props.settingTimer(false);
                    props.settingInterval(val);
                }}
                 />
            </div>
            </div>
        </>
    );
}
export default SliderCom;