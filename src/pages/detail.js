import '../css/detail.css';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'; 
import styled from 'styled-components'
import { useEffect } from 'react';
import React, { useState } from 'react'; 

let YellowBtn = styled.button`
  background : ${props => props.bg};
  color: ${props => props.bg == 'blue' ? 'white' : 'black'};
  padding : 10px;
`
// let NewBtn = styled.button(YellowBtn)`
//   background : pink;
// `

function Detail(props) { 

    let { id } = useParams();
    console.log(id);
    let 찾은상품 = props.shoes.find(x => x.id == id);
    let [count, setCount] = useState(0)
    let [alert, setAlert] = useState(true)

    useEffect(() => {
        let a = setTimeout(() => {setAlert(false)},2000)
        for (var i = 0; i < 10000; i++){
            console.log(1);
        }
        return () => {
            clearTimeout(a)
            // 정리하고 싶은 코드를 넣는다
            // 재 렌더링되지 않도록 방지하는 것이다.
            // 만약에 서버에서 데이터 요청하게 되면, 2초정도 시간이 걸린다고 치면, 요청을 계속 받는 버그가 생길 수 있음
            // 그럴때 return을 사용하는것
        }
    }, [count])
    // ,[]) 디펜던시라고 부르는데 []안에 작성한 state가 변할 때만 실행된다. 

    



    return (
        <div className='detail_wrap contents_line'>
            {
                alert == true
                ? <div className='alert alert-warning'>
                    2초이내 구매시 할인
                </div>
                : null
            }

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
