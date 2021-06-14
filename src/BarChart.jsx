import {Bar} from 'react-chartjs-2';
const BarChart=(props)=>{
    /* const [bAr,setAr]=useState([...ar]);
    const [barLabels,setbarLabels]=useState([...lab]);
    const [barBackGround,setbackGround]=useState([...backG]);
    const [barBoarder,setbarBoarder]=useState([...boarD]); */
    return (
        <div className="NotBar">
            {console.log('kill')}
            {/* {console.log(props.BbarBackGround)} */}
            <Bar
           data={
               {
                labels:[...props.ar],
                datasets: [{    
                label: props.AlgoName,
                data:[...props.ar],
                backgroundColor: [...props.bG],
                borderColor: [...props.bB],
                borderWidth: 3.5
        }]

                }
           }
           height={500}
           width={50}
           options={
               {
                maintainAspectRatio:false,
                animation:{
                        duration:0,
                    },
               }
           }
           
        />
        </div>
    );
}
export default BarChart;