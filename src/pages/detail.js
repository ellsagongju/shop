import '../css/detail.css';
import { Button } from 'react-bootstrap';


function Detail(props) { 
    return (
        <div className='detail_wrap contents_line'>
            <div className="product_info_top">
                <div className='product_img'>
                    <img src='https://codingapple1.github.io/shop/shoes1.jpg'></img>
                </div>
                <div className='porduct_text'>
                    <h3>신발1</h3>
                    <span>태그</span>
                    <p>가격</p>
                    <Button variant="secondary" size="sm">
                        주문하기
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Detail;
