import '../css/detail.css';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'; 
import styled from 'styled-components'

let YellowBtn = styled.button`
  background : yellow;
  color: black;
  padding : 10px;
`

function Detail(props) { 

    let { id } = useParams();
    console.log(id);

    return (
        <div className='detail_wrap contents_line'>
            <div className="product_info_top">
                <div className='product_img'>
                    <img src='https://codingapple1.github.io/shop/shoes1.jpg'></img>
                </div>
                <div className='porduct_text'>
                    <h3>{props.shoes[id].title}</h3>
                    <span>{props.shoes[id].content}</span>
                    <p>{props.shoes[id].price}</p>
                    <Button variant="secondary" size="sm">
                        주문하기
                    </Button>
                    <YellowBtn>버튼이야</YellowBtn>
                </div>
            </div>
        </div>
    )
}

export default Detail;
