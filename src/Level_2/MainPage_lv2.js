import './MainPage_lv2.css'
import { useNavigate } from 'react-router'
import { Instruction } from './instruction_lv2';
import './Board_lv2.css';
export function MainPage_lv2() {
    const navigate = useNavigate();

    return (
        <>
            <div><Instruction /></div>
            <div>
                <button
                    className="home-button_1"
                    onClick={() =>
                        (window.location.href = "https://coco-game-tau.vercel.app/")
                    }
                >
                    Quay về trang chủ
                </button>
                <button className="next-button_1" onClick={() => navigate('/', { replace: true })}>
                    Trở lại trò chơi trước
                </button>
            </div>
            <div className='MainPage' >
                <button className='frame1' onClick={() => navigate('/Bear', { replace: true })} >
                    <img className='example_pic' src="../example_picture/bear.PNG" ></img>
                </button>

                <button className='frame2' onClick={() => navigate('/Bird', { replace: true })}>
                    <img className='example_pic' src="../example_picture/bird.PNG" ></img>
                </button>


                <button className='frame3' onClick={() => navigate('/Rabbit', { replace: true })}>
                    <img className='example_pic' src="../example_picture/rabbit.PNG"></img>
                </button>
            </div>
        </>
    )
}