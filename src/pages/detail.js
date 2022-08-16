import '../css/detail.css';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'; 
import styled from 'styled-components'
import { useEffect } from 'react';

let YellowBtn = styled.button`
  background : ${props => props.bg};
  color: ${props => props.bg == 'blue' ? 'white' : 'black'};
  padding : 10px;
`
// let NewBtn = styled.button(YellowBtn)`
//   background : pink;
// `

function Detail(props) { 

    useEffect(() => {
        for (var i = 0; i < 10000; i++){
            console.log(1);
        }
    })


    let { id } = useParams();
    console.log(id);
    let 찾은상품 = props.shoes.find(x => x.id == id);

    return (
        <div className='detail_wrap contents_line'>
            <div className="product_info_top">
                <div className='product_img'>
                    <img src={'https://codingapple1.github.io/shop/shoes'+ (찾은상품.id) +'.jpg'}></img>
                </div>
                <div className='porduct_text'>
                    <h3>{찾은상품.title}</h3>
                    <span>{찾은상품.content}</span>
                    <p>{찾은상품.price}</p>
                    <Button variant="secondary" size="sm">
                        주문하기
                    </Button>
                    <YellowBtn bg="blue">버튼이야</YellowBtn>
                    <YellowBtn bg="orange">버튼이야</YellowBtn>
                </div>
            </div>
        </div>
    )
}

export default Detail;
