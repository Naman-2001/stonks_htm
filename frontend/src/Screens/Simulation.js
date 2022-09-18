import react,{useState} from "react"
import Slider from '@material-ui/core/Slider';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import abandonedBaby from "../assets/Abandonedbaby.jpeg"
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Simulation = ()=>{

    const [pe,setPE] = useState(0)
    const [rsi,setRSI] = useState(0)
    const [volume, setVolume]=useState(0.5)
    const [pb, setPB]=useState(0)
    const [debt, setDebt]=useState(0)
    const [roe, setRoe]=useState(0)
    const [industry, setIndustry]=useState("it")
    const [candleSticks, setCandleSticks] = useState(0)
    const [patterns, setPatterns] = useState(0)
    const [candle, setCandle] = useState(0)
    const [res, setRes] = useState("Buy")

    const getCandle= (ct)=>{
        setCandleSticks(ct)
        if(ct===0){
            setPatterns(-1)
       }
       if(ct==1){
           setPatterns(-1)
       }
       if(ct==2){
           setPatterns(1)
       }
       if(ct==3){
           setPatterns(1)
       }
       if(ct==4){
           setCandle(-1)
       }
       if(ct==5){
           setCandle(-1)
       }
       if(ct==6){
           setCandle(1)
       }
       if(ct==7){
           setCandle(1)
       }
       if(ct==8){
           setCandle(-1)
       }
    }

    const getFeature=(ft)=>{
        if(ft=='pe'){
                if(industry=='it'){
                    if(Math.abs(pe-70.25)/pe*100>30) return Math.max(-100,-(Math.abs(pe-70.25)/pe*100))
                    return Math.abs(pe-70.25)/pe*100
                }

                if(industry=='auto'){
                    if(Math.abs(pe-17.25)/pe*100>30) return -(Math.abs(pe-17.25)/pe*100)
                    return Math.max(-100,Math.abs(pe-17.25)/pe*100)
                }

                if(industry=='energy'){
                    if(Math.abs(pe-18.25)/pe*100>30) return -(Math.abs(pe-18.25)/pe*100)
                    return Math.max(-100,Math.abs(pe-18.25)/pe*100)
                }

                if(industry=='pharma'){
                       
                       if(Math.abs(pe-25.25)/pe*100>30) return -(Math.abs(pe-25.25)/pe*100)
                       return Math.max(-100,Math.abs(pe-25.25)/pe*100)
                }
        }
        if(ft=='rsi'){
            return 100 - (10/7)*rsi
        }
        if(ft==='volume'){
            return volume*100
        }
        if(ft==='pb'){
            if(pb<=0.5) return 2*pb*100
            return (2-2*pb)*100 
        }
        if(ft==='debt'){
            if(debt <= 2) return 100 - 50*debt
            return -1 * (debt)* (debt)
        }
        if(ft==='roe'){
           if(roe>=15) return roe;
           return Math.max(roe-100, -100);
        }
        

    }

    const handleChange = (event) => {
        setIndustry(event.target.value);
    };

    const finalVerdict = ()=>{
        let count =0;
        if(getFeature('pe') > 0 )count++;
        if(getFeature('rsi') > 0 )count++;
        if(getFeature('volume') > 0 )count++;
        if(getFeature('pb') > 0 )count++;
        if(getFeature('debt') > 0 )count++;
        if(getFeature('roe') > 0 )count++;
        if(candle>0)count++
        if(patterns>0)count++;
        console.log(pe,rsi,volume,pb,debt,roe,candle,patterns)
        return (count /8)*100

    }
    return (
        <div>
            <h2 style={{fontSize:"2.5rem", textAlign:"center"}} className="simulationHeading1">Select Industry</h2>
            <Select
                labelId="Industry"
                id="demo-simple-select"
                value={industry}
                onChange={handleChange}
                className="dropdown"
                style={{fontSize:'30px', marginLeft:'45rem'}}
                
                >
                <MenuItem value={"it"}  className="dropdown-item">IT</MenuItem>
                <MenuItem value={"auto"} className="dropdown-item">Automobiles</MenuItem>
                <MenuItem value={"energy"} className="dropdown-item">Energy</MenuItem>
                <MenuItem value={"pharma"} className="dropdown-item">Pharma</MenuItem>
            </Select>

         <div style={{display:"flex", marginLeft:"35rem"}}>

          <div style={{padding:"1rem", fontSize:"1.5rem"}}><h4 >Selected Industry PE:</h4></div>
           <div style={{float:"left", padding:"1rem", fontSize:"1.5rem", color:"blue"}}> <h5>

  {industry==='it' ? '70.25' : industry=== 'auto' ? '17.87' : industry=== 'energy' ? ' 18.83' : '25.18'}
</h5>
</div>
         </div>
            <div className="allfeature-wrapper" >
                <div className="feature-wrapper">
                    <div className="feature-card" >
                        <h3>
                            P/E Ratio
                        </h3>
                        <Slider
                            defaultValue={0}
                            // getAriaValueText={valuetext}
                            aria-labelledby="discrete-slider-small-steps"
                            step={5}
                            marks
                            min={0}
                            max={100}
                            value={pe}
                            onChange={(e,value)=> setPE(value)}
                            valueLabelDisplay="auto"
                        />
                    </div>
                    <Box style={{margin:"1rem 3rem 3rem"}} position="relative" display="inline-flex" >
                        <CircularProgress  variant="determinate" value={()=>getFeature('pe')} style={{color:getFeature('pe')>0?"green":"red",  height:"80px", width:"80px"}}/>
                        <Box
                            top={0}
                            left={0}
                            bottom={0}
                            right={0}
                            position="absolute"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            height={80}
                             
                        >
                            <h6 variant="caption" component="div" color="textSecondary">{`${Math.round(
                            getFeature('pe'),
                            )}%`}</h6>
                        </Box>
                    </Box>
                </div>
                <div  className="feature-wrapper">
                    <div  className="feature-card" >
                        <h3>
                            RSI Value
                        </h3>
                        <Slider
                            defaultValue={0}
                            // getAriaValueText={valuetext}
                            aria-labelledby="discrete-slider-small-steps"
                            step={5}
                            marks
                            min={0}
                            max={100}
                            valueLabelDisplay="auto"
                            value={rsi}
                            onChange={(e, value)=>setRSI(value)}
                        />
                    </div>
                    <Box style={{margin:"1rem 3rem 3rem"}} position="relative" display="inline-flex">
                        <CircularProgress variant="determinate" value={()=>getFeature('rsi')} style={{color:getFeature('rsi')>0?"green":"red",  height:"80px", width:"80px"}}/>
                        <Box
                            top={0}
                            left={0}
                            bottom={0}
                            right={0}
                            position="absolute"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            height={80}
                        >
                            <h6 variant="caption" component="div" color="textSecondary">{`${Math.round(getFeature('rsi'))}%`}</h6>
                        </Box>
                    </Box>
                </div>
                <div className="feature-wrapper">
                    <div className="feature-card">
                    <h3>
                        Volume
                    </h3>
                    <Slider
                        defaultValue={0.5}
                        // getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider-small-steps"
                        step={0.02}
                        marks
                        min={0}
                        max={1}
                        valueLabelDisplay="auto"
                        value={volume}
                        onChange={(e, value)=> setVolume(value)}
                    />
                </div>
                <Box style={{margin:"1rem 3rem 3rem"}} position="relative" display="inline-flex">
                        <CircularProgress variant="determinate" value={()=>getFeature('volume')} style={{color:getFeature('volume')>0?"green":"red",  height:"80px", width:"80px"}} />
                        <Box
                            top={0}
                            left={0}
                            bottom={0}
                            right={0}
                            position="absolute"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            height={80}
                        >
                            <h6 variant="caption" component="div" color="textSecondary">{`${getFeature('volume')}%`}</h6>
                        </Box>
                    </Box>
                </div>
                <div className="feature-wrapper">
                <div className="feature-card">
                    <h3>
                        P/B Ratio
                    </h3>
                    <Slider
                        defaultValue={0}
                        // getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider-small-steps"
                        step={0.1}
                        marks
                        min={0}
                        max={1}
                        valueLabelDisplay="auto"
                        value={pb}
                        onChange={(e, value)=> setPB(value)}
                    />
                </div>
                <Box style={{margin:"1rem 3rem 3rem"}} position="relative" display="inline-flex">
                        <CircularProgress variant="determinate" value={()=>getFeature('pb')} style={{color:getFeature('pb')>0?"green":"red",  height:"80px", width:"80px"}}/>
                        <Box
                            top={0}
                            left={0}
                            bottom={0}
                            right={0}
                            position="absolute"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            height={80}
                        >
                            <h6 variant="caption" component="div" color="textSecondary">{`${Math.round(getFeature('pb'))}%`}</h6>
                        </Box>
                    </Box>
                </div>
                <div className="feature-wrapper">
                    <div className="feature-card">
                        <h3>
                            Debt To Equity Ratio
                        </h3>
                        <Slider
                            defaultValue={0}
                            // getAriaValueText={valuetext}
                            aria-labelledby="discrete-slider-small-steps"
                            step={1}
                            marks
                            min={0}
                            max={10}
                            valueLabelDisplay="auto"
                            value={debt}
                            onChange={(e, value)=> setDebt(value)}
                        />
                    </div>
                    <Box style={{margin:"1rem 3rem 3rem"}} position="relative" display="inline-flex">
                            <CircularProgress variant="determinate" value={()=>getFeature('debt')} style={{color:getFeature('debt')>0?"green":"red",  height:"80px", width:"80px"}}/>
                            <Box
                                top={0}
                                left={0}
                                bottom={0}
                                right={0}
                                position="absolute"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                height={80}
                            >
                                <h6 variant="caption" component="div" color="textSecondary">{`${Math.round(getFeature('debt'))}%`}</h6>
                            </Box>
                        </Box>

                    </div>
                <div className="feature-wrapper">

                <div className="feature-card">
                        <h3>
                            ROE
                        </h3>
                        <Slider
                            defaultValue={0}
                            // getAriaValueText={valuetext}
                            aria-labelledby="discrete-slider-small-steps"
                            step={5}
                            marks
                            min={-100}
                            max={100}
                            valueLabelDisplay="auto"
                            value={roe}
                            onChange={(e, value)=> setRoe(value)}
                        />
                    </div>

                    <Box style={{margin:"1rem 3rem 3rem"}} position="relative" display="inline-flex">
                            <CircularProgress variant="determinate" value={()=>getFeature('roe')} style={{color:getFeature('roe')>0?"green":"red",  height:"80px", width:"80px"}}/>
                            <Box
                                top={0}
                                left={0}
                                bottom={0}
                                right={0}
                                position="absolute"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                height={80}
                            >
                                <h6 variant="caption" component="div" color="textSecondary">{`${Math.round(getFeature('roe'))}%`}</h6>
                            </Box>
                        </Box>
                </div>
            </div>
            <div >
                    <h1 style={{marginLeft:"4rem"}}>
                        Patterns:
                    </h1>
                    <div className="candleSticks" >
                        <div style={{margin:"2rem", border:candleSticks === 2?'2px solid orange':null }} onClick={()=> getCandle(2)}>
                            <img src={"../assets/doubleTop.jpeg"} />
                        </div>
                        <div style={{margin:"2rem", border:candleSticks === 4?'2px solid orange':null }} onClick={()=> getCandle(4)}>
                            <img src={"../assets/headAndShoulders.jpeg"} />
                        </div>
                        <div style={{margin:"2rem", border:candleSticks === 5?'2px solid orange':null }} onClick={()=> getCandle(5)}>
                            <img src={"../assets/risingWedge.jpeg"} />
                        </div>
                        <div style={{margin:"2rem", border:candleSticks === 1?'2px solid orange':null }} onClick={()=> getCandle(1)}>
                            <img src={"../assets/cupAndHandle.jpeg"} />
                        </div>
                    </div>
                    <h1 style={{marginLeft:"4rem"}}>CandleSticks</h1>
                    <div className="candleSticks" >
                        <div style={{margin:"2rem", border:candleSticks === 0?'2px solid orange':null }} onClick={()=> getCandle(0)} >
                            <img src={abandonedBaby} />
                        </div>
                        <div style={{margin:"2rem", border:candleSticks === 3?'2px solid orange':null }}  onClick={()=> getCandle(3)}>
                            <img src={"../assets/eveningStar.jpeg"} />
                        </div>
                        <div style={{margin:"2rem", border:candleSticks === 6?'2px solid orange':null }} onClick={()=> getCandle(6)}>
                            <img src={"../assets/hammer.jpeg"} />
                        </div>
                        <div style={{margin:"2rem", border:candleSticks === 7?'2px solid orange':null }} onClick={()=> getCandle(7)}>
                            <img src={"../assets/threeLineStrike.jpeg"} />
                        </div>
                        <div style={{margin:"2rem", border:candleSticks === 8?'2px solid orange':null }} onClick={()=> getCandle(8)}>
                            <img src={"../assets/twoBlackGappingPattern.jpeg"} />
                        </div>
                    </div>
                </div>
                <div style={{display:"flex",justifyContent:'center', padding:"4rem"}}>
                <div style={{marginRight:"2rem"}}>
                <Box position="relative" display="inline-flex">
                <CircularProgress variant="determinate" value={()=>finalVerdict()} style={{height:'80px',width:'80px',color:finalVerdict()>50?"green":"red"}}  />
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    height={80}
                >
                    <h6 variant="caption" component="div" color="textSecondary">{`${Math.round(
                    finalVerdict(),
                    )}%`}</h6>
                </Box>
            </Box>

                </div>

                <div style={{float:"left"}}>
                    <h1>{finalVerdict()>=50?"Buy Stock":"Sell Stock"}</h1>
                </div>
                   </div>
                   </div>
    )
}

export default Simulation