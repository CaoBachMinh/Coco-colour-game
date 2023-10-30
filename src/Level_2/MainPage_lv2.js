import './MainPage_lv2.css'
import { useNavigate } from 'react-router'

export function MainPage_lv2(){
    const navigate = useNavigate();

    return(
        <>
            <div className='MainPage' >
                    <button className='frame1' onClick={() => navigate('/Bear',{replace:true})} >
                        <img className='example_pic' src="../example_picture/bear.PNG" ></img>
                    </button>

                    <button className='frame2' onClick={() => navigate('/Bird',{replace:true})}>
                        <img className='example_pic' src="../example_picture/bird.PNG" ></img>
                    </button>

                    
                    <button className='frame3' onClick={() => navigate('/Rabbit',{replace:true})}>
                        <img className='example_pic' src="../example_picture/rabbit.PNG"></img>
                    </button>
            </div>
        </>
    )
}